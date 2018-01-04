import { Viewport } from 'engine/library/screen';
import { Vector } from 'engine/library/maths';

/**
 * Collection of methods to interact with the HTML canvas
 */
export default class Canvas {
    private static _instance: Canvas;
    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    private _context: any;

    private constructor() {}

    getContext() {
        if(!this._context) {
            const canvas: any = document.getElementById('canvas');
            canvas.width = Viewport.instance.width;
            canvas.height = Viewport.instance.height;

            this._context = canvas.getContext('2d');
        }

        return this._context;
    }

    /**
     * Draws a line on the screen
     * 
     * @param {Vector} vector1 
     * @param {Vector} vector2 
     */
    drawLine(vector1: Vector, vector2: Vector, color = 'green') {
        const c = this.getContext();
        c.beginPath();
        c.moveTo(vector1.x, vector1.y);
        c.lineTo(vector2.x, vector2.y);
        c.strokeStyle = color;
        c.stroke();
    }
}