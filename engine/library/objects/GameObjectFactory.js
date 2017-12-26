import { Vector } from 'engine/library/maths';
import { GameObject } from 'engine/library/objects';

/**
 * Singleton to hold all references to all instantiated GameObjects
 */
class GameObjectFactory {
    constructor() {
        // an ordered list (array) of all GameObjects
        this._hierarchy = [];

        // a unique id to GameObject mapping
        this._gameObjects = new Map();
    }

    get hierarchy() {
        return this._hierarchy;
    }

    /**
     * Gets the GameObject that belongs to the given id
     * 
     * @param {*} id 
     */
    get(id) {
        return this._gameObjects.get(id);
    }

    /**
    * Creates a new GameObject
    * 
    * @type {string} id         Name/identifier of the object
    * @type {object} config     GameObject settings
    */
    instantiate(id, config) {
        const { 
            position = new Vector(0, 0),
            components = [],
            sprite = {},
        } = config;

        if(id == null) {
            throw new Error(`Instantiation failed: no unique id given for ${type(gameObject)}`);
        }
        if(this._gameObjects.get(id)) {
            throw new Error(`Instantiation failed: a GameObject already exists with the name ${id}`)
        }

        const obj = new GameObject(id, position);
        this._hierarchy.push(obj);
        this._gameObjects.set(id, obj);

        if(sprite.asset) {
            obj.setSprite(sprite);
        }

        components.forEach(componentName => {
            const component = new componentName(obj);
            obj.addComponent(component);
        });

        obj.createDom(id);

        return obj;
    }

    /**
     * Takes in an array of GameObjects and removes them all 
     * from the hierarchy immediately
     * 
     * @param {array} gameObjects 
     */
    removeBatch(gameObjects) {
        gameObjects.forEach(obj => {
            this._gameObjects.delete(obj.id);
        });
        this._hierarchy = this._hierarchy.filter(obj => gameObjects.indexOf(obj) < 0);
    }
}

export default new GameObjectFactory();