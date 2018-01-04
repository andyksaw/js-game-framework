import { Collider, ColliderShape, Box, Circle } from "engine/library/collisions";
import { Vector } from "engine/library/maths";

export default class CircleCollider extends Collider {
    constructor(
        private _origin: Vector, 
        private _offset: Vector,
        private _radius: number
    ) {
        super();
    }

    get position() {
        return this._origin.add(this._offset);
    }
    get radius() {
        return this._radius;
    }

    public getType() : ColliderShape {
        return ColliderShape.CIRCLE;
    }

    public getCircle() : Circle {
        return {
            position: this.position,
            radius: this.radius,
        };
    }

    public collidesWith(collider: Collider) : boolean {
        switch(collider.getType()) {
            case ColliderShape.BOX:
                return this.circleToRectCheck(collider.getRectangle());

            case ColliderShape.CIRCLE:
                return this.circleToCircleCheck(collider.getCircle());
        }

        return false;
    }

    public setPosition(position: Vector) : void {
        this._origin = position;
    }

    private circleToRectCheck(rect: Box) : boolean {
        return false;
    }

    private circleToCircleCheck(circle: Circle) : boolean {
        return false;
    }
}