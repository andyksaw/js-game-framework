/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Vector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Maths__ = __webpack_require__(11);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Maths__; });





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoundingBox__ = __webpack_require__(6);
/* unused harmony reexport BoundingBox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Component__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DirtyFlag__ = __webpack_require__(8);
/* unused harmony reexport DirtyFlag */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GameObject__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__GameObject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SceneGraph__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__SceneGraph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Sprite__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__Sprite__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Transform__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__Transform__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Collider__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Collider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Collider__);
/* unused harmony reexport addColliderTo */










/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Camera__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Camera__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Canvas__ = __webpack_require__(13);
/* unused harmony reexport Canvas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Viewport__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Viewport__["a"]; });




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_game__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PlaneMovement__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_SceneManager__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_engine_library_maths__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_engine_library_collisions_colliders__ = __webpack_require__(23);






class FlappyGame extends __WEBPACK_IMPORTED_MODULE_0_engine_game__["a" /* Game */] {
    onStart() {
        const sceneManager = __WEBPACK_IMPORTED_MODULE_3_engine_library_objects__["c" /* SceneGraph */].instantiate('sceneManager', {
            components: [
                __WEBPACK_IMPORTED_MODULE_2__components_SceneManager__["a" /* SceneManager */],
            ],
        });
        const planeRed = __WEBPACK_IMPORTED_MODULE_3_engine_library_objects__["c" /* SceneGraph */].instantiate('plane', {
            position: new __WEBPACK_IMPORTED_MODULE_4_engine_library_maths__["b" /* Vector */](50, -50),
            collider: __WEBPACK_IMPORTED_MODULE_5_engine_library_collisions_colliders__["a" /* BoxCollider */],
            sprite: {
                assets: [
                    'assets/images/planeRed1.png',
                ],
                // timing: 150,
                dimensions: new __WEBPACK_IMPORTED_MODULE_4_engine_library_maths__["b" /* Vector */](50, 50),
            },
            components: [
                __WEBPACK_IMPORTED_MODULE_1__components_PlaneMovement__["a" /* PlaneMovement */],
            ],
        });
    }
}
const game = new FlappyGame();
game.initialise();


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_GameLoop__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_screen__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_engine_library_maths__ = __webpack_require__(0);






/**
 * Base container for a game. A game should extend this
 * and fill it with game specific logic.
 */
class Game {

    /**
     * Starts the engine game loop and the game's logic
     */
    initialise() {
        __WEBPACK_IMPORTED_MODULE_1_engine_library_screen__["a" /* Camera */].transform.position = new __WEBPACK_IMPORTED_MODULE_2_engine_library_maths__["b" /* Vector */](0, 0);
        Object(__WEBPACK_IMPORTED_MODULE_0_engine_library_GameLoop__["a" /* bootGameLoop */])(this.onStart);
    }

    /**
     * Logic to run once after the main game loop is started
     */
    onStart() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bootGameLoop;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);


/**
 * Desired amount of time in milliseconds between frames
 *
 * @constant {number}
 */
const MS_PER_FRAME = 16;

/**
 *  Game speed (1 = normal speed | 0 = not moving)
 * 
 *  @constant {number}
 */
const TIME_STEP = 1;

/**
 *  Timestamp of the last rendered frame
 * 
 * @type {number}
 */
let lastTick;


/**
 * The main game loop.
 * 
 * Calculates frame stats and passes it to the update
 * and render loop
 */
function gameLoop() {
    // calculate how much time has actually passed since
    // the last frame and pass it to the update loop
    const currentTick = Date.now();
    const elapsed = currentTick - lastTick;
    const step = (MS_PER_FRAME / elapsed) * TIME_STEP;
    
    onUpdate(step);
    onRender();

    lastTick = currentTick;
    requestAnimationFrame(gameLoop);
}


/**
 *  Delegates work to every game object
 */
function onUpdate(timestep) {
    const hierarchy = __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["c" /* SceneGraph */].hierarchy;
    const corpseObjects = [];

    // loop over a buffer so that newly instantiated objects
    // always start execution from the next frame
    const bufferCount = hierarchy.length;
    for(let i = 0; i < bufferCount; i++) {
        const obj = hierarchy[i];

        // any objects marked for deletion should not be executed
        if(obj.isDestroying()) {
            corpseObjects.push(obj);
            continue;
        }
        obj.onUpdate(timestep);
    }

    // cleanup any objects marked for deletion
    if(corpseObjects.length > 0) {
        __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["c" /* SceneGraph */].removeBatch(corpseObjects);
    }
}

/**
 * Renders every visible GameObject to DOM every frame
 */
function onRender() {
    __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["c" /* SceneGraph */]
        .hierarchy
        .forEach(obj => obj.render());
}

/**
 * Starts the game loop
 */
