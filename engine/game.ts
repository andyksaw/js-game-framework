
import { startGameLoop } from 'engine/library/GameLoop';
// import { Camera } from 'engine/library/screen';
// import { Vector } from 'engine/library/maths';

/**
 * Base container for a game. A game should extend this
 * and fill it with game specific logic.
 */
export class Game {

    /**
     * Starts the engine game loop and the game's logic
     */
    initialise() {
        // Camera.instance.transform.setPosition(new Vector(0, 0));
        startGameLoop(this.onStart);
    }

    /**
     * Logic to run once after the main game loop is started
     */
    onStart() {}

}