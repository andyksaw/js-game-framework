import { SceneGraph } from "engine/library/objects";
import { Collider } from "engine/library/collisions";

export interface Colliderable {
    onCollision(collidingObjs: Collider[]): void;
    onUpdate(timestep: number): void;
}

// base class must have an onUpdate lifecycle hook method since
// we're performing our collision checks after it gets called.
//
// it also must extend the Colliderable interface since that will
// provide the base class with collision data.
type Constructor<T = Colliderable> = new (...args: any[]) => T;

export default function withCollider<T extends Constructor>(Base: T, collider: Collider) {
    return class ColliderObject extends Base {
        private _collider: Collider;

        public constructor(...args: any[]) {
            super(...args);
            this._collider = collider;
            console.log('this gameobject has a collider', collider);
        }

        public getCollider() : Collider {
            return this._collider;
        }

        public onUpdate(timestep: number) {
            super.onUpdate(timestep);

            // TODO: implement QuadTree so we don't have to query every
            // single GameObject in the scene...
            const nearbyGameObjects = SceneGraph.instance.colliders;

            const collidingObjs: Array<Collider> = [];
            nearbyGameObjects.forEach(obj => {
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