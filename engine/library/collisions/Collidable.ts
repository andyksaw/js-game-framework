export enum ColliderShape {
    BOX,
    CIRCLE,
}

export default abstract class Collidable {
    /**
     * Returns the type of collidable that should be checked
     */
    public getType() : ColliderShape {
        throw new Error('getType() not implemented');
    }


    public getRectangle() {
        throw new Error('getRectangle() not implemented');
    }
    
    public getCircle() {
        throw new Error('getCircle() not implemented');
    }

    /**
     * Returns whether the given collidable is currently colliding
     * with the current collidable.
     * 
     * @param {Collidable} collidable 
     * 
     * @returns {boolean}
     */
    public abstract collidesWith(collidable: Collidable) : boolean;

}