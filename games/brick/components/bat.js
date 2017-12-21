import { GameObject } from 'engine/library/gameObject';
import Vector from 'engine/library/vector';
import Keyboard from 'engine/library/keyboard';
import Viewport from 'engine/library/viewport';

export class Bat extends GameObject {
    _boxDirection = 1;
    
    getElementDom() {
        const element = document.createElement('div');
        element.id = 'bat';

        return element;
    }

    onUpdate(timestep) {
        const keyboard = new Keyboard();

        const leftPress = keyboard.getKeyDown('a');
        const rightPress = keyboard.getKeyDown('d');

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

        if(this.bounds.left < 0) {
            this.position.x = this.dimensions.x / 2;
        }
        if(this.bounds.right > Viewport.width) {
            this.position.x = Viewport.width - this.dimensions.x / 2;
        }
    }
}