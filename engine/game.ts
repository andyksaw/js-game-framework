
import { default as GameLoop } from 'engine/GameLoop';
import { Camera } from 'engine/modules/viewport';
import { Vector } from 'engine/maths';

/**
 * Base container for a game. A game should extend this
 * and fill it with game specific logic.
 */
export abstract class Game {

    /**
     * The one and only game loop.
     */
    private _gameLoop: GameLoop = new GameLoop();

    constructor() {
        // run the game as soon as a game class is instantiated
        this.initialise();
    }

    /**
     * Starts the engine game loop and the game's logic
     */
    private initialise() : void {
        const camera = Camera.getMain();
        camera.transform.setPosition(Vector.origin);

        this._gameLoop.startGameLoop(this.onStart);
    }

    /**
     * Logic to run once after the main game loop is started
     */
    protected abstract onStart() : void;

}