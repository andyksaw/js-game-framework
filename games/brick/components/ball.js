import { GameObject } from 'engine/library/gameObject';
import Vector from 'engine/library/vector';
import Keyboard from 'engine/library/keyboard';
import { random } from 'engine/utility/utility.js';
import Viewport from 'engine/library/viewport';

export class Ball extends GameObject {
    getElementDom() {
        const element = document.createElement('div');
        element.id = 'ball';

        return element;
    }

    onInstantiate() {
        this._velocity = new Vector(random(-4, 4), 4);
    }

    onUpdate(timestep) {
        this._velocity = Vector.origin;
        
        this.position = this.position.add(this._velocity);

        if(this.bounds.right >= Viewport.width || this.bounds.left <= 0) {
            this._velocity.x = -this._velocity.x;
        }
        if(this.bounds.bottom >= Viewport.height || this.bounds.top <= 0) {
            this._velocity.y = -this._velocity.y;
        }
    }
}