import { Vector } from 'engine/library/maths';
import { DirtyFlag } from 'engine/library/objects';

export interface SpriteConfig {
    assets: Array<string>;
    dimensions: Vector;
    offset?: Vector;
    timing?: number;
}

export class Sprite implements DirtyFlag {

    /**
     * Position of the parent GameObject
     */
    private _origin: Vector

    /**
     * Distance from the origin the draw position is offset by
     */
    private _offset: Vector;

    /**
     * Size of the sprite's rectangle
     */
    private _dimensions: Vector;

    /**
     * Array of image paths to draw
     */
    private _assets: Array<string>;

    /**
     * The DOM that this sprite represents
     */
    private _element: HTMLDivElement;

    /**
     * Last vector position this sprite was drawn at
     */
    private _lastPosition: Vector;

    /**
     * How many milliseconds between sprite frame changes
     */
    private _timing: number = 150;

    /**
     * Current frame of the asset array to draw
     */
    private _frameIndex: number = 0;

    /**
     * Draw timer
     */
    private _animationTimer: number;


    constructor(origin: Vector, config: SpriteConfig) {
        this._origin = origin;

        this._assets = config.assets;
        this._dimensions = config.dimensions;
        this._offset = config.offset || Vector.origin;

        // if more than one image path is given, treat this sprite as an animated sprite
        if(config.assets.length > 1) {
            this._frameIndex = 0;
            this._animationTimer = setInterval(this._updateFrame.bind(this), this._timing);
        }

        this._lastPosition = new Vector();
        this._element = null;
    }

    /**
     * Creates the DOM that holds this sprite
     */
    public appendDom() : void {
        const element: HTMLDivElement = document.createElement('div');
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
    public render(origin: Vector, scale = 1) : void {
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

    private _updateFrame() : void {
        // TODO: update using requestAnimationFrame()
        this._frameIndex = ++this._frameIndex % this._assets.length;
        this._element.style.backgroundImage = `url(${this._assets[this._frameIndex]})`;
    }

    public setOffset(value: Vector) : void {
        this._isDirty = true;
    }

    public setDimensions(value: Vector) : void {
        this._isDirty = true;
    }
}