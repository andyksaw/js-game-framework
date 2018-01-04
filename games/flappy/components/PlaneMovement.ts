import { Component } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Keyboard, Key } from 'engine/library/input';
import { Viewport } from 'engine/library/screen';
import { Maths } from 'engine/library/maths';

export class PlaneMovement extends Component {
    private _velocity: Vector = Vector.origin;

    public onInstantiate() : void {
        
    }

    public onUpdate(timestep: number) : void {
        const transform = this.gameObject.getTransform();
        let pos = transform.getPosition();

        const keyboard = Keyboard.instance;

        if(keyboard.getKeyPress(Key.D)) {
            pos = pos.add(new Vector(4, 0));
        }
        if(keyboard.getKeyPress(Key.A)) {
            pos = pos.add(new Vector(-4, 0));
        }
        if(keyboard.getKeyPress(Key.W)) {
            pos = pos.add(new Vector(0, 4));
        }
        if(keyboard.getKeyPress(Key.S)) {
            pos = pos.add(new Vector(0, -4));
        }
        
        transform.setPosition(pos);
    }
}