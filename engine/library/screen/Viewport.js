import { Vector } from 'engine/library/maths';

/**
 * Represents the browser window
 */
class Viewport {
    constructor(viewportWidth = 800, viewportHeight = 400) {
        this._browserHeight = 0;
        this._browserWidth = 0;
        this._recalculateScreen();

        window.addEventListener('resize', this._recalculateScreen.bind(this));
    }

    get width() {
        return this._browserWidth;
    }

    get height() {
        return this._browserHeight;
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

    _recalculateScreen() {
        this._browserHeight = window.innerHeight;
        this._browserWidth  = window.innerWidth;
    }
}

export default new Viewport();