/**
 * Represents a keyboard key
 */
export enum Key {
    A = 65,
    W = 87,
    S = 83,
    D = 68,
    SPACEBAR = 32,
    ARROW_LEFT = 37,
    ARROW_UP = 38,
    ARROW_RIGHT = 39,
    ARROW_DOWN = 40,
}

/**
 * Represents key press, key down, etc event data
 */
interface KeyboardEvent {
    keyCode: number;
}

/**
 * Handles interaction with the keyboard and retrieving
 * press values
 */
export class Keyboard {
    private readonly _keyDownValues: Map<Key, number> = new Map();
    private readonly _keyPressComplete: Map<Key, boolean> = new Map();

    /**
     * Singleton since we only want one local Keyboard to exist
     */
    private static _instance: Keyboard;
    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    private constructor() {
        window.addEventListener('keydown', this._onKeyDown.bind(this));
        window.addEventListener('keyup', this._onKeyUp.bind(this));
    }

    public destroy() {
        window.removeEventListener('keydown', this._onKeyDown.bind(this));
        window.removeEventListener('keyup', this._onKeyUp.bind(this));
    }

    /**
     * Handles key down events
     * 
     * @param {KeyboardEvent} event 
     */
    private _onKeyDown(event: KeyboardEvent) : void {
        const { keyCode } = event;
        this._keyDownValues.set(keyCode, 1);

        if(this._keyPressComplete.get(keyCode)) {
            this._keyDownValues.set(keyCode, 1);
            this._keyPressComplete.set(keyCode, false);
        }
    }

    /**
     * Handles key up events
     * 
     * @param {KeyboardEvent} event 
     */
    private _onKeyUp(event: KeyboardEvent) : void {
        const { keyCode } = event;
        this._keyDownValues.set(keyCode, 0);
        this._keyPressComplete.set(keyCode, true);
    }


    /**
     * Gets the current keypress value of the given key
     * (0 = not pressed | 1 = key down)
     * 
     * @param {*} key 
     */
    public getKeyDown(keyCode: Key) : number {
        const value = this._keyDownValues.get(keyCode);
        return value || 0;
    }

    /**
     * Same as getKeyDown() except toggles the value to 0
     * after listening
     */
    public getKeyPress(keyCode: Key) : number {
        const value = this._keyDownValues.get(keyCode);
        if(value > 0) {
            this._keyPressComplete.set(keyCode, false);
        }
        return value;
    }
}