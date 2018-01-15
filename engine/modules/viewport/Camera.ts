import { CameraObjectType, CameraObject } from 'engine/modules/viewport';

/**
 * The current camera being displayed in the viewport
 */
let _currentCamera: CameraObjectType;

/**
 * Returns the main camera
 */
export function getMain() : CameraObjectType {
    return this._currentCamera || (this._currentCamera = new CameraObject());
}

/**
 * Switches the camera being displayed to the given camera
 * 
 * @param camera 
 */
export function switchCamera(camera: CameraObjectType) : void {
    _currentCamera = camera;
}