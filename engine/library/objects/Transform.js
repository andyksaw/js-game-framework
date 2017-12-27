import { Vector } from 'engine/library/maths';

export default class Transform {
    constructor(position = Vector.origin(), rotation = 0, scale = 1) {
        this._position = position;
        this._parent = null;
        this._children = [];
        this._localPosition = Vector.origin();
        this._rotation = rotation;
        this._scale = scale;

        this._isDirty = true;  // does the transform need re-rendering?
    }

    getPosition() {
        return this._position;
    }
    setPosition(value) {
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

    getParent() {
        return this._parent;
    }
    setParent(transform) {
        this._parent = transform;
        this._localPosition = this._position.subtract(transform.getPosition());
    }

    getChildren() {
        return this._children;
    }
    addChild(transform) {
        this._children.push(transform);
    }

    getLocalPosition() {
        return this._localPosition;
    }

    /**
     * Shortcut method for adding the given vector to the current position
     * 
     * @param {Vector} value 
     */
    translate(value) {
        const newPos = this._position.add(value);
        this.setPosition(newPos);
    }

    /**
     * Sets the Transform as 'clean'. When in a 'clean' state, the Transform
     * will not redraw until its manipulated again (move, scale, rotate)
     */
    clean() {
        this._isDirty = false;
    }
    
    /**
     * Forces a re-draw
     */
    dirty() {
        this._isDirty = true;
    }

    /**
     * Returns whether the Transform needs to be redrawn due to a manipulation
     * 
     * @return {boolean}
     */
    isDirty() {
        return this._isDirty;
    }
}