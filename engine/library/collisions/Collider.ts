import { Vector } from "engine/library/maths";
import { GameObject } from "engine/library/objects";

export enum ColliderShape {
    BOX,
    CIRCLE,
}

export interface Box {
    top: number,
    right: number,
    bottom: number,
    left: number,
}

export interface Circle {
    radius: number,
    position: Vector,
}

export default abstract class Collider {

    private _gameObject: GameObject;

    public get gameObject() {
        return this._gameObject;
    }

    public setGameObject(gameObject: GameObject) {
        this._gameObject = gameObject;
    }

    /**
     * Returns the type of collidable that should be checked
     */
    public getType() : ColliderShape {
        throw new Error('getType() not implemented');
    }

    /**
     * Returns the rectangle information of this object, if it
     * has a BoxCollider
     * 
     * @returns {Box}
     */
    public getRectangle() : Box {
        throw new Error('getRectangle() not implemented');
    }
    
    /**
     * Returns the circle information of this object, if it
     * has a CircleCollider
     * 
     * @returns {Circle}
     */
    public getCircle() : Circle {
        throw new Error('getCircle() not implemented');
    }

    /**
     * Returns whether the given collidable is currently colliding
     * with the current collidable.
     * 
     * @param {Collider} collider 
     * 
     * @returns {boolean}
     */
    public abstract collidesWith(collider: Collider) : boolean;

    /**
     * Sets the current position of the Collider
     * 
     * @param position
     */
    public abstract setPosition(position: Vector) : void;

}