import { Transform, Sprite, SpriteConfig, GameObject, Component } from 'engine/library/objects';
import { Collidable } from 'engine/library/collisions';
import { Vector } from 'engine/library/maths';

export interface GameObjectConfig {
    position?: Vector;
    components?: Array<new(obj: GameObject) => Component>;
    sprite?: SpriteConfig;
    order?: number;
    collider?: Collidable;
}

/**
 * Inserts a new GameObject <div> into the page body
 * 
 * @param id        Unique identifier
 * @param zIndex    Basically the object's permanent Z axis coordinate
 */
function injectDom(id: string, zIndex: number = 0) : HTMLDivElement {
    const element = document.createElement('div');
    element.id = id;
    element.classList.add('gameObject');
    element.style.zIndex = zIndex.toString();

    document.body.appendChild(element);

    return element;
}

export function makeGameObject(id: string, config: GameObjectConfig) {
    let obj = new GameObject(id, new Transform(config.position));

    if(config.collider) {
        
    }

    if(config.sprite && config.sprite.assets) {
        const spriteInstance = new Sprite(config.sprite);
        spriteInstance.appendDom();
        obj.setSprite(spriteInstance);
    }

    if(config.components) {
        config.components.forEach(componentName => {
            const component = new componentName(obj);
            obj.addComponent(component);
        });
    }

    obj.setElement( injectDom(id, config.order) );
    obj.onInstantiate();

    return obj;
}

function createGameObjectDom() {
   // TODO: move GameObject's DOM injection logic here instead
}