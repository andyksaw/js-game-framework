import Transform from "engine/modules/Transform";
import IDestroyable from "engine/modules/IDestroyable";

type Constructor<T extends IDestroyable = IDestroyable> = new(...args: any[]) => T;

/**
 * Supplies a Transform to the given base class.
 * 
 * Base class must implement IDestroyable so that this mixin
 * can clean up its reference on destruction.
 * 
 * @param Base 
 */
export default function withTransform<T extends Constructor>(Base: T) {
    return class Transformable extends Base {
        private _transform: Transform;

        constructor(...args: any[]) {
            super(args);
            this._transform = new Transform();
        }

        get transform() : Transform {
            return this._transform;
        }

        public destroy() : void {
            super.destroy();
            this._transform = null;
        }
    }
}