let isBooted = false;
function bootGameLoop(onStart) {
    if(isBooted) {
        return;
    }
    lastTick = Date.now();
    requestAnimationFrame(gameLoop);
    onStart();
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Represents a rectangle in world-space
 */
class BoundingBox {
    constructor(origin, offset, dimensions) {
        this._origin = origin;
        this._offset = offset;
        this._dimensions = dimensions;
    }

    get position() {
        return this._origin.add(this._offset);
    }
    get left() {
        return this.position.x - (this._dimensions.x / 2);
    }
    get right() {
        return this.position.x + (this._dimensions.x / 2);
    }
    get top() {
        return this.position.y + (this._dimensions.y / 2);
    }
    get bottom() {
        return this.position.y - (this._dimensions.y / 2);
    }
}
/* unused harmony export default */


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * An interface for interacting with a GameObject. This is
 * where almost all the custom game code should live.
 *
 * A component should be instantiated and attached to a
 * GameObject when the GameObject is created.
 */
class Component {
    constructor(gameObject) {
        this._gameObject = gameObject;
    }
    /**
     * Gets the transform for the GameObject of this component
     *
     * @return {Transform}
     */
    get transform() {
        return this._gameObject.getTransform();
    }
    /**
     * Gets the sprite for the GameObject of this component
     *
     * @return {Sprite}
     */
    get sprite() {
        return this._gameObject.getSprite();
    }
    /**
     * Gets the GameObject this component belongs to
     *
     * @return {GameObject}
     */
    get gameObject() {
        return this._gameObject;
    }
    /**
     * Logic to run when the object is first instantiated.
     */
    onInstantiate() { }
    /**
     * Logic to run every game loop frame
     */
    onUpdate(timestep) { }
    /**
     * Logic to run when the object is destroyed
     */
    onDestroy() { }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Adds a dirty flag to the decorated class.
 *
 * A dirty flag in this case is used to determine if
 * the decorated class needs to be redrawn in the
 * render cycle.
 */
class DirtyFlag {
    constructor() {
        this._isDirty = true;
    }
    clean() {
        this._isDirty = false;
    }
    dirty() {
        this._isDirty = true;
    }
    setDirtyFlag(isDirty) {
        this._isDirty = isDirty;
    }
    get isDirty() {
        return this._isDirty;
    }
}
/* unused harmony export default */



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_engine_library_screen__ = __webpack_require__(2);




/**
 * Represents an object in the scene
 */
class GameObject {
    /**
     * Creates a new GameObject
     * 
     * @param {string} id           Unique identifier
     * @param {Vector} position     Starting position of the object
     */
    constructor(id, position = null) {
        this._id = id;
        this._isVisible = true;
        this._isDestroying = false;
        this._isDisabled = false;
        
        this._components = [];
        this._sprite = null;
        
        this._transform = new __WEBPACK_IMPORTED_MODULE_1_engine_library_objects__["e" /* Transform */](position);
    }

    /**
     * @return {Transform}
     */
    getTransform() {
        return this._transform;
    }

    /**
     * @return {Sprite}
     */
    getSprite() {
        return this._sprite;
    }
    
    /**
     * Returns the unique identifier string of this GameObject
     * 
     * @return {string}
     */
    getName() {
        return this._id;
    }

    /**
     * Returns the DOM element that represents this GameObject
     * 
     * @return {HTMLNode}
     */
    getElement() {
        return this._element;
    }

    /**
     * Returns whether the object is visible (but still executing
     * its update loop)
     * 
     * @return {boolean}
     */
    isVisible() {
        return this._isVisible;
    }
    
    /**
     * Returns whether the object will be destroyed next frame
     * 
     * @return {boolean}
     */
    isDestroying() {
        return this._isDestroying;
    }

    /**
     * Returns whether the object is disabled (ie. not executing
     * its update loop and rendering)
     * 
     * @return {boolean}
     */
    isDisabled() {
        return this._isDisabled;
    }

    /**
     * Injects this GameObject's DOM element into the document body
     * 
     * @param {string} id 
     */
    createDom(id, zIndex = 0) {
        const element = document.createElement('div');
        element.id = id;
        element.classList.add('gameObject');

        if(zIndex !== 0) {
            element.style.zIndex = zIndex;
        }

        document.body.appendChild(element);
        this._element = element;

        this.onInstantiate();
    }

    /**
     * Adds a component that hooks into this GameObject's lifecycle
     * 
     * @param {Component} component 
     */
    addComponent(component) {
        this._components.push(component);
    }

    /**
     * Sets the Sprite that represents this GameObject. If no Sprite is
     * set, nothing will happen in the render cycle for this object.
     * 
     * @param {object} config 
     */
    setSprite(config = {}) {
        this._sprite = new __WEBPACK_IMPORTED_MODULE_1_engine_library_objects__["d" /* Sprite */](this._transform.getPosition(), config);
        this._sprite.appendDom();
    }
     
    /**
     * Sets this GameObject as the child of the given GameObject. In other
     * words, it will move, scale and rotate relatively whenever the parent does.
     * 
     * @param {GameObject} gameObject 
     */
    setParent(gameObject) {
        this._transform.setParent(gameObject.getTransform());
        gameObject.getTransform().addChild(this._transform);
    }

    /**
     * Sets the visibility of the object. Setting to false
     * effectively sets 'display: none' css
     * 
     * @param {boolean} isVisible 
     */
    setVisibility(isVisible) {
        if(this._isVisible != isVisible) {
            this._element.style.display = isVisible ? 'none' : 'hidden';
            this._isVisible = isVisible;
        }
    }

    /**
     * Sets whether the object is disabled.
     * 
     * In a disabled state, the object neither renders nor
     * executes its update loop.
     * 
     * @param {boolean} isDisabled 
     */
    setDisabled(isDisabled) {
        this._isDisabled = isDisabled;
        this._element.style.display = isDisabled ? 'none' : 'hidden';
    }

    /**
     * Marks the object for destruction at the end of the frame.
     * Furthermore, the object will not execute its update loop if 
     * it hasn't already executed it yet.
     */
    destroy() {
        this._isDestroying = true;
        this.onDestroy();
    }

    /**
     * Calls onInstantiate() on all components on this GameObject
     */
    onInstantiate() {
        this._components.forEach(c => c.onInstantiate());
    }

    /**
     * Calls onDestroy() on all components on this GameObject
     */
    onDestroy() {
        this._components.forEach(c => c.onDestroy());
    }

    /**
     * Calls onUpdate() on all components on this GameObject
     */
    onUpdate(timestep) {
        if(this._isDisabled || this._isDestroying) {
            return;
        }
        this._components.forEach(c => c.onUpdate(timestep));
    }

    /**
     * Renders the object in world space each game loop frame
     */
    render() {
        if(!this._isVisible || this._isDisabled || this._isDestroying) {
            return;
        }
        
        let screenSpacePos = null;
        let isTransformDirty = false;
        
        // only redraw when the Transform has actually moved
        if(this._transform.isDirty()) {
            // the Transform stores our world-space coordinates,
            // but we need to render the object in screen-space
            screenSpacePos = this._getScreenPosition();

            this._element.style.left = screenSpacePos.x;
            this._element.style.top  = screenSpacePos.y;

            this._transform.clean();

            isTransformDirty = true;
        }

        // only redraw the sprite if the Sprite or Transform has moved
        if(this._sprite && (isTransformDirty || this._sprite.isDirty())) {
            screenSpacePos = screenSpacePos || this._getScreenPosition();

            this._sprite.render(screenSpacePos);
            this._sprite.clean();
        }

    }

    _getScreenPosition() {
        const position = this._transform.getPosition();
        const cameraPos = __WEBPACK_IMPORTED_MODULE_2_engine_library_screen__["a" /* Camera */].transform.getPosition();
        
        return new __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["b" /* Vector */](
            position.x - cameraPos.x,
            position.y - cameraPos.y
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameObject;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__ = __webpack_require__(0);

/**
 * Represents a coordinate in 2D space
 */
class Vector {
    constructor(_x = 0, _y = 0) {
        this._x = _x;
        this._y = _y;
    }
    /**
     *  Returns the x-coordinate
     *
     *  @return {number}
     */
    get x() {
        return this._x;
    }
    /**
     *  Returns the y-coordinate
     *
     *  @return {number}
     */
    get y() {
        return this._y;
    }
    /**
     *  Returns the magnitude (ie. length) of the vector
     *
     *  @return {number}
     */
    get magnitude() {
        const x2 = this._x * this._x;
        const y2 = this._y * this._y;
        return Math.sqrt(x2 + y2);
    }
    /**
     * Gets a vector that is perpendicular to this vector
     */
    get normal() {
        return new Vector(-this.y, this.x);
    }
    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }
    subtract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }
    multiply(scalar) {
        return new Vector(this.x * scalar, this.y * scalar);
    }
    /**
     * Caps this Vector between the value of two Vectors
     *
     * @param {Vector} min
     * @param {Vector} max
     */
    clamp(min, max) {
        return new Vector(__WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["a" /* Maths */].clamp(this.x, min.x, max.x), __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["a" /* Maths */].clamp(this.y, min.y, max.y));
    }
    /**
     * Convenience direction getters
     */
    static get left() {
        return new Vector(-1, 0);
    }
    static get right() {
        return new Vector(1, 0);
    }
    static get up() {
        return new Vector(0, 1);
    }
    static get down() {
        return new Vector(0, -1);
    }
    static get origin() {
        return new Vector(0, 0);
    }
    /**
     * Returns a scalar that shows how much vector1
     * is in vector2's direction
     *
     * @param {*} vector1
     * @param {*} vector2
     *
     * @return {number}
     */
    static dot(vector1, vector2) {
        return (vector1.x * vector2.x) + (vector1.y * vector2.y);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Vector;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["clamp"] = clamp;
/**
 * Returns a whole number between [min] and [max]
 *
 * @param {number} min
 * @param {number} max
 *
 * @return {number}
 */
function random(min, max) {
    const value = (Math.random() * (min - max)) - min;
    return Math.round(value);
}
/**
 * Caps [value] between min and max (inclusive)
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 *
 * @return {number}
 */
function clamp(value, min, max) {
    if (value <= min)
        return min;
    if (value >= max)
        return max;
    return value;
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);


class Camera {
    get transform() {
        if(!this._transform) {
            this._transform = new __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["e" /* Transform */]();

            // since a camera move needs to update everything in view,
            // set all objects in the viewport as 'dirty' so they get
            // redrawn
            
            // TODO: viewport culling
            this._transform.setPosition = (value) => {
                this._transform._position = value;
                __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["c" /* SceneGraph */].hierarchy.forEach(obj => {
                    obj.getTransform().dirty();
                });
            }
        }
        return this._transform;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (new Camera());

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_screen__ = __webpack_require__(2);


/**
 * Collection of methods to interact with the HTML canvas
 */
class Canvas {
    getContext() {
        if(!this._context) {
            const canvas = document.getElementById('canvas');
            canvas.width = __WEBPACK_IMPORTED_MODULE_0_engine_library_screen__["b" /* Viewport */].width;
            canvas.height = __WEBPACK_IMPORTED_MODULE_0_engine_library_screen__["b" /* Viewport */].height;

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

/* unused harmony default export */ var _unused_webpack_default_export = (new Canvas());

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__ = __webpack_require__(0);


/**
 * Represents the browser window
 */
class Viewport {
    constructor(viewportWidth = 800, viewportHeight = 400) {
        this._browserHeight = 0;
        this._browserWidth = 0;
        this._recalculateScreen();

        window.addEventListener('resize', this._recalculateScreen.bind(this));
    }

    get width() {
        return this._browserWidth;
    }

    get height() {
        return this._browserHeight;
    }

    get screen() {
        return new __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["b" /* Vector */](this.width, this.height);
    }

    get origin() {
        return new __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["b" /* Vector */](
            this.width / 2,
            this.height / 2,
        );
    }

    _recalculateScreen() {
        this._browserHeight = window.innerHeight;
        this._browserWidth  = window.innerWidth;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (new Viewport());

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_objects__ = __webpack_require__(1);



/**
 * Singleton to hold all references to all instantiated GameObjects
 */
class SceneGraph {
    constructor() {
        // an ordered list (array) of all GameObjects
        this._hierarchy = [];

        // a unique id to GameObject mapping
        this._gameObjects = new Map();
    }

    get hierarchy() {
        return this._hierarchy;
    }

    /**
     * Gets the GameObject that belongs to the given id
     * 
     * @param {*} id 
     */
    get(id) {
        return this._gameObjects.get(id);
    }

    /**
    * Creates a new GameObject
    * 
    * @type {string} id         Name/identifier of the object
    * @type {object} config     GameObject settings
    */
    instantiate(id, config) {
        const { 
            position = new __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["b" /* Vector */](0, 0),
            components = [],
            sprite = {},
            order = 0,
            collider = null,
        } = config;

        if(id == null) {
            throw new Error(`Instantiation failed: no unique id given for ${type(gameObject)}`);
        }
        if(this._gameObjects.get(id)) {
            throw new Error(`Instantiation failed: a GameObject already exists with the name ${id}`)
        }

        let obj = new __WEBPACK_IMPORTED_MODULE_1_engine_library_objects__["b" /* GameObject */](id, position);
        if(collider) {
            
        }

        this._hierarchy.push(obj);
        this._gameObjects.set(id, obj);

        if(sprite.assets) {
            obj.setSprite(sprite);
        }

        components.forEach(componentName => {
            const component = new componentName(obj);
            obj.addComponent(component);
        });

        obj.createDom(id, order);

        return obj;
    }

    /**
     * Takes in an array of GameObjects and removes them all 
     * from the hierarchy immediately
     * 
     * @param {array} gameObjects 
     */
    removeBatch(gameObjects) {
        gameObjects.forEach(obj => {
            this._gameObjects.delete(obj.id);
        });
        this._hierarchy = this._hierarchy.filter(obj => gameObjects.indexOf(obj) < 0);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (new SceneGraph());

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__ = __webpack_require__(0);

class Sprite {
    constructor(origin, config) {
        /**
         * How many milliseconds between sprite frame changes
         */
        this._timing = 150;
        /**
         * Current frame of the asset array to draw
         */
        this._frameIndex = 0;
        this._origin = origin;
        this._assets = config.assets;
        this._dimensions = config.dimensions;
        this._offset = config.offset || __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["b" /* Vector */].origin;
        // if more than one image path is given, treat this sprite as an animated sprite
        if (config.assets.length > 1) {
            this._frameIndex = 0;
            this._animationTimer = setInterval(this._updateFrame.bind(this), this._timing);
        }
        this._lastPosition = new __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["b" /* Vector */]();
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
        if (x === this._lastPosition.x && y === this._lastPosition.y) {
            return;
        }
        this._element.style.left = x;
        this._element.style.top = -y; // flip Y because the browser Y is reversed
        this._element.style.width = this._dimensions.x * scale;
        this._element.style.height = this._dimensions.y * scale;
        this._origin = origin;
        this._lastPosition = new __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["b" /* Vector */](x, y);
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
}
/* unused harmony export Sprite */



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__ = __webpack_require__(0);

class Transform {
    constructor(position = __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["b" /* Vector */].origin, rotation = 0, scale = 1) {
        this._localPosition = __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["b" /* Vector */].origin;
        this._parent = null;
        /**
         * Whether the transform needs a redraw
         */
        this._isDirty = true;
        this._position = position;
        this._rotation = rotation;
        this._scale = scale;
    }
    getPosition() {
        return this._position;
    }
    setPosition(value) {
        if (value.x === this._position.x && value.y === this._position.y) {
            return;
        }
        const diff = value.subtract(this._position);
        // if this GameObject moved, update its local position relative to
        // its parent
        this._position = value;
        if (this._parent) {
            this._localPosition = value.subtract(this._parent.getPosition());
        }
        // if this GameObject has children, update their positions
        if (this._children.length > 0) {
            for (let child of this._children) {
                child.setPosition(child.getPosition().add(diff));
            }
        }
        this._isDirty = true;
    }
    getParent() {
        return this._parent;
    }
    setParent(transform) {
        this._parent = transform;
        this._localPosition = this._position.subtract(transform.getPosition());
    }
    getChildren() {
        return this._children;
    }
    addChild(transform) {
        this._children.push(transform);
    }
    /**
     * Returns a Vector of the relative distance to this Transform's parent
     */
    getLocalPosition() {
        return this._localPosition;
    }
    /**
     * Shortcut method for adding the given vector to the current position
     *
     * @param {Vector} value
     */
    translate(value) {
        const newPos = this._position.add(value);
        this.setPosition(newPos);
    }
    /**
     * Sets the Transform as 'clean'. When in a 'clean' state, the Transform
     * will not redraw until its manipulated again (move, scale, rotate)
     */
    clean() {
        this._isDirty = false;
    }
    /**
     * Forces a re-draw
     */
    dirty() {
        this._isDirty = true;
    }
    /**
     * Returns whether the Transform needs to be redrawn due to a manipulation
     *
     * @return {boolean}
     */
    isDirty() {
        return this._isDirty;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Transform;



/***/ }),
/* 18 */
/***/ (function(module, exports) {



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_engine_library_input__ = __webpack_require__(20);



class PlaneMovement extends __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["a" /* Component */] {
    constructor() {
        super(...arguments);
        this._velocity = __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */].origin;
    }
    onInstantiate() {
    }
    onUpdate(timestep) {
        const transform = this.gameObject.getTransform();
        let pos = transform.getPosition();
        if (__WEBPACK_IMPORTED_MODULE_2_engine_library_input__["a" /* Keyboard */].getKeyPress(__WEBPACK_IMPORTED_MODULE_2_engine_library_input__["a" /* Keyboard */].D)) {
            pos = pos.add(new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](4, 0));
        }
        if (__WEBPACK_IMPORTED_MODULE_2_engine_library_input__["a" /* Keyboard */].getKeyPress(__WEBPACK_IMPORTED_MODULE_2_engine_library_input__["a" /* Keyboard */].A)) {
            pos = pos.add(new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](-4, 0));
        }
        if (__WEBPACK_IMPORTED_MODULE_2_engine_library_input__["a" /* Keyboard */].getKeyPress(__WEBPACK_IMPORTED_MODULE_2_engine_library_input__["a" /* Keyboard */].W)) {
            pos = pos.add(new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](0, 4));
        }
        if (__WEBPACK_IMPORTED_MODULE_2_engine_library_input__["a" /* Keyboard */].getKeyPress(__WEBPACK_IMPORTED_MODULE_2_engine_library_input__["a" /* Keyboard */].S)) {
            pos = pos.add(new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](0, -4));
        }
        transform.setPosition(pos);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlaneMovement;



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Keyboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Keyboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Keyboard__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Keyboard___default.a; });


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var Input;
(function (Input) {
    /**
     * Represents a keyboard key
     */
    let Key;
    (function (Key) {
        Key[Key["A"] = 65] = "A";
        Key[Key["W"] = 87] = "W";
        Key[Key["S"] = 83] = "S";
        Key[Key["D"] = 68] = "D";
        Key[Key["SPACEBAR"] = 32] = "SPACEBAR";
        Key[Key["ARROW_LEFT"] = 37] = "ARROW_LEFT";
        Key[Key["ARROW_UP"] = 38] = "ARROW_UP";
        Key[Key["ARROW_RIGHT"] = 39] = "ARROW_RIGHT";
        Key[Key["ARROW_DOWN"] = 40] = "ARROW_DOWN";
    })(Key = Input.Key || (Input.Key = {}));
    /**
     * Handles interaction with the keyboard and retrieving
     * press values
     */
    class Keyboard {
        constructor() {
            this._keyDownValues = new Map();
            this._keyPressComplete = new Map();
            window.addEventListener('keydown', this._onKeyDown);
            window.addEventListener('keyup', this._onKeyUp);
        }
        static get instance() {
            return this._instance || (this._instance = new this());
        }
        destroy() {
            window.removeEventListener('keydown', this._onKeyDown);
            window.removeEventListener('keyup', this._onKeyUp);
        }
        /**
         * Handles key down events
         *
         * @param {KeyboardEvent} event
         */
        _onKeyDown(event) {
            const { keyCode } = event;
            this._keyDownValues.set(keyCode, 1);
            if (this._keyPressComplete.get(keyCode)) {
                this._keyDownValues.set(keyCode, 1);
                this._keyPressComplete.set(keyCode, false);
            }
        }
        /**
         * Handles key up events
         *
         * @param {KeyboardEvent} event
         */
        _onKeyUp(event) {
            const { keyCode } = event;
            this._keyDownValues.set(keyCode, 0);
            this._keyPressComplete.set(keyCode, true);
        }
        /**
         * Gets the current keypress value of the given key
         * (0 = not pressed | 1 = key down)
         *
         * @param {*} key
         */
        getKeyDown(keyCode) {
            const value = this._keyDownValues.get(keyCode);
            return value || 0;
        }
        /**
         * Same as getKeyDown() except toggles the value to 0
         * after listening
         */
        getKeyPress(keyCode) {
            const value = this._keyDownValues.get(keyCode);
            if (value > 0) {
                this._keyPressComplete.set(keyCode, false);
            }
            return value;
        }
    }
    Input.Keyboard = Keyboard;
})(Input || (Input = {}));


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_engine_library_screen__ = __webpack_require__(2);



class SceneManager extends __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["a" /* Component */] {
    constructor() {
        super(...arguments);
        this._rockList = [];
        this._scrollSpeed = __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */].origin;
    }
    onInstantiate() {
        for (let i = 0; i < 2; i++) {
            __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["c" /* SceneGraph */].instantiate('backgroundSky' + i, {
                position: new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](800 * i, 0),
                order: -999,
                sprite: {
                    assets: ['assets/images/background.png'],
                    // timing: 150,
                    dimensions: new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](800, 480),
                },
                components: [],
            });
        }
        const rock = __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["c" /* SceneGraph */].instantiate('rock', {
            position: new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](350, -__WEBPACK_IMPORTED_MODULE_2_engine_library_screen__["b" /* Viewport */].height + 239),
            sprite: {
                assets: ['assets/images/rockUp.png'],
                dimensions: new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](108, 239),
            },
        });
        for (let i = 0; i < 2; i++) {
            __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["c" /* SceneGraph */].instantiate('groundBottom' + i, {
                position: new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](808 * i, -__WEBPACK_IMPORTED_MODULE_2_engine_library_screen__["b" /* Viewport */].height + 71),
                sprite: {
                    assets: ['assets/images/groundDirt.png'],
                    dimensions: new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](808, 71),
                },
            });
        }
        this._scrollSpeed = new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](3, 0);
    }
    onUpdate(timestep) {
        // let cameraPos = Camera.transform.getPosition().add(this._scrollSpeed);
        // cameraPos = cameraPos.multiply(timestep);
        // Camera.transform.setPosition(cameraPos);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SceneManager;



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoxCollider__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BoxCollider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CircleCollider__ = __webpack_require__(27);
/* unused harmony reexport CircleCollider */



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_objects__ = __webpack_require__(1);



class BoxCollider extends __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["a" /* Collidable */] {
    constructor(boundingBox) {
        this._boundingBox = boundingBox;
    }

    get boundingBox() {
        return this._boundingBox;
    }

    getType() {
        return __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["a" /* Collidable */].SHAPE_BOX;
    }

    getRect() {
        return {
            left    : this._boundingBox.left,
            right   : this._boundingBox.right,
            top     : this._boundingBox.top,
            bottom  : this._boundingBox.bottom,
        };
    }

    collidesWith(collidable) {
        switch(collidable.getType()) {
            case __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["a" /* Collidable */].SHAPE_BOX:
                return this.rectToRectCheck(collidable.getRect());

            case __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["a" /* Collidable */].SHAPE_CIRCLE:
                return this.rectToCircleCheck(collidable.getCircle());
        }
    }
    
    /**
     * Performs a collision detection against another rectangle
     * 
     * @param {object} rect 
     */
    rectToRectCheck(rect) {
        return (
            rect.right  > this._boundingBox.left ||
            rect.left   < this._boundingBox.right ||
            rect.top    > this._boundingBox.bottom ||
            rect.bottom < this._boundingBox.top
        );
    }

    rectToCircleCheck(circle) {
        // return (

        // );
        return false;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = BoxCollider;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collidable__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Collidable__["a"]; });


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ColliderShape */
var ColliderShape;
(function (ColliderShape) {
    ColliderShape[ColliderShape["BOX"] = 0] = "BOX";
    ColliderShape[ColliderShape["CIRCLE"] = 1] = "CIRCLE";
})(ColliderShape || (ColliderShape = {}));
class Collidable {
    /**
     * Returns the type of collidable that should be checked
     */
    getType() {
        throw new Error('getType() not implemented');
    }
    getRectangle() {
        throw new Error('getRectangle() not implemented');
    }
    getCircle() {
        throw new Error('getCircle() not implemented');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Collidable;



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CircleCollider {
    constructor(origin, offset, radius) {
        this._origin = origin;
        this._offset = offset;
        this._radius = radius;
    }

    get position() {
        return this._origin.add(this._offset);
    }
    get radius() {
        return this._radius;
    }


    getType() {
        return Collidable.SHAPE_CIRCLE;
    }

    getCircle() {
        return {
            position: this.position,
            radius: this.radius,
        };
    }

    collidesWith(collidable) {
        switch(collidable.getType()) {
            case Collidable.SHAPE_BOX:
                return this.circleToRectCheck(collidable.getRect());

            case Collidable.SHAPE_CIRCLE:
                return this.circleToCircleCheck(collidable.getCircle());
        }
    }

    circleToRectCheck(rect) {
        
    }

    circleToCircleCheck(circle) {

    }
}
/* unused harmony export default */


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjgyODZkNDM3OGJiYTkxMzA4MGEiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvbWF0aHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZXMvZmxhcHB5L2ZsYXBweS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9HYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0JvdW5kaW5nQm94LmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvRGlydHlGbGFnLnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9tYXRocy9WZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvbWF0aHMvTWF0aHMudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvc2NyZWVuL0NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vQ2FudmFzLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L3NjcmVlbi9WaWV3cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL1NjZW5lR3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9TcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9UcmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZXMvZmxhcHB5L2NvbXBvbmVudHMvUGxhbmVNb3ZlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9pbnB1dC9LZXlib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9nYW1lcy9mbGFwcHkvY29tcG9uZW50cy9TY2VuZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucy9jb2xsaWRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucy9jb2xsaWRlcnMvQm94Q29sbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucy9Db2xsaWRhYmxlLnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMvY29sbGlkZXJzL0NpcmNsZUNvbGxpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0Q2QztBQUVaO0FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGdCO0FBQ0Y7QUFDQTtBQUNDO0FBQ0E7QUFDSjtBQUNHOzs7Ozs7Ozs7Ozs7Ozs7QUNOSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNETztBQUN3QjtB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O0FBSEQsV0FBWSxhQUFhO0lBQ3JCLCtDQUFHO0lBQ0gscURBQU07QUFDVixDQUFDLEVBSFcsYUFBYSxLQUFiLGFBQWEsUUFHeEI7QUFFYTtJQUNWOztPQUVHO0lBQ0ksT0FBTztRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBR00sWUFBWTtRQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sU0FBUztRQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBWUo7QUFBQTtBQUFBOzs7Ozs7OztBQ2hDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsQyIsImZpbGUiOiJmbGFwcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiODI4NmQ0Mzc4YmJhOTEzMDgwYSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVmVjdG9yIH0gZnJvbSAnLi9WZWN0b3InO1xuXG5pbXBvcnQgKiBhcyBNYXRocyBmcm9tICcuL01hdGhzJztcbmV4cG9ydCB7IE1hdGhzIH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvbWF0aHMvaW5kZXgudHMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJvdW5kaW5nQm94IH0gZnJvbSAnLi9Cb3VuZGluZ0JveCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlydHlGbGFnIH0gZnJvbSAnLi9EaXJ0eUZsYWcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9HYW1lT2JqZWN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2NlbmVHcmFwaCB9IGZyb20gJy4vU2NlbmVHcmFwaCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNwcml0ZSB9IGZyb20gJy4vU3ByaXRlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHJhbnNmb3JtIH0gZnJvbSAnLi9UcmFuc2Zvcm0nO1xuXG5leHBvcnQgeyBhZGRDb2xsaWRlclRvIH0gZnJvbSAnLi9Db2xsaWRlcic7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FtZXJhIH0gZnJvbSAnLi9DYW1lcmEnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW52YXMgfSBmcm9tICcuL0NhbnZhcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZpZXdwb3J0IH0gZnJvbSAnLi9WaWV3cG9ydCc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJ2VuZ2luZS9nYW1lJztcbmltcG9ydCB7IFBsYW5lTW92ZW1lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvUGxhbmVNb3ZlbWVudCc7XG5pbXBvcnQgeyBTY2VuZU1hbmFnZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvU2NlbmVNYW5hZ2VyJztcblxuaW1wb3J0IHsgU2NlbmVHcmFwaCwgU3ByaXRlIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5pbXBvcnQgeyBWaWV3cG9ydCwgQ2FudmFzLCBDYW1lcmEgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9zY3JlZW4nO1xuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9jb2xsaXNpb25zL2NvbGxpZGVycyc7XG5cbmNsYXNzIEZsYXBweUdhbWUgZXh0ZW5kcyBHYW1lIHtcbiAgICBvblN0YXJ0KCkge1xuICAgICAgICBjb25zdCBzY2VuZU1hbmFnZXIgPSBTY2VuZUdyYXBoLmluc3RhbnRpYXRlKCdzY2VuZU1hbmFnZXInLCB7XG4gICAgICAgICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgICAgICAgICAgU2NlbmVNYW5hZ2VyLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcGxhbmVSZWQgPSBTY2VuZUdyYXBoLmluc3RhbnRpYXRlKCdwbGFuZScsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDUwLCAtNTApLFxuICAgICAgICAgICAgY29sbGlkZXI6IEJveENvbGxpZGVyLFxuICAgICAgICAgICAgc3ByaXRlOiB7XG4gICAgICAgICAgICAgICAgYXNzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICdhc3NldHMvaW1hZ2VzL3BsYW5lUmVkMS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAvLyAnYXNzZXRzL2ltYWdlcy9wbGFuZVJlZDIucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gJ2Fzc2V0cy9pbWFnZXMvcGxhbmVSZWQzLnBuZycsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAvLyB0aW1pbmc6IDE1MCxcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiBuZXcgVmVjdG9yKDUwLCA1MCksXG4gICAgICAgICAgICAgICAgLy8gb2Zmc2V0OiBuZXcgVmVjdG9yKDAsIDApLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAgICAgICAgICBQbGFuZU1vdmVtZW50LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jb25zdCBnYW1lID0gbmV3IEZsYXBweUdhbWUoKTtcbmdhbWUuaW5pdGlhbGlzZSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dhbWVzL2ZsYXBweS9mbGFwcHkudHMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IGJvb3RHYW1lTG9vcCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L0dhbWVMb29wJztcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L3NjcmVlbic7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5cbi8qKlxuICogQmFzZSBjb250YWluZXIgZm9yIGEgZ2FtZS4gQSBnYW1lIHNob3VsZCBleHRlbmQgdGhpc1xuICogYW5kIGZpbGwgaXQgd2l0aCBnYW1lIHNwZWNpZmljIGxvZ2ljLlxuICovXG5leHBvcnQgY2xhc3MgR2FtZSB7XG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIGVuZ2luZSBnYW1lIGxvb3AgYW5kIHRoZSBnYW1lJ3MgbG9naWNcbiAgICAgKi9cbiAgICBpbml0aWFsaXNlKCkge1xuICAgICAgICBDYW1lcmEudHJhbnNmb3JtLnBvc2l0aW9uID0gbmV3IFZlY3RvcigwLCAwKTtcbiAgICAgICAgYm9vdEdhbWVMb29wKHRoaXMub25TdGFydCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9naWMgdG8gcnVuIG9uY2UgYWZ0ZXIgdGhlIG1haW4gZ2FtZSBsb29wIGlzIHN0YXJ0ZWRcbiAgICAgKi9cbiAgICBvblN0YXJ0KCkge31cblxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZW5naW5lL2dhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2NlbmVHcmFwaCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuXG4vKipcbiAqIERlc2lyZWQgYW1vdW50IG9mIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gZnJhbWVzXG4gKlxuICogQGNvbnN0YW50IHtudW1iZXJ9XG4gKi9cbmNvbnN0IE1TX1BFUl9GUkFNRSA9IDE2O1xuXG4vKipcbiAqICBHYW1lIHNwZWVkICgxID0gbm9ybWFsIHNwZWVkIHwgMCA9IG5vdCBtb3ZpbmcpXG4gKiBcbiAqICBAY29uc3RhbnQge251bWJlcn1cbiAqL1xuY29uc3QgVElNRV9TVEVQID0gMTtcblxuLyoqXG4gKiAgVGltZXN0YW1wIG9mIHRoZSBsYXN0IHJlbmRlcmVkIGZyYW1lXG4gKiBcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmxldCBsYXN0VGljaztcblxuXG4vKipcbiAqIFRoZSBtYWluIGdhbWUgbG9vcC5cbiAqIFxuICogQ2FsY3VsYXRlcyBmcmFtZSBzdGF0cyBhbmQgcGFzc2VzIGl0IHRvIHRoZSB1cGRhdGVcbiAqIGFuZCByZW5kZXIgbG9vcFxuICovXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICAvLyBjYWxjdWxhdGUgaG93IG11Y2ggdGltZSBoYXMgYWN0dWFsbHkgcGFzc2VkIHNpbmNlXG4gICAgLy8gdGhlIGxhc3QgZnJhbWUgYW5kIHBhc3MgaXQgdG8gdGhlIHVwZGF0ZSBsb29wXG4gICAgY29uc3QgY3VycmVudFRpY2sgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGVsYXBzZWQgPSBjdXJyZW50VGljayAtIGxhc3RUaWNrO1xuICAgIGNvbnN0IHN0ZXAgPSAoTVNfUEVSX0ZSQU1FIC8gZWxhcHNlZCkgKiBUSU1FX1NURVA7XG4gICAgXG4gICAgb25VcGRhdGUoc3RlcCk7XG4gICAgb25SZW5kZXIoKTtcblxuICAgIGxhc3RUaWNrID0gY3VycmVudFRpY2s7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn1cblxuXG4vKipcbiAqICBEZWxlZ2F0ZXMgd29yayB0byBldmVyeSBnYW1lIG9iamVjdFxuICovXG5mdW5jdGlvbiBvblVwZGF0ZSh0aW1lc3RlcCkge1xuICAgIGNvbnN0IGhpZXJhcmNoeSA9IFNjZW5lR3JhcGguaGllcmFyY2h5O1xuICAgIGNvbnN0IGNvcnBzZU9iamVjdHMgPSBbXTtcblxuICAgIC8vIGxvb3Agb3ZlciBhIGJ1ZmZlciBzbyB0aGF0IG5ld2x5IGluc3RhbnRpYXRlZCBvYmplY3RzXG4gICAgLy8gYWx3YXlzIHN0YXJ0IGV4ZWN1dGlvbiBmcm9tIHRoZSBuZXh0IGZyYW1lXG4gICAgY29uc3QgYnVmZmVyQ291bnQgPSBoaWVyYXJjaHkubGVuZ3RoO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBidWZmZXJDb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IGhpZXJhcmNoeVtpXTtcblxuICAgICAgICAvLyBhbnkgb2JqZWN0cyBtYXJrZWQgZm9yIGRlbGV0aW9uIHNob3VsZCBub3QgYmUgZXhlY3V0ZWRcbiAgICAgICAgaWYob2JqLmlzRGVzdHJveWluZygpKSB7XG4gICAgICAgICAgICBjb3Jwc2VPYmplY3RzLnB1c2gob2JqKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG9iai5vblVwZGF0ZSh0aW1lc3RlcCk7XG4gICAgfVxuXG4gICAgLy8gY2xlYW51cCBhbnkgb2JqZWN0cyBtYXJrZWQgZm9yIGRlbGV0aW9uXG4gICAgaWYoY29ycHNlT2JqZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIFNjZW5lR3JhcGgucmVtb3ZlQmF0Y2goY29ycHNlT2JqZWN0cyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlbmRlcnMgZXZlcnkgdmlzaWJsZSBHYW1lT2JqZWN0IHRvIERPTSBldmVyeSBmcmFtZVxuICovXG5mdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICBTY2VuZUdyYXBoXG4gICAgICAgIC5oaWVyYXJjaHlcbiAgICAgICAgLmZvckVhY2gob2JqID0+IG9iai5yZW5kZXIoKSk7XG59XG5cbi8qKlxuICogU3RhcnRzIHRoZSBnYW1lIGxvb3BcbiAqL1xubGV0IGlzQm9vdGVkID0gZmFsc2U7XG5leHBvcnQgZnVuY3Rpb24gYm9vdEdhbWVMb29wKG9uU3RhcnQpIHtcbiAgICBpZihpc0Jvb3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxhc3RUaWNrID0gRGF0ZS5ub3coKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIG9uU3RhcnQoKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2VuZ2luZS9saWJyYXJ5L0dhbWVMb29wLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVwcmVzZW50cyBhIHJlY3RhbmdsZSBpbiB3b3JsZC1zcGFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3VuZGluZ0JveCB7XG4gICAgY29uc3RydWN0b3Iob3JpZ2luLCBvZmZzZXQsIGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5fb3JpZ2luID0gb3JpZ2luO1xuICAgICAgICB0aGlzLl9vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHRoaXMuX2RpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgIH1cblxuICAgIGdldCBwb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yaWdpbi5hZGQodGhpcy5fb2Zmc2V0KTtcbiAgICB9XG4gICAgZ2V0IGxlZnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnggLSAodGhpcy5fZGltZW5zaW9ucy54IC8gMik7XG4gICAgfVxuICAgIGdldCByaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueCArICh0aGlzLl9kaW1lbnNpb25zLnggLyAyKTtcbiAgICB9XG4gICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueSArICh0aGlzLl9kaW1lbnNpb25zLnkgLyAyKTtcbiAgICB9XG4gICAgZ2V0IGJvdHRvbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueSAtICh0aGlzLl9kaW1lbnNpb25zLnkgLyAyKTtcbiAgICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0JvdW5kaW5nQm94LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEdhbWVPYmplY3QsIFRyYW5zZm9ybSwgU3ByaXRlIH0gZnJvbSBcImVuZ2luZS9saWJyYXJ5L29iamVjdHNcIjtcblxuLyoqXG4gKiBBbiBpbnRlcmZhY2UgZm9yIGludGVyYWN0aW5nIHdpdGggYSBHYW1lT2JqZWN0LiBUaGlzIGlzXG4gKiB3aGVyZSBhbG1vc3QgYWxsIHRoZSBjdXN0b20gZ2FtZSBjb2RlIHNob3VsZCBsaXZlLlxuICogXG4gKiBBIGNvbXBvbmVudCBzaG91bGQgYmUgaW5zdGFudGlhdGVkIGFuZCBhdHRhY2hlZCB0byBhXG4gKiBHYW1lT2JqZWN0IHdoZW4gdGhlIEdhbWVPYmplY3QgaXMgY3JlYXRlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgR2FtZU9iamVjdCB0aGlzIGNvbXBvbmVudCBiZWxvbmdzIHRvXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZ2FtZU9iamVjdDogR2FtZU9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpIHtcbiAgICAgICAgdGhpcy5fZ2FtZU9iamVjdCA9IGdhbWVPYmplY3Q7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHRyYW5zZm9ybSBmb3IgdGhlIEdhbWVPYmplY3Qgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtUcmFuc2Zvcm19XG4gICAgICovXG4gICAgZ2V0IHRyYW5zZm9ybSgpIDogVHJhbnNmb3JtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3QuZ2V0VHJhbnNmb3JtKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc3ByaXRlIGZvciB0aGUgR2FtZU9iamVjdCBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge1Nwcml0ZX1cbiAgICAgKi9cbiAgICBnZXQgc3ByaXRlKCkgOiBTcHJpdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdC5nZXRTcHJpdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBHYW1lT2JqZWN0IHRoaXMgY29tcG9uZW50IGJlbG9uZ3MgdG9cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtHYW1lT2JqZWN0fVxuICAgICAqL1xuICAgIGdldCBnYW1lT2JqZWN0KCkgOiBHYW1lT2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9naWMgdG8gcnVuIHdoZW4gdGhlIG9iamVjdCBpcyBmaXJzdCBpbnN0YW50aWF0ZWQuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uSW5zdGFudGlhdGUoKSA6IHZvaWQge31cbiAgICBcbiAgICAvKipcbiAgICAgKiBMb2dpYyB0byBydW4gZXZlcnkgZ2FtZSBsb29wIGZyYW1lXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uVXBkYXRlKHRpbWVzdGVwOiBudW1iZXIpIDogdm9pZCB7fVxuXG4gICAgLyoqXG4gICAgICogTG9naWMgdG8gcnVuIHdoZW4gdGhlIG9iamVjdCBpcyBkZXN0cm95ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkgOiB2b2lkIHt9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9Db21wb25lbnQudHMiLCIvKipcbiAqIEFkZHMgYSBkaXJ0eSBmbGFnIHRvIHRoZSBkZWNvcmF0ZWQgY2xhc3MuIFxuICogXG4gKiBBIGRpcnR5IGZsYWcgaW4gdGhpcyBjYXNlIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIFxuICogdGhlIGRlY29yYXRlZCBjbGFzcyBuZWVkcyB0byBiZSByZWRyYXduIGluIHRoZVxuICogcmVuZGVyIGN5Y2xlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJ0eUZsYWcge1xuICAgIHByb3RlY3RlZCBfaXNEaXJ0eTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwcm90ZWN0ZWQgY2xlYW4oKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9pc0RpcnR5ID0gZmFsc2U7XG4gICAgfVxuICAgIHByb3RlY3RlZCBkaXJ0eSgpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lzRGlydHkgPSB0cnVlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0RGlydHlGbGFnKGlzRGlydHk6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNEaXJ0eSA9IGlzRGlydHk7XG4gICAgfVxuXG4gICAgZ2V0IGlzRGlydHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RpcnR5O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0RpcnR5RmxhZy50cyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcbmltcG9ydCB7IEJvdW5kaW5nQm94LCBUcmFuc2Zvcm0sIFNwcml0ZSB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvc2NyZWVuJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIG9iamVjdCBpbiB0aGUgc2NlbmVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU9iamVjdCB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBHYW1lT2JqZWN0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkICAgICAgICAgICBVbmlxdWUgaWRlbnRpZmllclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBwb3NpdGlvbiAgICAgU3RhcnRpbmcgcG9zaXRpb24gb2YgdGhlIG9iamVjdFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlkLCBwb3NpdGlvbiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5faXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faXNEZXN0cm95aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5fc3ByaXRlID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0ocG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1RyYW5zZm9ybX1cbiAgICAgKi9cbiAgICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3ByaXRlfVxuICAgICAqL1xuICAgIGdldFNwcml0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgc3RyaW5nIG9mIHRoaXMgR2FtZU9iamVjdFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgRE9NIGVsZW1lbnQgdGhhdCByZXByZXNlbnRzIHRoaXMgR2FtZU9iamVjdFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge0hUTUxOb2RlfVxuICAgICAqL1xuICAgIGdldEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgb2JqZWN0IGlzIHZpc2libGUgKGJ1dCBzdGlsbCBleGVjdXRpbmdcbiAgICAgKiBpdHMgdXBkYXRlIGxvb3ApXG4gICAgICogXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1Zpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1Zpc2libGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgb2JqZWN0IHdpbGwgYmUgZGVzdHJveWVkIG5leHQgZnJhbWVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRGVzdHJveWluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVzdHJveWluZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIG9iamVjdCBpcyBkaXNhYmxlZCAoaWUuIG5vdCBleGVjdXRpbmdcbiAgICAgKiBpdHMgdXBkYXRlIGxvb3AgYW5kIHJlbmRlcmluZylcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdHMgdGhpcyBHYW1lT2JqZWN0J3MgRE9NIGVsZW1lbnQgaW50byB0aGUgZG9jdW1lbnQgYm9keVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgKi9cbiAgICBjcmVhdGVEb20oaWQsIHpJbmRleCA9IDApIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmlkID0gaWQ7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZU9iamVjdCcpO1xuXG4gICAgICAgIGlmKHpJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS56SW5kZXggPSB6SW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICB0aGlzLm9uSW5zdGFudGlhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29tcG9uZW50IHRoYXQgaG9va3MgaW50byB0aGlzIEdhbWVPYmplY3QncyBsaWZlY3ljbGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50IFxuICAgICAqL1xuICAgIGFkZENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgU3ByaXRlIHRoYXQgcmVwcmVzZW50cyB0aGlzIEdhbWVPYmplY3QuIElmIG5vIFNwcml0ZSBpc1xuICAgICAqIHNldCwgbm90aGluZyB3aWxsIGhhcHBlbiBpbiB0aGUgcmVuZGVyIGN5Y2xlIGZvciB0aGlzIG9iamVjdC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFxuICAgICAqL1xuICAgIHNldFNwcml0ZShjb25maWcgPSB7fSkge1xuICAgICAgICB0aGlzLl9zcHJpdGUgPSBuZXcgU3ByaXRlKHRoaXMuX3RyYW5zZm9ybS5nZXRQb3NpdGlvbigpLCBjb25maWcpO1xuICAgICAgICB0aGlzLl9zcHJpdGUuYXBwZW5kRG9tKCk7XG4gICAgfVxuICAgICBcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoaXMgR2FtZU9iamVjdCBhcyB0aGUgY2hpbGQgb2YgdGhlIGdpdmVuIEdhbWVPYmplY3QuIEluIG90aGVyXG4gICAgICogd29yZHMsIGl0IHdpbGwgbW92ZSwgc2NhbGUgYW5kIHJvdGF0ZSByZWxhdGl2ZWx5IHdoZW5ldmVyIHRoZSBwYXJlbnQgZG9lcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGdhbWVPYmplY3QgXG4gICAgICovXG4gICAgc2V0UGFyZW50KGdhbWVPYmplY3QpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtLnNldFBhcmVudChnYW1lT2JqZWN0LmdldFRyYW5zZm9ybSgpKTtcbiAgICAgICAgZ2FtZU9iamVjdC5nZXRUcmFuc2Zvcm0oKS5hZGRDaGlsZCh0aGlzLl90cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIG9iamVjdC4gU2V0dGluZyB0byBmYWxzZVxuICAgICAqIGVmZmVjdGl2ZWx5IHNldHMgJ2Rpc3BsYXk6IG5vbmUnIGNzc1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWaXNpYmxlIFxuICAgICAqL1xuICAgIHNldFZpc2liaWxpdHkoaXNWaXNpYmxlKSB7XG4gICAgICAgIGlmKHRoaXMuX2lzVmlzaWJsZSAhPSBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzVmlzaWJsZSA/ICdub25lJyA6ICdoaWRkZW4nO1xuICAgICAgICAgICAgdGhpcy5faXNWaXNpYmxlID0gaXNWaXNpYmxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB3aGV0aGVyIHRoZSBvYmplY3QgaXMgZGlzYWJsZWQuXG4gICAgICogXG4gICAgICogSW4gYSBkaXNhYmxlZCBzdGF0ZSwgdGhlIG9iamVjdCBuZWl0aGVyIHJlbmRlcnMgbm9yXG4gICAgICogZXhlY3V0ZXMgaXRzIHVwZGF0ZSBsb29wLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNEaXNhYmxlZCBcbiAgICAgKi9cbiAgICBzZXREaXNhYmxlZChpc0Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuX2lzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBpc0Rpc2FibGVkID8gJ25vbmUnIDogJ2hpZGRlbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFya3MgdGhlIG9iamVjdCBmb3IgZGVzdHJ1Y3Rpb24gYXQgdGhlIGVuZCBvZiB0aGUgZnJhbWUuXG4gICAgICogRnVydGhlcm1vcmUsIHRoZSBvYmplY3Qgd2lsbCBub3QgZXhlY3V0ZSBpdHMgdXBkYXRlIGxvb3AgaWYgXG4gICAgICogaXQgaGFzbid0IGFscmVhZHkgZXhlY3V0ZWQgaXQgeWV0LlxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2lzRGVzdHJveWluZyA9IHRydWU7XG4gICAgICAgIHRoaXMub25EZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgb25JbnN0YW50aWF0ZSgpIG9uIGFsbCBjb21wb25lbnRzIG9uIHRoaXMgR2FtZU9iamVjdFxuICAgICAqL1xuICAgIG9uSW5zdGFudGlhdGUoKSB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaChjID0+IGMub25JbnN0YW50aWF0ZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBvbkRlc3Ryb3koKSBvbiBhbGwgY29tcG9uZW50cyBvbiB0aGlzIEdhbWVPYmplY3RcbiAgICAgKi9cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaChjID0+IGMub25EZXN0cm95KCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIG9uVXBkYXRlKCkgb24gYWxsIGNvbXBvbmVudHMgb24gdGhpcyBHYW1lT2JqZWN0XG4gICAgICovXG4gICAgb25VcGRhdGUodGltZXN0ZXApIHtcbiAgICAgICAgaWYodGhpcy5faXNEaXNhYmxlZCB8fCB0aGlzLl9pc0Rlc3Ryb3lpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goYyA9PiBjLm9uVXBkYXRlKHRpbWVzdGVwKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgb2JqZWN0IGluIHdvcmxkIHNwYWNlIGVhY2ggZ2FtZSBsb29wIGZyYW1lXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZighdGhpcy5faXNWaXNpYmxlIHx8IHRoaXMuX2lzRGlzYWJsZWQgfHwgdGhpcy5faXNEZXN0cm95aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBzY3JlZW5TcGFjZVBvcyA9IG51bGw7XG4gICAgICAgIGxldCBpc1RyYW5zZm9ybURpcnR5ID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICAvLyBvbmx5IHJlZHJhdyB3aGVuIHRoZSBUcmFuc2Zvcm0gaGFzIGFjdHVhbGx5IG1vdmVkXG4gICAgICAgIGlmKHRoaXMuX3RyYW5zZm9ybS5pc0RpcnR5KCkpIHtcbiAgICAgICAgICAgIC8vIHRoZSBUcmFuc2Zvcm0gc3RvcmVzIG91ciB3b3JsZC1zcGFjZSBjb29yZGluYXRlcyxcbiAgICAgICAgICAgIC8vIGJ1dCB3ZSBuZWVkIHRvIHJlbmRlciB0aGUgb2JqZWN0IGluIHNjcmVlbi1zcGFjZVxuICAgICAgICAgICAgc2NyZWVuU3BhY2VQb3MgPSB0aGlzLl9nZXRTY3JlZW5Qb3NpdGlvbigpO1xuXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmxlZnQgPSBzY3JlZW5TcGFjZVBvcy54O1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS50b3AgID0gc2NyZWVuU3BhY2VQb3MueTtcblxuICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtLmNsZWFuKCk7XG5cbiAgICAgICAgICAgIGlzVHJhbnNmb3JtRGlydHkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb25seSByZWRyYXcgdGhlIHNwcml0ZSBpZiB0aGUgU3ByaXRlIG9yIFRyYW5zZm9ybSBoYXMgbW92ZWRcbiAgICAgICAgaWYodGhpcy5fc3ByaXRlICYmIChpc1RyYW5zZm9ybURpcnR5IHx8IHRoaXMuX3Nwcml0ZS5pc0RpcnR5KCkpKSB7XG4gICAgICAgICAgICBzY3JlZW5TcGFjZVBvcyA9IHNjcmVlblNwYWNlUG9zIHx8IHRoaXMuX2dldFNjcmVlblBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5yZW5kZXIoc2NyZWVuU3BhY2VQb3MpO1xuICAgICAgICAgICAgdGhpcy5fc3ByaXRlLmNsZWFuKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIF9nZXRTY3JlZW5Qb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLl90cmFuc2Zvcm0uZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgY2FtZXJhUG9zID0gQ2FtZXJhLnRyYW5zZm9ybS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoXG4gICAgICAgICAgICBwb3NpdGlvbi54IC0gY2FtZXJhUG9zLngsXG4gICAgICAgICAgICBwb3NpdGlvbi55IC0gY2FtZXJhUG9zLnlcbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0dhbWVPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTWF0aHMgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGNvb3JkaW5hdGUgaW4gMkQgc3BhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfeDogbnVtYmVyID0gMCxcbiAgICAgICAgcHJpdmF0ZSBfeTogbnVtYmVyID0gMFxuICAgICkge31cblxuICAgIC8qKlxuICAgICAqICBSZXR1cm5zIHRoZSB4LWNvb3JkaW5hdGVcbiAgICAgKiBcbiAgICAgKiAgQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCB4KCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5feDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgUmV0dXJucyB0aGUgeS1jb29yZGluYXRlXG4gICAgICogXG4gICAgICogIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgeSgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3k7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIFJldHVybnMgdGhlIG1hZ25pdHVkZSAoaWUuIGxlbmd0aCkgb2YgdGhlIHZlY3RvclxuICAgICAqIFxuICAgICAqICBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IG1hZ25pdHVkZSgpIDogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgeDIgPSB0aGlzLl94ICogdGhpcy5feDtcbiAgICAgICAgY29uc3QgeTIgPSB0aGlzLl95ICogdGhpcy5feTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4MiArIHkyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgdmVjdG9yIHRoYXQgaXMgcGVycGVuZGljdWxhciB0byB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIGdldCBub3JtYWwoKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKC10aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZCh2ZWN0b3I6IFZlY3RvcikgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihcbiAgICAgICAgICAgIHRoaXMueCArIHZlY3Rvci54LFxuICAgICAgICAgICAgdGhpcy55ICsgdmVjdG9yLnlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3VidHJhY3QodmVjdG9yOiBWZWN0b3IpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoXG4gICAgICAgICAgICB0aGlzLnggLSB2ZWN0b3IueCxcbiAgICAgICAgICAgIHRoaXMueSAtIHZlY3Rvci55XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIG11bHRpcGx5KHNjYWxhcjogbnVtYmVyKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFxuICAgICAgICAgICAgdGhpcy54ICogc2NhbGFyLFxuICAgICAgICAgICAgdGhpcy55ICogc2NhbGFyXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FwcyB0aGlzIFZlY3RvciBiZXR3ZWVuIHRoZSB2YWx1ZSBvZiB0d28gVmVjdG9yc1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBtaW5cbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gbWF4IFxuICAgICAqL1xuICAgIHB1YmxpYyBjbGFtcChtaW46IFZlY3RvciwgbWF4OiBWZWN0b3IpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoXG4gICAgICAgICAgICBNYXRocy5jbGFtcCh0aGlzLngsIG1pbi54LCBtYXgueCksXG4gICAgICAgICAgICBNYXRocy5jbGFtcCh0aGlzLnksIG1pbi55LCBtYXgueSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBkaXJlY3Rpb24gZ2V0dGVyc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgbGVmdCgpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoLTEsIDApO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHJpZ2h0KCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigxLCAwKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCB1cCgpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoMCwgMSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgZG93bigpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoMCwgLTEpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IG9yaWdpbigpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoMCwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHNjYWxhciB0aGF0IHNob3dzIGhvdyBtdWNoIHZlY3RvcjFcbiAgICAgKiBpcyBpbiB2ZWN0b3IyJ3MgZGlyZWN0aW9uXG4gICAgICogXG4gICAgICogQHBhcmFtIHsqfSB2ZWN0b3IxIFxuICAgICAqIEBwYXJhbSB7Kn0gdmVjdG9yMiBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBkb3QodmVjdG9yMTogVmVjdG9yLCB2ZWN0b3IyOiBWZWN0b3IpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICh2ZWN0b3IxLnggKiB2ZWN0b3IyLngpICsgKHZlY3RvcjEueSAqIHZlY3RvcjIueSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L21hdGhzL1ZlY3Rvci50cyIsIi8qKlxuICogUmV0dXJucyBhIHdob2xlIG51bWJlciBiZXR3ZWVuIFttaW5dIGFuZCBbbWF4XVxuICogXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBcbiAqIFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgOiBudW1iZXIge1xuICAgIGNvbnN0IHZhbHVlID0gKE1hdGgucmFuZG9tKCkgKiAobWluIC0gbWF4KSkgLSBtaW47XG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpO1xufVxuXG4vKipcbiAqIENhcHMgW3ZhbHVlXSBiZXR3ZWVuIG1pbiBhbmQgbWF4IChpbmNsdXNpdmUpXG4gKiBcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IFxuICogXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIDogbnVtYmVyIHtcbiAgICBpZih2YWx1ZSA8PSBtaW4pIHJldHVybiBtaW47XG4gICAgaWYodmFsdWUgPj0gbWF4KSByZXR1cm4gbWF4O1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9tYXRocy9NYXRocy50cyIsImltcG9ydCB7IFRyYW5zZm9ybSwgU2NlbmVHcmFwaCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuXG5jbGFzcyBDYW1lcmEge1xuICAgIGdldCB0cmFuc2Zvcm0oKSB7XG4gICAgICAgIGlmKCF0aGlzLl90cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKTtcblxuICAgICAgICAgICAgLy8gc2luY2UgYSBjYW1lcmEgbW92ZSBuZWVkcyB0byB1cGRhdGUgZXZlcnl0aGluZyBpbiB2aWV3LFxuICAgICAgICAgICAgLy8gc2V0IGFsbCBvYmplY3RzIGluIHRoZSB2aWV3cG9ydCBhcyAnZGlydHknIHNvIHRoZXkgZ2V0XG4gICAgICAgICAgICAvLyByZWRyYXduXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFRPRE86IHZpZXdwb3J0IGN1bGxpbmdcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybS5zZXRQb3NpdGlvbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybS5fcG9zaXRpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBTY2VuZUdyYXBoLmhpZXJhcmNoeS5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5nZXRUcmFuc2Zvcm0oKS5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2Zvcm07XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2FtZXJhKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vQ2FtZXJhLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBWaWV3cG9ydCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L3NjcmVlbic7XG5cbi8qKlxuICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRvIGludGVyYWN0IHdpdGggdGhlIEhUTUwgY2FudmFzXG4gKi9cbmNsYXNzIENhbnZhcyB7XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgaWYoIXRoaXMuX2NvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IFZpZXdwb3J0LndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IFZpZXdwb3J0LmhlaWdodDtcblxuICAgICAgICAgICAgdGhpcy5fY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYSBsaW5lIG9uIHRoZSBzY3JlZW5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yMSBcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yMiBcbiAgICAgKi9cbiAgICBkcmF3TGluZSh2ZWN0b3IxLCB2ZWN0b3IyLCBjb2xvciA9ICdncmVlbicpIHtcbiAgICAgICAgY29uc3QgYyA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICBjLm1vdmVUbyh2ZWN0b3IxLngsIHZlY3RvcjEueSk7XG4gICAgICAgIGMubGluZVRvKHZlY3RvcjIueCwgdmVjdG9yMi55KTtcbiAgICAgICAgYy5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhbnZhcygpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZW5naW5lL2xpYnJhcnkvc2NyZWVuL0NhbnZhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGJyb3dzZXIgd2luZG93XG4gKi9cbmNsYXNzIFZpZXdwb3J0IHtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3cG9ydFdpZHRoID0gODAwLCB2aWV3cG9ydEhlaWdodCA9IDQwMCkge1xuICAgICAgICB0aGlzLl9icm93c2VySGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5fYnJvd3NlcldpZHRoID0gMDtcbiAgICAgICAgdGhpcy5fcmVjYWxjdWxhdGVTY3JlZW4oKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVjYWxjdWxhdGVTY3JlZW4uYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnJvd3NlcldpZHRoO1xuICAgIH1cblxuICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9icm93c2VySGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCBzY3JlZW4oKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBnZXQgb3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihcbiAgICAgICAgICAgIHRoaXMud2lkdGggLyAyLFxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgLyAyLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9yZWNhbGN1bGF0ZVNjcmVlbigpIHtcbiAgICAgICAgdGhpcy5fYnJvd3NlckhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy5fYnJvd3NlcldpZHRoICA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZpZXdwb3J0KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vVmlld3BvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcblxuLyoqXG4gKiBTaW5nbGV0b24gdG8gaG9sZCBhbGwgcmVmZXJlbmNlcyB0byBhbGwgaW5zdGFudGlhdGVkIEdhbWVPYmplY3RzXG4gKi9cbmNsYXNzIFNjZW5lR3JhcGgge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBhbiBvcmRlcmVkIGxpc3QgKGFycmF5KSBvZiBhbGwgR2FtZU9iamVjdHNcbiAgICAgICAgdGhpcy5faGllcmFyY2h5ID0gW107XG5cbiAgICAgICAgLy8gYSB1bmlxdWUgaWQgdG8gR2FtZU9iamVjdCBtYXBwaW5nXG4gICAgICAgIHRoaXMuX2dhbWVPYmplY3RzID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIGdldCBoaWVyYXJjaHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaWVyYXJjaHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgR2FtZU9iamVjdCB0aGF0IGJlbG9uZ3MgdG8gdGhlIGdpdmVuIGlkXG4gICAgICogXG4gICAgICogQHBhcmFtIHsqfSBpZCBcbiAgICAgKi9cbiAgICBnZXQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3RzLmdldChpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IEdhbWVPYmplY3RcbiAgICAqIFxuICAgICogQHR5cGUge3N0cmluZ30gaWQgICAgICAgICBOYW1lL2lkZW50aWZpZXIgb2YgdGhlIG9iamVjdFxuICAgICogQHR5cGUge29iamVjdH0gY29uZmlnICAgICBHYW1lT2JqZWN0IHNldHRpbmdzXG4gICAgKi9cbiAgICBpbnN0YW50aWF0ZShpZCwgY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IHsgXG4gICAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWN0b3IoMCwgMCksXG4gICAgICAgICAgICBjb21wb25lbnRzID0gW10sXG4gICAgICAgICAgICBzcHJpdGUgPSB7fSxcbiAgICAgICAgICAgIG9yZGVyID0gMCxcbiAgICAgICAgICAgIGNvbGxpZGVyID0gbnVsbCxcbiAgICAgICAgfSA9IGNvbmZpZztcblxuICAgICAgICBpZihpZCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEluc3RhbnRpYXRpb24gZmFpbGVkOiBubyB1bmlxdWUgaWQgZ2l2ZW4gZm9yICR7dHlwZShnYW1lT2JqZWN0KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLl9nYW1lT2JqZWN0cy5nZXQoaWQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEluc3RhbnRpYXRpb24gZmFpbGVkOiBhIEdhbWVPYmplY3QgYWxyZWFkeSBleGlzdHMgd2l0aCB0aGUgbmFtZSAke2lkfWApXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb2JqID0gbmV3IEdhbWVPYmplY3QoaWQsIHBvc2l0aW9uKTtcbiAgICAgICAgaWYoY29sbGlkZXIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faGllcmFyY2h5LnB1c2gob2JqKTtcbiAgICAgICAgdGhpcy5fZ2FtZU9iamVjdHMuc2V0KGlkLCBvYmopO1xuXG4gICAgICAgIGlmKHNwcml0ZS5hc3NldHMpIHtcbiAgICAgICAgICAgIG9iai5zZXRTcHJpdGUoc3ByaXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnROYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBjb21wb25lbnROYW1lKG9iaik7XG4gICAgICAgICAgICBvYmouYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9iai5jcmVhdGVEb20oaWQsIG9yZGVyKTtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRha2VzIGluIGFuIGFycmF5IG9mIEdhbWVPYmplY3RzIGFuZCByZW1vdmVzIHRoZW0gYWxsIFxuICAgICAqIGZyb20gdGhlIGhpZXJhcmNoeSBpbW1lZGlhdGVseVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGdhbWVPYmplY3RzIFxuICAgICAqL1xuICAgIHJlbW92ZUJhdGNoKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGdhbWVPYmplY3RzLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVPYmplY3RzLmRlbGV0ZShvYmouaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5faGllcmFyY2h5ID0gdGhpcy5faGllcmFyY2h5LmZpbHRlcihvYmogPT4gZ2FtZU9iamVjdHMuaW5kZXhPZihvYmopIDwgMCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2NlbmVHcmFwaCgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9TY2VuZUdyYXBoLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5pbXBvcnQgeyBEaXJ0eUZsYWcgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcblxuZXhwb3J0IGludGVyZmFjZSBTcHJpdGVDb25maWcge1xuICAgIGFzc2V0czogQXJyYXk8c3RyaW5nPjtcbiAgICBkaW1lbnNpb25zOiBWZWN0b3I7XG4gICAgb2Zmc2V0PzogVmVjdG9yO1xuICAgIHRpbWluZz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFNwcml0ZSBpbXBsZW1lbnRzIERpcnR5RmxhZyB7XG5cbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbiBvZiB0aGUgcGFyZW50IEdhbWVPYmplY3RcbiAgICAgKi9cbiAgICBwcml2YXRlIF9vcmlnaW46IFZlY3RvclxuXG4gICAgLyoqXG4gICAgICogRGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIHRoZSBkcmF3IHBvc2l0aW9uIGlzIG9mZnNldCBieVxuICAgICAqL1xuICAgIHByaXZhdGUgX29mZnNldDogVmVjdG9yO1xuXG4gICAgLyoqXG4gICAgICogU2l6ZSBvZiB0aGUgc3ByaXRlJ3MgcmVjdGFuZ2xlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZGltZW5zaW9uczogVmVjdG9yO1xuXG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgaW1hZ2UgcGF0aHMgdG8gZHJhd1xuICAgICAqL1xuICAgIHByaXZhdGUgX2Fzc2V0czogQXJyYXk8c3RyaW5nPjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBET00gdGhhdCB0aGlzIHNwcml0ZSByZXByZXNlbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBMYXN0IHZlY3RvciBwb3NpdGlvbiB0aGlzIHNwcml0ZSB3YXMgZHJhd24gYXRcbiAgICAgKi9cbiAgICBwcml2YXRlIF9sYXN0UG9zaXRpb246IFZlY3RvcjtcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHNwcml0ZSBmcmFtZSBjaGFuZ2VzXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdGltaW5nOiBudW1iZXIgPSAxNTA7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGZyYW1lIG9mIHRoZSBhc3NldCBhcnJheSB0byBkcmF3XG4gICAgICovXG4gICAgcHJpdmF0ZSBfZnJhbWVJbmRleDogbnVtYmVyID0gMDtcblxuICAgIC8qKlxuICAgICAqIERyYXcgdGltZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIF9hbmltYXRpb25UaW1lcjogbnVtYmVyO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihvcmlnaW46IFZlY3RvciwgY29uZmlnOiBTcHJpdGVDb25maWcpIHtcbiAgICAgICAgdGhpcy5fb3JpZ2luID0gb3JpZ2luO1xuXG4gICAgICAgIHRoaXMuX2Fzc2V0cyA9IGNvbmZpZy5hc3NldHM7XG4gICAgICAgIHRoaXMuX2RpbWVuc2lvbnMgPSBjb25maWcuZGltZW5zaW9ucztcbiAgICAgICAgdGhpcy5fb2Zmc2V0ID0gY29uZmlnLm9mZnNldCB8fCBWZWN0b3Iub3JpZ2luO1xuXG4gICAgICAgIC8vIGlmIG1vcmUgdGhhbiBvbmUgaW1hZ2UgcGF0aCBpcyBnaXZlbiwgdHJlYXQgdGhpcyBzcHJpdGUgYXMgYW4gYW5pbWF0ZWQgc3ByaXRlXG4gICAgICAgIGlmKGNvbmZpZy5hc3NldHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5fZnJhbWVJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb25UaW1lciA9IHNldEludGVydmFsKHRoaXMuX3VwZGF0ZUZyYW1lLmJpbmQodGhpcyksIHRoaXMuX3RpbWluZyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0UG9zaXRpb24gPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIERPTSB0aGF0IGhvbGRzIHRoaXMgc3ByaXRlXG4gICAgICovXG4gICAgcHVibGljIGFwcGVuZERvbSgpIDogdm9pZCB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3ByaXRlJyk7XG4gICAgICAgIGVsZW1lbnQuaWQgPSBgc3ByaXRlXyR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YDtcbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuX2RpbWVuc2lvbnMueDtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLl9kaW1lbnNpb25zLnk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHRoaXMuX29yaWdpbi54O1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHRoaXMuX29yaWdpbi55O1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLl9hc3NldHNbMF19KWA7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgRE9NIHBvc2l0aW9uIG9mIHRoZSBTcHJpdGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gb3JpZ2luIFxuICAgICAqL1xuICAgIHB1YmxpYyByZW5kZXIob3JpZ2luOiBWZWN0b3IsIHNjYWxlID0gMSkgOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeCA9IG9yaWdpbi54ICsgdGhpcy5fb2Zmc2V0Lng7XG4gICAgICAgIGNvbnN0IHkgPSBvcmlnaW4ueSArIHRoaXMuX29mZnNldC55O1xuXG4gICAgICAgIGlmKHggPT09IHRoaXMuX2xhc3RQb3NpdGlvbi54ICYmIHkgPT09IHRoaXMuX2xhc3RQb3NpdGlvbi55KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmxlZnQgPSB4O1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnRvcCA9IC15OyAgIC8vIGZsaXAgWSBiZWNhdXNlIHRoZSBicm93c2VyIFkgaXMgcmV2ZXJzZWRcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuX2RpbWVuc2lvbnMueCAqIHNjYWxlO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuX2RpbWVuc2lvbnMueSAqIHNjYWxlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fb3JpZ2luID0gb3JpZ2luO1xuICAgICAgICB0aGlzLl9sYXN0UG9zaXRpb24gPSBuZXcgVmVjdG9yKHgsIHkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZUZyYW1lKCkgOiB2b2lkIHtcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlIHVzaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpXG4gICAgICAgIHRoaXMuX2ZyYW1lSW5kZXggPSArK3RoaXMuX2ZyYW1lSW5kZXggJSB0aGlzLl9hc3NldHMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLl9hc3NldHNbdGhpcy5fZnJhbWVJbmRleF19KWA7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE9mZnNldCh2YWx1ZTogVmVjdG9yKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9pc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RGltZW5zaW9ucyh2YWx1ZTogVmVjdG9yKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9pc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9TcHJpdGUudHMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zZm9ybSB7XG5cbiAgICBwcml2YXRlIF9wb3NpdGlvbjogVmVjdG9yO1xuICAgIHByaXZhdGUgX3JvdGF0aW9uOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfc2NhbGU6IG51bWJlcjtcbiAgICBwcml2YXRlIF9sb2NhbFBvc2l0aW9uOiBWZWN0b3IgPSBWZWN0b3Iub3JpZ2luO1xuXG4gICAgcHJpdmF0ZSBfcGFyZW50OiBUcmFuc2Zvcm0gPSBudWxsO1xuICAgIHByaXZhdGUgX2NoaWxkcmVuOiBUcmFuc2Zvcm1bXTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHRyYW5zZm9ybSBuZWVkcyBhIHJlZHJhd1xuICAgICAqL1xuICAgIHByaXZhdGUgX2lzRGlydHk6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHBvc2l0aW9uOiBWZWN0b3IgPSBWZWN0b3Iub3JpZ2luLFxuICAgICAgICByb3RhdGlvbjogbnVtYmVyID0gMCxcbiAgICAgICAgc2NhbGU6IG51bWJlciA9IDEsXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuX3JvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMuX3NjYWxlID0gc2NhbGU7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgICB9XG4gICAgc2V0UG9zaXRpb24odmFsdWU6IFZlY3RvcikgOiB2b2lkIHtcbiAgICAgICAgaWYodmFsdWUueCA9PT0gdGhpcy5fcG9zaXRpb24ueCAmJiB2YWx1ZS55ID09PSB0aGlzLl9wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkaWZmID0gdmFsdWUuc3VidHJhY3QodGhpcy5fcG9zaXRpb24pO1xuXG4gICAgICAgIC8vIGlmIHRoaXMgR2FtZU9iamVjdCBtb3ZlZCwgdXBkYXRlIGl0cyBsb2NhbCBwb3NpdGlvbiByZWxhdGl2ZSB0b1xuICAgICAgICAvLyBpdHMgcGFyZW50XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsdWU7XG4gICAgICAgIGlmKHRoaXMuX3BhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5fbG9jYWxQb3NpdGlvbiA9IHZhbHVlLnN1YnRyYWN0KHRoaXMuX3BhcmVudC5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gaWYgdGhpcyBHYW1lT2JqZWN0IGhhcyBjaGlsZHJlbiwgdXBkYXRlIHRoZWlyIHBvc2l0aW9uc1xuICAgICAgICBpZih0aGlzLl9jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IobGV0IGNoaWxkIG9mIHRoaXMuX2NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuc2V0UG9zaXRpb24oY2hpbGQuZ2V0UG9zaXRpb24oKS5hZGQoZGlmZikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0UGFyZW50KCkgOiBUcmFuc2Zvcm0ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgIH1cbiAgICBzZXRQYXJlbnQodHJhbnNmb3JtOiBUcmFuc2Zvcm0pIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy5fbG9jYWxQb3NpdGlvbiA9IHRoaXMuX3Bvc2l0aW9uLnN1YnRyYWN0KHRyYW5zZm9ybS5nZXRQb3NpdGlvbigpKTtcbiAgICB9XG5cbiAgICBnZXRDaGlsZHJlbigpIDogQXJyYXk8VHJhbnNmb3JtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcbiAgICB9XG4gICAgYWRkQ2hpbGQodHJhbnNmb3JtOiBUcmFuc2Zvcm0pIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2godHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgVmVjdG9yIG9mIHRoZSByZWxhdGl2ZSBkaXN0YW5jZSB0byB0aGlzIFRyYW5zZm9ybSdzIHBhcmVudFxuICAgICAqL1xuICAgIGdldExvY2FsUG9zaXRpb24oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbFBvc2l0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3J0Y3V0IG1ldGhvZCBmb3IgYWRkaW5nIHRoZSBnaXZlbiB2ZWN0b3IgdG8gdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmFsdWUgXG4gICAgICovXG4gICAgdHJhbnNsYXRlKHZhbHVlOiBWZWN0b3IpIDogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5ld1BvcyA9IHRoaXMuX3Bvc2l0aW9uLmFkZCh2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24obmV3UG9zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBUcmFuc2Zvcm0gYXMgJ2NsZWFuJy4gV2hlbiBpbiBhICdjbGVhbicgc3RhdGUsIHRoZSBUcmFuc2Zvcm1cbiAgICAgKiB3aWxsIG5vdCByZWRyYXcgdW50aWwgaXRzIG1hbmlwdWxhdGVkIGFnYWluIChtb3ZlLCBzY2FsZSwgcm90YXRlKVxuICAgICAqL1xuICAgIGNsZWFuKCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNEaXJ0eSA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBGb3JjZXMgYSByZS1kcmF3XG4gICAgICovXG4gICAgZGlydHkoKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9pc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIFRyYW5zZm9ybSBuZWVkcyB0byBiZSByZWRyYXduIGR1ZSB0byBhIG1hbmlwdWxhdGlvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNEaXJ0eSgpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RpcnR5O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL1RyYW5zZm9ybS50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9pbnB1dCc7XG5pbXBvcnQgeyBWaWV3cG9ydCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L3NjcmVlbic7XG5pbXBvcnQgeyBNYXRocyB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcblxuZXhwb3J0IGNsYXNzIFBsYW5lTW92ZW1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByaXZhdGUgX3ZlbG9jaXR5OiBWZWN0b3IgPSBWZWN0b3Iub3JpZ2luO1xuXG4gICAgcHJvdGVjdGVkIG9uSW5zdGFudGlhdGUoKSA6IHZvaWQge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25VcGRhdGUodGltZXN0ZXA6IG51bWJlcikgOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gdGhpcy5nYW1lT2JqZWN0LmdldFRyYW5zZm9ybSgpO1xuICAgICAgICBsZXQgcG9zID0gdHJhbnNmb3JtLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgaWYoS2V5Ym9hcmQuZ2V0S2V5UHJlc3MoS2V5Ym9hcmQuRCkpIHtcbiAgICAgICAgICAgIHBvcyA9IHBvcy5hZGQobmV3IFZlY3Rvcig0LCAwKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoS2V5Ym9hcmQuZ2V0S2V5UHJlc3MoS2V5Ym9hcmQuQSkpIHtcbiAgICAgICAgICAgIHBvcyA9IHBvcy5hZGQobmV3IFZlY3RvcigtNCwgMCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmKEtleWJvYXJkLmdldEtleVByZXNzKEtleWJvYXJkLlcpKSB7XG4gICAgICAgICAgICBwb3MgPSBwb3MuYWRkKG5ldyBWZWN0b3IoMCwgNCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmKEtleWJvYXJkLmdldEtleVByZXNzKEtleWJvYXJkLlMpKSB7XG4gICAgICAgICAgICBwb3MgPSBwb3MuYWRkKG5ldyBWZWN0b3IoMCwgLTQpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdHJhbnNmb3JtLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dhbWVzL2ZsYXBweS9jb21wb25lbnRzL1BsYW5lTW92ZW1lbnQudHMiLCJuYW1lc3BhY2UgSW5wdXQge1xuXG4gICAgLyoqXG4gICAgICogUmVwcmVzZW50cyBhIGtleWJvYXJkIGtleVxuICAgICAqL1xuICAgIGV4cG9ydCBlbnVtIEtleSB7XG4gICAgICAgIEEgPSA2NSxcbiAgICAgICAgVyA9IDg3LFxuICAgICAgICBTID0gODMsXG4gICAgICAgIEQgPSA2OCxcbiAgICAgICAgU1BBQ0VCQVIgPSAzMixcbiAgICAgICAgQVJST1dfTEVGVCA9IDM3LFxuICAgICAgICBBUlJPV19VUCA9IDM4LFxuICAgICAgICBBUlJPV19SSUdIVCA9IDM5LFxuICAgICAgICBBUlJPV19ET1dOID0gNDAsXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlcHJlc2VudHMga2V5IHByZXNzLCBrZXkgZG93biwgZXRjIGV2ZW50IGRhdGFcbiAgICAgKi9cbiAgICBpbnRlcmZhY2UgS2V5Ym9hcmRFdmVudCB7XG4gICAgICAgIGtleUNvZGU6IG51bWJlcjtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBpbnRlcmFjdGlvbiB3aXRoIHRoZSBrZXlib2FyZCBhbmQgcmV0cmlldmluZ1xuICAgICAqIHByZXNzIHZhbHVlc1xuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBLZXlib2FyZCB7XG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2tleURvd25WYWx1ZXM6IE1hcDxLZXksIG51bWJlcj4gPSBuZXcgTWFwKCk7XG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2tleVByZXNzQ29tcGxldGU6IE1hcDxLZXksIGJvb2xlYW4+ID0gbmV3IE1hcCgpO1xuICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICogU2luZ2xldG9uIHNpbmNlIHdlIG9ubHkgd2FudCBvbmUgbG9jYWwgS2V5Ym9hcmQgdG8gZXhpc3RcbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogS2V5Ym9hcmQ7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyB0aGlzKCkpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bik7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5VXApO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIGtleSBkb3duIGV2ZW50c1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBcbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgX29uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkgOiB2b2lkIHtcbiAgICAgICAgICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG4gICAgICAgICAgICB0aGlzLl9rZXlEb3duVmFsdWVzLnNldChrZXlDb2RlLCAxKTtcbiAgICBcbiAgICAgICAgICAgIGlmKHRoaXMuX2tleVByZXNzQ29tcGxldGUuZ2V0KGtleUNvZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5RG93blZhbHVlcy5zZXQoa2V5Q29kZSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5UHJlc3NDb21wbGV0ZS5zZXQoa2V5Q29kZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIGtleSB1cCBldmVudHNcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIF9vbktleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA6IHZvaWQge1xuICAgICAgICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcbiAgICAgICAgICAgIHRoaXMuX2tleURvd25WYWx1ZXMuc2V0KGtleUNvZGUsIDApO1xuICAgICAgICAgICAgdGhpcy5fa2V5UHJlc3NDb21wbGV0ZS5zZXQoa2V5Q29kZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICBcbiAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIGN1cnJlbnQga2V5cHJlc3MgdmFsdWUgb2YgdGhlIGdpdmVuIGtleVxuICAgICAgICAgKiAoMCA9IG5vdCBwcmVzc2VkIHwgMSA9IGtleSBkb3duKVxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXkgXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0S2V5RG93bihrZXlDb2RlOiBLZXkpIDogbnVtYmVyIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fa2V5RG93blZhbHVlcy5nZXQoa2V5Q29kZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgfHwgMDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICogU2FtZSBhcyBnZXRLZXlEb3duKCkgZXhjZXB0IHRvZ2dsZXMgdGhlIHZhbHVlIHRvIDBcbiAgICAgICAgICogYWZ0ZXIgbGlzdGVuaW5nXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0S2V5UHJlc3Moa2V5Q29kZTogS2V5KSA6IG51bWJlciB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2tleURvd25WYWx1ZXMuZ2V0KGtleUNvZGUpO1xuICAgICAgICAgICAgaWYodmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5UHJlc3NDb21wbGV0ZS5zZXQoa2V5Q29kZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvaW5wdXQvS2V5Ym9hcmQudHMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0LCBDb21wb25lbnQsIFNjZW5lR3JhcGggfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvaW5wdXQnO1xuaW1wb3J0IHsgVmlld3BvcnQsIENhbWVyYSB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L3NjcmVlbic7XG5cbmV4cG9ydCBjbGFzcyBTY2VuZU1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByaXZhdGUgX3JvY2tMaXN0OiBBcnJheTxHYW1lT2JqZWN0PiA9IFtdO1xuICAgIHByaXZhdGUgX3Njcm9sbFNwZWVkOiBWZWN0b3IgPSBWZWN0b3Iub3JpZ2luO1xuXG4gICAgcHJvdGVjdGVkIG9uSW5zdGFudGlhdGUoKSA6IHZvaWQge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBTY2VuZUdyYXBoLmluc3RhbnRpYXRlKCdiYWNrZ3JvdW5kU2t5JytpLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoODAwICogaSwgMCksXG4gICAgICAgICAgICAgICAgb3JkZXI6IC05OTksXG4gICAgICAgICAgICAgICAgc3ByaXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0czogWydhc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nJ10sXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpbWluZzogMTUwLFxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiBuZXcgVmVjdG9yKDgwMCwgNDgwKSxcbiAgICAgICAgICAgICAgICAgICAgLy8gb2Zmc2V0OiBuZXcgVmVjdG9yKDAsIDApLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29tcG9uZW50czogW1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvY2sgPSBTY2VuZUdyYXBoLmluc3RhbnRpYXRlKCdyb2NrJywge1xuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoMzUwLCAtVmlld3BvcnQuaGVpZ2h0ICsgMjM5KSxcbiAgICAgICAgICAgIHNwcml0ZToge1xuICAgICAgICAgICAgICAgIGFzc2V0czogWydhc3NldHMvaW1hZ2VzL3JvY2tVcC5wbmcnXSxcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiBuZXcgVmVjdG9yKDEwOCwgMjM5KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIFNjZW5lR3JhcGguaW5zdGFudGlhdGUoJ2dyb3VuZEJvdHRvbScraSwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDgwOCAqIGksIC1WaWV3cG9ydC5oZWlnaHQgKyA3MSksXG4gICAgICAgICAgICAgICAgc3ByaXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0czogWydhc3NldHMvaW1hZ2VzL2dyb3VuZERpcnQucG5nJ10sXG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM6IG5ldyBWZWN0b3IoODA4LCA3MSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2Nyb2xsU3BlZWQgPSBuZXcgVmVjdG9yKDMsIDApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblVwZGF0ZSh0aW1lc3RlcDogbnVtYmVyKSA6IHZvaWQge1xuICAgICAgICAvLyBsZXQgY2FtZXJhUG9zID0gQ2FtZXJhLnRyYW5zZm9ybS5nZXRQb3NpdGlvbigpLmFkZCh0aGlzLl9zY3JvbGxTcGVlZCk7XG4gICAgICAgIC8vIGNhbWVyYVBvcyA9IGNhbWVyYVBvcy5tdWx0aXBseSh0aW1lc3RlcCk7XG5cbiAgICAgICAgLy8gQ2FtZXJhLnRyYW5zZm9ybS5zZXRQb3NpdGlvbihjYW1lcmFQb3MpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nYW1lcy9mbGFwcHkvY29tcG9uZW50cy9TY2VuZU1hbmFnZXIudHMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJveENvbGxpZGVyIH0gZnJvbSAnLi9Cb3hDb2xsaWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENpcmNsZUNvbGxpZGVyIH0gZnJvbSAnLi9DaXJjbGVDb2xsaWRlcic7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbmdpbmUvbGlicmFyeS9jb2xsaXNpb25zL2NvbGxpZGVycy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29sbGlkYWJsZSB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMnO1xuaW1wb3J0IHsgQm91bmRpbmdCb3ggfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94Q29sbGlkZXIgZXh0ZW5kcyBDb2xsaWRhYmxlIHtcbiAgICBjb25zdHJ1Y3Rvcihib3VuZGluZ0JveCkge1xuICAgICAgICB0aGlzLl9ib3VuZGluZ0JveCA9IGJvdW5kaW5nQm94O1xuICAgIH1cblxuICAgIGdldCBib3VuZGluZ0JveCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kaW5nQm94O1xuICAgIH1cblxuICAgIGdldFR5cGUoKSB7XG4gICAgICAgIHJldHVybiBDb2xsaWRhYmxlLlNIQVBFX0JPWDtcbiAgICB9XG5cbiAgICBnZXRSZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdCAgICA6IHRoaXMuX2JvdW5kaW5nQm94LmxlZnQsXG4gICAgICAgICAgICByaWdodCAgIDogdGhpcy5fYm91bmRpbmdCb3gucmlnaHQsXG4gICAgICAgICAgICB0b3AgICAgIDogdGhpcy5fYm91bmRpbmdCb3gudG9wLFxuICAgICAgICAgICAgYm90dG9tICA6IHRoaXMuX2JvdW5kaW5nQm94LmJvdHRvbSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb2xsaWRlc1dpdGgoY29sbGlkYWJsZSkge1xuICAgICAgICBzd2l0Y2goY29sbGlkYWJsZS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgQ29sbGlkYWJsZS5TSEFQRV9CT1g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjdFRvUmVjdENoZWNrKGNvbGxpZGFibGUuZ2V0UmVjdCgpKTtcblxuICAgICAgICAgICAgY2FzZSBDb2xsaWRhYmxlLlNIQVBFX0NJUkNMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWN0VG9DaXJjbGVDaGVjayhjb2xsaWRhYmxlLmdldENpcmNsZSgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGNvbGxpc2lvbiBkZXRlY3Rpb24gYWdhaW5zdCBhbm90aGVyIHJlY3RhbmdsZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWN0IFxuICAgICAqL1xuICAgIHJlY3RUb1JlY3RDaGVjayhyZWN0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICByZWN0LnJpZ2h0ICA+IHRoaXMuX2JvdW5kaW5nQm94LmxlZnQgfHxcbiAgICAgICAgICAgIHJlY3QubGVmdCAgIDwgdGhpcy5fYm91bmRpbmdCb3gucmlnaHQgfHxcbiAgICAgICAgICAgIHJlY3QudG9wICAgID4gdGhpcy5fYm91bmRpbmdCb3guYm90dG9tIHx8XG4gICAgICAgICAgICByZWN0LmJvdHRvbSA8IHRoaXMuX2JvdW5kaW5nQm94LnRvcFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlY3RUb0NpcmNsZUNoZWNrKGNpcmNsZSkge1xuICAgICAgICAvLyByZXR1cm4gKFxuXG4gICAgICAgIC8vICk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMvY29sbGlkZXJzL0JveENvbGxpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZW51bSBDb2xsaWRlclNoYXBlIHtcbiAgICBCT1gsXG4gICAgQ0lSQ0xFLFxufVxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb2xsaWRhYmxlIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0eXBlIG9mIGNvbGxpZGFibGUgdGhhdCBzaG91bGQgYmUgY2hlY2tlZFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRUeXBlKCkgOiBDb2xsaWRlclNoYXBlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXRUeXBlKCkgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgZ2V0UmVjdGFuZ2xlKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldFJlY3RhbmdsZSgpIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0Q2lyY2xlKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldENpcmNsZSgpIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgZ2l2ZW4gY29sbGlkYWJsZSBpcyBjdXJyZW50bHkgY29sbGlkaW5nXG4gICAgICogd2l0aCB0aGUgY3VycmVudCBjb2xsaWRhYmxlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Q29sbGlkYWJsZX0gY29sbGlkYWJsZSBcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgY29sbGlkZXNXaXRoKGNvbGxpZGFibGU6IENvbGxpZGFibGUpIDogYm9vbGVhbjtcblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMvQ29sbGlkYWJsZS50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZUNvbGxpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcmlnaW4sIG9mZnNldCwgcmFkaXVzKSB7XG4gICAgICAgIHRoaXMuX29yaWdpbiA9IG9yaWdpbjtcbiAgICAgICAgdGhpcy5fb2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICB0aGlzLl9yYWRpdXMgPSByYWRpdXM7XG4gICAgfVxuXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3JpZ2luLmFkZCh0aGlzLl9vZmZzZXQpO1xuICAgIH1cbiAgICBnZXQgcmFkaXVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmFkaXVzO1xuICAgIH1cblxuXG4gICAgZ2V0VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIENvbGxpZGFibGUuU0hBUEVfQ0lSQ0xFO1xuICAgIH1cblxuICAgIGdldENpcmNsZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb2xsaWRlc1dpdGgoY29sbGlkYWJsZSkge1xuICAgICAgICBzd2l0Y2goY29sbGlkYWJsZS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgQ29sbGlkYWJsZS5TSEFQRV9CT1g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlVG9SZWN0Q2hlY2soY29sbGlkYWJsZS5nZXRSZWN0KCkpO1xuXG4gICAgICAgICAgICBjYXNlIENvbGxpZGFibGUuU0hBUEVfQ0lSQ0xFOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNpcmNsZVRvQ2lyY2xlQ2hlY2soY29sbGlkYWJsZS5nZXRDaXJjbGUoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaXJjbGVUb1JlY3RDaGVjayhyZWN0KSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNpcmNsZVRvQ2lyY2xlQ2hlY2soY2lyY2xlKSB7XG5cbiAgICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbmdpbmUvbGlicmFyeS9jb2xsaXNpb25zL2NvbGxpZGVycy9DaXJjbGVDb2xsaWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==