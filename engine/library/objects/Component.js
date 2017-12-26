/**
 * An interface for interacting with a GameObject.
 * 
 * A component should be instantiated and attached to a
 * GameObject when the GameObject is created.
 */
export default class Component {
    setGameObject(gameObject) {
        this._gameObject = gameObject;
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