import { Maths } from 'engine/library/maths';

/**
 * Represents a coordinate in 2D space
 */
export default class Vector {
    constructor(x, y) {
        this._x = x || 0;
        this._y = y || 0;
    }

    /**
     *  Returns the x-coordinate
     * 
     *  @return {number}
     */
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }

    /**
     *  Returns the y-coordinate
     * 
     *  @return {number}
     */
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }

    /**
     *  Returns the magnitude (ie. length) of the vector
     * 
     *  @return {number}
     */
    get magnitude() {
        const x2 = this._x * this._x;
        const y2 = this._y * this._y;
        return Math.sqrt(x2 + y2);
    }

    /**
     * Gets a vector that is perpendicular to this vector
     */
    get normal() {
        return new Vector(-this.y, this.x);
    }

    /**
     * Convenience direction getters
     */
    static get left() {
        return new Vector(-1, 0);
    }
    static get right() {
        return new Vector(1, 0);
    }
    static get up() {
        return new Vector(0, 1);
    }
    static get down() {
        return new Vector(0, -1);
    }
    static get origin() {
        return new Vector(0, 0);
    }

    add(vector) {
        return new Vector(
            this.x + vector.x,
            this.y + vector.y
        );
    }

    subtract(vector) {
        return new Vector(
            this.x - vector.x,
            this.y - vector.y
        );
    }

    multiply(scalar) {
        return new Vector(
            this.x * scalar,
            this.y * scalar
        );
    }

    clamp(min, max) {
        return new Vector(
            Maths.clamp(this.x, min.x, max.x),
            Maths.clamp(this.y, min.y, max.y)
        );
    }

    /**
     * Returns a scalar that shows how much vector1
     * is in vector2's direction
     * 
     * @param {*} vector1 
     * @param {*} vector2 
     * 
     * @return {number}
     */
    static dot(vector1, vector2) {
        return (vector1.x * vector2.x) + (vector1.y * vector2.y);
    }
}