import { Vector } from 'engine/library/maths';

/**
 * Represents a rectangle in world-space
 */
export default class BoundingBox {
    constructor(
        private _origin: Vector,
        private _dimensions: Vector,
        private _offset: Vector = Vector.origin,
    ) {}

    get position() : Vector {
        return this._origin.add(this._offset);
    }
    
    get left() : number {
        return this.position.x - (this._dimensions.x / 2);
    }
    get right() : number {
        return this.position.x + (this._dimensions.x / 2);
    }
    get top() : number {
        return this.position.y + (this._dimensions.y / 2);
    }
    get bottom() : number {
        return this.position.y - (this._dimensions.y / 2);
    }

    get dimensions() : Vector {
        return this._dimensions;
    }
    get offset() : Vector {
        return this._offset;
    }
    get origin() : Vector {
        return this._origin;
    }

    /**
     * Sets the current position of the Bounding Box
     * 
     * @param {Vector} origin 
     */
    public setOrigin(origin: Vector) : void {
        this._origin = origin;
    }
}