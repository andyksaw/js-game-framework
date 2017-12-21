import { GameObjectFactory } from 'engine/library/gameObjectFactory';

const objFactory = new GameObjectFactory();

/**
 * Desired amount of time in milliseconds between frames
 *
 * @constant {number}
 */
const MS_PER_FRAME = 16;

/**
 *  Game speed (1 = normal speed | 0 = not moving)
 * 
 *  @constant {number}
 */
const TIME_STEP = 1;

/**
 *  Timestamp of the last rendered frame
 */
let lastTick;


/**
 * The main game loop.
 * 
 * Calculates frame stats and passes it to the update
 * and render loop
 */
function gameLoop() {
    // calculate how much time has actually passed since
    // the last frame and pass it to the update loop
    const currentTick = Date.now();
    const elapsed = currentTick - lastTick;
    const step = (MS_PER_FRAME / elapsed) * TIME_STEP;
    
    onUpdate(step);
    onRender();

    lastTick = currentTick;
    requestAnimationFrame(gameLoop);
}


/**
 *  Delegates work to every game object
 */
function onUpdate(timestep) {
    objFactory.hierarchy.forEach(obj => obj.onUpdate(timestep));
}

/**
 * Renders every visible GameObject to DOM every frame
 */
function onRender() {
    objFactory.hierarchy.forEach(obj => obj.render());
}

/**
 * Starts the game loop
 */
let isBooted = false;
export function bootGameLoop(onStart) {
    if(isBooted) {
        return;
    }
    lastTick = Date.now();
    requestAnimationFrame(gameLoop);
    onStart();
}