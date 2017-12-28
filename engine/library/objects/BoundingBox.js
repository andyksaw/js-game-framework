/**
 * Represents a rectangle in world-space
 */
export default class BoundingBox {
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
}