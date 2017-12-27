export default class CircleCollider {
    constructor(origin, offset, radius) {
        this._origin = origin;
        this._offset = offset;
        this._radius = radius;
    }

    get position() {
        return this._origin.add(this._offset);
    }
    get radius() {
        return this._radius;
    }


    getType() {
        return Collidable.SHAPE_CIRCLE;
    }

    getCircle() {
        return {
            position: this.position,
            radius: this.radius,
        };
    }

    collidesWith(collidable) {
        switch(collidable.getType()) {
            case Collidable.SHAPE_BOX:
                return this.circleToRectCheck(collidable.getRect());

            case Collidable.SHAPE_CIRCLE:
                return this.circleToCircleCheck(collidable.getCircle());
        }
    }

    circleToRectCheck(rect) {
        
    }

    circleToCircleCheck(circle) {

    }
}