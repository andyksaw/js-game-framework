import SceneGraph from "engine/SceneGraph";


/**
 * Desired amount of time in milliseconds between frames
 *
 * @constant {number}
 */
const MS_PER_FRAME: number = 16;

/**
 *  Game speed (1 = normal speed | 0 = not moving)
 * 
 *  @constant {number}
 */
const TIME_STEP: number = 1;

/**
 *  Timestamp of the last rendered frame
 * 
 * @type {number}
 */
let lastTick: number;


/**
 * The main game loop.
 * 
 * Calculates frame stats and passes it to the update
 * and render loop
 */
function gameLoop() : void {
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
 *  Delegates work to every GameObject
 */
function onUpdate(timestep: number) {
    const graph = SceneGraph.instance.getObjects();
    const corpseObjects = [];

    // loop over a buffer so that newly instantiated objects
    // always start execution from the next frame
    const bufferCount = graph.length;
    for(let i = 0; i < bufferCount; i++) {
        const obj = graph[i].object;

        // any objects marked for deletion should not be executed
        if(obj.isDestroying()) {
            corpseObjects.push(obj);
            continue;
        }
        obj.onUpdate(timestep);
    }

    // cleanup any objects marked for deletion
    if(corpseObjects.length > 0) {
        SceneGraph.instance.removeBatch(corpseObjects);
    }
}

/**
 * Renders every visible GameObject to DOM every frame
 */
function onRender() {
    SceneGraph
        .instance
        .getObjects()
        .forEach(obj => obj.render());
}

/**
 * Starts the game loop
 */
let isBooted = false;
export function startGameLoop(startCallback: Function) {
    if(!isBooted) {
        lastTick = Date.now();
        requestAnimationFrame(gameLoop);
        startCallback();
    }
}