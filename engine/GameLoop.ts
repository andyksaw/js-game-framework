import SceneGraph from "engine/SceneGraph";

export default class GameLoop {
    /**
     * Desired amount of time in milliseconds between frames
     */
    private _msPerFrame: number = 16;

    /**
     * Game speed (1 = normal speed | 0 = not moving)
     */
    private _timestep: number = 1;

    /**
     * Timestamp of the last rendered frame
     */
    private _lastTick: number;

    /**
     * Is the loop running already
     */
    private _isBooted: boolean;


    constructor() {
        this._performLoop = this._performLoop.bind(this);
    }


    get timestep() : number {
        return this._timestep;
    }
    get isRunning() : boolean {
        return this._isBooted;
    }

    /**
     * The main game loop.
     * 
     * Calculates frame stats and passes it to the update
     * and render loop
     */
    private _performLoop() : void {
        // calculate how much time has actually passed since
        // the last frame and pass it to the update loop
        const currentTick = Date.now();
        const elapsed = currentTick - this._lastTick;
        const step = (this._msPerFrame / elapsed) * this._timestep;
        
        this._onUpdate(step);
        this._onRender();

        this._lastTick = currentTick;
        requestAnimationFrame(this._performLoop);
    }


    /**
     *  Delegates work to every GameObject
     */
    private _onUpdate(timestep: number) {
        const graph = SceneGraph.instance.getObjects();
        const corpseObjects = [];

        // loop over a buffer so that newly instantiated objects
        // always start execution from the next frame onwards
        const bufferCount = graph.length;
        for(let i = 0; i < bufferCount; i++) {
            const obj = graph[i].object;

            // any objects marked for deletion should not be executed
            // if(obj.isDestroying()) {
            //     corpseObjects.push(obj);
            //     continue;
            // }
            obj.onUpdate(timestep);
        }

        // cleanup any objects marked for deletion
        // if(corpseObjects.length > 0) {
        //     SceneGraph.instance.removeBatch(corpseObjects);
        // }
    }

    /**
     * Renders every visible GameObject to DOM every frame
     */
    private _onRender() {
        SceneGraph.instance.getObjects().forEach(
            obj => obj.object.onRender()
        );
    }

    /**
     * Starts the game loop
     * 
     * @param startCallback     Logic to perform immediately after
     *                          the game loop has started
     */
    public startGameLoop(startCallback: Function) {
        if(!this._isBooted) {
            this._lastTick = Date.now();
            requestAnimationFrame(this._performLoop);
            startCallback();
        }
    }   
}