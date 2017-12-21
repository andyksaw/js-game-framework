let instance = null;

/**
 * Handles interaction with the keyboard and retrieving
 * press values
 */
export default class Keyboard {

    constructor() {
        if(instance) {
            return instance;
        }
        instance = this;

        this._keyPressValues = new Map();
        this._setUp();
    }

    _setUp() {
        this._listenKeyDown = window.addEventListener('keydown', this._onKeyDown);
        this._listenKeyUp   = window.addEventListener('keyup', this._onKeyUp);
    }

    _tearDown() {
        window.removeEventListener('keydown', this._listenKeyDown);
        window.removeEventListener('keyup', this._listenKeyUp);
    }

    _onKeyDown = (event) => {
        this._keyPressValues.set(event.key, 1);
    }

    _onKeyUp = (event) => {
        this._keyPressValues.set(event.key, 0);
    }


    /**
     * Gets the current keypress value of the given key
     * (0 = not pressed | 1 = key down)
     * 
     * @param {*} key 
     */
    getKeyDown = (key) => {
        const value = this._keyPressValues.get(key.toLowerCase());
        return value || 0;
    }
}