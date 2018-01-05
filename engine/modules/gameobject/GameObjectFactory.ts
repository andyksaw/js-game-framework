import Component from "engine/modules/components/Component";
import { GameObjectType, GameObject } from "engine/modules/gameobject/GameObject";
import SceneGraph from "engine/SceneGraph";

interface GameObjectConfig {
    order?: number;
    components?: Array<Component>,
}

let gameObjectContainer = document.body.querySelector('#gameObjects');

/**
 * Injects a new <div> element into the page to represent
 * a GameObject
 * 
 * @param id 
 */
function createDivElement(id: string, zIndex: number = 0) : HTMLDivElement {
    const element = document.createElement('div');

    element.id = id;
    element.style.zIndex = zIndex.toString();
    element.classList.add('gameObject');

    if(!gameObjectContainer) {
        const container = document.createElement('div');
        container.id = 'gameObjects';
        gameObjectContainer = document.body.appendChild(container);
    }

    return gameObjectContainer.appendChild(element);
}

export function instantiate(id: string, config: GameObjectConfig) : GameObjectType {
    const gameObject = new GameObject();
    createDivElement(id, config.order);
    
    if(config.components) {
        config.components.forEach(c => gameObject.addComponent(c));
    }

    SceneGraph.instance.add(id, gameObject);

    return gameObject;
}