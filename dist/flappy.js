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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Vector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Maths__ = __webpack_require__(8);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Maths__; });





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoundingBox__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BoundingBox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Component__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DirtyFlag__ = __webpack_require__(10);
/* unused harmony reexport withDirtyFlag */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GameObject__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__GameObject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GameObjectFactory__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__GameObjectFactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SceneGraph__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__SceneGraph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Sprite__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__Sprite__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Transform__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__Transform__["a"]; });










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





class FlappyGame extends __WEBPACK_IMPORTED_MODULE_0_engine_game__["a" /* Game */] {
    onStart() {
        const scene = __WEBPACK_IMPORTED_MODULE_3_engine_library_objects__["d" /* SceneGraph */].instance;
        const sceneManager = scene.instantiate('sceneManager', {
            components: [
                __WEBPACK_IMPORTED_MODULE_2__components_SceneManager__["a" /* SceneManager */],
            ],
        });
        const planeRed = scene.instantiate('plane', {
            position: new __WEBPACK_IMPORTED_MODULE_4_engine_library_maths__["b" /* Vector */](50, -50),
            // collider: BoxCollider,
            sprite: {
                assets: [
                    'assets/images/planeRed1.png',
                ],
                bounds: new __WEBPACK_IMPORTED_MODULE_3_engine_library_objects__["a" /* BoundingBox */](new __WEBPACK_IMPORTED_MODULE_4_engine_library_maths__["b" /* Vector */](50, -50), new __WEBPACK_IMPORTED_MODULE_4_engine_library_maths__["b" /* Vector */](50, 50)),
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
        __WEBPACK_IMPORTED_MODULE_1_engine_library_screen__["a" /* Camera */].instance.transform.setPosition(new __WEBPACK_IMPORTED_MODULE_2_engine_library_maths__["b" /* Vector */](0, 0));
        Object(__WEBPACK_IMPORTED_MODULE_0_engine_library_GameLoop__["a" /* bootGameLoop */])(this.onStart);
    }
    /**
     * Logic to run once after the main game loop is started
     */
    onStart() { }
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
    const hierarchy = __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["d" /* SceneGraph */].instance.hierarchy;
    const corpseObjects = [];
    // loop over a buffer so that newly instantiated objects
    // always start execution from the next frame
    const bufferCount = hierarchy.length;
    for (let i = 0; i < bufferCount; i++) {
        const obj = hierarchy[i];
        // any objects marked for deletion should not be executed
        if (obj.isDestroying()) {
            corpseObjects.push(obj);
            continue;
        }
        obj.onUpdate(timestep);
    }
    // cleanup any objects marked for deletion
    if (corpseObjects.length > 0) {
        __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["d" /* SceneGraph */].instance.removeBatch(corpseObjects);
    }
}
/**
 * Renders every visible GameObject to DOM every frame
 */
function onRender() {
    __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["d" /* SceneGraph */]
        .instance
        .hierarchy
        .forEach(obj => obj.render());
}
/**
 * Starts the game loop
 */
let isBooted = false;
function bootGameLoop(onStart) {
    if (isBooted) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__ = __webpack_require__(0);

/**
 * Represents a rectangle in world-space
 */
class BoundingBox {
    constructor(_origin, _dimensions, _offset = __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["b" /* Vector */].origin) {
        this._origin = _origin;
        this._dimensions = _dimensions;
        this._offset = _offset;
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
    get dimensions() {
        return this._dimensions;
    }
    get offset() {
        return this._offset;
    }
    get origin() {
        return this._origin;
    }
    /**
     * Sets the current position of the Bounding Box
     *
     * @param {Vector} origin
     */
    setOrigin(origin) {
        this._origin = origin;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BoundingBox;



/***/ }),
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * Adds a dirty flag to the decorated class.
 *
 * A dirty flag in this case is used to determine if
 * the decorated class needs to be redrawn in the
 * render cycle.
 */
function withDirtyFlag(Base) {
    return class DirtyFlag extends Base {
        constructor(...args) {
            super(...args);
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
    };
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_screen__ = __webpack_require__(2);


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
    constructor(id, transform) {
        this._isVisible = true;
        this._isDestroying = false;
        this._isDisabled = false;
        this._components = [];
        this._id = id;
        this._transform = transform;
    }
    get id() {
        return this._id;
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
     * @return {HTMLDivElement}
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
     * Sets the HTML element that represents this GameObject
     *
     * @param element
     */
    setElement(element) {
        this._element = element;
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
     * @param {Sprite} config
     */
    setSprite(sprite) {
        this._sprite = sprite;
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
        if (this._isVisible != isVisible) {
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
        if (this._isDisabled || this._isDestroying) {
            return;
        }
        this._components.forEach(c => c.onUpdate(timestep));
    }
    /**
     * Renders the object in world space each game loop frame
     */
    render() {
        if (!this._isVisible || this._isDisabled || this._isDestroying) {
            return;
        }
        let screenSpacePos = null;
        let isTransformDirty = false;
        // only redraw when the Transform has actually moved
        if (this._transform.isDirty()) {
            // the Transform stores our world-space coordinates,
            // but we need to render the object in screen-space
            screenSpacePos = this._getScreenPosition();
            this._element.style.left = screenSpacePos.x.toString();
            this._element.style.top = screenSpacePos.y.toString();
            this._transform.clean();
            isTransformDirty = true;
        }
        // only redraw the sprite if the Sprite or Transform has moved
        if (this._sprite && (isTransformDirty || this._sprite.isDirty())) {
            screenSpacePos = screenSpacePos || this._getScreenPosition();
            this._sprite.render(screenSpacePos);
            this._sprite.clean();
        }
    }
    _getScreenPosition() {
        const position = this._transform.getPosition();
        const cameraPos = __WEBPACK_IMPORTED_MODULE_1_engine_library_screen__["a" /* Camera */].instance.transform.getPosition();
        return new __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["b" /* Vector */](position.x - cameraPos.x, position.y - cameraPos.y);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameObject;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);

class Camera {
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    constructor() {
        this._transform = new __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["f" /* Transform */]();
        // since a camera move needs to update everything in view,
        // set all objects in the viewport as 'dirty' so they get
        // redrawn
        // TODO: viewport culling
        const setPositionFunc = this._transform.setPosition.bind(this._transform);
        this._transform.setPosition = (value) => {
            setPositionFunc(value);
            __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["d" /* SceneGraph */].instance.hierarchy.forEach(obj => {
                obj.getTransform().dirty();
            });
        };
    }
    get transform() {
        return this._transform;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Camera;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_screen__ = __webpack_require__(2);

/**
 * Collection of methods to interact with the HTML canvas
 */
class Canvas {
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    constructor() { }
    getContext() {
        if (!this._context) {
            const canvas = document.getElementById('canvas');
            canvas.width = __WEBPACK_IMPORTED_MODULE_0_engine_library_screen__["b" /* Viewport */].instance.width;
            canvas.height = __WEBPACK_IMPORTED_MODULE_0_engine_library_screen__["b" /* Viewport */].instance.height;
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
/* unused harmony export default */



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
        this.viewportWidth = viewportWidth;
        this.viewportHeight = viewportHeight;
        this._recalculateScreen();
        window.addEventListener('resize', this._recalculateScreen.bind(this));
    }
    static get instance() {
        return this._instance || (this._instance = new this());
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
        return new __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["b" /* Vector */](this.width / 2, this.height / 2);
    }
    /**
     * Re-cache the size of the browser window to prevent reflows/relayouts
     */
    _recalculateScreen() {
        // TODO: execute only during requestAnimationFrame
        this._browserHeight = window.innerHeight;
        this._browserWidth = window.innerWidth;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Viewport;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = makeGameObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);

/**
 * Inserts a new GameObject <div> into the page body
 *
 * @param id        Unique identifier
 * @param zIndex    Basically the object's permanent Z axis coordinate
 */
function injectDom(id, zIndex = 0) {
    const element = document.createElement('div');
    element.id = id;
    element.classList.add('gameObject');
    element.style.zIndex = zIndex.toString();
    document.body.appendChild(element);
    return element;
}
function makeGameObject(id, config) {
    let obj = new __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["c" /* GameObject */](id, new __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["f" /* Transform */](config.position));
    if (config.collider) {
    }
    if (config.sprite && config.sprite.assets) {
        const spriteInstance = new __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["e" /* Sprite */](config.sprite);
        spriteInstance.appendDom();
        obj.setSprite(spriteInstance);
    }
    if (config.components) {
        config.components.forEach(componentName => {
            const component = new componentName(obj);
            obj.addComponent(component);
        });
    }
    obj.setElement(injectDom(id, config.order));
    obj.onInstantiate();
    return obj;
}
function createGameObjectDom() {
    // TODO: move GameObject's DOM injection logic here instead
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);

/**
 * Handles instantiation, destruction and management of all GameObjects
 */
class SceneGraph {
    constructor() {
        /**
         * An ordered array of all GameObjects (regardless of state)
         */
        this._hierarchy = [];
        /**
         * A unique string id to GameObject mapping
         */
        this._gameObjects = new Map();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    get hierarchy() {
        return this._hierarchy;
    }
    /**
     * Gets the GameObject that belongs to the given id
     *
     * @param {string} id
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
        if (id == null) {
            throw new Error('Instantiation failed: no unique id given');
        }
        if (this._gameObjects.get(id)) {
            throw new Error(`Instantiation failed: a GameObject already exists with the name ${id}`);
        }
        const gameObject = Object(__WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["g" /* makeGameObject */])(id, config);
        this._hierarchy.push(gameObject);
        this._gameObjects.set(id, gameObject);
        return gameObject;
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
/* harmony export (immutable) */ __webpack_exports__["a"] = SceneGraph;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__ = __webpack_require__(0);

class Sprite {
    constructor(config) {
        /**
         * Array of image paths to draw
         */
        this._assets = [];
        /**
         * Last vector position this sprite was drawn at
         */
        this._lastPosition = null;
        /**
         * How many milliseconds between sprite frame changes
         */
        this._timing = 150;
        /**
         * Current frame of the asset array to draw
         */
        this._frameIndex = 0;
        this._isDirty = true;
        if (!config.bounds) {
            throw new Error('Sprite instantiation failed: no BoundingBox provided');
        }
        this._boundingBox = config.bounds;
        this._assets = config.assets;
        // if more than one image path is given, treat this sprite as an animated sprite
        if (config.assets && config.assets.length > 1) {
            this._frameIndex = 0;
            this._animationTimer = setInterval(this._updateFrame.bind(this), this._timing);
        }
        this._lastPosition = new __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["b" /* Vector */]();
        this._element = null;
    }
    get bounds() {
        return this._boundingBox;
    }
    /**
     * Creates the DOM that holds this sprite
     */
    appendDom() {
        const bounds = this._boundingBox;
        const element = document.createElement('div');
        element.classList.add('sprite');
        element.id = `sprite_${new Date().getTime()}`;
        if (this._assets.length > 0) {
            element.style.backgroundImage = `url(${this._assets[0]})`;
            element.style.left = bounds.position.x.toString();
            element.style.top = (-bounds.position.y).toString(); // flip Y because the browser Y is reversed
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
    setPosition(origin) {
        this._boundingBox.setOrigin(origin);
    }
    /**
     * Updates the DOM position of the Sprite
     *
     * @param {Vector} origin
     */
    render(origin) {
        // TODO: move render logic into a SpriteRenderer class
        const bounds = this._boundingBox;
        bounds.setOrigin(origin);
        if (bounds.position.x === this._lastPosition.x &&
            bounds.position.y === this._lastPosition.y) {
            return;
        }
        this._element.style.left = bounds.position.x.toString();
        this._element.style.top = (-bounds.position.y).toString(); // flip Y because the browser Y is reversed
        this._element.style.width = (bounds.dimensions.x * 1).toString(); // TODO: replace 1 with scaling
        this._element.style.height = (bounds.dimensions.y * 1).toString(); // TODO: replace 1 with scaling
        this._lastPosition = bounds.position;
    }
    /**
     * Forces a draw of the next sprite in an animation
     */
    _updateFrame() {
        // TODO: update using requestAnimationFrame()
        this._frameIndex = ++this._frameIndex % this._assets.length;
        this._element.style.backgroundImage = `url(${this._assets[this._frameIndex]})`;
    }
    // TODO: refactor this into mixin
    clean() {
        this._isDirty = false;
    }
    dirty() {
        this._isDirty = true;
    }
    isDirty() {
        return this._isDirty;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sprite;



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__ = __webpack_require__(0);

class Transform {
    constructor(position = __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["b" /* Vector */].origin, rotation = 0, scale = 1) {
        this._localPosition = __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["b" /* Vector */].origin;
        this._parent = null;
        this._children = [];
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_engine_library_input__ = __webpack_require__(20);



class PlaneMovement extends __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["b" /* Component */] {
    constructor() {
        super(...arguments);
        this._velocity = __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */].origin;
    }
    onInstantiate() {
    }
    onUpdate(timestep) {
        const transform = this.gameObject.getTransform();
        let pos = transform.getPosition();
        const keyboard = __WEBPACK_IMPORTED_MODULE_2_engine_library_input__["b" /* Keyboard */].instance;
        if (keyboard.getKeyPress(__WEBPACK_IMPORTED_MODULE_2_engine_library_input__["a" /* Key */].D)) {
            pos = pos.add(new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](4, 0));
        }
        if (keyboard.getKeyPress(__WEBPACK_IMPORTED_MODULE_2_engine_library_input__["a" /* Key */].A)) {
            pos = pos.add(new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](-4, 0));
        }
        if (keyboard.getKeyPress(__WEBPACK_IMPORTED_MODULE_2_engine_library_input__["a" /* Key */].W)) {
            pos = pos.add(new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](0, 4));
        }
        if (keyboard.getKeyPress(__WEBPACK_IMPORTED_MODULE_2_engine_library_input__["a" /* Key */].S)) {
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
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Keyboard__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a"]; });



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Key; });
/**
 * Represents a keyboard key
 */
var Key;
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
})(Key || (Key = {}));
/**
 * Handles interaction with the keyboard and retrieving
 * press values
 */
class Keyboard {
    constructor() {
        this._keyDownValues = new Map();
        this._keyPressComplete = new Map();
        window.addEventListener('keydown', this._onKeyDown.bind(this));
        window.addEventListener('keyup', this._onKeyUp.bind(this));
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    destroy() {
        window.removeEventListener('keydown', this._onKeyDown.bind(this));
        window.removeEventListener('keyup', this._onKeyUp.bind(this));
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
/* harmony export (immutable) */ __webpack_exports__["b"] = Keyboard;



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_engine_library_screen__ = __webpack_require__(2);



class SceneManager extends __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["b" /* Component */] {
    constructor() {
        super(...arguments);
        this._rockList = [];
        this._scrollSpeed = __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */].origin;
    }
    onInstantiate() {
        const scene = __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["d" /* SceneGraph */].instance;
        for (let i = 0; i < 2; i++) {
            scene.instantiate('backgroundSky' + i, {
                position: new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](800 * i, 0),
                order: -999,
                sprite: {
                    assets: ['assets/images/background.png'],
                    bounds: new __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["a" /* BoundingBox */](new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](800 * i, 0), new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](800, 480)),
                },
                components: [],
            });
        }
        const rock = scene.instantiate('rock', {
            position: new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](350, -__WEBPACK_IMPORTED_MODULE_2_engine_library_screen__["b" /* Viewport */].instance.height + 239),
            sprite: {
                assets: ['assets/images/rockUp.png'],
                bounds: new __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["a" /* BoundingBox */](new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](350, -__WEBPACK_IMPORTED_MODULE_2_engine_library_screen__["b" /* Viewport */].instance.height + 239), new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](108, 239)),
            },
        });
        for (let i = 0; i < 2; i++) {
            scene.instantiate('groundBottom' + i, {
                position: new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](808 * i, -__WEBPACK_IMPORTED_MODULE_2_engine_library_screen__["b" /* Viewport */].instance.height + 71),
                sprite: {
                    assets: ['assets/images/groundDirt.png'],
                    bounds: new __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["a" /* BoundingBox */](new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](808 * i, -__WEBPACK_IMPORTED_MODULE_2_engine_library_screen__["b" /* Viewport */].instance.height + 71), new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](808, 71)),
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



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWJkMDM4Mjg3MGUzZjU5MzhkYWQiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvbWF0aHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZXMvZmxhcHB5L2ZsYXBweS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9HYW1lTG9vcC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0JvdW5kaW5nQm94LnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L21hdGhzL1ZlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9tYXRocy9NYXRocy50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0RpcnR5RmxhZy50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvc2NyZWVuL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vQ2FudmFzLnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L3NjcmVlbi9WaWV3cG9ydC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0dhbWVPYmplY3RGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvU2NlbmVHcmFwaC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL1Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL1RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9nYW1lcy9mbGFwcHkvY29tcG9uZW50cy9QbGFuZU1vdmVtZW50LnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L2lucHV0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L2lucHV0L0tleWJvYXJkLnRzIiwid2VicGFjazovLy8uL2dhbWVzL2ZsYXBweS9jb21wb25lbnRzL1NjZW5lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdENkM7QUFFWjtBQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHNDO0FBQ0o7QUFDSTtBQUNGO0FBQ2tCO0FBQ2xCO0FBQ0w7QUFDRzs7Ozs7Ozs7Ozs7Ozs7QUNQTjtBQUNBO0FBQ0k7Ozs7Ozs7Ozs7Ozs7O0FDRmQ7QUFDd0I7QUFDRjtBQUVnQjtBQUMzQjtBQUk5QyxnQkFBaUIsU0FBUSx5REFBSTtJQUN6QixPQUFPO1FBQ0gsTUFBTSxLQUFLLEdBQUcsMEVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDbEMsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7WUFDbkQsVUFBVSxFQUFFO2dCQUNSLDhFQUFZO2FBQ2Y7U0FDSixDQUFDLENBQUM7UUFFSCxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUN4QyxRQUFRLEVBQUUsSUFBSSxvRUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUM3Qix5QkFBeUI7WUFDekIsTUFBTSxFQUFFO2dCQUNKLE1BQU0sRUFBRTtvQkFDSiw2QkFBNkI7aUJBR2hDO2dCQUNELE1BQU0sRUFBRSxJQUFJLDJFQUFXLENBQ25CLElBQUksb0VBQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDbkIsSUFBSSxvRUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDckI7YUFFSjtZQUNELFVBQVUsRUFBRTtnQkFDUixnRkFBYTthQUNoQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQUVELE1BQU0sSUFBSSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7QUFDOUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOzs7Ozs7Ozs7OztBQ3pDTDtBQUUwQztBQUNSO0FBQ0Q7QUFFOUM7OztHQUdHO0FBQ0c7SUFFRjs7T0FFRztJQUNILFVBQVU7UUFDTixxRUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksb0VBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxxRkFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxPQUFPLEtBQUksQ0FBQztDQUVmO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQ3pCbUQ7QUFFcEQ7Ozs7R0FJRztBQUNILE1BQU0sWUFBWSxHQUFXLEVBQUUsQ0FBQztBQUVoQzs7OztHQUlHO0FBQ0gsTUFBTSxTQUFTLEdBQVcsQ0FBQyxDQUFDO0FBRTVCOzs7O0dBSUc7QUFDSCxJQUFJLFFBQWdCLENBQUM7QUFHckI7Ozs7O0dBS0c7QUFDSDtJQUNJLG9EQUFvRDtJQUNwRCxnREFBZ0Q7SUFDaEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQy9CLE1BQU0sT0FBTyxHQUFHLFdBQVcsR0FBRyxRQUFRLENBQUM7SUFDdkMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRWxELFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNmLFFBQVEsRUFBRSxDQUFDO0lBRVgsUUFBUSxHQUFHLFdBQVcsQ0FBQztJQUN2QixxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBR0Q7O0dBRUc7QUFDSCxrQkFBa0IsUUFBZ0I7SUFDOUIsTUFBTSxTQUFTLEdBQUcsMEVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ2hELE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUV6Qix3REFBd0Q7SUFDeEQsNkNBQTZDO0lBQzdDLE1BQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDckMsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDbEMsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXpCLHlEQUF5RDtRQUN6RCxFQUFFLEVBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLFFBQVEsQ0FBQztRQUNiLENBQUM7UUFDRCxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCwwQ0FBMEM7SUFDMUMsRUFBRSxFQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQiwwRUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQztBQUNMLENBQUM7QUFFRDs7R0FFRztBQUNIO0lBQ0ksMEVBQVU7U0FDTCxRQUFRO1NBQ1IsU0FBUztTQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFFRDs7R0FFRztBQUNILElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztBQUNmLHNCQUF1QixPQUFpQjtJQUMxQyxFQUFFLEVBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNWLE1BQU0sQ0FBQztJQUNYLENBQUM7SUFDRCxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sRUFBRSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7Ozs7O0FDN0Y2QztBQUU5Qzs7R0FFRztBQUNXO0lBQ1YsWUFDWSxPQUFlLEVBQ2YsV0FBbUIsRUFDbkIsVUFBa0Isb0VBQU0sQ0FBQyxNQUFNO1FBRi9CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUF3QjtJQUN4QyxDQUFDO0lBRUosSUFBSSxRQUFRO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELElBQUksS0FBSztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxJQUFJLEdBQUc7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsSUFBSSxNQUFNO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELElBQUksVUFBVTtRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxNQUFNO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxTQUFTLENBQUMsTUFBYztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0NBQ0o7QUFBQTtBQUFBOzs7Ozs7Ozs7QUMvQzRDO0FBRTdDOztHQUVHO0FBQ1c7SUFDVixZQUNZLEtBQWEsQ0FBQyxFQUNkLEtBQWEsQ0FBQztRQURkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQ3ZCLENBQUM7SUFFSjs7OztPQUlHO0lBQ0gsSUFBSSxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksU0FBUztRQUNULE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM3QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksTUFBTTtRQUNOLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxHQUFHLENBQUMsTUFBYztRQUNyQixNQUFNLENBQUMsSUFBSSxNQUFNLENBQ2IsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUNqQixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQ3BCLENBQUM7SUFDTixDQUFDO0lBRU0sUUFBUSxDQUFDLE1BQWM7UUFDMUIsTUFBTSxDQUFDLElBQUksTUFBTSxDQUNiLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFDakIsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUNwQixDQUFDO0lBQ04sQ0FBQztJQUVNLFFBQVEsQ0FBQyxNQUFjO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FDYixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FDbEIsQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBVztRQUNqQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQ2IsbUVBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDakMsbUVBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU0sS0FBSyxJQUFJO1FBQ1gsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxNQUFNLEtBQUssS0FBSztRQUNaLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELE1BQU0sS0FBSyxFQUFFO1FBQ1QsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsTUFBTSxLQUFLLElBQUk7UUFDWCxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELE1BQU0sS0FBSyxNQUFNO1FBQ2IsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQWUsRUFBRSxPQUFlO1FBQzlDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztDQUNKO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQ2hIRDtBQUFBOzs7Ozs7O0dBT0c7QUFDRyxnQkFBaUIsR0FBVyxFQUFFLEdBQVc7SUFDM0MsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDbEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUVEOzs7Ozs7OztHQVFHO0FBQ0csZUFBZ0IsS0FBYSxFQUFFLEdBQVcsRUFBRSxHQUFXO0lBQ3pELEVBQUUsRUFBQyxLQUFLLElBQUksR0FBRyxDQUFDO1FBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUM1QixFQUFFLEVBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQztRQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNqQixDQUFDOzs7Ozs7OztBQ3hCRDs7Ozs7O0dBTUc7QUFDVztJQU1WLFlBQVksVUFBc0I7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLFNBQVM7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksTUFBTTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSSxVQUFVO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksYUFBYSxLQUFXLENBQUM7SUFFaEM7O09BRUc7SUFDSSxRQUFRLENBQUMsUUFBZ0IsSUFBVSxDQUFDO0lBRTNDOztPQUVHO0lBQ0ksU0FBUyxLQUFXLENBQUM7Q0FDL0I7QUFBQTtBQUFBOzs7Ozs7OztBQzFERDtBQUFBOzs7Ozs7R0FNRztBQUNXLHVCQUFxRCxJQUFPO0lBQ3RFLE1BQU0sQ0FBQyxlQUFnQixTQUFRLElBQUk7UUFHL0IsWUFBWSxHQUFHLElBQVc7WUFDdEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFIVCxhQUFRLEdBQVksSUFBSSxDQUFDO1FBSW5DLENBQUM7UUFFUyxLQUFLO1lBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQztRQUNTLEtBQUs7WUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDO1FBQ1MsWUFBWSxDQUFDLE9BQWdCO1lBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQzVCLENBQUM7UUFFRCxJQUFJLE9BQU87WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO0tBQ0o7QUFDTCxDQUFDOzs7Ozs7Ozs7O0FDL0I2QztBQUVDO0FBRS9DOztHQUVHO0FBQ1c7SUFZVjs7Ozs7T0FLRztJQUNILFlBQVksRUFBVSxFQUFFLFNBQW9CO1FBZHBDLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFJN0IsZ0JBQVcsR0FBcUIsRUFBRSxDQUFDO1FBU3ZDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQUksRUFBRTtRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7T0FFRztJQUNJLFlBQVk7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxTQUFTO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxPQUFPO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxVQUFVO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksU0FBUztRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksWUFBWTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLFVBQVU7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFVBQVUsQ0FBQyxPQUF1QjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFlBQVksQ0FBQyxTQUFvQjtRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxTQUFTLENBQUMsTUFBYztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxTQUFTLENBQUMsVUFBZ0I7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDckQsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksYUFBYSxDQUFDLFNBQWtCO1FBQ25DLEVBQUUsRUFBQyxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDNUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDaEMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksV0FBVyxDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksT0FBTztRQUNWLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxhQUFhO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUztRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksUUFBUSxDQUFDLFFBQWdCO1FBQzVCLEVBQUUsRUFBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNO1FBQ1QsRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFN0Isb0RBQW9EO1FBQ3BELEVBQUUsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQixvREFBb0Q7WUFDcEQsbURBQW1EO1lBQ25ELGNBQWMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUUzQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUV2RCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXhCLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDO1FBRUQsOERBQThEO1FBQzlELEVBQUUsRUFBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxjQUFjLEdBQUcsY0FBYyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBRTdELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUVMLENBQUM7SUFFTyxrQkFBa0I7UUFDdEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQyxNQUFNLFNBQVMsR0FBRyxxRUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFMUQsTUFBTSxDQUFDLElBQUksb0VBQU0sQ0FDYixRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEVBQ3hCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FDM0IsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQUFBO0FBQUE7Ozs7Ozs7OztBQzlPOEQ7QUFFakQ7SUFFSCxNQUFNLEtBQUssUUFBUTtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFJRDtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx5RUFBUyxFQUFFLENBQUM7UUFFbEMsMERBQTBEO1FBQzFELHlEQUF5RDtRQUN6RCxVQUFVO1FBRVYseUJBQXlCO1FBQ3pCLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNwQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsMEVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0NBQ0o7QUFBQTtBQUFBOzs7Ozs7Ozs7QUM5QmdEO0FBR2pEOztHQUVHO0FBQ1c7SUFFSCxNQUFNLEtBQUssUUFBUTtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFJRCxnQkFBdUIsQ0FBQztJQUV4QixVQUFVO1FBQ04sRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxNQUFNLEdBQVEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsS0FBSyxHQUFHLHVFQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2QyxNQUFNLENBQUMsTUFBTSxHQUFHLHVFQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV6QyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFFBQVEsQ0FBQyxPQUFlLEVBQUUsT0FBZSxFQUFFLEtBQUssR0FBRyxPQUFPO1FBQ3RELE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUNKO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDMUM2QztBQUU5Qzs7R0FFRztBQUNXO0lBV1YsWUFDWSxnQkFBd0IsR0FBRyxFQUMzQixpQkFBeUIsR0FBRztRQUQ1QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixtQkFBYyxHQUFkLGNBQWMsQ0FBYztRQUVwQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBYk0sTUFBTSxLQUFLLFFBQVE7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBYUQsSUFBSSxLQUFLO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksTUFBTTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDTixNQUFNLENBQUMsSUFBSSxvRUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDTixNQUFNLENBQUMsSUFBSSxvRUFBTSxDQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUNsQixDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0JBQWtCO1FBQ2Qsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDNUMsQ0FBQztDQUNKO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQ2hEK0Y7QUFZaEc7Ozs7O0dBS0c7QUFDSCxtQkFBbUIsRUFBVSxFQUFFLFNBQWlCLENBQUM7SUFDN0MsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNoQixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFekMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBRUssd0JBQXlCLEVBQVUsRUFBRSxNQUF3QjtJQUMvRCxJQUFJLEdBQUcsR0FBRyxJQUFJLDBFQUFVLENBQUMsRUFBRSxFQUFFLElBQUkseUVBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUU3RCxFQUFFLEVBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFckIsQ0FBQztJQUVELEVBQUUsRUFBQyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2QyxNQUFNLGNBQWMsR0FBRyxJQUFJLHNFQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzQixHQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxFQUFFLEVBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDdEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekMsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxHQUFHLENBQUMsVUFBVSxDQUFFLFNBQVMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUM7SUFDOUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRXBCLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDZixDQUFDO0FBRUQ7SUFDRywyREFBMkQ7QUFDOUQsQ0FBQzs7Ozs7Ozs7O0FDeERxRjtBQUV0Rjs7R0FFRztBQUNXO0lBT1Y7UUFFQTs7V0FFRztRQUNLLGVBQVUsR0FBc0IsRUFBRSxDQUFDO1FBRTNDOztXQUVHO1FBQ0ssaUJBQVksR0FBNEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQVZuQyxDQUFDO0lBSGpCLE1BQU0sS0FBSyxRQUFRO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQWFELElBQUksU0FBUztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsR0FBRyxDQUFDLEVBQVU7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7OztNQUtFO0lBQ0YsV0FBVyxDQUFDLEVBQVUsRUFBRSxNQUF3QjtRQUM1QyxFQUFFLEVBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDWixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUNELEVBQUUsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxtRUFBbUUsRUFBRSxFQUFFLENBQUM7UUFDNUYsQ0FBQztRQUVELE1BQU0sVUFBVSxHQUFHLHNGQUFjLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUV0QyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFdBQVcsQ0FBQyxXQUE4QjtRQUN0QyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Q0FDSjtBQUFBO0FBQUE7Ozs7Ozs7OztBQ3hFNkM7QUFVeEM7SUEwQ0YsWUFBWSxNQUFvQjtRQW5DaEM7O1dBRUc7UUFDSyxZQUFPLEdBQWtCLEVBQUUsQ0FBQztRQU9wQzs7V0FFRztRQUNLLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBRXJDOztXQUVHO1FBQ0ssWUFBTyxHQUFXLEdBQUcsQ0FBQztRQUU5Qjs7V0FFRztRQUNLLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBU3hCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFJN0IsRUFBRSxFQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1FBQzVFLENBQUM7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRTdCLGdGQUFnRjtRQUNoRixFQUFFLEVBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRixDQUFDO1FBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLG9FQUFNLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUztRQUNaLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFakMsTUFBTSxPQUFPLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEVBQUUsR0FBRyxVQUFVLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztRQUU5QyxFQUFFLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUMxRCxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsRCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFHLDJDQUEyQztZQUNsRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdkQsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVELENBQUM7UUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFdBQVcsQ0FBQyxNQUFjO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLE1BQWM7UUFDeEIsc0RBQXNEO1FBQ3RELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDakMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV6QixFQUFFLEVBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FDN0MsQ0FBQyxDQUFDLENBQUM7WUFDQyxNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFHLDJDQUEyQztRQUN4RyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFHLCtCQUErQjtRQUNuRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFFLCtCQUErQjtRQUVuRyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDekMsQ0FBQztJQUVEOztPQUVHO0lBQ0ssWUFBWTtRQUNoQiw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztJQUNuRixDQUFDO0lBR0QsaUNBQWlDO0lBQzFCLEtBQUs7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ00sS0FBSztRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFDTSxPQUFPO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztDQUNKO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDdko2QztBQUVoQztJQWVWLFlBQ0ksV0FBbUIsb0VBQU0sQ0FBQyxNQUFNLEVBQ2hDLFdBQW1CLENBQUMsRUFDcEIsUUFBZ0IsQ0FBQztRQWJiLG1CQUFjLEdBQVcsb0VBQU0sQ0FBQyxNQUFNLENBQUM7UUFFdkMsWUFBTyxHQUFjLElBQUksQ0FBQztRQUMxQixjQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUVwQzs7V0FFRztRQUNLLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFPN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVELFdBQVc7UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsV0FBVyxDQUFDLEtBQWE7UUFDckIsRUFBRSxFQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVDLGtFQUFrRTtRQUNsRSxhQUFhO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsRUFBRSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNyRSxDQUFDO1FBRUQsMERBQTBEO1FBQzFELEVBQUUsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEdBQUcsRUFBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckQsQ0FBQztRQUNMLENBQUM7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsU0FBUztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxTQUFTLENBQUMsU0FBb0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsV0FBVztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDRCxRQUFRLENBQUMsU0FBb0I7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0JBQWdCO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsS0FBYTtRQUNuQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSztRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsT0FBTztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Q0FDSjtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FDN0drRDtBQUNMO0FBQ087QUFJL0MsbUJBQXFCLFNBQVEseUVBQVM7SUFBNUM7O1FBQ1ksY0FBUyxHQUFXLG9FQUFNLENBQUMsTUFBTSxDQUFDO0lBMkI5QyxDQUFDO0lBekJVLGFBQWE7SUFFcEIsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFnQjtRQUM1QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2pELElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVsQyxNQUFNLFFBQVEsR0FBRyxzRUFBUSxDQUFDLFFBQVEsQ0FBQztRQUVuQyxFQUFFLEVBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxpRUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLG9FQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNELEVBQUUsRUFBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGlFQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksb0VBQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFDRCxFQUFFLEVBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxpRUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLG9FQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNELEVBQUUsRUFBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGlFQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksb0VBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFRCxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDSjtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FDbEMwQzs7Ozs7Ozs7QUNBM0M7QUFBQTs7R0FFRztBQUNILElBQVksR0FVWDtBQVZELFdBQVksR0FBRztJQUNYLHdCQUFNO0lBQ04sd0JBQU07SUFDTix3QkFBTTtJQUNOLHdCQUFNO0lBQ04sc0NBQWE7SUFDYiwwQ0FBZTtJQUNmLHNDQUFhO0lBQ2IsNENBQWdCO0lBQ2hCLDBDQUFlO0FBQ25CLENBQUMsRUFWVyxHQUFHLEtBQUgsR0FBRyxRQVVkO0FBU0Q7OztHQUdHO0FBQ0c7SUFZRjtRQVhpQixtQkFBYyxHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzdDLHNCQUFpQixHQUFzQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBVzlELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQVBNLE1BQU0sS0FBSyxRQUFRO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQU9NLE9BQU87UUFDVixNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssVUFBVSxDQUFDLEtBQW9CO1FBQ25DLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXBDLEVBQUUsRUFBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssUUFBUSxDQUFDLEtBQW9CO1FBQ2pDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFHRDs7Ozs7T0FLRztJQUNJLFVBQVUsQ0FBQyxPQUFZO1FBQzFCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxXQUFXLENBQUMsT0FBWTtRQUMzQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxFQUFFLEVBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBQ0o7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQ2pHdUY7QUFDMUM7QUFFVztBQUVuRCxrQkFBb0IsU0FBUSx5RUFBUztJQUEzQzs7UUFDWSxjQUFTLEdBQXNCLEVBQUUsQ0FBQztRQUNsQyxpQkFBWSxHQUFXLG9FQUFNLENBQUMsTUFBTSxDQUFDO0lBdURqRCxDQUFDO0lBckRVLGFBQWE7UUFDaEIsTUFBTSxLQUFLLEdBQUcsMEVBQVUsQ0FBQyxRQUFRLENBQUM7UUFFbEMsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUMsQ0FBQyxFQUFFO2dCQUNqQyxRQUFRLEVBQUUsSUFBSSxvRUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNoQyxLQUFLLEVBQUUsQ0FBQyxHQUFHO2dCQUNYLE1BQU0sRUFBRTtvQkFDSixNQUFNLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztvQkFDeEMsTUFBTSxFQUFFLElBQUksMkVBQVcsQ0FDbkIsSUFBSSxvRUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3RCLElBQUksb0VBQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQ3ZCO2lCQUVKO2dCQUNELFVBQVUsRUFBRSxFQUNYO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ25DLFFBQVEsRUFBRSxJQUFJLG9FQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsdUVBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUMxRCxNQUFNLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQ3BDLE1BQU0sRUFBRSxJQUFJLDJFQUFXLENBQ25CLElBQUksb0VBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1RUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQ2hELElBQUksb0VBQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQ3ZCO2FBQ0o7U0FDSixDQUFDLENBQUM7UUFFSCxHQUFHLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsV0FBVyxDQUFDLGNBQWMsR0FBQyxDQUFDLEVBQUU7Z0JBQ2hDLFFBQVEsRUFBRSxJQUFJLG9FQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLHVFQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQzdELE1BQU0sRUFBRTtvQkFDSixNQUFNLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztvQkFDeEMsTUFBTSxFQUFFLElBQUksMkVBQVcsQ0FDbkIsSUFBSSxvRUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyx1RUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQ25ELElBQUksb0VBQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQ3RCO2lCQUNKO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxvRUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQWdCO1FBQzVCLHlFQUF5RTtRQUN6RSw0Q0FBNEM7UUFFNUMsMkNBQTJDO0lBQy9DLENBQUM7Q0FDSjtBQUFBO0FBQUEiLCJmaWxlIjoiZmxhcHB5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWJkMDM4Mjg3MGUzZjU5MzhkYWQiLCJleHBvcnQgeyBkZWZhdWx0IGFzIFZlY3RvciB9IGZyb20gJy4vVmVjdG9yJztcblxuaW1wb3J0ICogYXMgTWF0aHMgZnJvbSAnLi9NYXRocyc7XG5leHBvcnQgeyBNYXRocyB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L21hdGhzL2luZGV4LnRzIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3VuZGluZ0JveCB9IGZyb20gJy4vQm91bmRpbmdCb3gnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhEaXJ0eUZsYWcgfSBmcm9tICcuL0RpcnR5RmxhZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdhbWVPYmplY3QgfSBmcm9tICcuL0dhbWVPYmplY3QnO1xuZXhwb3J0IHsgbWFrZUdhbWVPYmplY3QsIEdhbWVPYmplY3RDb25maWcgfSBmcm9tICcuL0dhbWVPYmplY3RGYWN0b3J5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2NlbmVHcmFwaCB9IGZyb20gJy4vU2NlbmVHcmFwaCc7XG5leHBvcnQgeyBTcHJpdGUsIFNwcml0ZUNvbmZpZyB9IGZyb20gJy4vU3ByaXRlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHJhbnNmb3JtIH0gZnJvbSAnLi9UcmFuc2Zvcm0nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvaW5kZXgudHMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIENhbWVyYSB9IGZyb20gJy4vQ2FtZXJhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FudmFzIH0gZnJvbSAnLi9DYW52YXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWaWV3cG9ydCB9IGZyb20gJy4vVmlld3BvcnQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L3NjcmVlbi9pbmRleC50cyIsImltcG9ydCB7IEdhbWUgfSBmcm9tICdlbmdpbmUvZ2FtZSc7XG5pbXBvcnQgeyBQbGFuZU1vdmVtZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL1BsYW5lTW92ZW1lbnQnO1xuaW1wb3J0IHsgU2NlbmVNYW5hZ2VyIH0gZnJvbSAnLi9jb21wb25lbnRzL1NjZW5lTWFuYWdlcic7XG5cbmltcG9ydCB7IFNjZW5lR3JhcGgsIFNwcml0ZSwgQm91bmRpbmdCb3ggfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcbmltcG9ydCB7IFZpZXdwb3J0LCBDYW52YXMsIENhbWVyYSB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L3NjcmVlbic7XG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMvY29sbGlkZXJzJztcblxuY2xhc3MgRmxhcHB5R2FtZSBleHRlbmRzIEdhbWUge1xuICAgIG9uU3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gU2NlbmVHcmFwaC5pbnN0YW5jZTtcbiAgICAgICAgY29uc3Qgc2NlbmVNYW5hZ2VyID0gc2NlbmUuaW5zdGFudGlhdGUoJ3NjZW5lTWFuYWdlcicsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAgICAgICAgICBTY2VuZU1hbmFnZXIsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwbGFuZVJlZCA9IHNjZW5lLmluc3RhbnRpYXRlKCdwbGFuZScsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDUwLCAtNTApLFxuICAgICAgICAgICAgLy8gY29sbGlkZXI6IEJveENvbGxpZGVyLFxuICAgICAgICAgICAgc3ByaXRlOiB7XG4gICAgICAgICAgICAgICAgYXNzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICdhc3NldHMvaW1hZ2VzL3BsYW5lUmVkMS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAvLyAnYXNzZXRzL2ltYWdlcy9wbGFuZVJlZDIucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gJ2Fzc2V0cy9pbWFnZXMvcGxhbmVSZWQzLnBuZycsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBib3VuZHM6IG5ldyBCb3VuZGluZ0JveChcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3Rvcig1MCwgLTUwKSwgXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoNTAsIDUwKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgLy8gdGltaW5nOiAxNTAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcG9uZW50czogW1xuICAgICAgICAgICAgICAgIFBsYW5lTW92ZW1lbnQsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNvbnN0IGdhbWUgPSBuZXcgRmxhcHB5R2FtZSgpO1xuZ2FtZS5pbml0aWFsaXNlKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2FtZXMvZmxhcHB5L2ZsYXBweS50cyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgYm9vdEdhbWVMb29wIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvR2FtZUxvb3AnO1xuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvc2NyZWVuJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcblxuLyoqXG4gKiBCYXNlIGNvbnRhaW5lciBmb3IgYSBnYW1lLiBBIGdhbWUgc2hvdWxkIGV4dGVuZCB0aGlzXG4gKiBhbmQgZmlsbCBpdCB3aXRoIGdhbWUgc3BlY2lmaWMgbG9naWMuXG4gKi9cbmV4cG9ydCBjbGFzcyBHYW1lIHtcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgZW5naW5lIGdhbWUgbG9vcCBhbmQgdGhlIGdhbWUncyBsb2dpY1xuICAgICAqL1xuICAgIGluaXRpYWxpc2UoKSB7XG4gICAgICAgIENhbWVyYS5pbnN0YW5jZS50cmFuc2Zvcm0uc2V0UG9zaXRpb24obmV3IFZlY3RvcigwLCAwKSk7XG4gICAgICAgIGJvb3RHYW1lTG9vcCh0aGlzLm9uU3RhcnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ2ljIHRvIHJ1biBvbmNlIGFmdGVyIHRoZSBtYWluIGdhbWUgbG9vcCBpcyBzdGFydGVkXG4gICAgICovXG4gICAgb25TdGFydCgpIHt9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZ2FtZS50cyIsImltcG9ydCB7IFNjZW5lR3JhcGggfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcblxuLyoqXG4gKiBEZXNpcmVkIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGZyYW1lc1xuICpcbiAqIEBjb25zdGFudCB7bnVtYmVyfVxuICovXG5jb25zdCBNU19QRVJfRlJBTUU6IG51bWJlciA9IDE2O1xuXG4vKipcbiAqICBHYW1lIHNwZWVkICgxID0gbm9ybWFsIHNwZWVkIHwgMCA9IG5vdCBtb3ZpbmcpXG4gKiBcbiAqICBAY29uc3RhbnQge251bWJlcn1cbiAqL1xuY29uc3QgVElNRV9TVEVQOiBudW1iZXIgPSAxO1xuXG4vKipcbiAqICBUaW1lc3RhbXAgb2YgdGhlIGxhc3QgcmVuZGVyZWQgZnJhbWVcbiAqIFxuICogQHR5cGUge251bWJlcn1cbiAqL1xubGV0IGxhc3RUaWNrOiBudW1iZXI7XG5cblxuLyoqXG4gKiBUaGUgbWFpbiBnYW1lIGxvb3AuXG4gKiBcbiAqIENhbGN1bGF0ZXMgZnJhbWUgc3RhdHMgYW5kIHBhc3NlcyBpdCB0byB0aGUgdXBkYXRlXG4gKiBhbmQgcmVuZGVyIGxvb3BcbiAqL1xuZnVuY3Rpb24gZ2FtZUxvb3AoKSA6IHZvaWQge1xuICAgIC8vIGNhbGN1bGF0ZSBob3cgbXVjaCB0aW1lIGhhcyBhY3R1YWxseSBwYXNzZWQgc2luY2VcbiAgICAvLyB0aGUgbGFzdCBmcmFtZSBhbmQgcGFzcyBpdCB0byB0aGUgdXBkYXRlIGxvb3BcbiAgICBjb25zdCBjdXJyZW50VGljayA9IERhdGUubm93KCk7XG4gICAgY29uc3QgZWxhcHNlZCA9IGN1cnJlbnRUaWNrIC0gbGFzdFRpY2s7XG4gICAgY29uc3Qgc3RlcCA9IChNU19QRVJfRlJBTUUgLyBlbGFwc2VkKSAqIFRJTUVfU1RFUDtcbiAgICBcbiAgICBvblVwZGF0ZShzdGVwKTtcbiAgICBvblJlbmRlcigpO1xuXG4gICAgbGFzdFRpY2sgPSBjdXJyZW50VGljaztcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuXG5cbi8qKlxuICogIERlbGVnYXRlcyB3b3JrIHRvIGV2ZXJ5IGdhbWUgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIG9uVXBkYXRlKHRpbWVzdGVwOiBudW1iZXIpIHtcbiAgICBjb25zdCBoaWVyYXJjaHkgPSBTY2VuZUdyYXBoLmluc3RhbmNlLmhpZXJhcmNoeTtcbiAgICBjb25zdCBjb3Jwc2VPYmplY3RzID0gW107XG5cbiAgICAvLyBsb29wIG92ZXIgYSBidWZmZXIgc28gdGhhdCBuZXdseSBpbnN0YW50aWF0ZWQgb2JqZWN0c1xuICAgIC8vIGFsd2F5cyBzdGFydCBleGVjdXRpb24gZnJvbSB0aGUgbmV4dCBmcmFtZVxuICAgIGNvbnN0IGJ1ZmZlckNvdW50ID0gaGllcmFyY2h5Lmxlbmd0aDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYnVmZmVyQ291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBvYmogPSBoaWVyYXJjaHlbaV07XG5cbiAgICAgICAgLy8gYW55IG9iamVjdHMgbWFya2VkIGZvciBkZWxldGlvbiBzaG91bGQgbm90IGJlIGV4ZWN1dGVkXG4gICAgICAgIGlmKG9iai5pc0Rlc3Ryb3lpbmcoKSkge1xuICAgICAgICAgICAgY29ycHNlT2JqZWN0cy5wdXNoKG9iaik7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBvYmoub25VcGRhdGUodGltZXN0ZXApO1xuICAgIH1cblxuICAgIC8vIGNsZWFudXAgYW55IG9iamVjdHMgbWFya2VkIGZvciBkZWxldGlvblxuICAgIGlmKGNvcnBzZU9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBTY2VuZUdyYXBoLmluc3RhbmNlLnJlbW92ZUJhdGNoKGNvcnBzZU9iamVjdHMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZW5kZXJzIGV2ZXJ5IHZpc2libGUgR2FtZU9iamVjdCB0byBET00gZXZlcnkgZnJhbWVcbiAqL1xuZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgU2NlbmVHcmFwaFxuICAgICAgICAuaW5zdGFuY2VcbiAgICAgICAgLmhpZXJhcmNoeVxuICAgICAgICAuZm9yRWFjaChvYmogPT4gb2JqLnJlbmRlcigpKTtcbn1cblxuLyoqXG4gKiBTdGFydHMgdGhlIGdhbWUgbG9vcFxuICovXG5sZXQgaXNCb290ZWQgPSBmYWxzZTtcbmV4cG9ydCBmdW5jdGlvbiBib290R2FtZUxvb3Aob25TdGFydDogRnVuY3Rpb24pIHtcbiAgICBpZihpc0Jvb3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxhc3RUaWNrID0gRGF0ZS5ub3coKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIG9uU3RhcnQoKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9HYW1lTG9vcC50cyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVjdGFuZ2xlIGluIHdvcmxkLXNwYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kaW5nQm94IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfb3JpZ2luOiBWZWN0b3IsXG4gICAgICAgIHByaXZhdGUgX2RpbWVuc2lvbnM6IFZlY3RvcixcbiAgICAgICAgcHJpdmF0ZSBfb2Zmc2V0OiBWZWN0b3IgPSBWZWN0b3Iub3JpZ2luLFxuICAgICkge31cblxuICAgIGdldCBwb3NpdGlvbigpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yaWdpbi5hZGQodGhpcy5fb2Zmc2V0KTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGxlZnQoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnggLSAodGhpcy5fZGltZW5zaW9ucy54IC8gMik7XG4gICAgfVxuICAgIGdldCByaWdodCgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueCArICh0aGlzLl9kaW1lbnNpb25zLnggLyAyKTtcbiAgICB9XG4gICAgZ2V0IHRvcCgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueSArICh0aGlzLl9kaW1lbnNpb25zLnkgLyAyKTtcbiAgICB9XG4gICAgZ2V0IGJvdHRvbSgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueSAtICh0aGlzLl9kaW1lbnNpb25zLnkgLyAyKTtcbiAgICB9XG5cbiAgICBnZXQgZGltZW5zaW9ucygpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpbWVuc2lvbnM7XG4gICAgfVxuICAgIGdldCBvZmZzZXQoKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vZmZzZXQ7XG4gICAgfVxuICAgIGdldCBvcmlnaW4oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcmlnaW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgQm91bmRpbmcgQm94XG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IG9yaWdpbiBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0T3JpZ2luKG9yaWdpbjogVmVjdG9yKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9vcmlnaW4gPSBvcmlnaW47XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvQm91bmRpbmdCb3gudHMiLCJpbXBvcnQgeyBNYXRocyB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgY29vcmRpbmF0ZSBpbiAyRCBzcGFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF94OiBudW1iZXIgPSAwLFxuICAgICAgICBwcml2YXRlIF95OiBudW1iZXIgPSAwXG4gICAgKSB7fVxuXG4gICAgLyoqXG4gICAgICogIFJldHVybnMgdGhlIHgtY29vcmRpbmF0ZVxuICAgICAqIFxuICAgICAqICBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHgoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl94O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBSZXR1cm5zIHRoZSB5LWNvb3JkaW5hdGVcbiAgICAgKiBcbiAgICAgKiAgQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCB5KCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5feTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgUmV0dXJucyB0aGUgbWFnbml0dWRlIChpZS4gbGVuZ3RoKSBvZiB0aGUgdmVjdG9yXG4gICAgICogXG4gICAgICogIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgbWFnbml0dWRlKCkgOiBudW1iZXIge1xuICAgICAgICBjb25zdCB4MiA9IHRoaXMuX3ggKiB0aGlzLl94O1xuICAgICAgICBjb25zdCB5MiA9IHRoaXMuX3kgKiB0aGlzLl95O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHgyICsgeTIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSB2ZWN0b3IgdGhhdCBpcyBwZXJwZW5kaWN1bGFyIHRvIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgZ2V0IG5vcm1hbCgpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoLXRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkKHZlY3RvcjogVmVjdG9yKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFxuICAgICAgICAgICAgdGhpcy54ICsgdmVjdG9yLngsXG4gICAgICAgICAgICB0aGlzLnkgKyB2ZWN0b3IueVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdWJ0cmFjdCh2ZWN0b3I6IFZlY3RvcikgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihcbiAgICAgICAgICAgIHRoaXMueCAtIHZlY3Rvci54LFxuICAgICAgICAgICAgdGhpcy55IC0gdmVjdG9yLnlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbXVsdGlwbHkoc2NhbGFyOiBudW1iZXIpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoXG4gICAgICAgICAgICB0aGlzLnggKiBzY2FsYXIsXG4gICAgICAgICAgICB0aGlzLnkgKiBzY2FsYXJcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXBzIHRoaXMgVmVjdG9yIGJldHdlZW4gdGhlIHZhbHVlIG9mIHR3byBWZWN0b3JzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IG1pblxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBtYXggXG4gICAgICovXG4gICAgcHVibGljIGNsYW1wKG1pbjogVmVjdG9yLCBtYXg6IFZlY3RvcikgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihcbiAgICAgICAgICAgIE1hdGhzLmNsYW1wKHRoaXMueCwgbWluLngsIG1heC54KSxcbiAgICAgICAgICAgIE1hdGhzLmNsYW1wKHRoaXMueSwgbWluLnksIG1heC55KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIGRpcmVjdGlvbiBnZXR0ZXJzXG4gICAgICovXG4gICAgc3RhdGljIGdldCBsZWZ0KCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigtMSwgMCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgcmlnaHQoKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDEsIDApO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHVwKCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigwLCAxKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBkb3duKCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigwLCAtMSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgb3JpZ2luKCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigwLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc2NhbGFyIHRoYXQgc2hvd3MgaG93IG11Y2ggdmVjdG9yMVxuICAgICAqIGlzIGluIHZlY3RvcjIncyBkaXJlY3Rpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IHZlY3RvcjEgXG4gICAgICogQHBhcmFtIHsqfSB2ZWN0b3IyIFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGRvdCh2ZWN0b3IxOiBWZWN0b3IsIHZlY3RvcjI6IFZlY3RvcikgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKHZlY3RvcjEueCAqIHZlY3RvcjIueCkgKyAodmVjdG9yMS55ICogdmVjdG9yMi55KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvbWF0aHMvVmVjdG9yLnRzIiwiLyoqXG4gKiBSZXR1cm5zIGEgd2hvbGUgbnVtYmVyIGJldHdlZW4gW21pbl0gYW5kIFttYXhdXG4gKiBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IFxuICogXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA6IG51bWJlciB7XG4gICAgY29uc3QgdmFsdWUgPSAoTWF0aC5yYW5kb20oKSAqIChtaW4gLSBtYXgpKSAtIG1pbjtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2FwcyBbdmFsdWVdIGJldHdlZW4gbWluIGFuZCBtYXggKGluY2x1c2l2ZSlcbiAqIFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggXG4gKiBcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgOiBudW1iZXIge1xuICAgIGlmKHZhbHVlIDw9IG1pbikgcmV0dXJuIG1pbjtcbiAgICBpZih2YWx1ZSA+PSBtYXgpIHJldHVybiBtYXg7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L21hdGhzL01hdGhzLnRzIiwiaW1wb3J0IHsgR2FtZU9iamVjdCwgVHJhbnNmb3JtLCBTcHJpdGUgfSBmcm9tIFwiZW5naW5lL2xpYnJhcnkvb2JqZWN0c1wiO1xuXG4vKipcbiAqIEFuIGludGVyZmFjZSBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBhIEdhbWVPYmplY3QuIFRoaXMgaXNcbiAqIHdoZXJlIGFsbW9zdCBhbGwgdGhlIGN1c3RvbSBnYW1lIGNvZGUgc2hvdWxkIGxpdmUuXG4gKiBcbiAqIEEgY29tcG9uZW50IHNob3VsZCBiZSBpbnN0YW50aWF0ZWQgYW5kIGF0dGFjaGVkIHRvIGFcbiAqIEdhbWVPYmplY3Qgd2hlbiB0aGUgR2FtZU9iamVjdCBpcyBjcmVhdGVkLlxuICovXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBHYW1lT2JqZWN0IHRoaXMgY29tcG9uZW50IGJlbG9uZ3MgdG9cbiAgICAgKi9cbiAgICBwcml2YXRlIF9nYW1lT2JqZWN0OiBHYW1lT2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZU9iamVjdDogR2FtZU9iamVjdCkge1xuICAgICAgICB0aGlzLl9nYW1lT2JqZWN0ID0gZ2FtZU9iamVjdDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdHJhbnNmb3JtIGZvciB0aGUgR2FtZU9iamVjdCBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge1RyYW5zZm9ybX1cbiAgICAgKi9cbiAgICBnZXQgdHJhbnNmb3JtKCkgOiBUcmFuc2Zvcm0ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdC5nZXRUcmFuc2Zvcm0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzcHJpdGUgZm9yIHRoZSBHYW1lT2JqZWN0IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogXG4gICAgICogQHJldHVybiB7U3ByaXRlfVxuICAgICAqL1xuICAgIGdldCBzcHJpdGUoKSA6IFNwcml0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lT2JqZWN0LmdldFNwcml0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIEdhbWVPYmplY3QgdGhpcyBjb21wb25lbnQgYmVsb25ncyB0b1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge0dhbWVPYmplY3R9XG4gICAgICovXG4gICAgZ2V0IGdhbWVPYmplY3QoKSA6IEdhbWVPYmplY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2dpYyB0byBydW4gd2hlbiB0aGUgb2JqZWN0IGlzIGZpcnN0IGluc3RhbnRpYXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25JbnN0YW50aWF0ZSgpIDogdm9pZCB7fVxuICAgIFxuICAgIC8qKlxuICAgICAqIExvZ2ljIHRvIHJ1biBldmVyeSBnYW1lIGxvb3AgZnJhbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgb25VcGRhdGUodGltZXN0ZXA6IG51bWJlcikgOiB2b2lkIHt9XG5cbiAgICAvKipcbiAgICAgKiBMb2dpYyB0byBydW4gd2hlbiB0aGUgb2JqZWN0IGlzIGRlc3Ryb3llZFxuICAgICAqL1xuICAgIHB1YmxpYyBvbkRlc3Ryb3koKSA6IHZvaWQge31cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0NvbXBvbmVudC50cyIsImltcG9ydCB7IFR5cGVzIH0gZnJvbSAnZW5naW5lL2ludGVybmFsJztcblxuLyoqXG4gKiBBZGRzIGEgZGlydHkgZmxhZyB0byB0aGUgZGVjb3JhdGVkIGNsYXNzLiBcbiAqIFxuICogQSBkaXJ0eSBmbGFnIGluIHRoaXMgY2FzZSBpcyB1c2VkIHRvIGRldGVybWluZSBpZiBcbiAqIHRoZSBkZWNvcmF0ZWQgY2xhc3MgbmVlZHMgdG8gYmUgcmVkcmF3biBpbiB0aGVcbiAqIHJlbmRlciBjeWNsZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aERpcnR5RmxhZzxUIGV4dGVuZHMgVHlwZXMuQ29uc3RydWN0b3I+KEJhc2U6IFQpIHtcbiAgICByZXR1cm4gY2xhc3MgRGlydHlGbGFnIGV4dGVuZHMgQmFzZSB7XG4gICAgICAgIHByb3RlY3RlZCBfaXNEaXJ0eTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAgICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHByb3RlY3RlZCBjbGVhbigpIDogdm9pZCB7XG4gICAgICAgICAgICB0aGlzLl9pc0RpcnR5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcHJvdGVjdGVkIGRpcnR5KCkgOiB2b2lkIHtcbiAgICAgICAgICAgIHRoaXMuX2lzRGlydHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHByb3RlY3RlZCBzZXREaXJ0eUZsYWcoaXNEaXJ0eTogYm9vbGVhbikge1xuICAgICAgICAgICAgdGhpcy5faXNEaXJ0eSA9IGlzRGlydHk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZ2V0IGlzRGlydHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNEaXJ0eTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0RpcnR5RmxhZy50cyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcbmltcG9ydCB7IEJvdW5kaW5nQm94LCBUcmFuc2Zvcm0sIFNwcml0ZSwgU3ByaXRlQ29uZmlnLCBDb21wb25lbnQgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L3NjcmVlbic7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBvYmplY3QgaW4gdGhlIHNjZW5lXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPYmplY3Qge1xuXG4gICAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIF9pc1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX2lzRGVzdHJveWluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2lzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX3RyYW5zZm9ybTogVHJhbnNmb3JtO1xuICAgIHByaXZhdGUgX3Nwcml0ZTogU3ByaXRlO1xuICAgIHByaXZhdGUgX2NvbXBvbmVudHM6IEFycmF5PENvbXBvbmVudD4gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgR2FtZU9iamVjdFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAgICAgICAgICAgVW5pcXVlIGlkZW50aWZpZXJcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gcG9zaXRpb24gICAgIFN0YXJ0aW5nIHBvc2l0aW9uIG9mIHRoZSBvYmplY3RcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCB0cmFuc2Zvcm06IFRyYW5zZm9ybSkge1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl90cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkgOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7VHJhbnNmb3JtfVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRUcmFuc2Zvcm0oKSA6IFRyYW5zZm9ybSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3ByaXRlfVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTcHJpdGUoKSA6IFNwcml0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHVuaXF1ZSBpZGVudGlmaWVyIHN0cmluZyBvZiB0aGlzIEdhbWVPYmplY3RcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgcHVibGljIGdldE5hbWUoKSA6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBET00gZWxlbWVudCB0aGF0IHJlcHJlc2VudHMgdGhpcyBHYW1lT2JqZWN0XG4gICAgICogXG4gICAgICogQHJldHVybiB7SFRNTERpdkVsZW1lbnR9XG4gICAgICovXG4gICAgcHVibGljIGdldEVsZW1lbnQoKSA6IEhUTUxEaXZFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBvYmplY3QgaXMgdmlzaWJsZSAoYnV0IHN0aWxsIGV4ZWN1dGluZ1xuICAgICAqIGl0cyB1cGRhdGUgbG9vcClcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIHB1YmxpYyBpc1Zpc2libGUoKSA6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNWaXNpYmxlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIG9iamVjdCB3aWxsIGJlIGRlc3Ryb3llZCBuZXh0IGZyYW1lXG4gICAgICogXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNEZXN0cm95aW5nKCkgOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVzdHJveWluZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIG9iamVjdCBpcyBkaXNhYmxlZCAoaWUuIG5vdCBleGVjdXRpbmdcbiAgICAgKiBpdHMgdXBkYXRlIGxvb3AgYW5kIHJlbmRlcmluZylcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIHB1YmxpYyBpc0Rpc2FibGVkKCkgOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgSFRNTCBlbGVtZW50IHRoYXQgcmVwcmVzZW50cyB0aGlzIEdhbWVPYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50IFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRFbGVtZW50KGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29tcG9uZW50IHRoYXQgaG9va3MgaW50byB0aGlzIEdhbWVPYmplY3QncyBsaWZlY3ljbGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50IFxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRDb21wb25lbnQoY29tcG9uZW50OiBDb21wb25lbnQpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIFNwcml0ZSB0aGF0IHJlcHJlc2VudHMgdGhpcyBHYW1lT2JqZWN0LiBJZiBubyBTcHJpdGUgaXNcbiAgICAgKiBzZXQsIG5vdGhpbmcgd2lsbCBoYXBwZW4gaW4gdGhlIHJlbmRlciBjeWNsZSBmb3IgdGhpcyBvYmplY3QuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtTcHJpdGV9IGNvbmZpZyBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U3ByaXRlKHNwcml0ZTogU3ByaXRlKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9zcHJpdGUgPSBzcHJpdGU7XG4gICAgfVxuICAgICBcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoaXMgR2FtZU9iamVjdCBhcyB0aGUgY2hpbGQgb2YgdGhlIGdpdmVuIEdhbWVPYmplY3QuIEluIG90aGVyXG4gICAgICogd29yZHMsIGl0IHdpbGwgbW92ZSwgc2NhbGUgYW5kIHJvdGF0ZSByZWxhdGl2ZWx5IHdoZW5ldmVyIHRoZSBwYXJlbnQgZG9lcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGdhbWVPYmplY3QgXG4gICAgICovXG4gICAgcHVibGljIHNldFBhcmVudChnYW1lT2JqZWN0OiB0aGlzKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl90cmFuc2Zvcm0uc2V0UGFyZW50KGdhbWVPYmplY3QuZ2V0VHJhbnNmb3JtKCkpO1xuICAgICAgICBnYW1lT2JqZWN0LmdldFRyYW5zZm9ybSgpLmFkZENoaWxkKHRoaXMuX3RyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgb2JqZWN0LiBTZXR0aW5nIHRvIGZhbHNlXG4gICAgICogZWZmZWN0aXZlbHkgc2V0cyAnZGlzcGxheTogbm9uZScgY3NzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1Zpc2libGUgXG4gICAgICovXG4gICAgcHVibGljIHNldFZpc2liaWxpdHkoaXNWaXNpYmxlOiBib29sZWFuKSA6IHZvaWQge1xuICAgICAgICBpZih0aGlzLl9pc1Zpc2libGUgIT0gaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBpc1Zpc2libGUgPyAnbm9uZScgOiAnaGlkZGVuJztcbiAgICAgICAgICAgIHRoaXMuX2lzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgd2hldGhlciB0aGUgb2JqZWN0IGlzIGRpc2FibGVkLlxuICAgICAqIFxuICAgICAqIEluIGEgZGlzYWJsZWQgc3RhdGUsIHRoZSBvYmplY3QgbmVpdGhlciByZW5kZXJzIG5vclxuICAgICAqIGV4ZWN1dGVzIGl0cyB1cGRhdGUgbG9vcC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzRGlzYWJsZWQgXG4gICAgICovXG4gICAgcHVibGljIHNldERpc2FibGVkKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBpc0Rpc2FibGVkID8gJ25vbmUnIDogJ2hpZGRlbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFya3MgdGhlIG9iamVjdCBmb3IgZGVzdHJ1Y3Rpb24gYXQgdGhlIGVuZCBvZiB0aGUgZnJhbWUuXG4gICAgICogRnVydGhlcm1vcmUsIHRoZSBvYmplY3Qgd2lsbCBub3QgZXhlY3V0ZSBpdHMgdXBkYXRlIGxvb3AgaWYgXG4gICAgICogaXQgaGFzbid0IGFscmVhZHkgZXhlY3V0ZWQgaXQgeWV0LlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXN0cm95KCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNEZXN0cm95aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBvbkluc3RhbnRpYXRlKCkgb24gYWxsIGNvbXBvbmVudHMgb24gdGhpcyBHYW1lT2JqZWN0XG4gICAgICovXG4gICAgcHVibGljIG9uSW5zdGFudGlhdGUoKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goYyA9PiBjLm9uSW5zdGFudGlhdGUoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgb25EZXN0cm95KCkgb24gYWxsIGNvbXBvbmVudHMgb24gdGhpcyBHYW1lT2JqZWN0XG4gICAgICovXG4gICAgcHVibGljIG9uRGVzdHJveSgpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaChjID0+IGMub25EZXN0cm95KCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIG9uVXBkYXRlKCkgb24gYWxsIGNvbXBvbmVudHMgb24gdGhpcyBHYW1lT2JqZWN0XG4gICAgICovXG4gICAgcHVibGljIG9uVXBkYXRlKHRpbWVzdGVwOiBudW1iZXIpIDogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuX2lzRGlzYWJsZWQgfHwgdGhpcy5faXNEZXN0cm95aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKGMgPT4gYy5vblVwZGF0ZSh0aW1lc3RlcCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIG9iamVjdCBpbiB3b3JsZCBzcGFjZSBlYWNoIGdhbWUgbG9vcCBmcmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZW5kZXIoKSA6IHZvaWQge1xuICAgICAgICBpZighdGhpcy5faXNWaXNpYmxlIHx8IHRoaXMuX2lzRGlzYWJsZWQgfHwgdGhpcy5faXNEZXN0cm95aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBzY3JlZW5TcGFjZVBvcyA9IG51bGw7XG4gICAgICAgIGxldCBpc1RyYW5zZm9ybURpcnR5ID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICAvLyBvbmx5IHJlZHJhdyB3aGVuIHRoZSBUcmFuc2Zvcm0gaGFzIGFjdHVhbGx5IG1vdmVkXG4gICAgICAgIGlmKHRoaXMuX3RyYW5zZm9ybS5pc0RpcnR5KCkpIHtcbiAgICAgICAgICAgIC8vIHRoZSBUcmFuc2Zvcm0gc3RvcmVzIG91ciB3b3JsZC1zcGFjZSBjb29yZGluYXRlcyxcbiAgICAgICAgICAgIC8vIGJ1dCB3ZSBuZWVkIHRvIHJlbmRlciB0aGUgb2JqZWN0IGluIHNjcmVlbi1zcGFjZVxuICAgICAgICAgICAgc2NyZWVuU3BhY2VQb3MgPSB0aGlzLl9nZXRTY3JlZW5Qb3NpdGlvbigpO1xuXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmxlZnQgPSBzY3JlZW5TcGFjZVBvcy54LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnRvcCAgPSBzY3JlZW5TcGFjZVBvcy55LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybS5jbGVhbigpO1xuXG4gICAgICAgICAgICBpc1RyYW5zZm9ybURpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9ubHkgcmVkcmF3IHRoZSBzcHJpdGUgaWYgdGhlIFNwcml0ZSBvciBUcmFuc2Zvcm0gaGFzIG1vdmVkXG4gICAgICAgIGlmKHRoaXMuX3Nwcml0ZSAmJiAoaXNUcmFuc2Zvcm1EaXJ0eSB8fCB0aGlzLl9zcHJpdGUuaXNEaXJ0eSgpKSkge1xuICAgICAgICAgICAgc2NyZWVuU3BhY2VQb3MgPSBzY3JlZW5TcGFjZVBvcyB8fCB0aGlzLl9nZXRTY3JlZW5Qb3NpdGlvbigpO1xuXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGUucmVuZGVyKHNjcmVlblNwYWNlUG9zKTtcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5jbGVhbigpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRTY3JlZW5Qb3NpdGlvbigpIDogVmVjdG9yIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLl90cmFuc2Zvcm0uZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgY2FtZXJhUG9zID0gQ2FtZXJhLmluc3RhbmNlLnRyYW5zZm9ybS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoXG4gICAgICAgICAgICBwb3NpdGlvbi54IC0gY2FtZXJhUG9zLngsXG4gICAgICAgICAgICBwb3NpdGlvbi55IC0gY2FtZXJhUG9zLnlcbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9HYW1lT2JqZWN0LnRzIiwiaW1wb3J0IHsgVHJhbnNmb3JtLCBTY2VuZUdyYXBoIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBDYW1lcmE7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZSB8fCAodGhpcy5faW5zdGFuY2UgPSBuZXcgdGhpcygpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFuc2Zvcm06IFRyYW5zZm9ybTtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKTtcblxuICAgICAgICAvLyBzaW5jZSBhIGNhbWVyYSBtb3ZlIG5lZWRzIHRvIHVwZGF0ZSBldmVyeXRoaW5nIGluIHZpZXcsXG4gICAgICAgIC8vIHNldCBhbGwgb2JqZWN0cyBpbiB0aGUgdmlld3BvcnQgYXMgJ2RpcnR5JyBzbyB0aGV5IGdldFxuICAgICAgICAvLyByZWRyYXduXG4gICAgICAgIFxuICAgICAgICAvLyBUT0RPOiB2aWV3cG9ydCBjdWxsaW5nXG4gICAgICAgIGNvbnN0IHNldFBvc2l0aW9uRnVuYyA9IHRoaXMuX3RyYW5zZm9ybS5zZXRQb3NpdGlvbi5iaW5kKHRoaXMuX3RyYW5zZm9ybSk7XG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybS5zZXRQb3NpdGlvbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgc2V0UG9zaXRpb25GdW5jKHZhbHVlKTtcbiAgICAgICAgICAgIFNjZW5lR3JhcGguaW5zdGFuY2UuaGllcmFyY2h5LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgICAgICBvYmouZ2V0VHJhbnNmb3JtKCkuZGlydHkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHRyYW5zZm9ybSgpIDogVHJhbnNmb3JtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zZm9ybTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvc2NyZWVuL0NhbWVyYS50cyIsImltcG9ydCB7IFZpZXdwb3J0IH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvc2NyZWVuJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcblxuLyoqXG4gKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgSFRNTCBjYW52YXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IENhbnZhcztcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyB0aGlzKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbnRleHQ6IGFueTtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgaWYoIXRoaXMuX2NvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhczogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gVmlld3BvcnQuaW5zdGFuY2Uud2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gVmlld3BvcnQuaW5zdGFuY2UuaGVpZ2h0O1xuXG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyBhIGxpbmUgb24gdGhlIHNjcmVlblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IxIFxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IyIFxuICAgICAqL1xuICAgIGRyYXdMaW5lKHZlY3RvcjE6IFZlY3RvciwgdmVjdG9yMjogVmVjdG9yLCBjb2xvciA9ICdncmVlbicpIHtcbiAgICAgICAgY29uc3QgYyA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICBjLm1vdmVUbyh2ZWN0b3IxLngsIHZlY3RvcjEueSk7XG4gICAgICAgIGMubGluZVRvKHZlY3RvcjIueCwgdmVjdG9yMi55KTtcbiAgICAgICAgYy5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vQ2FudmFzLnRzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGJyb3dzZXIgd2luZG93XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdwb3J0IHtcblxuICAgIC8vIHNpbmdsZXRvbiBiZWNhdXNlIHdlIGRvbid0IHdhbnQgbW9yZSB0aGFuIG9uZSBicm93c2VyIHJlc2l6ZSBldmVudCBsaXN0ZW5lclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVmlld3BvcnQ7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSA6IFZpZXdwb3J0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyB0aGlzKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2Jyb3dzZXJIZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9icm93c2VyV2lkdGg6IG51bWJlcjtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdmlld3BvcnRXaWR0aDogbnVtYmVyID0gODAwLCBcbiAgICAgICAgcHJpdmF0ZSB2aWV3cG9ydEhlaWdodDogbnVtYmVyID0gNDAwXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX3JlY2FsY3VsYXRlU2NyZWVuKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZWNhbGN1bGF0ZVNjcmVlbi5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBnZXQgd2lkdGgoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9icm93c2VyV2lkdGg7XG4gICAgfVxuICAgIGdldCBoZWlnaHQoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9icm93c2VySGVpZ2h0O1xuICAgIH1cbiAgICBnZXQgc2NyZWVuKCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuICAgIGdldCBvcmlnaW4oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFxuICAgICAgICAgICAgdGhpcy53aWR0aCAvIDIsXG4gICAgICAgICAgICB0aGlzLmhlaWdodCAvIDIsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmUtY2FjaGUgdGhlIHNpemUgb2YgdGhlIGJyb3dzZXIgd2luZG93IHRvIHByZXZlbnQgcmVmbG93cy9yZWxheW91dHNcbiAgICAgKi9cbiAgICBfcmVjYWxjdWxhdGVTY3JlZW4oKSA6IHZvaWQge1xuICAgICAgICAvLyBUT0RPOiBleGVjdXRlIG9ubHkgZHVyaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICB0aGlzLl9icm93c2VySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLl9icm93c2VyV2lkdGggID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L3NjcmVlbi9WaWV3cG9ydC50cyIsImltcG9ydCB7IFRyYW5zZm9ybSwgU3ByaXRlLCBTcHJpdGVDb25maWcsIEdhbWVPYmplY3QsIENvbXBvbmVudCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuaW1wb3J0IHsgQ29sbGlkYWJsZSB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVPYmplY3RDb25maWcge1xuICAgIHBvc2l0aW9uPzogVmVjdG9yO1xuICAgIGNvbXBvbmVudHM/OiBBcnJheTxuZXcob2JqOiBHYW1lT2JqZWN0KSA9PiBDb21wb25lbnQ+O1xuICAgIHNwcml0ZT86IFNwcml0ZUNvbmZpZztcbiAgICBvcmRlcj86IG51bWJlcjtcbiAgICBjb2xsaWRlcj86IENvbGxpZGFibGU7XG59XG5cbi8qKlxuICogSW5zZXJ0cyBhIG5ldyBHYW1lT2JqZWN0IDxkaXY+IGludG8gdGhlIHBhZ2UgYm9keVxuICogXG4gKiBAcGFyYW0gaWQgICAgICAgIFVuaXF1ZSBpZGVudGlmaWVyXG4gKiBAcGFyYW0gekluZGV4ICAgIEJhc2ljYWxseSB0aGUgb2JqZWN0J3MgcGVybWFuZW50IFogYXhpcyBjb29yZGluYXRlXG4gKi9cbmZ1bmN0aW9uIGluamVjdERvbShpZDogc3RyaW5nLCB6SW5kZXg6IG51bWJlciA9IDApIDogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lT2JqZWN0Jyk7XG4gICAgZWxlbWVudC5zdHlsZS56SW5kZXggPSB6SW5kZXgudG9TdHJpbmcoKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VHYW1lT2JqZWN0KGlkOiBzdHJpbmcsIGNvbmZpZzogR2FtZU9iamVjdENvbmZpZykge1xuICAgIGxldCBvYmogPSBuZXcgR2FtZU9iamVjdChpZCwgbmV3IFRyYW5zZm9ybShjb25maWcucG9zaXRpb24pKTtcblxuICAgIGlmKGNvbmZpZy5jb2xsaWRlcikge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBpZihjb25maWcuc3ByaXRlICYmIGNvbmZpZy5zcHJpdGUuYXNzZXRzKSB7XG4gICAgICAgIGNvbnN0IHNwcml0ZUluc3RhbmNlID0gbmV3IFNwcml0ZShjb25maWcuc3ByaXRlKTtcbiAgICAgICAgc3ByaXRlSW5zdGFuY2UuYXBwZW5kRG9tKCk7XG4gICAgICAgIG9iai5zZXRTcHJpdGUoc3ByaXRlSW5zdGFuY2UpO1xuICAgIH1cblxuICAgIGlmKGNvbmZpZy5jb21wb25lbnRzKSB7XG4gICAgICAgIGNvbmZpZy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50TmFtZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgY29tcG9uZW50TmFtZShvYmopO1xuICAgICAgICAgICAgb2JqLmFkZENvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvYmouc2V0RWxlbWVudCggaW5qZWN0RG9tKGlkLCBjb25maWcub3JkZXIpICk7XG4gICAgb2JqLm9uSW5zdGFudGlhdGUoKTtcblxuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVPYmplY3REb20oKSB7XG4gICAvLyBUT0RPOiBtb3ZlIEdhbWVPYmplY3QncyBET00gaW5qZWN0aW9uIGxvZ2ljIGhlcmUgaW5zdGVhZFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvR2FtZU9iamVjdEZhY3RvcnkudHMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5pbXBvcnQgeyBHYW1lT2JqZWN0LCBtYWtlR2FtZU9iamVjdCwgR2FtZU9iamVjdENvbmZpZyB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuXG4vKipcbiAqIEhhbmRsZXMgaW5zdGFudGlhdGlvbiwgZGVzdHJ1Y3Rpb24gYW5kIG1hbmFnZW1lbnQgb2YgYWxsIEdhbWVPYmplY3RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lR3JhcGgge1xuXG4gICAgLy8gc2luZ2xldG9uIGJlY2F1c2Ugd2Ugc2hvdWxkIG5ldmVyIGhhdmUgbW9yZSB0aGFuIG9uZSBTY2VuZUdyYXBoXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTY2VuZUdyYXBoO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCkgOiBTY2VuZUdyYXBoIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyB0aGlzKCkpO1xuICAgIH1cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cblxuICAgIC8qKlxuICAgICAqIEFuIG9yZGVyZWQgYXJyYXkgb2YgYWxsIEdhbWVPYmplY3RzIChyZWdhcmRsZXNzIG9mIHN0YXRlKVxuICAgICAqL1xuICAgIHByaXZhdGUgX2hpZXJhcmNoeTogQXJyYXk8R2FtZU9iamVjdD4gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEEgdW5pcXVlIHN0cmluZyBpZCB0byBHYW1lT2JqZWN0IG1hcHBpbmdcbiAgICAgKi9cbiAgICBwcml2YXRlIF9nYW1lT2JqZWN0czogTWFwPHN0cmluZywgR2FtZU9iamVjdD4gPSBuZXcgTWFwKCk7XG5cbiAgICBnZXQgaGllcmFyY2h5KCkgOiBBcnJheTxHYW1lT2JqZWN0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaWVyYXJjaHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgR2FtZU9iamVjdCB0aGF0IGJlbG9uZ3MgdG8gdGhlIGdpdmVuIGlkXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqL1xuICAgIGdldChpZDogc3RyaW5nKSA6IEdhbWVPYmplY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdHMuZ2V0KGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgR2FtZU9iamVjdFxuICAgICogXG4gICAgKiBAdHlwZSB7c3RyaW5nfSBpZCAgICAgICAgIE5hbWUvaWRlbnRpZmllciBvZiB0aGUgb2JqZWN0XG4gICAgKiBAdHlwZSB7b2JqZWN0fSBjb25maWcgICAgIEdhbWVPYmplY3Qgc2V0dGluZ3NcbiAgICAqL1xuICAgIGluc3RhbnRpYXRlKGlkOiBzdHJpbmcsIGNvbmZpZzogR2FtZU9iamVjdENvbmZpZykgOiBHYW1lT2JqZWN0IHtcbiAgICAgICAgaWYoaWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnN0YW50aWF0aW9uIGZhaWxlZDogbm8gdW5pcXVlIGlkIGdpdmVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5fZ2FtZU9iamVjdHMuZ2V0KGlkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnN0YW50aWF0aW9uIGZhaWxlZDogYSBHYW1lT2JqZWN0IGFscmVhZHkgZXhpc3RzIHdpdGggdGhlIG5hbWUgJHtpZH1gKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2FtZU9iamVjdCA9IG1ha2VHYW1lT2JqZWN0KGlkLCBjb25maWcpO1xuXG4gICAgICAgIHRoaXMuX2hpZXJhcmNoeS5wdXNoKGdhbWVPYmplY3QpO1xuICAgICAgICB0aGlzLl9nYW1lT2JqZWN0cy5zZXQoaWQsIGdhbWVPYmplY3QpO1xuXG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRha2VzIGluIGFuIGFycmF5IG9mIEdhbWVPYmplY3RzIGFuZCByZW1vdmVzIHRoZW0gYWxsIFxuICAgICAqIGZyb20gdGhlIGhpZXJhcmNoeSBpbW1lZGlhdGVseVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGdhbWVPYmplY3RzIFxuICAgICAqL1xuICAgIHJlbW92ZUJhdGNoKGdhbWVPYmplY3RzOiBBcnJheTxHYW1lT2JqZWN0PikgOiB2b2lkIHtcbiAgICAgICAgZ2FtZU9iamVjdHMuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZU9iamVjdHMuZGVsZXRlKG9iai5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9oaWVyYXJjaHkgPSB0aGlzLl9oaWVyYXJjaHkuZmlsdGVyKG9iaiA9PiBnYW1lT2JqZWN0cy5pbmRleE9mKG9iaikgPCAwKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9TY2VuZUdyYXBoLnRzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuaW1wb3J0IHsgQm91bmRpbmdCb3ggfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcbi8vIGltcG9ydCB7IHdpdGhEaXJ0eUZsYWcgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcblxuZXhwb3J0IGludGVyZmFjZSBTcHJpdGVDb25maWcge1xuICAgIGFzc2V0czogQXJyYXk8c3RyaW5nPjtcbiAgICBib3VuZHM6IEJvdW5kaW5nQm94O1xuICAgIHRpbWluZz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFNwcml0ZSB7XG5cbiAgICAvKipcbiAgICAgKiBXb3JsZC1zcGFjZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgc3ByaXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYm91bmRpbmdCb3g6IEJvdW5kaW5nQm94O1xuXG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgaW1hZ2UgcGF0aHMgdG8gZHJhd1xuICAgICAqL1xuICAgIHByaXZhdGUgX2Fzc2V0czogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIERPTSB0aGF0IHRoaXMgc3ByaXRlIHJlcHJlc2VudHNcbiAgICAgKi9cbiAgICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIExhc3QgdmVjdG9yIHBvc2l0aW9uIHRoaXMgc3ByaXRlIHdhcyBkcmF3biBhdFxuICAgICAqL1xuICAgIHByaXZhdGUgX2xhc3RQb3NpdGlvbjogVmVjdG9yID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHNwcml0ZSBmcmFtZSBjaGFuZ2VzXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdGltaW5nOiBudW1iZXIgPSAxNTA7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGZyYW1lIG9mIHRoZSBhc3NldCBhcnJheSB0byBkcmF3XG4gICAgICovXG4gICAgcHJpdmF0ZSBfZnJhbWVJbmRleDogbnVtYmVyID0gMDtcblxuICAgIC8qKlxuICAgICAqIERyYXcgdGltZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIF9hbmltYXRpb25UaW1lcjogbnVtYmVyO1xuXG5cblxuICAgIHByaXZhdGUgX2lzRGlydHk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIFxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBTcHJpdGVDb25maWcpIHtcbiAgICAgICAgaWYoIWNvbmZpZy5ib3VuZHMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3ByaXRlIGluc3RhbnRpYXRpb24gZmFpbGVkOiBubyBCb3VuZGluZ0JveCBwcm92aWRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYm91bmRpbmdCb3ggPSBjb25maWcuYm91bmRzO1xuICAgICAgICB0aGlzLl9hc3NldHMgPSBjb25maWcuYXNzZXRzO1xuXG4gICAgICAgIC8vIGlmIG1vcmUgdGhhbiBvbmUgaW1hZ2UgcGF0aCBpcyBnaXZlbiwgdHJlYXQgdGhpcyBzcHJpdGUgYXMgYW4gYW5pbWF0ZWQgc3ByaXRlXG4gICAgICAgIGlmKGNvbmZpZy5hc3NldHMgJiYgY29uZmlnLmFzc2V0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLl9mcmFtZUluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvblRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5fdXBkYXRlRnJhbWUuYmluZCh0aGlzKSwgdGhpcy5fdGltaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xhc3RQb3NpdGlvbiA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0IGJvdW5kcygpIDogQm91bmRpbmdCb3gge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRpbmdCb3g7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgRE9NIHRoYXQgaG9sZHMgdGhpcyBzcHJpdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgYXBwZW5kRG9tKCkgOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYm91bmRzID0gdGhpcy5fYm91bmRpbmdCb3g7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzcHJpdGUnKTtcbiAgICAgICAgZWxlbWVudC5pZCA9IGBzcHJpdGVfJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gO1xuXG4gICAgICAgIGlmKHRoaXMuX2Fzc2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLl9hc3NldHNbMF19KWA7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBib3VuZHMucG9zaXRpb24ueC50b1N0cmluZygpO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSAoLWJvdW5kcy5wb3NpdGlvbi55KS50b1N0cmluZygpOyAgIC8vIGZsaXAgWSBiZWNhdXNlIHRoZSBicm93c2VyIFkgaXMgcmV2ZXJzZWRcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAoYm91bmRzLmRpbWVuc2lvbnMueCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gKGJvdW5kcy5kaW1lbnNpb25zLnkpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsbHkgc2V0cyB0aGUgZHJhdyBwb3NpdGlvbiBvZiB0aGUgU3ByaXRlXG4gICAgICogXG4gICAgICogQHBhcmFtIG9yaWdpbiBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0UG9zaXRpb24ob3JpZ2luOiBWZWN0b3IpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2JvdW5kaW5nQm94LnNldE9yaWdpbihvcmlnaW4pO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBET00gcG9zaXRpb24gb2YgdGhlIFNwcml0ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBvcmlnaW4gXG4gICAgICovXG4gICAgcHVibGljIHJlbmRlcihvcmlnaW46IFZlY3RvcikgOiB2b2lkIHtcbiAgICAgICAgLy8gVE9ETzogbW92ZSByZW5kZXIgbG9naWMgaW50byBhIFNwcml0ZVJlbmRlcmVyIGNsYXNzXG4gICAgICAgIGNvbnN0IGJvdW5kcyA9IHRoaXMuX2JvdW5kaW5nQm94O1xuICAgICAgICBib3VuZHMuc2V0T3JpZ2luKG9yaWdpbik7XG4gICAgICAgIFxuICAgICAgICBpZihcbiAgICAgICAgICAgIGJvdW5kcy5wb3NpdGlvbi54ID09PSB0aGlzLl9sYXN0UG9zaXRpb24ueCAmJiBcbiAgICAgICAgICAgIGJvdW5kcy5wb3NpdGlvbi55ID09PSB0aGlzLl9sYXN0UG9zaXRpb24ueVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUubGVmdCA9IGJvdW5kcy5wb3NpdGlvbi54LnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUudG9wID0gKC1ib3VuZHMucG9zaXRpb24ueSkudG9TdHJpbmcoKTsgICAvLyBmbGlwIFkgYmVjYXVzZSB0aGUgYnJvd3NlciBZIGlzIHJldmVyc2VkXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUud2lkdGggPSAoYm91bmRzLmRpbWVuc2lvbnMueCAqIDEpLnRvU3RyaW5nKCk7ICAgLy8gVE9ETzogcmVwbGFjZSAxIHdpdGggc2NhbGluZ1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmhlaWdodCA9IChib3VuZHMuZGltZW5zaW9ucy55ICogMSkudG9TdHJpbmcoKTsgIC8vIFRPRE86IHJlcGxhY2UgMSB3aXRoIHNjYWxpbmdcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2xhc3RQb3NpdGlvbiA9IGJvdW5kcy5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JjZXMgYSBkcmF3IG9mIHRoZSBuZXh0IHNwcml0ZSBpbiBhbiBhbmltYXRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIF91cGRhdGVGcmFtZSgpIDogdm9pZCB7XG4gICAgICAgIC8vIFRPRE86IHVwZGF0ZSB1c2luZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKVxuICAgICAgICB0aGlzLl9mcmFtZUluZGV4ID0gKyt0aGlzLl9mcmFtZUluZGV4ICUgdGhpcy5fYXNzZXRzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5fYXNzZXRzW3RoaXMuX2ZyYW1lSW5kZXhdfSlgO1xuICAgIH1cblxuXG4gICAgLy8gVE9ETzogcmVmYWN0b3IgdGhpcyBpbnRvIG1peGluXG4gICAgcHVibGljIGNsZWFuKCkge1xuICAgICAgICB0aGlzLl9pc0RpcnR5ID0gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyBkaXJ0eSgpIHtcbiAgICAgICAgdGhpcy5faXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuICAgIHB1YmxpYyBpc0RpcnR5KCkgOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGlydHk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvU3ByaXRlLnRzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2Zvcm0ge1xuXG4gICAgcHJpdmF0ZSBfcG9zaXRpb246IFZlY3RvcjtcbiAgICBwcml2YXRlIF9yb3RhdGlvbjogbnVtYmVyO1xuICAgIHByaXZhdGUgX3NjYWxlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfbG9jYWxQb3NpdGlvbjogVmVjdG9yID0gVmVjdG9yLm9yaWdpbjtcblxuICAgIHByaXZhdGUgX3BhcmVudDogVHJhbnNmb3JtID0gbnVsbDtcbiAgICBwcml2YXRlIF9jaGlsZHJlbjogVHJhbnNmb3JtW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHRyYW5zZm9ybSBuZWVkcyBhIHJlZHJhd1xuICAgICAqL1xuICAgIHByaXZhdGUgX2lzRGlydHk6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHBvc2l0aW9uOiBWZWN0b3IgPSBWZWN0b3Iub3JpZ2luLFxuICAgICAgICByb3RhdGlvbjogbnVtYmVyID0gMCxcbiAgICAgICAgc2NhbGU6IG51bWJlciA9IDEsXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuX3JvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMuX3NjYWxlID0gc2NhbGU7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgICB9XG4gICAgc2V0UG9zaXRpb24odmFsdWU6IFZlY3RvcikgOiB2b2lkIHtcbiAgICAgICAgaWYodmFsdWUueCA9PT0gdGhpcy5fcG9zaXRpb24ueCAmJiB2YWx1ZS55ID09PSB0aGlzLl9wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkaWZmID0gdmFsdWUuc3VidHJhY3QodGhpcy5fcG9zaXRpb24pO1xuXG4gICAgICAgIC8vIGlmIHRoaXMgR2FtZU9iamVjdCBtb3ZlZCwgdXBkYXRlIGl0cyBsb2NhbCBwb3NpdGlvbiByZWxhdGl2ZSB0b1xuICAgICAgICAvLyBpdHMgcGFyZW50XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsdWU7XG4gICAgICAgIGlmKHRoaXMuX3BhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5fbG9jYWxQb3NpdGlvbiA9IHZhbHVlLnN1YnRyYWN0KHRoaXMuX3BhcmVudC5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gaWYgdGhpcyBHYW1lT2JqZWN0IGhhcyBjaGlsZHJlbiwgdXBkYXRlIHRoZWlyIHBvc2l0aW9uc1xuICAgICAgICBpZih0aGlzLl9jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IobGV0IGNoaWxkIG9mIHRoaXMuX2NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuc2V0UG9zaXRpb24oY2hpbGQuZ2V0UG9zaXRpb24oKS5hZGQoZGlmZikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0UGFyZW50KCkgOiBUcmFuc2Zvcm0ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgIH1cbiAgICBzZXRQYXJlbnQodHJhbnNmb3JtOiBUcmFuc2Zvcm0pIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy5fbG9jYWxQb3NpdGlvbiA9IHRoaXMuX3Bvc2l0aW9uLnN1YnRyYWN0KHRyYW5zZm9ybS5nZXRQb3NpdGlvbigpKTtcbiAgICB9XG5cbiAgICBnZXRDaGlsZHJlbigpIDogQXJyYXk8VHJhbnNmb3JtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcbiAgICB9XG4gICAgYWRkQ2hpbGQodHJhbnNmb3JtOiBUcmFuc2Zvcm0pIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2godHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgVmVjdG9yIG9mIHRoZSByZWxhdGl2ZSBkaXN0YW5jZSB0byB0aGlzIFRyYW5zZm9ybSdzIHBhcmVudFxuICAgICAqL1xuICAgIGdldExvY2FsUG9zaXRpb24oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbFBvc2l0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3J0Y3V0IG1ldGhvZCBmb3IgYWRkaW5nIHRoZSBnaXZlbiB2ZWN0b3IgdG8gdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmFsdWUgXG4gICAgICovXG4gICAgdHJhbnNsYXRlKHZhbHVlOiBWZWN0b3IpIDogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5ld1BvcyA9IHRoaXMuX3Bvc2l0aW9uLmFkZCh2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24obmV3UG9zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBUcmFuc2Zvcm0gYXMgJ2NsZWFuJy4gV2hlbiBpbiBhICdjbGVhbicgc3RhdGUsIHRoZSBUcmFuc2Zvcm1cbiAgICAgKiB3aWxsIG5vdCByZWRyYXcgdW50aWwgaXRzIG1hbmlwdWxhdGVkIGFnYWluIChtb3ZlLCBzY2FsZSwgcm90YXRlKVxuICAgICAqL1xuICAgIGNsZWFuKCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNEaXJ0eSA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBGb3JjZXMgYSByZS1kcmF3XG4gICAgICovXG4gICAgZGlydHkoKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9pc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIFRyYW5zZm9ybSBuZWVkcyB0byBiZSByZWRyYXduIGR1ZSB0byBhIG1hbmlwdWxhdGlvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNEaXJ0eSgpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RpcnR5O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL1RyYW5zZm9ybS50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuaW1wb3J0IHsgS2V5Ym9hcmQsIEtleSB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L2lucHV0JztcbmltcG9ydCB7IFZpZXdwb3J0IH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvc2NyZWVuJztcbmltcG9ydCB7IE1hdGhzIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG5leHBvcnQgY2xhc3MgUGxhbmVNb3ZlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfdmVsb2NpdHk6IFZlY3RvciA9IFZlY3Rvci5vcmlnaW47XG5cbiAgICBwdWJsaWMgb25JbnN0YW50aWF0ZSgpIDogdm9pZCB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBvblVwZGF0ZSh0aW1lc3RlcDogbnVtYmVyKSA6IHZvaWQge1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSB0aGlzLmdhbWVPYmplY3QuZ2V0VHJhbnNmb3JtKCk7XG4gICAgICAgIGxldCBwb3MgPSB0cmFuc2Zvcm0uZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICBjb25zdCBrZXlib2FyZCA9IEtleWJvYXJkLmluc3RhbmNlO1xuXG4gICAgICAgIGlmKGtleWJvYXJkLmdldEtleVByZXNzKEtleS5EKSkge1xuICAgICAgICAgICAgcG9zID0gcG9zLmFkZChuZXcgVmVjdG9yKDQsIDApKTtcbiAgICAgICAgfVxuICAgICAgICBpZihrZXlib2FyZC5nZXRLZXlQcmVzcyhLZXkuQSkpIHtcbiAgICAgICAgICAgIHBvcyA9IHBvcy5hZGQobmV3IFZlY3RvcigtNCwgMCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGtleWJvYXJkLmdldEtleVByZXNzKEtleS5XKSkge1xuICAgICAgICAgICAgcG9zID0gcG9zLmFkZChuZXcgVmVjdG9yKDAsIDQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZihrZXlib2FyZC5nZXRLZXlQcmVzcyhLZXkuUykpIHtcbiAgICAgICAgICAgIHBvcyA9IHBvcy5hZGQobmV3IFZlY3RvcigwLCAtNCkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0cmFuc2Zvcm0uc2V0UG9zaXRpb24ocG9zKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2FtZXMvZmxhcHB5L2NvbXBvbmVudHMvUGxhbmVNb3ZlbWVudC50cyIsImV4cG9ydCB7IEtleWJvYXJkLCBLZXkgfSBmcm9tICcuL0tleWJvYXJkJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9pbnB1dC9pbmRleC50cyIsIi8qKlxuICogUmVwcmVzZW50cyBhIGtleWJvYXJkIGtleVxuICovXG5leHBvcnQgZW51bSBLZXkge1xuICAgIEEgPSA2NSxcbiAgICBXID0gODcsXG4gICAgUyA9IDgzLFxuICAgIEQgPSA2OCxcbiAgICBTUEFDRUJBUiA9IDMyLFxuICAgIEFSUk9XX0xFRlQgPSAzNyxcbiAgICBBUlJPV19VUCA9IDM4LFxuICAgIEFSUk9XX1JJR0hUID0gMzksXG4gICAgQVJST1dfRE9XTiA9IDQwLFxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMga2V5IHByZXNzLCBrZXkgZG93biwgZXRjIGV2ZW50IGRhdGFcbiAqL1xuaW50ZXJmYWNlIEtleWJvYXJkRXZlbnQge1xuICAgIGtleUNvZGU6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBIYW5kbGVzIGludGVyYWN0aW9uIHdpdGggdGhlIGtleWJvYXJkIGFuZCByZXRyaWV2aW5nXG4gKiBwcmVzcyB2YWx1ZXNcbiAqL1xuZXhwb3J0IGNsYXNzIEtleWJvYXJkIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9rZXlEb3duVmFsdWVzOiBNYXA8S2V5LCBudW1iZXI+ID0gbmV3IE1hcCgpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2tleVByZXNzQ29tcGxldGU6IE1hcDxLZXksIGJvb2xlYW4+ID0gbmV3IE1hcCgpO1xuXG4gICAgLyoqXG4gICAgICogU2luZ2xldG9uIHNpbmNlIHdlIG9ubHkgd2FudCBvbmUgbG9jYWwgS2V5Ym9hcmQgdG8gZXhpc3RcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEtleWJvYXJkO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24uYmluZCh0aGlzKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5VXAuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duLmJpbmQodGhpcykpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMga2V5IGRvd24gZXZlbnRzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9vbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIDogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMuX2tleURvd25WYWx1ZXMuc2V0KGtleUNvZGUsIDEpO1xuXG4gICAgICAgIGlmKHRoaXMuX2tleVByZXNzQ29tcGxldGUuZ2V0KGtleUNvZGUpKSB7XG4gICAgICAgICAgICB0aGlzLl9rZXlEb3duVmFsdWVzLnNldChrZXlDb2RlLCAxKTtcbiAgICAgICAgICAgIHRoaXMuX2tleVByZXNzQ29tcGxldGUuc2V0KGtleUNvZGUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMga2V5IHVwIGV2ZW50c1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgXG4gICAgICovXG4gICAgcHJpdmF0ZSBfb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkgOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcbiAgICAgICAgdGhpcy5fa2V5RG93blZhbHVlcy5zZXQoa2V5Q29kZSwgMCk7XG4gICAgICAgIHRoaXMuX2tleVByZXNzQ29tcGxldGUuc2V0KGtleUNvZGUsIHRydWUpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBrZXlwcmVzcyB2YWx1ZSBvZiB0aGUgZ2l2ZW4ga2V5XG4gICAgICogKDAgPSBub3QgcHJlc3NlZCB8IDEgPSBrZXkgZG93bilcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IGtleSBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0S2V5RG93bihrZXlDb2RlOiBLZXkpIDogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9rZXlEb3duVmFsdWVzLmdldChrZXlDb2RlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlIHx8IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBnZXRLZXlEb3duKCkgZXhjZXB0IHRvZ2dsZXMgdGhlIHZhbHVlIHRvIDBcbiAgICAgKiBhZnRlciBsaXN0ZW5pbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0S2V5UHJlc3Moa2V5Q29kZTogS2V5KSA6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fa2V5RG93blZhbHVlcy5nZXQoa2V5Q29kZSk7XG4gICAgICAgIGlmKHZhbHVlID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fa2V5UHJlc3NDb21wbGV0ZS5zZXQoa2V5Q29kZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvaW5wdXQvS2V5Ym9hcmQudHMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0LCBDb21wb25lbnQsIFNjZW5lR3JhcGgsIEJvdW5kaW5nQm94IH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L2lucHV0JztcbmltcG9ydCB7IFZpZXdwb3J0LCBDYW1lcmEgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9zY3JlZW4nO1xuXG5leHBvcnQgY2xhc3MgU2NlbmVNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIF9yb2NrTGlzdDogQXJyYXk8R2FtZU9iamVjdD4gPSBbXTtcbiAgICBwcml2YXRlIF9zY3JvbGxTcGVlZDogVmVjdG9yID0gVmVjdG9yLm9yaWdpbjtcblxuICAgIHB1YmxpYyBvbkluc3RhbnRpYXRlKCkgOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBTY2VuZUdyYXBoLmluc3RhbmNlO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIHNjZW5lLmluc3RhbnRpYXRlKCdiYWNrZ3JvdW5kU2t5JytpLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoODAwICogaSwgMCksXG4gICAgICAgICAgICAgICAgb3JkZXI6IC05OTksXG4gICAgICAgICAgICAgICAgc3ByaXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0czogWydhc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nJ10sXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kczogbmV3IEJvdW5kaW5nQm94KFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3Rvcig4MDAgKiBpLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoODAwLCA0ODApLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAvLyB0aW1pbmc6IDE1MCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb2NrID0gc2NlbmUuaW5zdGFudGlhdGUoJ3JvY2snLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcigzNTAsIC1WaWV3cG9ydC5pbnN0YW5jZS5oZWlnaHQgKyAyMzkpLFxuICAgICAgICAgICAgc3ByaXRlOiB7XG4gICAgICAgICAgICAgICAgYXNzZXRzOiBbJ2Fzc2V0cy9pbWFnZXMvcm9ja1VwLnBuZyddLFxuICAgICAgICAgICAgICAgIGJvdW5kczogbmV3IEJvdW5kaW5nQm94KFxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDM1MCwgLVZpZXdwb3J0Lmluc3RhbmNlLmhlaWdodCArIDIzOSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoMTA4LCAyMzkpLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBzY2VuZS5pbnN0YW50aWF0ZSgnZ3JvdW5kQm90dG9tJytpLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoODA4ICogaSwgLVZpZXdwb3J0Lmluc3RhbmNlLmhlaWdodCArIDcxKSxcbiAgICAgICAgICAgICAgICBzcHJpdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzOiBbJ2Fzc2V0cy9pbWFnZXMvZ3JvdW5kRGlydC5wbmcnXSxcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzOiBuZXcgQm91bmRpbmdCb3goXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDgwOCAqIGksIC1WaWV3cG9ydC5pbnN0YW5jZS5oZWlnaHQgKyA3MSksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDgwOCwgNzEpLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Njcm9sbFNwZWVkID0gbmV3IFZlY3RvcigzLCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25VcGRhdGUodGltZXN0ZXA6IG51bWJlcikgOiB2b2lkIHtcbiAgICAgICAgLy8gbGV0IGNhbWVyYVBvcyA9IENhbWVyYS50cmFuc2Zvcm0uZ2V0UG9zaXRpb24oKS5hZGQodGhpcy5fc2Nyb2xsU3BlZWQpO1xuICAgICAgICAvLyBjYW1lcmFQb3MgPSBjYW1lcmFQb3MubXVsdGlwbHkodGltZXN0ZXApO1xuXG4gICAgICAgIC8vIENhbWVyYS50cmFuc2Zvcm0uc2V0UG9zaXRpb24oY2FtZXJhUG9zKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2FtZXMvZmxhcHB5L2NvbXBvbmVudHMvU2NlbmVNYW5hZ2VyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==