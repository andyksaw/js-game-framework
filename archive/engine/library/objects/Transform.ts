import { Vector } from 'engine/library/maths';

export default class Transform {

    private _position: Vector;
    private _rotation: number;
    private _scale: number;
    private _localPosition: Vector = Vector.origin;

    private _parent: Transform = null;
    private _children: Transform[] = [];

    /**
     * Whether the transform needs a redraw
     */
    private _isDirty: boolean = true;

    constructor(
        position: Vector = Vector.origin,
        rotation: number = 0,
        scale: number = 1,
    ) {
        this._position = position;
        this._rotation = rotation;
        this._scale = scale;
    }

    getPosition() : Vector {
        return this._position;
    }
    setPosition(value: Vector) : void {
        if(value.x === this._position.x && value.y === this._position.y) {
            return;
        }

        const diff = value.subtract(this._position);

        // if this GameObject moved, update its local position relative to
        // its parent
        this._position = value;
        if(this._parent) {
            this._localPosition = value.subtract(this._parent.getPosition());
        }
        
        // if this GameObject has children, update their positions
        if(this._children.length > 0) {
            for(let child of this._children) {
                child.setPosition(child.getPosition().add(diff));
            }
        }

        this._isDirty = true;
    }

    getParent() : Transform {
        return this._parent;
    }
    setParent(transform: Transform) : void {
        this._parent = transform;
        this._localPosition = this._position.subtract(transform.getPosition());
    }

    getChildren() : Array<Transform> {
        return this._children;
    }
    addChild(transform: Transform) : void {
        this._children.push(transform);
    }

    /**
     * Returns a Vector of the relative distance to this Transform's parent
     */
    getLocalPosition() : Vector {
        return this._localPosition;
    }

    /**
     * Shortcut method for adding the given vector to the current position
     * 
     * @param {Vector} value 
     */
    translate(value: Vector) : void {
        const newPos = this._position.add(value);
        this.setPosition(newPos);
    }

    /**
     * Sets the Transform as 'clean'. When in a 'clean' state, the Transform
     * will not redraw until its manipulated again (move, scale, rotate)
     */
    clean() : void {
        this._isDirty = false;
    }
    
    /**
     * Forces a re-draw
     */
    dirty() : void {
        this._isDirty = true;
    }

    /**
     * Returns whether the Transform needs to be redrawn due to a manipulation
     * 
     * @return {boolean}
     */
    isDirty() : boolean {
        return this._isDirty;
    }
}