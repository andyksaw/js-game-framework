import Vector from 'engine/library/vector';
import BoundingBox from 'engine/library/boundingBox';

/**
 * Represents an object in the scene
 * 
 * @param {string} id           Unique identifier
 * @param {Vector} dimensions   Size of the object in 2d space
 * @param {Vector} position     Starting position of the object
 */
export class GameObject {
    constructor(id, dimensions, position = null) {
        this._id = id;
        this._dimensions = dimensions;
        this._position = position || new Vector(0, 0);
        this._isVisible = true;

        // child GameObjects of this GameObject
        this._children = [];

        this._boundingBox = new BoundingBox(position, dimensions);
    }

    get position() {
        return this._position;
    }
    set position(vector) {
        const difference = vector.subtract(this._position);
        this._position = vector;
        
        // update bounding box position
        this._boundingBox.updatePosition(vector);
        
        // move any children along with this object
        this._children.forEach(child => {
            console.log(child);
            child.position = child.position.add(difference);
        });
    }
    get visible() {
        return this._isVisible;
    }
    get name() {
        return this._id;
    }
    get element() {
        return this._element;
    }
    get bounds() {
        return this._boundingBox;
    }
    get dimensions() {
        return this._dimensions;
    }

    addChild(gameObject) {
        this._children.push(gameObject);
        console.log(this);
    }

    insertDom() {
        const element = this.getElementDom();
        if(element) {
            element.classList.add('gameObject');
            this._element = element;
            document.body.appendChild(element);
        }

        this.onInstantiate();
    }

    /**
     * If a DOM element is returned from this method, the element
     * is stored in the GameObject and used as its sprite.
     */
    getElementDom() {}

    /**
     * Logic to run when the object is first instantiated.
     */
    onInstantiate() {}

    /**
     * Logic to run when the object is destroyed
     */
    onDestroy() {}

    /**
     * Sets the visibility of the object. Setting to false
     * effectively sets 'display: none' css
     * 
     * @param {boolean} isVisible 
     */
    setVisibility(isVisible) {
        if(this._isVisible != isVisible) {
            this._element.style.display = isVisible ? 'none' : 'hidden';
        }
        this._isVisible = isVisible;
    }

    /**
     * Renders the object in world space each game loop frame
     */
    render() {
        if(!this._isVisible) {
            return;
        }

        // since we're using the Vector position as the centre pivot,
        // we need to add half of the size to all sides
        this._element.style.left   = this._position.x - (this._dimensions.x / 2);
        this._element.style.top    = this._position.y - (this._dimensions.y / 2);

        this._element.style.width = this._dimensions.x;
        this._element.style.height = this._dimensions.y;
    }
}