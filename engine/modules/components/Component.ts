import IDestroyable from "engine/modules/IDestroyable";

export default abstract class Component {
    
    public abstract onInstantiate() : void;
    public abstract onUpdate(timestep: number) : void;
    public abstract onDestroy() : void;    
}