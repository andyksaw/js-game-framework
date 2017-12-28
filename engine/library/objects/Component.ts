import { GameObject, Transform, Sprite } from "engine/library/objects";

/**
 * An interface for interacting with a GameObject. This is
 * where almost all the custom game code should live.
 * 
 * A component should be instantiated and attached to a
 * GameObject when the GameObject is created.
 */
export default abstract class Component {
    /**
     * The GameObject this component belongs to
     */
    private _gameObject: GameObject;

    constructor(gameObject: GameObject) {
        this._gameObject = gameObject;
    }
    
    /**
     * Gets the transform for the GameObject of this component
     * 
     * @return {Transform}
     */
    get transform() : Transform {
        return this._gameObject.getTransform();
    }

    /**
     * Gets the sprite for the GameObject of this component
     * 
     * @return {Sprite}
     */
    get sprite() : Sprite {
        return this._gameObject.getSprite();
    }

    /**
     * Gets the GameObject this component belongs to
     * 
     * @return {GameObject}
     */
    get gameObject() : GameObject {
        return this._gameObject;
    }

    /**
     * Logic to run when the object is first instantiated.
     */
    protected onInstantiate() : void {}
    
    /**
     * Logic to run every game loop frame
     */
    protected onUpdate(timestep: number) : void {}

    /**
     * Logic to run when the object is destroyed
     */
    protected onDestroy() : void {}
}