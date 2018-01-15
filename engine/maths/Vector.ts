/**
 * Represents an immutable coordinate in 2D space.
 * All non-getter methods return a new Vector class
 */
export default class Vector {
    constructor(
        private _x: number = 0,
        private _y: number = 0
    ) {}

    /**
     *  Returns the x-coordinate
     * 
     *  @return {number}
     */
    get x() : number {
        return this._x;
    }

    /**
     *  Returns the y-coordinate
     * 
     *  @return {number}
     */
    get y() : number {
        return this._y;
    }

    /**
     *  Returns the magnitude (ie. length) of the vector
     * 
     *  @return {number}
     */
    get magnitude() : number {
        const x2 = this._x * this._x;
        const y2 = this._y * this._y;
        return Math.sqrt(x2 + y2);
    }

    /**
     * Gets a vector that is perpendicular to this vector
     */
    get normal() : Vector {
        return new Vector(-this.y, this.x);
    }

    public add(vector: Vector) : Vector {
        return new Vector(
            this._x + vector.x,
            this._y + vector.y
        );
    }

    public subtract(vector: Vector) : Vector {
        return new Vector(
            this._x - vector.x,
            this._y - vector.y
        );
    }

    public multiply(scalar: number) : Vector {
        return new Vector(
            this._x * scalar,
            this._y * scalar
        );
    }

    public isEqualTo(vector: Vector) : boolean {
        return (
            this._x === vector._x &&
            this._y === vector._y
        );
    }

    /**
     * Convenience direction getters
     */
    static get left() : Vector {
        return new Vector(-1, 0);
    }
    static get right() : Vector {
        return new Vector(1, 0);
    }
    static get up() : Vector {
        return new Vector(0, 1);
    }
    static get down() : Vector {
        return new Vector(0, -1);
    }
    static get origin() : Vector {
        return new Vector(0, 0);
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
    public static dot(vector1: Vector, vector2: Vector) : number {
        return (vector1.x * vector2.x) + (vector1.y * vector2.y);
    }
}