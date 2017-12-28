/**
 * Adds a dirty flag to the decorated class. 
 * 
 * A dirty flag in this case is used to determine if 
 * the decorated class needs to be redrawn in the
 * render cycle.
 */
export default class DirtyFlag {
    protected _isDirty: boolean = true;

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