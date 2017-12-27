import { Vector } from 'engine/library/maths';
import { BoundingBox, Transform, Sprite } from 'engine/library/objects';
import { Camera } from 'engine/library/screen';

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
        this._sprite = null;
        
        this._transform = new Transform(position);
    }

    /**
     * @return {Transform}
     */
    getTransform() {
        return this._transform;
    }

    /**
     * @return {Sprite}
     */
    getSprite() {
        return this._sprite;
    }
    
    /**
     * Returns the unique identifier string of this GameObject
     * 
     * @return {string}
     */
    getName() {
        return this._id;
    }

    /**
     * Returns the DOM element that represents this GameObject
     * 
     * @return {HTMLNode}
     */
    getElement() {
        return this._element;
    }

    /**
     * Returns whether the object is visible (but still executing
     * its update loop)
     * 
     * @return {boolean}
     */
    isVisible() {
        return this._isVisible;
    }
    
    /**
     * Returns whether the object will be destroyed next frame
     * 
     * @return {boolean}
     */
    isDestroying() {
        return this._isDestroying;
    }

    /**
     * Returns whether the object is disabled (ie. not executing
     * its update loop and rendering)
     * 
     * @return {boolean}
     */
    isDisabled() {
        return this._isDisabled;
    }

    /**
     * Injects this GameObject's DOM element into the document body
     * 
     * @param {string} id 
     */
    createDom(id) {
        const element = document.createElement('div');
        element.id = id;
        element.classList.add('gameObject');

        document.body.appendChild(element);
        this._element = element;

        this.onInstantiate();
    }

    /**
     * Adds a component that hooks into this GameObject's lifecycle
     * 
     * @param {Component} component 
     */
    addComponent(component) {
        this._components.push(component);
    }

    /**
     * Sets the Sprite that represents this GameObject. If no Sprite is
     * set, nothing will happen in the render cycle for this object.
     * 
     * @param {object} config 
     */
    setSprite(config = {}) {
        this._sprite = new Sprite(this._transform.getPosition(), config);
        this._sprite.appendDom();
    }
     
    /**
     * Sets this GameObject as the child of the given GameObject. In other
     * words, it will move, scale and rotate relatively whenever the parent does.
     * 
     * @param {GameObject} gameObject 
     */
    setParent(gameObject) {
        this._transform.setParent(gameObject.getTransform());
        gameObject.getTransform().addChild(this._transform);
    }

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
        if(this._isDisabled || this._isDestroying) {
            return;
        }
        this._components.forEach(c => c.onUpdate(timestep));
    }

    /**
     * Renders the object in world space each game loop frame
     */
    render() {
        if(!this._isVisible || this._isDisabled || this._isDestroying) {
            return;
        }
        
        let screenSpacePos = null;
        let isTransformDirty = false;
        
        // only redraw when the Transform has actually moved
        if(this._transform.isDirty()) {
            // the Transform stores our world-space coordinates,
            // but we need to render the object in screen-space
            screenSpacePos = this._getScreenPosition();

            this._element.style.left = screenSpacePos.x;
            this._element.style.top  = screenSpacePos.y;

            this._transform.clean();

            isTransformDirty = true;
        }

        // only redraw the sprite if the Sprite or Transform has moved
        if(this._sprite && (isTransformDirty || this._sprite.isDirty())) {
            screenSpacePos = screenSpacePos || this._getScreenPosition();

            this._sprite.render(screenSpacePos);
            this._sprite.clean();
        }

    }

    _getScreenPosition() {
        const position = this._transform.getPosition();
        const cameraPos = Camera.transform.getPosition();
        
        return new Vector(
            position.x - cameraPos.x,
            position.y - cameraPos.y
        );
    }
}