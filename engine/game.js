'use strict';

import { bootGameLoop } from 'engine/library/gameLoop';

/**
 * Base container for a game. A game should extend this
 * and fill it with game specific logic.
 */
export class Game {

    /**
     * Starts the engine game loop and the game's logic
     */
    initialise() {
        bootGameLoop(this.onStart);
    }

    /**
     * Logic to run once after the main game loop is started
     */
    onStart() {}

}