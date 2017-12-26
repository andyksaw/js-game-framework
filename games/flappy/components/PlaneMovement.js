import { Component } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Keyboard } from 'engine/library/input';
import { Viewport, Camera } from 'engine/library/screen';

export class PlaneMovement extends Component {
    onInstantiate() {
        this._velocity = Vector.origin();
    }

    onUpdate(timestep) {
        // const gravity = new Vector(0, -1);
        // this._velocity = this._velocity.add(gravity);

        // if(Keyboard.getKeyPress(Keyboard.SPACEBAR)) {
        //     this._velocity = new Vector(0, 15);
        // }

        // this._velocity = this._velocity.multiply(timestep);

        // this.transform.position = this.transform.position
        //     .add(this._velocity);


        if(Keyboard.getKeyPress(Keyboard.A)) {
            Camera.transform.position = Camera.transform.position.add(new Vector(-1, 0));
        }
        if(Keyboard.getKeyPress(Keyboard.D)) {
            Camera.transform.position = Camera.transform.position.add(new Vector(1, 0));
        }
        if(Keyboard.getKeyPress(Keyboard.W)) {
            Camera.transform.position = Camera.transform.position.add(new Vector(0, 1));
        }
        if(Keyboard.getKeyPress(Keyboard.S)) {
            Camera.transform.position = Camera.transform.position.add(new Vector(0, -1));
        }
    }
}