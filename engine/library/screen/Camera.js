import { Transform } from 'engine/library/objects';

class Camera {
    get transform() {
        if(!this._transform) {
            this._transform = new Transform();
        }
        return this._transform;
    }
}

export default new Camera();