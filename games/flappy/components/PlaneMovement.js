import { Component } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Keyboard } from 'engine/library/input';
import { Viewport } from 'engine/library/screen';
import { Maths } from 'engine/library/maths';

export class PlaneMovement extends Component {
    onInstantiate() {
        this._velocity = Vector.origin;
    }

    onUpdate(timestep) {
        const transform = this.gameObject.getTransform();
        let pos = transform.getPosition();

        if(Keyboard.getKeyPress(Keyboard.D)) {
            pos = pos.add(new Vector(4, 0));
        }
        if(Keyboard.getKeyPress(Keyboard.A)) {
            pos = pos.add(new Vector(-4, 0));
        }
        if(Keyboard.getKeyPress(Keyboard.W)) {
            pos = pos.add(new Vector(0, 4));
        }
        if(Keyboard.getKeyPress(Keyboard.S)) {
            pos = pos.add(new Vector(0, -4));
        }
        
        transform.setPosition(pos);
    }
}