import { GameObject } from 'engine/library/gameObject';
import Vector from 'engine/library/vector';
import Keyboard from 'engine/library/keyboard';

export class Block extends GameObject {
    getElementDom() {
        const element = document.createElement('div');
        element.classList.add('block');

        return element;
    }

    onUpdate(timestep) {
        
    }
}