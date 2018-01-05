import { Colliderable } from "engine/library/objects/modules/collisions/Colliderable";
import SceneGraph from "engine/library/SceneGraph";

// base class must have an onUpdate lifecycle hook method since
// we're performing our collision checks after it gets called.
//
// it also must extend the Colliderable interface since that will
// provide the base class with collision data.
type Constructor<T = Colliderable> = new (...args: any[]) => T;

export default function withCollider<T extends Constructor>(Base: T, collider: Collider) {
    return class ColliderableGameObject extends Base {
        private _collider: Collider;

        public constructor(...args: any[]) {
            super(...args);
            this._collider = collider;
        }

        public getCollider() : Collider {
            return this._collider;
        }

        public onUpdate(timestep: number) {
            super.onUpdate(timestep);

            const colliderPos = super.getTransform().getPosition();
            this._collider.setPosition(colliderPos);

            // TODO: implement QuadTree so we don't have to query every
            // single GameObject in the scene...
            const nearbyGameObjects = SceneGraph.instance.colliders;

            const collidingObjs: Array<Collider> = [];
            nearbyGameObjects.forEach(obj => {
                // if(
                //     obj instanceof GameObject && 
                //     this instanceof GameObject &&
                //     obj.getName() === this.getName()
                // ) {
                //     return;
                // }

                if(this._collider.collidesWith(obj)) {
                    collidingObjs.push(obj);
                }
            });

            if(collidingObjs.length > 0) {
                super.onCollision(collidingObjs);
            }
        }
    }
}