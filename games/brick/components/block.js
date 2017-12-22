import { GameObject } from 'engine/library/objects';
import { Vector } from 'engine/library/maths';
import { Keyboard } from 'engine/library/input';

export class Block extends GameObject {
    getElementDom() {
        const element = document.createElement('div');
        element.classList.add('block');

        return element;
    }

    onUpdate(timestep) {
        
    }
}