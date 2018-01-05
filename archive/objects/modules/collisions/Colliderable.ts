import { Transform } from "engine/library/objects";
import { GameObject } from "engine/library/objects";
import SceneGraph from "engine/library/SceneGraph";

/**
 * An interface for any object that allows listening to 
 * collision events (eg. GameObjects)
 */
export default interface Colliderable extends GameObject {
    onCollision(collidingObjs: Collider[]): void;
    onUpdate(timestep: number): void;
    getTransform(): Transform;
}
