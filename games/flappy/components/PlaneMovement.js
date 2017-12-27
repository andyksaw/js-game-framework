import { Component } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Keyboard } from 'engine/library/input';
import { Viewport, Camera } from 'engine/library/screen';

export class PlaneMovement extends Component {
    constructor(gameObject) {
        super(gameObject);
    }

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

        
        let velocity = this._velocity;
        if(Keyboard.getKeyPress(Keyboard.A)) {
            velocity = velocity.add(new Vector(-3, 0));
        }
        if(Keyboard.getKeyPress(Keyboard.D)) {
            velocity = velocity.add(new Vector(3, 0));
        }
        if(Keyboard.getKeyPress(Keyboard.W)) {
            velocity = velocity.add(new Vector(0, 3));
        }
        if(Keyboard.getKeyPress(Keyboard.S)) {
            velocity = velocity.add(new Vector(0, -3));
        }

        const transform = this.gameObject.getTransform();
        // console.log(transform);
        transform.setPosition(transform.getPosition().add(velocity));
        // this._velocity = velocity;


        let cameraPos = Camera.transform.getPosition();
        if(Keyboard.getKeyPress(Keyboard.ARROW_LEFT)) {
            cameraPos = cameraPos.add(new Vector(-3, 0));
        }
        if(Keyboard.getKeyPress(Keyboard.ARROW_RIGHT)) {
            cameraPos = cameraPos.add(new Vector(3, 0));
        }
        if(Keyboard.getKeyPress(Keyboard.ARROW_UP)) {
            cameraPos = cameraPos.add(new Vector(0, 3));
        }
        if(Keyboard.getKeyPress(Keyboard.ARROW_DOWN)) {
            cameraPos = cameraPos.add(new Vector(0, -3));
        }
        Camera.transform.setPosition(cameraPos);
    }
}