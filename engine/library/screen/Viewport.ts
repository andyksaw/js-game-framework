import { Vector } from 'engine/library/maths';

/**
 * Represents the browser window
 */
export default class Viewport {

    // singleton because we don't want more than one browser resize event listener
    private static _instance: Viewport;
    public static get instance() : Viewport {
        return this._instance || (this._instance = new this());
    }

    private _browserHeight: number;
    private _browserWidth: number;

    private constructor(
        private viewportWidth: number = 800, 
        private viewportHeight: number = 400
    ) {
        this._recalculateScreen();
        window.addEventListener('resize', this._recalculateScreen.bind(this));
    }

    get width() : number {
        return this._browserWidth;
    }
    get height() : number {
        return this._browserHeight;
    }
    get screen() : Vector {
        return new Vector(this.width, this.height);
    }
    get origin() : Vector {
        return new Vector(
            this.width / 2,
            this.height / 2,
        );
    }

    /**
     * Re-cache the size of the browser window to prevent reflows/relayouts
     */
    _recalculateScreen() : void {
        // TODO: execute only during requestAnimationFrame
        this._browserHeight = window.innerHeight;
        this._browserWidth  = window.innerWidth;
    }
}