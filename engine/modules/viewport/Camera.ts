import { default as CameraObject } from 'engine/modules/viewport/CameraObject';

export default class Camera {
    private static _camera: CameraObject = new CameraObject;
    private _currentCamera: CameraObject;

    constructor() {
        this._camera = new CameraObject();
        this._currentCamera = this._camera;
    }

    public static get main() {
        return this._currentCamera;
    }

    public switchCamera(camera: CameraObject) {
        this._currentCamera = camera;
    }
}