import { Vector } from 'engine/library/maths';

export default class Sprite {
    constructor(origin, config) {
        const {
            asset,
            dimensions = new Vector(),
            offset = new Vector(),
        } = config;

        this._asset = asset;
        this._origin = origin;
        this._dimensions = dimensions;
        this._offset = offset;

        this._lastPosition = new Vector();
        this._element = null;
    }

    /**
     * Creates the DOM that holds this sprite
     */
    appendDom() {
        const element = document.createElement('div');
        element.classList.add('sprite');
        element.id = `sprite_${new Date().getTime()}`;
        element.style.width = this._dimensions.x;
        element.style.height = this._dimensions.y;
        element.style.left = this._origin.x;
        element.style.top = this._origin.y;
        element.style.backgroundImage = `url(${this._asset})`;

        document.body.appendChild(element);

        this._element = element;
    }
    
    /**
     * Updates the DOM position of the Sprite
     * 
     * @param {Vector} origin 
     */
    render(origin) {
        const x = origin.x + this._offset.x;
        const y = origin.y + this._offset.y;

        if(x === this._lastPosition.x && y === this._lastPosition.y) {
            return;
        }

        this._element.style.left = x;
        this._element.style.top = -y;   // flip Y because the browser Y is reversed
        
        this._origin = origin;
        this._lastPosition = new Vector(x, y);
    }
}