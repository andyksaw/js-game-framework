import { GameObject } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Keyboard } from 'engine/library/input';
import { Viewport } from 'engine/library/screen';

export class Bat extends GameObject {
    onInstantiate() {
        this._boxDirection = 1;
    }
    
    getElementDom() {
        const element = document.createElement('div');
        element.id = 'bat';

        return element;
    }

    onUpdate(timestep) {
        // input handlers
        const leftPress  = Keyboard.getKeyDown('a');
        const rightPress = Keyboard.getKeyDown('d');

        let speed = 10;
        let velocity = new Vector(0, 0);
        if(leftPress > 0) {
            velocity = new Vector(-speed, 0);
        }
        if(rightPress > 0) {
            velocity = new Vector(speed, 0);
        }
        velocity = velocity.multiply(timestep);


        this.position = this.position.add(velocity);

        // don't let the bat escape the screen
        if(this.bounds.left < 0) {
            this.position.x = this.dimensions.x / 2;
        }
        if(this.bounds.right > Viewport.width) {
            this.position.x = Viewport.width - this.dimensions.x / 2;
        }
    }
}