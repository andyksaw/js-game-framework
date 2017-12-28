import { Collidable } from 'engine/library/collisions';
import { BoundingBox } from 'engine/library/objects';

export default class BoxCollider extends Collidable {
    constructor(boundingBox) {
        this._boundingBox = boundingBox;
    }

    get boundingBox() {
        return this._boundingBox;
    }

    getType() {
        return Collidable.SHAPE_BOX;
    }

    getRect() {
        return {
            left    : this._boundingBox.left,
            right   : this._boundingBox.right,
            top     : this._boundingBox.top,
            bottom  : this._boundingBox.bottom,
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
            rect.right  > this._boundingBox.left ||
            rect.left   < this._boundingBox.right ||
            rect.top    > this._boundingBox.bottom ||
            rect.bottom < this._boundingBox.top
        );
    }

    rectToCircleCheck(circle) {
        // return (

        // );
        return false;
    }

}