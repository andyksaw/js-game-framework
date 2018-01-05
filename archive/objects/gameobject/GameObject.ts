import { Vector } from 'engine/library/maths';
import { BoundingBox, Transform, Sprite, SpriteConfig, Component, Colliderable } from 'engine/library/objects';
import { Camera } from 'engine/library/screen';
import { render } from 'engine/library/objects/gameobject/GameObjectRenderer';

/**
 * Represents an object in the scene
 */
export default class GameObject implements Colliderable {

    private _id: string;
    private _element: HTMLDivElement;
    private _isVisible: boolean = true;
    private _isDestroying: boolean = false;
    private _isDisabled: boolean = false;

    private _transform: Transform;
    private _sprite: Sprite;
    private _components: Array<Component> = [];

    /**
     * Creates a new GameObject
     * 
     * @param {string} id           Unique identifier
     * @param {Vector} position     Starting position of the object
     */
    constructor(id: string, transform: Transform) {
        this._id = id;
        this._transform = transform;
    }

    get id() : string {
        return this._id;
    }

    /**
     * @return {Transform}
     */
    public getTransform() : Transform {
        return this._transform;
    }

    /**
     * @return {Sprite}
     */
    public getSprite() : Sprite {
        return this._sprite;
    }
    
    /**
     * Returns the unique identifier string of this GameObject
     * 
     * @return {string}
     */
    public getName() : string {
        return this._id;
    }

    /**
     * Returns the DOM element that represents this GameObject
     * 
     * @return {HTMLDivElement}
     */
    public getElement() : HTMLDivElement {
        return this._element;
    }

    /**
     * Returns whether the object is visible (but still executing
     * its update loop)
     * 
     * @return {boolean}
     */
    public isVisible() : boolean {
        return this._isVisible;
    }
    
    /**
     * Returns whether the object will be destroyed next frame
     * 
     * @return {boolean}
     */
    public isDestroying() : boolean {
        return this._isDestroying;
    }

    /**
     * Returns whether the object is disabled (ie. not executing
     * its update loop and rendering)
     * 
     * @return {boolean}
     */
    public isDisabled() : boolean {
        return this._isDisabled;
    }

    /**
     * Sets the HTML element that represents this GameObject
     *
     * @param element 
     */
    public setElement(element: HTMLDivElement) : void {
        this._element = element;
    }

    /**
     * Adds a component that hooks into this GameObject's lifecycle
     * 
     * @param {Component} component 
     */
    public addComponent(component: Component) : void {
        this._components.push(component);
    }

    /**
     * Sets the Sprite that represents this GameObject. If no Sprite is
     * set, nothing will happen in the render cycle for this object.
     * 
     * @param {Sprite} config 
     */
    public setSprite(sprite: Sprite) : void {
        this._sprite = sprite;
    }
     
    /**
     * Sets this GameObject as the child of the given GameObject. In other
     * words, it will move, scale and rotate relatively whenever the parent does.
     * 
     * @param {GameObject} gameObject 
     */
    public setParent(gameObject: this) : void {
        this._transform.setParent(gameObject.getTransform());
        gameObject.getTransform().addChild(this._transform);
    }

    /**
     * Sets the visibility of the object. Setting to false
     * effectively sets 'display: none' css
     * 
     * @param {boolean} isVisible 
     */
    public setVisibility(isVisible: boolean) : void {
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
    public setDisabled(isDisabled: boolean) : void {
        this._isDisabled = isDisabled;
        this._element.style.display = isDisabled ? 'none' : 'hidden';
    }

    /**
     * Marks the object for destruction at the end of the frame.
     * Furthermore, the object will not execute its update loop if 
     * it hasn't already executed it yet.
     */
    public destroy() : void {
        this._isDestroying = true;
        this.onDestroy();
    }

    /**
     * Calls onInstantiate() on all components on this GameObject
     */
    public onInstantiate() : void {
        this._components.forEach(c => c.onInstantiate());
    }

    /**
     * Calls onDestroy() on all components on this GameObject
     */
    public onDestroy() : void {
        this._components.forEach(c => c.onDestroy());
    }

    /**
     * Calls onUpdate() on all components on this GameObject
     */
    public onUpdate(timestep: number) : void {
        if(this._isDisabled || this._isDestroying) {
            return;
        }
        this._components.forEach(c => c.onUpdate(timestep));
    }

    public onCollision(collidingObjs: Collider[]) : void {
        // console.log(`${this._id} is colliding with`, collidingObjs);
    }

    /**
     * Renders the object in world space each game loop frame
     */
    public render() : void {
        if(!this._isVisible || this._isDisabled || this._isDestroying) {
            return;
        }

        const didGameObjectRender = render(this._element, this._transform, Camera.instance);

        // only redraw the sprite if the Sprite or Transform has moved
        if(this._sprite && (didGameObjectRender || this._sprite.isDirty())) {
            // screenSpacePos = screenSpacePos || this._getScreenPosition();

            // this._sprite.render(screenSpacePos);
            // this._sprite.clean();
        }

    }
}