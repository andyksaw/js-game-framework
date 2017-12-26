import { Vector } from 'engine/library/maths';
import { BoundingBox, Transform, Sprite } from 'engine/library/objects';

/**
 * Represents an object in the scene
 */
export default class GameObject {
    /**
     * Creates a new GameObject
     * 
     * @param {string} id           Unique identifier
     * @param {Vector} position     Starting position of the object
     */
    constructor(id, position = null) {
        this._id = id;
        this._isVisible = true;
        this._isDestroying = false;
        this._isDisabled = false;
        
        this._components = [];
        this._transform = new Transform(position);
        this._sprite = null;
        
        // this._boundingBox = new BoundingBox(position, dimensions);

        // child GameObjects of this GameObject
        // this._children = [];
    }

    get transform() {
        return this._transform;
    }
    get sprite() {
        return this._sprite;
    }
    get isVisible() {
        return this._isVisible;
    }
    get name() {
        return this._id;
    }
    get element() {
        return this._element;
    }
    // get bounds() {
    //     return this._boundingBox;
    // }
    get isDestroying() {
        return this._isDestroying;
    }
    get isDisabled() {
        return this._isDisabled;
    }

    // set pivot(value) {

    // }

    createDom(id) {
        const element = document.createElement('div');
        element.id = id;
        element.classList.add('gameObject');

        document.body.appendChild(element);
        this._element = element;

        this.onInstantiate();
    }

    addComponent(component) {
        this._components.push(component);
    }

    setSprite(config = {}) {
        this._sprite = new Sprite(this.transform.position, config);
        this._sprite.appendDom();
    }

    _setCollider(collider) {
        this._collider = collider;
    }

    _setBoundingBox(dimensions) {
        // this._boundingBox = new BoundingBox(this.transform.position, dimensions);
    }
        
    // addChild(gameObject) {
    //     this._children.push(gameObject);
    //     console.log(this);
    // }

    /**
     * Sets the visibility of the object. Setting to false
     * effectively sets 'display: none' css
     * 
     * @param {boolean} isVisible 
     */
    setVisibility(isVisible) {
        if(this._isVisible != isVisible) {
            this._element.style.display = isVisible ? 'none' : 'hidden';
            this._isVisible = isVisible;
        }
    }

    /**
     * Sets whether the object is disabled.
     * 
     * In a disabled state, the object neither renders nor
     * executes its update loop.
     * 
     * @param {boolean} isDisabled 
     */
    setDisabled(isDisabled) {
        this._isDisabled = isDisabled;
    }

    /**
     * Marks the object for destruction at the end of the frame.
     * Furthermore, the object will not execute its update loop if 
     * it hasn't already executed it yet.
     */
    destroy() {
        this._isDestroying = true;
        this.onDestroy();
    }

    /**
     * Calls onInstantiate() on all components on this GameObject
     */
    onInstantiate() {
        this._components.forEach(c => c.onInstantiate());
    }

    /**
     * Calls onDestroy() on all components on this GameObject
     */
    onDestroy() {
        this._components.forEach(c => c.onDestroy());
    }

    /**
     * Calls onUpdate() on all components on this GameObject
     */
    onUpdate(timestep) {
        this._components.forEach(c => c.onUpdate(timestep));
    }

    /**
     * Renders the object in world space each game loop frame
     */
    render() {
        if(!this._isVisible) {
            return;
        }

        const position = this.transform.position;

        // the Transform is the world-space representation of
        // the GameObject, so sync the GameObject's div to its
        // Transform position
        this._element.style.left = position.x;
        this._element.style.top  = position.y;

        if(this._sprite) {
            this._sprite.render(position);
        }
    }
}