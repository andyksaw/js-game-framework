import { Vector } from 'engine/library/maths';

export default class Transform {
    constructor(position = null) {
        this._position = position || Vector.origin();
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }

    setPosition(position) {
        this._position = position;
    }
}