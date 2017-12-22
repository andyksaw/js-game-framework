/**
 * Handles interaction with the keyboard and retrieving
 * press values
 */
class Keyboard {

    get A() { return 65; }
    get W() { return 87; }
    get S() { return 83; }
    get D() { return 68; }
    get SPACEBAR() { return 32; }
    get ARROW_LEFT() { return 37; }
    get ARROW_UP() { return 38; }
    get ARROW_RIGHT() { return 39; }
    get ARROW_DOWN() { return 40; }


    constructor() {
        this._keyDownValues = new Map();
        this._keyPressComplete = new Map();
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
        const { keyCode } = event;
        this._keyDownValues.set(keyCode, 1);

        if(this._keyPressComplete.get(keyCode) === true) {
            this._keyPressComplete.set(keyCode, 1);
            this._keyPressComplete.set(keyCode, false);
        }
    }

    _onKeyUp = (event) => {
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
    getKeyDown = (keyCode) => {
        const value = this._keyDownValues.get(keyCode);
        return value || 0;
    }

    /**
     * Same as getKeyDown() except toggles the value to 0
     * after listening
     */
    getKeyPress = (keyCode) => {
        const value = this._keyDownValues.get(keyCode);
        if(value > 0) {
            this._keyPressComplete.set(keyCode, 0);
        }
        return value;
    }
}

export default new Keyboard();