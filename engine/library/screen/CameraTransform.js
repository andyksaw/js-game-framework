import { Transform, SceneGraph } from 'engine/library/objects';

/**
 * Wrapper for the camera's Transform to provide extra functionality
 */
export default class CameraTransform extends Transform {
    setPosition(value) {
        // since we need to redraw everything when the camera moves,
        // set everything in the viewport as 'dirty'

        // TODO: viewport culling
        // SceneGraph.hierarchy.forEach(obj => obj.getTransform().dirty());

        super.setPosition(value);
    }
}