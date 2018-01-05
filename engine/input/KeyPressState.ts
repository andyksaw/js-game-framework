export enum KeyState {
    UP,         // key has not been pressed this frame
    DOWN,       // key is currently down
    RELEASED,   // key was released this frame
}

/**
 * State machine to represent a key-input event
 */
export class KeyPressState {
    constructor(private _state: KeyState = KeyState.UP) {}

    get state() : KeyState {
        return this._state;
    }

    /**
     * Returns a numeric representation of the key press
     */
    get value() : number {
        return (this._state === KeyState.DOWN) ? 1 : 0;
    }

    public next() : KeyState {
        switch(this._state) {
            case KeyState.UP:
                return this._state = KeyState.DOWN;
            case KeyState.DOWN:
                return this._state = KeyState.RELEASED;
            case KeyState.RELEASED:
                return this._state = KeyState.UP;
        }
    }

    public set(state: KeyState) : void {
        this._state = state;
    }
}