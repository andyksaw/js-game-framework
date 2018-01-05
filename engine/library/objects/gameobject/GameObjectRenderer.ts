import { Transform } from "engine/library/objects";
import { Camera } from "engine/library/screen";
import { Vector } from "engine/library/maths";

/**
 * Renders the given element into screen space
 * 
 * @param element 
 * @param transform 
 * @param camera 
 * 
 * @return {boolean}    Whether a render was performed this frame
 */
export function render(
    element: HTMLDivElement, 
    transform: Transform, 
    camera: Camera,
) : boolean {

    // only redraw when the Transform has actually moved
    if(!transform.isDirty()) {
        return false;
    }

    // the Transform stores our world-space coordinates,
    // but we need to render the object in screen-space
    const worldPos = transform.getPosition();
    const cameraPos = camera.transform.getPosition();

    const screenSpacePos = new Vector(
        worldPos.x - cameraPos.x,
        worldPos.y - cameraPos.y
    );

    element.style.left = screenSpacePos.x + 'px';
    element.style.top  = screenSpacePos.y + 'px';

    transform.clean();

    return true;
}