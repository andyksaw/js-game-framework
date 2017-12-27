import { Vector } from 'engine/library/maths';

export default class Transform {
    constructor(position = Vector.origin(), rotation = 0, scale = 1) {
        this._position = position;
        this._parent = null;
        this._children = [];
        this._localPosition = Vector.origin();
        this._rotation = rotation;
        this._scale = scale;
    }

    getPosition() {
        return this._position;
    }
    setPosition(value) {
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
    }

    getParent() {
        return this._parent;
    }
    setParent(transform) {
        this._parent = transform;
        this._localPosition = this._position.subtract(transform.getPosition());
        console.log(this._localPosition);
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
}