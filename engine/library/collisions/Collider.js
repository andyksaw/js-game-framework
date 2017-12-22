/**
 * High-order component that wraps around a GameObject
 * to provide it with collision detection hooks.
 * 
 * This component is merely an interface for actual colliders
 * (box, circle, etc) to extend.
 * 
 * @param {GameObject} GameObjectParent 
 */
export const wrap = (gameObject) => class Collider extends gameObject {
    onUpdate(timestep) {
        this._checkCollisions(timestep);
        console.log(gameObject);
        super.onUpdate(timestep);
    }

    _checkCollisions() {
        console.log('checking collisions');
    }
}
