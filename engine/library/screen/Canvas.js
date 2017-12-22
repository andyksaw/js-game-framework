import { Viewport } from 'engine/library/screen';

class Canvas {
    getContext() {
        if(!this._context) {
            const canvas = document.getElementById('canvas');
            canvas.width = Viewport.width;
            canvas.height = Viewport.height;

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
    drawLine(vector1, vector2, color = 'green') {
        const c = this.getContext();
        c.beginPath();
        c.moveTo(vector1.x, vector1.y);
        c.lineTo(vector2.x, vector2.y);
        c.strokeStyle = color;
        c.stroke();
    }
}

export default new Canvas();