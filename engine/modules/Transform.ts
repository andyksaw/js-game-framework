import { Vector } from "engine/maths";
import IDestroyable from "engine/modules/IDestroyable";

export default class Transform implements IDestroyable {

    /**
     * List of child transforms that will move relatively 
     * with this transform
     */
    private _children: Array<Transform> = [];

    /**
     * A transform that this transform moves relatively to
     */
    private _parent: Transform = null;


    constructor(
        private _position: Vector = Vector.origin,
        private _rotation: number = 0,
        private _scale: number = 0,
        private _localPosition: Vector = Vector.origin,
    ) {}

    get position() : Vector {
        return this._position;
    }
    get localPosition() : Vector {
        return this._localPosition;
    }
    get rotation() : number {
        return this._rotation;
    }
    get scale() : number {
        return this._scale;
    }
    get children() : Array<Transform> {
        return this._children;
    }

    public destroy() : void {
        this._position = null;
        this._localPosition = null;
        this._children = null;
        this._parent = null
    }

    public setPosition(position: Vector, autoUpdateLocalPos: boolean = true) : void {
        if(this._position.isEqualTo(position)) {
            return;
        }

        const diff = position.subtract(this._position);
        this._position = position;

        // since this GameObject initiated the move, update its
        // local position
        if(this._parent && autoUpdateLocalPos) {
            this._updateLocalPos();
        }

        // propagate the position change down to children
        this._children.forEach(child => {
            child.setPosition(child.position.add(diff), false);
        });
    }

    public setRotation(rotation: number) : void {
        this._rotation = rotation;
    }
    public setScale(scale: number) : void {
        this._scale = scale;
    }

    /**
     * Adds a child to this transform immediately. Children will
     * move with their parent
     * 
     * @param transform 
     */
    public addChild(transform: Transform) : void {
        this._children.push(transform);
        transform.setParent(this);
    }

    /**
     * Sets the parent of this transform. This transform will auto 
     * move whenever the parent moves
     * 
     * @param transform 
     */
    public setParent(transform: Transform) : void {
        this._parent = transform;
        this._updateLocalPos();
    }

    /**
     * Updates the local position of this transform relative to 
     * its parent
     */
    private _updateLocalPos() {
        this._localPosition = this._position.subtract(this._parent.position);
    }

}