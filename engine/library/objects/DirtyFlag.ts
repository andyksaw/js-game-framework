import { Types } from 'engine/internal';

/**
 * Adds a dirty flag to a base class.
 * 
 * A dirty flag in this case is used to determine if 
 * the decorated class needs to be redrawn in the
 * render cycle.
 */
export default function withDirtyFlag<T extends Types.Constructor>(Base: T) {
    return class DirtyFlag extends Base {
        protected _isDirty: boolean = true;

        constructor(...args: any[]) {
            super(...args);
        }
    
        protected clean() : void {
            this._isDirty = false;
        }
        protected dirty() : void {
            this._isDirty = true;
        }
        protected setDirtyFlag(isDirty: boolean) {
            this._isDirty = isDirty;
        }
    
        get isDirty() {
            return this._isDirty;
        }
    }
}