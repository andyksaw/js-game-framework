import { Collidable } from 'engine/library/collisions';

export default class BoxCollider extends Collidable {
    constructor(origin, offset, dimensions) {
        this._origin = origin;
        this._offset = offset;
        this._dimensions = dimensions;
    }

    get position() {
        return this._origin.add(this._offset);
    }
    get left() {
        return this.position.x - (this._dimensions.x / 2);
    }
    get right() {
        return this.position.x + (this._dimensions.x / 2);
    }
    get top() {
        return this.position.y + (this._dimensions.y / 2);
    }
    get bottom() {
        return this.position.y - (this._dimensions.y / 2);
    }


    getType() {
        return Collidable.SHAPE_BOX;
    }

    getRect() {
        return {
            left: this.left,
            right: this.right,
            top: this.top,
            bottom: this.bottom,
        };
    }

    collidesWith(collidable) {
        switch(collidable.getType()) {
            case Collidable.SHAPE_BOX:
                return this.rectToRectCheck(collidable.getRect());

            case Collidable.SHAPE_CIRCLE:
                return this.rectToCircleCheck(collidable.getCircle());
        }
    }
    
    /**
     * Performs a collision detection against another rectangle
     * 
     * @param {object} rect 
     */
    rectToRectCheck(rect) {
        return (
            rect.right > this.left ||
            rect.left < this.right ||
            rect.top > this.bottom ||
            rect.bottom < this.top
        );
    }

    rectToCircleCheck(circle) {
        // return (

        // );
        return false;
    }

}