import withTransform from "engine/modules/Transformable";
import IDestroyable from "engine/modules/IDestroyable";
import Component from "engine/modules/components/Component";
import { getReturnTypeOf } from "engine/internal/mixins";

/**
 * Represents an object in the scene
 */
class GameObjectClass implements IDestroyable {

    private _isDestroying: boolean;
    private _isDisabled: boolean;
    private _isVisible: boolean = true;

    private _components: Array<Component> = [];


    constructor(

    ) {}

    get isDestroying() {
        return this._isDestroying;
    }
    get isDisabled() {
        return this._isDisabled;
    }
    get isVisible() {
        return this._isVisible;
    }

    public destroy() : void {
        this._isDestroying = true;

        this._components.forEach(c => c.onDestroy());
    }

    public onUpdate(timestep: number) : void {
        this._components.forEach(c => c.onUpdate(timestep));
    }

    public onRender() : void {
        
    }

    /**
     * Immediately adds a component to this GameObject.
     * 
     * Adding a component anytime other than during construction
     * of this GameObject may yield unpredictable results.
     * 
     * @param component 
     */
    public addComponent(component: Component) : void {
        this._components.push(component);
        component.onInstantiate();
    }

}

export const GameObject = withTransform(GameObjectClass);

// export the Type as well so we can use this
// as a property type (see internal/mixins)
const returnType = getReturnTypeOf(GameObject);
export type GameObjectType = typeof returnType;