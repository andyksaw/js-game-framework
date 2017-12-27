export default class CircleCollider {
    constructor(origin, offset, radius) {
        const position = origin.add(offset);
        this._radius = radius;
    }

    getRadius() {
        return this._radius;
    }
}