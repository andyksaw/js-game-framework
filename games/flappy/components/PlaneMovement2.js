import { Component } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Keyboard } from 'engine/library/input';
import { Viewport, Camera } from 'engine/library/screen';

export class PlaneMovement2 extends Component {
    constructor(gameObject) {
        super(gameObject);
    }

    onInstantiate() {
        this._velocity = Vector.origin();
    }

    onUpdate(timestep) {
        let velocity = this._velocity;
        if(Keyboard.getKeyPress(Keyboard.ARROW_LEFT)) {
            velocity = velocity.add(new Vector(-4, 0));
        }
        if(Keyboard.getKeyPress(Keyboard.ARROW_RIGHT)) {
            velocity = velocity.add(new Vector(4, 0));
        }
        if(Keyboard.getKeyPress(Keyboard.ARROW_UP)) {
            velocity = velocity.add(new Vector(0, 4));
        }
        if(Keyboard.getKeyPress(Keyboard.ARROW_DOWN)) {
            velocity = velocity.add(new Vector(0, -4));
        }

        const transform = this.gameObject.getTransform();
        transform.setPosition(transform.getPosition().add(velocity));
    }
}