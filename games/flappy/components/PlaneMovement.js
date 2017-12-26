import { Component } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Keyboard } from 'engine/library/input';
import { Viewport } from 'engine/library/screen';

export class PlaneMovement extends Component {
    onInstantiate() {
        this._velocity = Vector.origin();
    }

    onUpdate(timestep) {
        const gravity = new Vector(0, -1);
        this._velocity = this._velocity.add(gravity);

        if(Keyboard.getKeyPress(Keyboard.SPACEBAR)) {
            this._velocity = new Vector(0, 15);
        }
        // if(Keyboard.getKeyDown(Keyboard.D)) {
        //     this._velocity = this._velocity.add(new Vector(1, 0));
        // }
        // if(Keyboard.getKeyDown(Keyboard.A)) {
        //     this._velocity = this._velocity.add(new Vector(-1, 0));
        // }

        // // clamp max speeds
        // if(this._velocity.y >= 15) {
        //     this._velocity.y = 15;
        // }
        // if(this._velocity.x >= 10) {
        //     this._velocity.x = 10;
        // }
        // if(this._velocity.x < -10) {
        //     this._velocity.x = -10;
        // }

        // // clamp horizontal axis to screen
        // if(this.bounds.left <= 0) {
        //     this.position.x = this.dimensions.x / 2;
        //     this._velocity.x = 0;
        // }
        // if(this.bounds.right >= Viewport.width) {
        //     this.position.x = Viewport.width - (this.dimensions.x / 2);
        //     this._velocity.x = 0;
        // }
        // if(this.bounds.top <= 0) {
        //     this.position.y = this.dimensions.y / 2;
        //     this._velocity.y = 0;
        // }

        // if(this.bounds.right >= Viewport.width || this.bounds.left <= 0) {
        //     this._velocity.x = -this._velocity.x;
        // }
        // if(this.bounds.bottom >= Viewport.height || this.bounds.top <= 0) {
        //     this._velocity.y = -this._velocity.y;
        // }

        this._velocity = this._velocity.multiply(timestep);

        this.transform.position = this.transform.position
            .add(this._velocity);
    }
}