import { Vector } from 'engine/library/maths';

/**
 * Represents the browser window
 */
class Viewport {
    constructor() {
        this._viewportHeight;
        this._viewportWidth;
    }

    get width() {
        return window.innerWidth;
    }

    get height() {
        return window.innerHeight;
    }

    get screen() {
        return new Vector(this.width, this.height);
    }

    get origin() {
        return new Vector(
            this.width / 2,
            this.height / 2,
        );
    }
}

export default new Viewport();