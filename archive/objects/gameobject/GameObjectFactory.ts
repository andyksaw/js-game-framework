import { Transform, Sprite, SpriteConfig, GameObject, Component } from 'engine/library/objects';
import { Collider } from 'engine/library/collisions';
import { Vector } from 'engine/library/maths';
import withCollider from 'engine/library/objects/Colliderable';
import SceneGraph from 'engine/library/SceneGraph';

export interface GameObjectConfig {
    position?: Vector;
    components?: Array<new(obj: GameObject) => Component>;
    sprite?: SpriteConfig;
    order?: number;
    collider?: Collider;
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

export function makeGameObject(id: string, config: GameObjectConfig) : GameObject {
    let gameObjectType = GameObject;

    // if the object requires a collider, apply the given collider mixin 
    // to the GameObject
    if(config.collider) {
        gameObjectType = withCollider(GameObject, config.collider);
        SceneGraph.instance.addCollider(config.collider);
    }
    let obj = new gameObjectType(id, new Transform(config.position));

    
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

    const element = injectDom(id, config.order);
    obj.setElement(element);
    obj.onInstantiate();

    return obj;
}