import { Vector } from 'engine/library/maths';
import { GameObject, makeGameObject, GameObjectConfig } from 'engine/library/objects';

/**
 * Handles instantiation, destruction and management of all GameObjects
 */
export default class SceneGraph {

    // singleton because we should never have more than one SceneGraph
    private static _instance: SceneGraph;
    public static get instance() : SceneGraph {
        return this._instance || (this._instance = new this());
    }
    private constructor() {}

    /**
     * An ordered array of all GameObjects (regardless of state)
     */
    private _hierarchy: Array<GameObject> = [];

    /**
     * A unique string id to GameObject mapping
     */
    private _gameObjects: Map<string, GameObject> = new Map();

    get hierarchy() : Array<GameObject> {
        return this._hierarchy;
    }

    /**
     * Gets the GameObject that belongs to the given id
     * 
     * @param {string} id 
     */
    get(id: string) : GameObject {
        return this._gameObjects.get(id);
    }

    /**
    * Creates a new GameObject
    * 
    * @type {string} id         Name/identifier of the object
    * @type {object} config     GameObject settings
    */
    instantiate(id: string, config: GameObjectConfig) : GameObject {
        if(id == null) {
            throw new Error('Instantiation failed: no unique id given');
        }
        if(this._gameObjects.get(id)) {
            throw new Error(`Instantiation failed: a GameObject already exists with the name ${id}`)
        }

        const gameObject = makeGameObject(id, config);

        this._hierarchy.push(gameObject);
        this._gameObjects.set(id, gameObject);

        return gameObject;
    }

    /**
     * Takes in an array of GameObjects and removes them all 
     * from the hierarchy immediately
     * 
     * @param {array} gameObjects 
     */
    removeBatch(gameObjects: Array<GameObject>) : void {
        gameObjects.forEach(obj => {
            this._gameObjects.delete(obj.id);
        });
        this._hierarchy = this._hierarchy.filter(obj => gameObjects.indexOf(obj) < 0);
    }
}