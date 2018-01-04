import { Transform, SceneGraph } from 'engine/library/objects';

export default class Camera {
    private static _instance: Camera;
    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    private _transform: Transform;

    private constructor() {
        this._transform = new Transform();

        // since a camera move needs to update everything in view,
        // set all objects in the viewport as 'dirty' so they get
        // redrawn
        
        // TODO: viewport culling
        const setPositionFunc = this._transform.setPosition.bind(this._transform);
        this._transform.setPosition = (value) => {
            setPositionFunc(value);
            SceneGraph.instance.hierarchy.forEach(obj => {
                obj.getTransform().dirty();
            });
        }
    }

    get transform() : Transform {
        return this._transform;
    }
}