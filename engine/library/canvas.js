import Viewport from 'engine/library/viewport';

let instance = null;

export default class Canvas {

    constructor() {
        if(instance) {
            return instance;
        }
        instance = this;

        const canvas = document.getElementById('canvas');
        canvas.width = Viewport.width;
        canvas.height = Viewport.height;

        const context = canvas.getContext('2d');
        this._context = context;
    }

    /**
     * Draws a line on the screen
     * 
     * @param {Vector} vector1 
     * @param {Vector} vector2 
     */
    drawLine(vector1, vector2, color = 'green') {
        const c = this._context;
        c.beginPath();
        c.moveTo(vector1.x, vector1.y);
        c.lineTo(vector2.x, vector2.y);
        c.strokeStyle = color;
        c.stroke();
    }

}