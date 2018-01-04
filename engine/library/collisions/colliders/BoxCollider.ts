import { Collider, ColliderShape, Box, Circle } from 'engine/library/collisions';
import { BoundingBox } from 'engine/library/objects';

export default class BoxCollider extends Collider {
    constructor(private _boundingBox: BoundingBox) {
        super();
    }

    get boundingBox() : BoundingBox {
        return this._boundingBox;
    }

    getType() : ColliderShape {
        return ColliderShape.BOX;
    }

    getRect() : Box {
        return {
            left    : this._boundingBox.left,
            right   : this._boundingBox.right,
            top     : this._boundingBox.top,
            bottom  : this._boundingBox.bottom,
        };
    }

    collidesWith(collider: Collider) : boolean {
        switch(collider.getType()) {
            case ColliderShape.BOX:
                return this.rectToRectCheck(collider.getRectangle());

            case ColliderShape.CIRCLE:
                return this.rectToCircleCheck(collider.getCircle());
        }

        return false;
    }
    
    /**
     * Performs a collision detection against another rectangle
     * 
     * @param {} rect 
     */
    rectToRectCheck(rect: Box) {
        return (
            rect.right  > this._boundingBox.left ||
            rect.left   < this._boundingBox.right ||
            rect.top    > this._boundingBox.bottom ||
            rect.bottom < this._boundingBox.top
        );
    }

    rectToCircleCheck(circle: Circle) {
        // return (

        // );
        return false;
    }

}