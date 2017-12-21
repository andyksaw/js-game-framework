import Vector from 'engine/library/vector';

/**
 * Represents the browser window
 */
export default class Viewport {
    constructor() {
        this._viewportHeight;
        this._viewportWidth;
    }

    static get width() {
        return window.innerWidth;
    }

    static get height() {
        return window.innerHeight;
    }

    static get origin() {
        return new Vector(
            this.width / 2,
            this.height / 2,
        );
    }
}