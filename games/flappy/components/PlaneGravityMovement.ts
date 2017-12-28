import { Component } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Keyboard } from 'engine/library/input';
import { Viewport } from 'engine/library/screen';
import { Maths } from 'engine/library/maths';

export class PlaneMovement extends Component {
    private _velocity: Vector = Vector.origin;

    protected onInstantiate() : void {

    }

    protected onUpdate(timestep: number) : void {
        const gravity = new Vector(0, -1);
        this._velocity = this._velocity.add(gravity);

        // take in keyboard input
        if(Keyboard.getKeyPress(Keyboard.SPACEBAR)) {
            this._velocity = new Vector(this._velocity.x, 10);
        }
        if(Keyboard.getKeyPress(Keyboard.D)) {
            this._velocity = this._velocity.add(new Vector(1, 0));
        }
        if(Keyboard.getKeyPress(Keyboard.A)) {
            this._velocity = this._velocity.add(new Vector(-1, 0));
        }

        // set max speeds
        this._velocity = new Vector(
            Maths.clamp(this._velocity.x, -3.5, 3.5),
            Math.max(this._velocity.y, -10)
        );

        this._velocity = this._velocity.multiply(timestep);

        const transform = this.gameObject.getTransform();
        const newPos = transform.getPosition().add(this._velocity);
        transform.setPosition(newPos);
    }
}