import { KeyPressState, KeyState } from "engine/input";

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
    private _keyStates: Map<number, KeyPressState> = new Map();

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

    private _onKeyDown(event: KeyboardEvent) : void {
        const state = this._keyStates.get(event.keyCode);

        if(!state) {
            const newState = new KeyPressState(KeyState.DOWN);
            this._keyStates.set(event.keyCode, newState);
        } else {
            state.set(KeyState.DOWN);
        }
    }

    private _onKeyUp(event: KeyboardEvent) : void {

    }

}