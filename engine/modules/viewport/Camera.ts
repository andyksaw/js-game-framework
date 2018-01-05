import { CameraObjectType, default as CameraObject } from 'engine/modules/viewport/CameraObject';

/**
 * The current camera being displayed in the viewport
 */
let _currentCamera: CameraObjectType = new CameraObject();

/**
 * Returns the main camera
 */
export function getMain() : void {
    return this._currentCamera;
}

/**
 * Switches the camera being displayed to the given camera
 * 
 * @param camera 
 */
export function switchCamera(camera: CameraObjectType) : void {
    _currentCamera = camera;
}

export function create() {
    
}