export default class Collidable {
    
    static get SHAPE_BOX() { return 1; }
    static get SHAPE_CIRCLE() { return 2; }
    /**
     * Returns the type of collidable that should be checked
     */
    getType() {
        throw new Error('getType() not implemented');
    }


    getRectangle() {
        throw new Error('getRectangle() not implemented');
    }
    
    getCircle() {
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
    collidesWith(collidable) {}

}