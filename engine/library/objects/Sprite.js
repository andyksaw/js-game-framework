import { Vector } from 'engine/library/maths';

export default class Sprite {
    constructor(origin, config) {
        const {
            assets,
            dimensions = new Vector(),
            offset = new Vector(),
            timing = 150,
        } = config;

        this._assets = assets;
        this._origin = origin;
        this._dimensions = dimensions;
        this._offset = offset;

        if(assets.length > 1) {
            this._frameIndex = 0;
            this._animationTimer = setInterval(this._updateFrame.bind(this), timing);
        }

        this._lastPosition = new Vector();
        this._element = null;

        this._isDirty = true;
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
        element.style.backgroundImage = `url(${this._assets[0]})`;

        document.body.appendChild(element);

        this._element = element;
    }
    
    /**
     * Updates the DOM position of the Sprite
     * 
     * @param {Vector} origin 
     */
    render(origin, scale = 1) {
        const x = origin.x + this._offset.x;
        const y = origin.y + this._offset.y;

        if(x === this._lastPosition.x && y === this._lastPosition.y) {
            return;
        }

        this._element.style.left = x;
        this._element.style.top = -y;   // flip Y because the browser Y is reversed
        this._element.style.width = this._dimensions.x * scale;
        this._element.style.height = this._dimensions.y * scale;
        
        this._origin = origin;
        this._lastPosition = new Vector(x, y);
    }

    _updateFrame() {
        // TODO: update using requestAnimationFrame()
        this._frameIndex = ++this._frameIndex % this._assets.length;
        this._element.style.backgroundImage = `url(${this._assets[this._frameIndex]})`;
    }

    setOffset(value) {
        this._isDirty = true;
    }

    setDimensions(value) {
        this._isDirty = true;
    }

    isDirty() {
        return this._isDirty;
    }

    clean() {
        this._isDirty = false;
    }
}