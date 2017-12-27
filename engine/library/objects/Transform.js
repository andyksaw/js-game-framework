import { Vector } from 'engine/library/maths';

export default class Transform {
    constructor(position = Vector.origin(), rotation = 0, scale = 1) {
        this._position = position;
        this._parent = null;
        this._localPosition = Vector.origin();
        this._rotation = rotation;
        this._scale = scale;
    }

    getPosition() {
        return this._position;
    }
    setPosition(value) {
        let transformParent = this._parent;
        // console.log(this);
        // if(transformParent) {
        //     let combinedLocal = this._localPosition;
        //     while(transformParent) {
        //         console.log('test');
        //         combinedLocal = combinedLocal.multiply(parent.localPosition);
        //         transformParent = transformParent.parent;
        //     }
        //     this._position = combinedLocal.multiply
        //     return;
        // }

        this._position = value;
    }

    getParent() {
        return this._parent;
    }
    setParent(transform) {
        this._parent = transform;
        this._localPosition = this._position.subtract(transform.getPosition());
    }

    getLocalPosition() {
        return this._localPosition;
    }
}