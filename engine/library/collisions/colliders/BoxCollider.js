export default class BoxCollider {
    constructor(origin, offset, dimensions) {
        const halfWidth = dimensions.x / 2;
        const halfHeight = dimensions.y / 2;

        const position = origin.add(offset);

        this._topLeft       = position.add(new Vector(-halfWidth, halfHeight));
        this._topRight      = position.add(new Vector(halfWidth, halfHeight));
        this._bottomLeft    = position.add(new Vector(-halfWidth, -halfHeight));
        this._bottomRight   = position.add(new Vector(halfWidth, -halfHeight));
    }

    getTopLeft() {
        return this._topLeft;
    }
    getTopRight() {
        return this._topRight;
    }
    getBottomLeft() {
        return this._bottomLeft;
    }
    getBottomRight() {
        return this._bottomRight;
    }
}