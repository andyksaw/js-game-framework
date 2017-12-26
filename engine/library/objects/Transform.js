import { Vector } from 'engine/library/maths';

export default class Transform {
    constructor(position = null) {
        this._position = position || new Vector();
    }

    get position() {
        return this._position;
    }

    set position(value) {
        const difference = value.subtract(this._position);
        this._position = vector;
        
        // update bounding box position
        // this._boundingBox.updatePosition(vector);
        
        // move any children along with this object
        // this._children.forEach(child => {
        //     console.log(child);
        //     child.position = child.position.add(difference);
        // });
    }

    setPosition(position) {
        this._position = position;
    }
}