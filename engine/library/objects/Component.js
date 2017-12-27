/**
 * An interface for interacting with a GameObject. This is
 * where almost all the custom game code should live.
 * 
 * A component should be instantiated and attached to a
 * GameObject when the GameObject is created.
 */
export default class Component {
    constructor(gameObject) {
        this._gameObject = gameObject;
    }
    
    /**
     * Gets the transform for the GameObject of this component
     * 
     * @return {Transform}
     */
    get transform() {
        return this._gameObject.transform;
    }

    /**
     * Gets the sprite for the GameObject of this component
     * 
     * @return {Sprite}
     */
    get sprite() {
        return this._gameObject.sprite;
    }

    /**
     * Gets the GameObject this component belongs to
     * 
     * @return {GameObject}
     */
    get gameObject() {
        return this._gameObject;
    }

    /**
     * Logic to run when the object is first instantiated.
     */
    onInstantiate() {}
    
    /**
     * Logic to run every game loop frame
     */
    onUpdate() {}

    /**
     * Logic to run when the object is destroyed
     */
    onDestroy() {}
}