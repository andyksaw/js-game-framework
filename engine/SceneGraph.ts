
/**
 * Data stored inside the SceneGraph for each object in the scene
 */
interface TrackedObject {
    id: string;
    object: GameObject;
}

/**
 * Handles instantiation, destruction and management of all GameObjects
 */
export default class SceneGraph {

    // singleton because we should never have more than one SceneGraph
    private static _instance: SceneGraph;
    public static get instance() : SceneGraph {
        return this._instance || (this._instance = new this());
    }
    private constructor() {}


    /**
     * List of unique identifiers of GameObjects
     */
    private readonly _ids: Set<string> = new Set();

    /**
     * Ordered list of GameObjects in the scene
     */
    private readonly _objects: Array<TrackedObject> = [];


    public getObjects() : Array<TrackedObject> {
        return this._objects;
    }

    /**
     * Inserts a GameObject onto the end of the object hierarchy
     * 
     * @param id        Unique identifier
     * @param object    GameObject to insert
     */
    public add(id: string, object: GameObject) {
        if(!id) {
            throw new Error('SceneGraph insert failed: id is required');
        }
        if(!object) {
            throw new Error('SceneGraph insert failed: no GameObject given');
        }
        if(this._ids.has(id)) {
            throw new Error(`SceneGraph insert failed: duplicate id [${id}]`);
        }

        this._ids.add(id);
        this._objects.push({ id, object });
    }

    /**
     * Removes a GameObject from the hierarchy
     * 
     * @param id    Unique identifier of the object to remove
     */
    public remove(id: string) {
        if(!id) {
            throw new Error('SceneGraph remove failed: no id given');
        }
        if(!this._ids.has(id)) {
            throw new Error('SceneGraph remove failed: object not found in the hierarchy');
        }
        
        this._ids.delete(id);
        this._objects = this._objects.filter(obj => obj.id !== id);
    }
    
}