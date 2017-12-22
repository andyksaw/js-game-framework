import { Vector } from 'engine/library/maths';

/**
 * Represents the four corners of a GameObject, used for calculating
 * collisions between GameObjects.
 * 
 * Note: a bounding box may not necessarily be the same size as a 
 * GameObject's sprite.
 */
export default class BoundingBox {

    /**
     * Returns a new bounding box using the given position and
     * size dimensions
     * 
     * @param {Vector} position 
     * @param {Vector} dimensions 
     */
    constructor(position, dimensions) {
        this._dimensions = dimensions;
        this.updatePosition(position);
    }

    /**
     * Updates the bounding box position based on the new position
     * of the owning GameObject
     * 
     * @param {*} position      
     */
    updatePosition(position) {
        const halfWidth  = (this._dimensions.x / 2);
        const halfHeight = (this._dimensions.y / 2);

        this._topLeft = new Vector(
            position.x - halfWidth,
            position.y - halfHeight
        );
        this._topRight = new Vector(
            position.x + halfWidth,
            position.y - halfHeight
        );
        this._botLeft = new Vector(
            position.x - halfWidth,
            position.y + halfHeight
        );
        this._botRight = new Vector(
            position.x + halfWidth,
            position.y + halfHeight
        );
    }

    get topLeft() {
        return this._topLeft;
    }
    get topRight() {
        return this._topRight;
    }
    get botLeft() {
        return this._botLeft;
    }
    get botRight() {
        return this._botRight;
    }

    get top() {
        return this._topLeft.y;
    }
    get bottom() {
        return this._botRight.y;
    }
    get left() {
        return this._topLeft.x;
    }
    get right() {
        return this._botRight.x;
    }
}