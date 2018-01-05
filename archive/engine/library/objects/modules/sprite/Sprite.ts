import { Vector } from 'engine/library/maths';
import { BoundingBox } from 'engine/library/objects';
// import { withDirtyFlag } from 'engine/library/objects';

export interface SpriteConfig {
    assets: Array<string>;
    bounds: BoundingBox;
    timing?: number;
}

export class Sprite {

    /**
     * World-space representation of the sprite
     */
    private _boundingBox: BoundingBox;

    /**
     * Array of image paths to draw
     */
    private _assets: Array<string> = [];

    /**
     * The DOM that this sprite represents
     */
    private _element: HTMLDivElement;

    /**
     * Last vector position this sprite was drawn at
     */
    private _lastPosition: Vector = null;

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



    private _isDirty: boolean = true;
    

    constructor(config: SpriteConfig) {
        if(!config.bounds) {
            throw new Error('Sprite instantiation failed: no BoundingBox provided');
        }

        this._boundingBox = config.bounds;
        this._assets = config.assets;

        // if more than one image path is given, treat this sprite as an animated sprite
        if(config.assets && config.assets.length > 1) {
            this._frameIndex = 0;
            this._animationTimer = setInterval(this._updateFrame.bind(this), this._timing);
        }

        this._lastPosition = new Vector();
        this._element = null;
    }

    get bounds() : BoundingBox {
        return this._boundingBox;
    }

    /**
     * Creates the DOM that holds this sprite
     */
    public appendDom() : void {
        const bounds = this._boundingBox;

        const element: HTMLDivElement = document.createElement('div');
        element.classList.add('sprite');
        element.id = `sprite_${new Date().getTime()}`;

        if(this._assets.length > 0) {
            element.style.backgroundImage = `url(${this._assets[0]})`;
            element.style.left = bounds.position.x.toString();
            element.style.top = (-bounds.position.y).toString();   // flip Y because the browser Y is reversed
            element.style.width = (bounds.dimensions.x).toString();
            element.style.height = (bounds.dimensions.y).toString();
        }

        document.body.appendChild(element);

        this._element = element;
    }

    /**
     * Internally sets the draw position of the Sprite
     * 
     * @param origin 
     */
    public setPosition(origin: Vector) : void {
        this._boundingBox.setOrigin(origin);
    }
    
    /**
     * Updates the DOM position of the Sprite
     * 
     * @param {Vector} origin 
     */
    public render(origin: Vector) : void {
        // TODO: move render logic into a SpriteRenderer class
        const bounds = this._boundingBox;
        bounds.setOrigin(origin);
        
        if(
            bounds.position.x === this._lastPosition.x && 
            bounds.position.y === this._lastPosition.y
        ) {
            return;
        }

        this._element.style.left = bounds.position.x.toString();
        this._element.style.top = (-bounds.position.y).toString();   // flip Y because the browser Y is reversed
        this._element.style.width = (bounds.dimensions.x * 1).toString();   // TODO: replace 1 with scaling
        this._element.style.height = (bounds.dimensions.y * 1).toString();  // TODO: replace 1 with scaling
        
        this._lastPosition = bounds.position;
    }

    /**
     * Forces a draw of the next sprite in an animation
     */
    private _updateFrame() : void {
        // TODO: update using requestAnimationFrame()
        this._frameIndex = ++this._frameIndex % this._assets.length;
        this._element.style.backgroundImage = `url(${this._assets[this._frameIndex]})`;
    }


    // TODO: refactor this into mixin
    public clean() {
        this._isDirty = false;
    }
    public dirty() {
        this._isDirty = true;
    }
    public isDirty() : boolean {
        return this._isDirty;
    }
}