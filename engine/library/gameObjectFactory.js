import Vector from 'engine/library/vector';

let instance = null;

/**
 * Singleton to hold all instantiated GameObjects
 */
export class GameObjectFactory {
    constructor() {
        if(instance != null) {
            return instance;
        }
        instance = this;

        // map of all GameObjects in the game
        this._gameObjects = new Map();
    }

    get hierarchy() {
        return this._gameObjects;
    }

    /**
    * Creates a new GameObject
    * 
    * @type {string} id                 Name/identifier of the object
    * @type {GameObject} gameObject     GameObject to create
    * @type {Vector} dimensions         Size of the GameObject
    * @type {Vector} position           Starting position of the object
    */
    instantiate(gameObject, config) {
        const { 
            id, 
            dimensions = new Vector(0, 0),
            position = new Vector(0, 0),
        } = config;

        if(id == null) {
            throw Error('Cannot instantiate a GameObject without a unique id');
        }

        const obj = new gameObject(id, dimensions, position);
        this._gameObjects.set(id, obj);

        obj.insertDom();

        return obj;
    }

    /**
     * Gets the GameObject that belongs to the given id
     * 
     * @param {*} id 
     */
    get(id) {
        return this._gameObjects.get(id);
    }
}