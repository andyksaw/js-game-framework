import { Transform, SceneGraph } from 'engine/library/objects';

class Camera {
    get transform() {
        if(!this._transform) {
            this._transform = new Transform();

            // since a camera move needs to update everything in view,
            // set all objects in the viewport as 'dirty' so they get
            // redrawn
            this._transform.setPosition = (value) => {
                this._transform._position = value;
                SceneGraph.hierarchy.forEach(obj => {
                    obj.getTransform().dirty();
                });
            }
        }
        return this._transform;
    }
}

export default new Camera();