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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameObject__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__GameObject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GameObjectFactory__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__GameObjectFactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SceneGraph__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__SceneGraph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Sprite__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__Sprite__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Transform__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__Transform__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DirtyFlag__ = __webpack_require__(18);
/* unused harmony reexport withDirtyFlag */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Colliderable__ = __webpack_require__(19);
/* unused harmony reexport withCollider */











/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Camera__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Camera__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Canvas__ = __webpack_require__(12);
/* unused harmony reexport Canvas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Viewport__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Viewport__["a"]; });





/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_game__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PlaneMovement__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_SceneManager__ = __webpack_require__(23);
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
    onCollision(collidingObjs) {
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = makeGameObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_objects_Colliderable__ = __webpack_require__(19);


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
    let gameObjectType = __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["c" /* GameObject */];
    // if the object requires a collider, apply the given collider mixin 
    // to the GameObject
    if (config.collider) {
        gameObjectType = Object(__WEBPACK_IMPORTED_MODULE_1_engine_library_objects_Colliderable__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["c" /* GameObject */], config.collider);
    }
    let obj = new gameObjectType(id, new __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["f" /* Transform */](config.position));
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
    const element = injectDom(id, config.order);
    obj.setElement(element);
    obj.onInstantiate();
    return obj;
}


/***/ }),
/* 15 */
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
         * All colliders (attached to GameObjects) in the scene
         */
        this._colliders = [];
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
    get colliders() {
        return this._colliders;
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
     * Adds a collider for collision tracking
     *
     * @param collider
     */
    addCollider(collider) {
        this._colliders.push(collider);
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
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * Adds a dirty flag to a base class.
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = withCollider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);

function withCollider(Base, collider) {
    return class ColliderObject extends Base {
        constructor(...args) {
            super(...args);
            this._collider = collider;
            console.log('this gameobject has a collider', collider);
        }
        getCollider() {
            return this._collider;
        }
        onUpdate(timestep) {
            super.onUpdate(timestep);
            // TODO: implement QuadTree so we don't have to query every
            // single GameObject in the scene...
            const nearbyGameObjects = __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["d" /* SceneGraph */].instance.colliders;
            const collidingObjs = [];
            nearbyGameObjects.forEach(obj => {
                if (this._collider.collidesWith(obj)) {
                    collidingObjs.push(obj);
                }
            });
            if (collidingObjs.length > 0) {
                super.onCollision(collidingObjs);
            }
        }
    };
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_engine_library_input__ = __webpack_require__(21);



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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Keyboard__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Keyboard__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a"]; });



/***/ }),
/* 22 */
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
/* 23 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODdiZjVhYmQxNjM4ZjgzNThmOWMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvbWF0aHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZXMvZmxhcHB5L2ZsYXBweS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9HYW1lTG9vcC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0JvdW5kaW5nQm94LnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L21hdGhzL1ZlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9tYXRocy9NYXRocy50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvc2NyZWVuL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vQ2FudmFzLnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L3NjcmVlbi9WaWV3cG9ydC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0dhbWVPYmplY3RGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvU2NlbmVHcmFwaC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL1Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL1RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0RpcnR5RmxhZy50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0NvbGxpZGVyYWJsZS50cyIsIndlYnBhY2s6Ly8vLi9nYW1lcy9mbGFwcHkvY29tcG9uZW50cy9QbGFuZU1vdmVtZW50LnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L2lucHV0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L2lucHV0L0tleWJvYXJkLnRzIiwid2VicGFjazovLy8uL2dhbWVzL2ZsYXBweS9jb21wb25lbnRzL1NjZW5lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdENkM7QUFFWjtBQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIc0M7QUFDSjtBQUNFO0FBQ2tCO0FBQ2xCO0FBQ0w7QUFDRztBQUNJO0FBQ2dCOzs7Ozs7Ozs7Ozs7OztBQ1IxQjtBQUNBO0FBQ0k7Ozs7Ozs7Ozs7Ozs7O0FDRmQ7QUFDd0I7QUFDRjtBQUVnQjtBQUMzQjtBQUk5QyxnQkFBaUIsU0FBUSx5REFBSTtJQUN6QixPQUFPO1FBQ0gsTUFBTSxLQUFLLEdBQUcsMEVB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Y2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4N2JmNWFiZDE2MzhmODM1OGY5YyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVmVjdG9yIH0gZnJvbSAnLi9WZWN0b3InO1xuXG5pbXBvcnQgKiBhcyBNYXRocyBmcm9tICcuL01hdGhzJztcbmV4cG9ydCB7IE1hdGhzIH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvbWF0aHMvaW5kZXgudHMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJvdW5kaW5nQm94IH0gZnJvbSAnLi9Cb3VuZGluZ0JveCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2FtZU9iamVjdCB9IGZyb20gJy4vR2FtZU9iamVjdCc7XG5leHBvcnQgeyBtYWtlR2FtZU9iamVjdCwgR2FtZU9iamVjdENvbmZpZyB9IGZyb20gJy4vR2FtZU9iamVjdEZhY3RvcnknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTY2VuZUdyYXBoIH0gZnJvbSAnLi9TY2VuZUdyYXBoJztcbmV4cG9ydCB7IFNwcml0ZSwgU3ByaXRlQ29uZmlnIH0gZnJvbSAnLi9TcHJpdGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUcmFuc2Zvcm0gfSBmcm9tICcuL1RyYW5zZm9ybSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhEaXJ0eUZsYWcgfSBmcm9tICcuL0RpcnR5RmxhZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhDb2xsaWRlciwgQ29sbGlkZXJhYmxlIH0gZnJvbSAnLi9Db2xsaWRlcmFibGUnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvaW5kZXgudHMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIENhbWVyYSB9IGZyb20gJy4vQ2FtZXJhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FudmFzIH0gZnJvbSAnLi9DYW52YXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWaWV3cG9ydCB9IGZyb20gJy4vVmlld3BvcnQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L3NjcmVlbi9pbmRleC50cyIsImltcG9ydCB7IEdhbWUgfSBmcm9tICdlbmdpbmUvZ2FtZSc7XG5pbXBvcnQgeyBQbGFuZU1vdmVtZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL1BsYW5lTW92ZW1lbnQnO1xuaW1wb3J0IHsgU2NlbmVNYW5hZ2VyIH0gZnJvbSAnLi9jb21wb25lbnRzL1NjZW5lTWFuYWdlcic7XG5cbmltcG9ydCB7IFNjZW5lR3JhcGgsIFNwcml0ZSwgQm91bmRpbmdCb3ggfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcbmltcG9ydCB7IFZpZXdwb3J0LCBDYW52YXMsIENhbWVyYSB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L3NjcmVlbic7XG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMvY29sbGlkZXJzJztcblxuY2xhc3MgRmxhcHB5R2FtZSBleHRlbmRzIEdhbWUge1xuICAgIG9uU3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gU2NlbmVHcmFwaC5pbnN0YW5jZTtcbiAgICAgICAgY29uc3Qgc2NlbmVNYW5hZ2VyID0gc2NlbmUuaW5zdGFudGlhdGUoJ3NjZW5lTWFuYWdlcicsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAgICAgICAgICBTY2VuZU1hbmFnZXIsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwbGFuZVJlZCA9IHNjZW5lLmluc3RhbnRpYXRlKCdwbGFuZScsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDUwLCAtNTApLFxuICAgICAgICAgICAgLy8gY29sbGlkZXI6IEJveENvbGxpZGVyLFxuICAgICAgICAgICAgc3ByaXRlOiB7XG4gICAgICAgICAgICAgICAgYXNzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICdhc3NldHMvaW1hZ2VzL3BsYW5lUmVkMS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAvLyAnYXNzZXRzL2ltYWdlcy9wbGFuZVJlZDIucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gJ2Fzc2V0cy9pbWFnZXMvcGxhbmVSZWQzLnBuZycsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBib3VuZHM6IG5ldyBCb3VuZGluZ0JveChcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3Rvcig1MCwgLTUwKSwgXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoNTAsIDUwKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgLy8gdGltaW5nOiAxNTAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcG9uZW50czogW1xuICAgICAgICAgICAgICAgIFBsYW5lTW92ZW1lbnQsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNvbnN0IGdhbWUgPSBuZXcgRmxhcHB5R2FtZSgpO1xuZ2FtZS5pbml0aWFsaXNlKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2FtZXMvZmxhcHB5L2ZsYXBweS50cyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgYm9vdEdhbWVMb29wIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvR2FtZUxvb3AnO1xuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvc2NyZWVuJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcblxuLyoqXG4gKiBCYXNlIGNvbnRhaW5lciBmb3IgYSBnYW1lLiBBIGdhbWUgc2hvdWxkIGV4dGVuZCB0aGlzXG4gKiBhbmQgZmlsbCBpdCB3aXRoIGdhbWUgc3BlY2lmaWMgbG9naWMuXG4gKi9cbmV4cG9ydCBjbGFzcyBHYW1lIHtcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgZW5naW5lIGdhbWUgbG9vcCBhbmQgdGhlIGdhbWUncyBsb2dpY1xuICAgICAqL1xuICAgIGluaXRpYWxpc2UoKSB7XG4gICAgICAgIENhbWVyYS5pbnN0YW5jZS50cmFuc2Zvcm0uc2V0UG9zaXRpb24obmV3IFZlY3RvcigwLCAwKSk7XG4gICAgICAgIGJvb3RHYW1lTG9vcCh0aGlzLm9uU3RhcnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ2ljIHRvIHJ1biBvbmNlIGFmdGVyIHRoZSBtYWluIGdhbWUgbG9vcCBpcyBzdGFydGVkXG4gICAgICovXG4gICAgb25TdGFydCgpIHt9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZ2FtZS50cyIsImltcG9ydCB7IFNjZW5lR3JhcGggfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcblxuLyoqXG4gKiBEZXNpcmVkIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGZyYW1lc1xuICpcbiAqIEBjb25zdGFudCB7bnVtYmVyfVxuICovXG5jb25zdCBNU19QRVJfRlJBTUU6IG51bWJlciA9IDE2O1xuXG4vKipcbiAqICBHYW1lIHNwZWVkICgxID0gbm9ybWFsIHNwZWVkIHwgMCA9IG5vdCBtb3ZpbmcpXG4gKiBcbiAqICBAY29uc3RhbnQge251bWJlcn1cbiAqL1xuY29uc3QgVElNRV9TVEVQOiBudW1iZXIgPSAxO1xuXG4vKipcbiAqICBUaW1lc3RhbXAgb2YgdGhlIGxhc3QgcmVuZGVyZWQgZnJhbWVcbiAqIFxuICogQHR5cGUge251bWJlcn1cbiAqL1xubGV0IGxhc3RUaWNrOiBudW1iZXI7XG5cblxuLyoqXG4gKiBUaGUgbWFpbiBnYW1lIGxvb3AuXG4gKiBcbiAqIENhbGN1bGF0ZXMgZnJhbWUgc3RhdHMgYW5kIHBhc3NlcyBpdCB0byB0aGUgdXBkYXRlXG4gKiBhbmQgcmVuZGVyIGxvb3BcbiAqL1xuZnVuY3Rpb24gZ2FtZUxvb3AoKSA6IHZvaWQge1xuICAgIC8vIGNhbGN1bGF0ZSBob3cgbXVjaCB0aW1lIGhhcyBhY3R1YWxseSBwYXNzZWQgc2luY2VcbiAgICAvLyB0aGUgbGFzdCBmcmFtZSBhbmQgcGFzcyBpdCB0byB0aGUgdXBkYXRlIGxvb3BcbiAgICBjb25zdCBjdXJyZW50VGljayA9IERhdGUubm93KCk7XG4gICAgY29uc3QgZWxhcHNlZCA9IGN1cnJlbnRUaWNrIC0gbGFzdFRpY2s7XG4gICAgY29uc3Qgc3RlcCA9IChNU19QRVJfRlJBTUUgLyBlbGFwc2VkKSAqIFRJTUVfU1RFUDtcbiAgICBcbiAgICBvblVwZGF0ZShzdGVwKTtcbiAgICBvblJlbmRlcigpO1xuXG4gICAgbGFzdFRpY2sgPSBjdXJyZW50VGljaztcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuXG5cbi8qKlxuICogIERlbGVnYXRlcyB3b3JrIHRvIGV2ZXJ5IGdhbWUgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIG9uVXBkYXRlKHRpbWVzdGVwOiBudW1iZXIpIHtcbiAgICBjb25zdCBoaWVyYXJjaHkgPSBTY2VuZUdyYXBoLmluc3RhbmNlLmhpZXJhcmNoeTtcbiAgICBjb25zdCBjb3Jwc2VPYmplY3RzID0gW107XG5cbiAgICAvLyBsb29wIG92ZXIgYSBidWZmZXIgc28gdGhhdCBuZXdseSBpbnN0YW50aWF0ZWQgb2JqZWN0c1xuICAgIC8vIGFsd2F5cyBzdGFydCBleGVjdXRpb24gZnJvbSB0aGUgbmV4dCBmcmFtZVxuICAgIGNvbnN0IGJ1ZmZlckNvdW50ID0gaGllcmFyY2h5Lmxlbmd0aDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYnVmZmVyQ291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBvYmogPSBoaWVyYXJjaHlbaV07XG5cbiAgICAgICAgLy8gYW55IG9iamVjdHMgbWFya2VkIGZvciBkZWxldGlvbiBzaG91bGQgbm90IGJlIGV4ZWN1dGVkXG4gICAgICAgIGlmKG9iai5pc0Rlc3Ryb3lpbmcoKSkge1xuICAgICAgICAgICAgY29ycHNlT2JqZWN0cy5wdXNoKG9iaik7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBvYmoub25VcGRhdGUodGltZXN0ZXApO1xuICAgIH1cblxuICAgIC8vIGNsZWFudXAgYW55IG9iamVjdHMgbWFya2VkIGZvciBkZWxldGlvblxuICAgIGlmKGNvcnBzZU9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBTY2VuZUdyYXBoLmluc3RhbmNlLnJlbW92ZUJhdGNoKGNvcnBzZU9iamVjdHMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZW5kZXJzIGV2ZXJ5IHZpc2libGUgR2FtZU9iamVjdCB0byBET00gZXZlcnkgZnJhbWVcbiAqL1xuZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgU2NlbmVHcmFwaFxuICAgICAgICAuaW5zdGFuY2VcbiAgICAgICAgLmhpZXJhcmNoeVxuICAgICAgICAuZm9yRWFjaChvYmogPT4gb2JqLnJlbmRlcigpKTtcbn1cblxuLyoqXG4gKiBTdGFydHMgdGhlIGdhbWUgbG9vcFxuICovXG5sZXQgaXNCb290ZWQgPSBmYWxzZTtcbmV4cG9ydCBmdW5jdGlvbiBib290R2FtZUxvb3Aob25TdGFydDogRnVuY3Rpb24pIHtcbiAgICBpZihpc0Jvb3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxhc3RUaWNrID0gRGF0ZS5ub3coKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIG9uU3RhcnQoKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9HYW1lTG9vcC50cyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVjdGFuZ2xlIGluIHdvcmxkLXNwYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kaW5nQm94IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfb3JpZ2luOiBWZWN0b3IsXG4gICAgICAgIHByaXZhdGUgX2RpbWVuc2lvbnM6IFZlY3RvcixcbiAgICAgICAgcHJpdmF0ZSBfb2Zmc2V0OiBWZWN0b3IgPSBWZWN0b3Iub3JpZ2luLFxuICAgICkge31cblxuICAgIGdldCBwb3NpdGlvbigpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yaWdpbi5hZGQodGhpcy5fb2Zmc2V0KTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGxlZnQoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnggLSAodGhpcy5fZGltZW5zaW9ucy54IC8gMik7XG4gICAgfVxuICAgIGdldCByaWdodCgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueCArICh0aGlzLl9kaW1lbnNpb25zLnggLyAyKTtcbiAgICB9XG4gICAgZ2V0IHRvcCgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueSArICh0aGlzLl9kaW1lbnNpb25zLnkgLyAyKTtcbiAgICB9XG4gICAgZ2V0IGJvdHRvbSgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueSAtICh0aGlzLl9kaW1lbnNpb25zLnkgLyAyKTtcbiAgICB9XG5cbiAgICBnZXQgZGltZW5zaW9ucygpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpbWVuc2lvbnM7XG4gICAgfVxuICAgIGdldCBvZmZzZXQoKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vZmZzZXQ7XG4gICAgfVxuICAgIGdldCBvcmlnaW4oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcmlnaW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgQm91bmRpbmcgQm94XG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IG9yaWdpbiBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0T3JpZ2luKG9yaWdpbjogVmVjdG9yKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9vcmlnaW4gPSBvcmlnaW47XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvQm91bmRpbmdCb3gudHMiLCJpbXBvcnQgeyBNYXRocyB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgY29vcmRpbmF0ZSBpbiAyRCBzcGFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF94OiBudW1iZXIgPSAwLFxuICAgICAgICBwcml2YXRlIF95OiBudW1iZXIgPSAwXG4gICAgKSB7fVxuXG4gICAgLyoqXG4gICAgICogIFJldHVybnMgdGhlIHgtY29vcmRpbmF0ZVxuICAgICAqIFxuICAgICAqICBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHgoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl94O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBSZXR1cm5zIHRoZSB5LWNvb3JkaW5hdGVcbiAgICAgKiBcbiAgICAgKiAgQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCB5KCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5feTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgUmV0dXJucyB0aGUgbWFnbml0dWRlIChpZS4gbGVuZ3RoKSBvZiB0aGUgdmVjdG9yXG4gICAgICogXG4gICAgICogIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgbWFnbml0dWRlKCkgOiBudW1iZXIge1xuICAgICAgICBjb25zdCB4MiA9IHRoaXMuX3ggKiB0aGlzLl94O1xuICAgICAgICBjb25zdCB5MiA9IHRoaXMuX3kgKiB0aGlzLl95O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHgyICsgeTIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSB2ZWN0b3IgdGhhdCBpcyBwZXJwZW5kaWN1bGFyIHRvIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgZ2V0IG5vcm1hbCgpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoLXRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkKHZlY3RvcjogVmVjdG9yKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFxuICAgICAgICAgICAgdGhpcy54ICsgdmVjdG9yLngsXG4gICAgICAgICAgICB0aGlzLnkgKyB2ZWN0b3IueVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdWJ0cmFjdCh2ZWN0b3I6IFZlY3RvcikgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihcbiAgICAgICAgICAgIHRoaXMueCAtIHZlY3Rvci54LFxuICAgICAgICAgICAgdGhpcy55IC0gdmVjdG9yLnlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbXVsdGlwbHkoc2NhbGFyOiBudW1iZXIpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoXG4gICAgICAgICAgICB0aGlzLnggKiBzY2FsYXIsXG4gICAgICAgICAgICB0aGlzLnkgKiBzY2FsYXJcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXBzIHRoaXMgVmVjdG9yIGJldHdlZW4gdGhlIHZhbHVlIG9mIHR3byBWZWN0b3JzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IG1pblxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBtYXggXG4gICAgICovXG4gICAgcHVibGljIGNsYW1wKG1pbjogVmVjdG9yLCBtYXg6IFZlY3RvcikgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihcbiAgICAgICAgICAgIE1hdGhzLmNsYW1wKHRoaXMueCwgbWluLngsIG1heC54KSxcbiAgICAgICAgICAgIE1hdGhzLmNsYW1wKHRoaXMueSwgbWluLnksIG1heC55KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIGRpcmVjdGlvbiBnZXR0ZXJzXG4gICAgICovXG4gICAgc3RhdGljIGdldCBsZWZ0KCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigtMSwgMCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgcmlnaHQoKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDEsIDApO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHVwKCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigwLCAxKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBkb3duKCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigwLCAtMSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgb3JpZ2luKCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigwLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc2NhbGFyIHRoYXQgc2hvd3MgaG93IG11Y2ggdmVjdG9yMVxuICAgICAqIGlzIGluIHZlY3RvcjIncyBkaXJlY3Rpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IHZlY3RvcjEgXG4gICAgICogQHBhcmFtIHsqfSB2ZWN0b3IyIFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGRvdCh2ZWN0b3IxOiBWZWN0b3IsIHZlY3RvcjI6IFZlY3RvcikgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKHZlY3RvcjEueCAqIHZlY3RvcjIueCkgKyAodmVjdG9yMS55ICogdmVjdG9yMi55KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvbWF0aHMvVmVjdG9yLnRzIiwiLyoqXG4gKiBSZXR1cm5zIGEgd2hvbGUgbnVtYmVyIGJldHdlZW4gW21pbl0gYW5kIFttYXhdXG4gKiBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IFxuICogXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA6IG51bWJlciB7XG4gICAgY29uc3QgdmFsdWUgPSAoTWF0aC5yYW5kb20oKSAqIChtaW4gLSBtYXgpKSAtIG1pbjtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2FwcyBbdmFsdWVdIGJldHdlZW4gbWluIGFuZCBtYXggKGluY2x1c2l2ZSlcbiAqIFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggXG4gKiBcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgOiBudW1iZXIge1xuICAgIGlmKHZhbHVlIDw9IG1pbikgcmV0dXJuIG1pbjtcbiAgICBpZih2YWx1ZSA+PSBtYXgpIHJldHVybiBtYXg7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L21hdGhzL01hdGhzLnRzIiwiaW1wb3J0IHsgR2FtZU9iamVjdCwgVHJhbnNmb3JtLCBTcHJpdGUgfSBmcm9tIFwiZW5naW5lL2xpYnJhcnkvb2JqZWN0c1wiO1xuXG4vKipcbiAqIEFuIGludGVyZmFjZSBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBhIEdhbWVPYmplY3QuIFRoaXMgaXNcbiAqIHdoZXJlIGFsbW9zdCBhbGwgdGhlIGN1c3RvbSBnYW1lIGNvZGUgc2hvdWxkIGxpdmUuXG4gKiBcbiAqIEEgY29tcG9uZW50IHNob3VsZCBiZSBpbnN0YW50aWF0ZWQgYW5kIGF0dGFjaGVkIHRvIGFcbiAqIEdhbWVPYmplY3Qgd2hlbiB0aGUgR2FtZU9iamVjdCBpcyBjcmVhdGVkLlxuICovXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBHYW1lT2JqZWN0IHRoaXMgY29tcG9uZW50IGJlbG9uZ3MgdG9cbiAgICAgKi9cbiAgICBwcml2YXRlIF9nYW1lT2JqZWN0OiBHYW1lT2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZU9iamVjdDogR2FtZU9iamVjdCkge1xuICAgICAgICB0aGlzLl9nYW1lT2JqZWN0ID0gZ2FtZU9iamVjdDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdHJhbnNmb3JtIGZvciB0aGUgR2FtZU9iamVjdCBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge1RyYW5zZm9ybX1cbiAgICAgKi9cbiAgICBnZXQgdHJhbnNmb3JtKCkgOiBUcmFuc2Zvcm0ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdC5nZXRUcmFuc2Zvcm0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzcHJpdGUgZm9yIHRoZSBHYW1lT2JqZWN0IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogXG4gICAgICogQHJldHVybiB7U3ByaXRlfVxuICAgICAqL1xuICAgIGdldCBzcHJpdGUoKSA6IFNwcml0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lT2JqZWN0LmdldFNwcml0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIEdhbWVPYmplY3QgdGhpcyBjb21wb25lbnQgYmVsb25ncyB0b1xuICAgICAqIFxuICAgICAqIEByZXR1cm4ge0dhbWVPYmplY3R9XG4gICAgICovXG4gICAgZ2V0IGdhbWVPYmplY3QoKSA6IEdhbWVPYmplY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2dpYyB0byBydW4gd2hlbiB0aGUgb2JqZWN0IGlzIGZpcnN0IGluc3RhbnRpYXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25JbnN0YW50aWF0ZSgpIDogdm9pZCB7fVxuICAgIFxuICAgIC8qKlxuICAgICAqIExvZ2ljIHRvIHJ1biBldmVyeSBnYW1lIGxvb3AgZnJhbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgb25VcGRhdGUodGltZXN0ZXA6IG51bWJlcikgOiB2b2lkIHt9XG5cbiAgICAvKipcbiAgICAgKiBMb2dpYyB0byBydW4gd2hlbiB0aGUgb2JqZWN0IGlzIGRlc3Ryb3llZFxuICAgICAqL1xuICAgIHB1YmxpYyBvbkRlc3Ryb3koKSA6IHZvaWQge31cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0NvbXBvbmVudC50cyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcbmltcG9ydCB7IEJvdW5kaW5nQm94LCBUcmFuc2Zvcm0sIFNwcml0ZSwgU3ByaXRlQ29uZmlnLCBDb21wb25lbnQsIENvbGxpZGVyYWJsZSB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvc2NyZWVuJztcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucyc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBvYmplY3QgaW4gdGhlIHNjZW5lXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPYmplY3QgaW1wbGVtZW50cyBDb2xsaWRlcmFibGUge1xuXG4gICAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIF9pc1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX2lzRGVzdHJveWluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2lzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX3RyYW5zZm9ybTogVHJhbnNmb3JtO1xuICAgIHByaXZhdGUgX3Nwcml0ZTogU3ByaXRlO1xuICAgIHByaXZhdGUgX2NvbXBvbmVudHM6IEFycmF5PENvbXBvbmVudD4gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgR2FtZU9iamVjdFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAgICAgICAgICAgVW5pcXVlIGlkZW50aWZpZXJcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gcG9zaXRpb24gICAgIFN0YXJ0aW5nIHBvc2l0aW9uIG9mIHRoZSBvYmplY3RcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCB0cmFuc2Zvcm06IFRyYW5zZm9ybSkge1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl90cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkgOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7VHJhbnNmb3JtfVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRUcmFuc2Zvcm0oKSA6IFRyYW5zZm9ybSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3ByaXRlfVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTcHJpdGUoKSA6IFNwcml0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHVuaXF1ZSBpZGVudGlmaWVyIHN0cmluZyBvZiB0aGlzIEdhbWVPYmplY3RcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgcHVibGljIGdldE5hbWUoKSA6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBET00gZWxlbWVudCB0aGF0IHJlcHJlc2VudHMgdGhpcyBHYW1lT2JqZWN0XG4gICAgICogXG4gICAgICogQHJldHVybiB7SFRNTERpdkVsZW1lbnR9XG4gICAgICovXG4gICAgcHVibGljIGdldEVsZW1lbnQoKSA6IEhUTUxEaXZFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBvYmplY3QgaXMgdmlzaWJsZSAoYnV0IHN0aWxsIGV4ZWN1dGluZ1xuICAgICAqIGl0cyB1cGRhdGUgbG9vcClcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIHB1YmxpYyBpc1Zpc2libGUoKSA6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNWaXNpYmxlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIG9iamVjdCB3aWxsIGJlIGRlc3Ryb3llZCBuZXh0IGZyYW1lXG4gICAgICogXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNEZXN0cm95aW5nKCkgOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVzdHJveWluZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIG9iamVjdCBpcyBkaXNhYmxlZCAoaWUuIG5vdCBleGVjdXRpbmdcbiAgICAgKiBpdHMgdXBkYXRlIGxvb3AgYW5kIHJlbmRlcmluZylcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIHB1YmxpYyBpc0Rpc2FibGVkKCkgOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgSFRNTCBlbGVtZW50IHRoYXQgcmVwcmVzZW50cyB0aGlzIEdhbWVPYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50IFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRFbGVtZW50KGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29tcG9uZW50IHRoYXQgaG9va3MgaW50byB0aGlzIEdhbWVPYmplY3QncyBsaWZlY3ljbGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50IFxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRDb21wb25lbnQoY29tcG9uZW50OiBDb21wb25lbnQpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIFNwcml0ZSB0aGF0IHJlcHJlc2VudHMgdGhpcyBHYW1lT2JqZWN0LiBJZiBubyBTcHJpdGUgaXNcbiAgICAgKiBzZXQsIG5vdGhpbmcgd2lsbCBoYXBwZW4gaW4gdGhlIHJlbmRlciBjeWNsZSBmb3IgdGhpcyBvYmplY3QuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtTcHJpdGV9IGNvbmZpZyBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U3ByaXRlKHNwcml0ZTogU3ByaXRlKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9zcHJpdGUgPSBzcHJpdGU7XG4gICAgfVxuICAgICBcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoaXMgR2FtZU9iamVjdCBhcyB0aGUgY2hpbGQgb2YgdGhlIGdpdmVuIEdhbWVPYmplY3QuIEluIG90aGVyXG4gICAgICogd29yZHMsIGl0IHdpbGwgbW92ZSwgc2NhbGUgYW5kIHJvdGF0ZSByZWxhdGl2ZWx5IHdoZW5ldmVyIHRoZSBwYXJlbnQgZG9lcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0dhbWVPYmplY3R9IGdhbWVPYmplY3QgXG4gICAgICovXG4gICAgcHVibGljIHNldFBhcmVudChnYW1lT2JqZWN0OiB0aGlzKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl90cmFuc2Zvcm0uc2V0UGFyZW50KGdhbWVPYmplY3QuZ2V0VHJhbnNmb3JtKCkpO1xuICAgICAgICBnYW1lT2JqZWN0LmdldFRyYW5zZm9ybSgpLmFkZENoaWxkKHRoaXMuX3RyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgb2JqZWN0LiBTZXR0aW5nIHRvIGZhbHNlXG4gICAgICogZWZmZWN0aXZlbHkgc2V0cyAnZGlzcGxheTogbm9uZScgY3NzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1Zpc2libGUgXG4gICAgICovXG4gICAgcHVibGljIHNldFZpc2liaWxpdHkoaXNWaXNpYmxlOiBib29sZWFuKSA6IHZvaWQge1xuICAgICAgICBpZih0aGlzLl9pc1Zpc2libGUgIT0gaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBpc1Zpc2libGUgPyAnbm9uZScgOiAnaGlkZGVuJztcbiAgICAgICAgICAgIHRoaXMuX2lzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgd2hldGhlciB0aGUgb2JqZWN0IGlzIGRpc2FibGVkLlxuICAgICAqIFxuICAgICAqIEluIGEgZGlzYWJsZWQgc3RhdGUsIHRoZSBvYmplY3QgbmVpdGhlciByZW5kZXJzIG5vclxuICAgICAqIGV4ZWN1dGVzIGl0cyB1cGRhdGUgbG9vcC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzRGlzYWJsZWQgXG4gICAgICovXG4gICAgcHVibGljIHNldERpc2FibGVkKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBpc0Rpc2FibGVkID8gJ25vbmUnIDogJ2hpZGRlbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFya3MgdGhlIG9iamVjdCBmb3IgZGVzdHJ1Y3Rpb24gYXQgdGhlIGVuZCBvZiB0aGUgZnJhbWUuXG4gICAgICogRnVydGhlcm1vcmUsIHRoZSBvYmplY3Qgd2lsbCBub3QgZXhlY3V0ZSBpdHMgdXBkYXRlIGxvb3AgaWYgXG4gICAgICogaXQgaGFzbid0IGFscmVhZHkgZXhlY3V0ZWQgaXQgeWV0LlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXN0cm95KCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNEZXN0cm95aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBvbkluc3RhbnRpYXRlKCkgb24gYWxsIGNvbXBvbmVudHMgb24gdGhpcyBHYW1lT2JqZWN0XG4gICAgICovXG4gICAgcHVibGljIG9uSW5zdGFudGlhdGUoKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goYyA9PiBjLm9uSW5zdGFudGlhdGUoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgb25EZXN0cm95KCkgb24gYWxsIGNvbXBvbmVudHMgb24gdGhpcyBHYW1lT2JqZWN0XG4gICAgICovXG4gICAgcHVibGljIG9uRGVzdHJveSgpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaChjID0+IGMub25EZXN0cm95KCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIG9uVXBkYXRlKCkgb24gYWxsIGNvbXBvbmVudHMgb24gdGhpcyBHYW1lT2JqZWN0XG4gICAgICovXG4gICAgcHVibGljIG9uVXBkYXRlKHRpbWVzdGVwOiBudW1iZXIpIDogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuX2lzRGlzYWJsZWQgfHwgdGhpcy5faXNEZXN0cm95aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKGMgPT4gYy5vblVwZGF0ZSh0aW1lc3RlcCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNvbGxpc2lvbihjb2xsaWRpbmdPYmpzOiBDb2xsaWRlcltdKSA6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgb2JqZWN0IGluIHdvcmxkIHNwYWNlIGVhY2ggZ2FtZSBsb29wIGZyYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlbmRlcigpIDogdm9pZCB7XG4gICAgICAgIGlmKCF0aGlzLl9pc1Zpc2libGUgfHwgdGhpcy5faXNEaXNhYmxlZCB8fCB0aGlzLl9pc0Rlc3Ryb3lpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IHNjcmVlblNwYWNlUG9zID0gbnVsbDtcbiAgICAgICAgbGV0IGlzVHJhbnNmb3JtRGlydHkgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIC8vIG9ubHkgcmVkcmF3IHdoZW4gdGhlIFRyYW5zZm9ybSBoYXMgYWN0dWFsbHkgbW92ZWRcbiAgICAgICAgaWYodGhpcy5fdHJhbnNmb3JtLmlzRGlydHkoKSkge1xuICAgICAgICAgICAgLy8gdGhlIFRyYW5zZm9ybSBzdG9yZXMgb3VyIHdvcmxkLXNwYWNlIGNvb3JkaW5hdGVzLFxuICAgICAgICAgICAgLy8gYnV0IHdlIG5lZWQgdG8gcmVuZGVyIHRoZSBvYmplY3QgaW4gc2NyZWVuLXNwYWNlXG4gICAgICAgICAgICBzY3JlZW5TcGFjZVBvcyA9IHRoaXMuX2dldFNjcmVlblBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUubGVmdCA9IHNjcmVlblNwYWNlUG9zLngudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUudG9wICA9IHNjcmVlblNwYWNlUG9zLnkudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtLmNsZWFuKCk7XG5cbiAgICAgICAgICAgIGlzVHJhbnNmb3JtRGlydHkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb25seSByZWRyYXcgdGhlIHNwcml0ZSBpZiB0aGUgU3ByaXRlIG9yIFRyYW5zZm9ybSBoYXMgbW92ZWRcbiAgICAgICAgaWYodGhpcy5fc3ByaXRlICYmIChpc1RyYW5zZm9ybURpcnR5IHx8IHRoaXMuX3Nwcml0ZS5pc0RpcnR5KCkpKSB7XG4gICAgICAgICAgICBzY3JlZW5TcGFjZVBvcyA9IHNjcmVlblNwYWNlUG9zIHx8IHRoaXMuX2dldFNjcmVlblBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5yZW5kZXIoc2NyZWVuU3BhY2VQb3MpO1xuICAgICAgICAgICAgdGhpcy5fc3ByaXRlLmNsZWFuKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFNjcmVlblBvc2l0aW9uKCkgOiBWZWN0b3Ige1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuX3RyYW5zZm9ybS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBjYW1lcmFQb3MgPSBDYW1lcmEuaW5zdGFuY2UudHJhbnNmb3JtLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihcbiAgICAgICAgICAgIHBvc2l0aW9uLnggLSBjYW1lcmFQb3MueCxcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgLSBjYW1lcmFQb3MueVxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0dhbWVPYmplY3QudHMiLCJpbXBvcnQgeyBUcmFuc2Zvcm0sIFNjZW5lR3JhcGggfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IENhbWVyYTtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyB0aGlzKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYW5zZm9ybTogVHJhbnNmb3JtO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybSgpO1xuXG4gICAgICAgIC8vIHNpbmNlIGEgY2FtZXJhIG1vdmUgbmVlZHMgdG8gdXBkYXRlIGV2ZXJ5dGhpbmcgaW4gdmlldyxcbiAgICAgICAgLy8gc2V0IGFsbCBvYmplY3RzIGluIHRoZSB2aWV3cG9ydCBhcyAnZGlydHknIHNvIHRoZXkgZ2V0XG4gICAgICAgIC8vIHJlZHJhd25cbiAgICAgICAgXG4gICAgICAgIC8vIFRPRE86IHZpZXdwb3J0IGN1bGxpbmdcbiAgICAgICAgY29uc3Qgc2V0UG9zaXRpb25GdW5jID0gdGhpcy5fdHJhbnNmb3JtLnNldFBvc2l0aW9uLmJpbmQodGhpcy5fdHJhbnNmb3JtKTtcbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtLnNldFBvc2l0aW9uID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBzZXRQb3NpdGlvbkZ1bmModmFsdWUpO1xuICAgICAgICAgICAgU2NlbmVHcmFwaC5pbnN0YW5jZS5oaWVyYXJjaHkuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgICAgIG9iai5nZXRUcmFuc2Zvcm0oKS5kaXJ0eSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdHJhbnNmb3JtKCkgOiBUcmFuc2Zvcm0ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vQ2FtZXJhLnRzIiwiaW1wb3J0IHsgVmlld3BvcnQgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9zY3JlZW4nO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG4vKipcbiAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0byBpbnRlcmFjdCB3aXRoIHRoZSBIVE1MIGNhbnZhc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQ2FudmFzO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29udGV4dDogYW55O1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBpZighdGhpcy5fY29udGV4dCkge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBWaWV3cG9ydC5pbnN0YW5jZS53aWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBWaWV3cG9ydC5pbnN0YW5jZS5oZWlnaHQ7XG5cbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXdzIGEgbGluZSBvbiB0aGUgc2NyZWVuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvcjEgXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvcjIgXG4gICAgICovXG4gICAgZHJhd0xpbmUodmVjdG9yMTogVmVjdG9yLCB2ZWN0b3IyOiBWZWN0b3IsIGNvbG9yID0gJ2dyZWVuJykge1xuICAgICAgICBjb25zdCBjID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgIGMubW92ZVRvKHZlY3RvcjEueCwgdmVjdG9yMS55KTtcbiAgICAgICAgYy5saW5lVG8odmVjdG9yMi54LCB2ZWN0b3IyLnkpO1xuICAgICAgICBjLnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L3NjcmVlbi9DYW52YXMudHMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgYnJvd3NlciB3aW5kb3dcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld3BvcnQge1xuXG4gICAgLy8gc2luZ2xldG9uIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCBtb3JlIHRoYW4gb25lIGJyb3dzZXIgcmVzaXplIGV2ZW50IGxpc3RlbmVyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBWaWV3cG9ydDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpIDogVmlld3BvcnQge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYnJvd3NlckhlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2Jyb3dzZXJXaWR0aDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB2aWV3cG9ydFdpZHRoOiBudW1iZXIgPSA4MDAsIFxuICAgICAgICBwcml2YXRlIHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIgPSA0MDBcbiAgICApIHtcbiAgICAgICAgdGhpcy5fcmVjYWxjdWxhdGVTY3JlZW4oKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3JlY2FsY3VsYXRlU2NyZWVuLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jyb3dzZXJXaWR0aDtcbiAgICB9XG4gICAgZ2V0IGhlaWdodCgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jyb3dzZXJIZWlnaHQ7XG4gICAgfVxuICAgIGdldCBzY3JlZW4oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG4gICAgZ2V0IG9yaWdpbigpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoXG4gICAgICAgICAgICB0aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0IC8gMixcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZS1jYWNoZSB0aGUgc2l6ZSBvZiB0aGUgYnJvd3NlciB3aW5kb3cgdG8gcHJldmVudCByZWZsb3dzL3JlbGF5b3V0c1xuICAgICAqL1xuICAgIF9yZWNhbGN1bGF0ZVNjcmVlbigpIDogdm9pZCB7XG4gICAgICAgIC8vIFRPRE86IGV4ZWN1dGUgb25seSBkdXJpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgIHRoaXMuX2Jyb3dzZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuX2Jyb3dzZXJXaWR0aCAgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvc2NyZWVuL1ZpZXdwb3J0LnRzIiwiaW1wb3J0IHsgVHJhbnNmb3JtLCBTcHJpdGUsIFNwcml0ZUNvbmZpZywgR2FtZU9iamVjdCwgQ29tcG9uZW50IH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cyc7XG5pbXBvcnQgeyBDb2xsaWRlciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuaW1wb3J0IHdpdGhDb2xsaWRlciBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzL0NvbGxpZGVyYWJsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2FtZU9iamVjdENvbmZpZyB7XG4gICAgcG9zaXRpb24/OiBWZWN0b3I7XG4gICAgY29tcG9uZW50cz86IEFycmF5PG5ldyhvYmo6IEdhbWVPYmplY3QpID0+IENvbXBvbmVudD47XG4gICAgc3ByaXRlPzogU3ByaXRlQ29uZmlnO1xuICAgIG9yZGVyPzogbnVtYmVyO1xuICAgIGNvbGxpZGVyPzogQ29sbGlkZXI7XG59XG5cbi8qKlxuICogSW5zZXJ0cyBhIG5ldyBHYW1lT2JqZWN0IDxkaXY+IGludG8gdGhlIHBhZ2UgYm9keVxuICogXG4gKiBAcGFyYW0gaWQgICAgICAgIFVuaXF1ZSBpZGVudGlmaWVyXG4gKiBAcGFyYW0gekluZGV4ICAgIEJhc2ljYWxseSB0aGUgb2JqZWN0J3MgcGVybWFuZW50IFogYXhpcyBjb29yZGluYXRlXG4gKi9cbmZ1bmN0aW9uIGluamVjdERvbShpZDogc3RyaW5nLCB6SW5kZXg6IG51bWJlciA9IDApIDogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lT2JqZWN0Jyk7XG4gICAgZWxlbWVudC5zdHlsZS56SW5kZXggPSB6SW5kZXgudG9TdHJpbmcoKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VHYW1lT2JqZWN0KGlkOiBzdHJpbmcsIGNvbmZpZzogR2FtZU9iamVjdENvbmZpZykgOiBHYW1lT2JqZWN0IHtcbiAgICBsZXQgZ2FtZU9iamVjdFR5cGUgPSBHYW1lT2JqZWN0O1xuXG4gICAgLy8gaWYgdGhlIG9iamVjdCByZXF1aXJlcyBhIGNvbGxpZGVyLCBhcHBseSB0aGUgZ2l2ZW4gY29sbGlkZXIgbWl4aW4gXG4gICAgLy8gdG8gdGhlIEdhbWVPYmplY3RcbiAgICBpZihjb25maWcuY29sbGlkZXIpIHtcbiAgICAgICAgZ2FtZU9iamVjdFR5cGUgPSB3aXRoQ29sbGlkZXIoR2FtZU9iamVjdCwgY29uZmlnLmNvbGxpZGVyKTtcbiAgICB9XG4gICAgbGV0IG9iaiA9IG5ldyBnYW1lT2JqZWN0VHlwZShpZCwgbmV3IFRyYW5zZm9ybShjb25maWcucG9zaXRpb24pKTtcblxuICAgIGlmKGNvbmZpZy5zcHJpdGUgJiYgY29uZmlnLnNwcml0ZS5hc3NldHMpIHtcbiAgICAgICAgY29uc3Qgc3ByaXRlSW5zdGFuY2UgPSBuZXcgU3ByaXRlKGNvbmZpZy5zcHJpdGUpO1xuICAgICAgICBzcHJpdGVJbnN0YW5jZS5hcHBlbmREb20oKTtcbiAgICAgICAgb2JqLnNldFNwcml0ZShzcHJpdGVJbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgaWYoY29uZmlnLmNvbXBvbmVudHMpIHtcbiAgICAgICAgY29uZmlnLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnROYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBjb21wb25lbnROYW1lKG9iaik7XG4gICAgICAgICAgICBvYmouYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSBpbmplY3REb20oaWQsIGNvbmZpZy5vcmRlcik7XG4gICAgb2JqLnNldEVsZW1lbnQoZWxlbWVudCk7XG4gICAgb2JqLm9uSW5zdGFudGlhdGUoKTtcblxuICAgIHJldHVybiBvYmo7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9HYW1lT2JqZWN0RmFjdG9yeS50cyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcbmltcG9ydCB7IEdhbWVPYmplY3QsIG1ha2VHYW1lT2JqZWN0LCBHYW1lT2JqZWN0Q29uZmlnIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cyc7XG5pbXBvcnQgeyBDb2xsaWRlciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMnO1xuXG4vKipcbiAqIEhhbmRsZXMgaW5zdGFudGlhdGlvbiwgZGVzdHJ1Y3Rpb24gYW5kIG1hbmFnZW1lbnQgb2YgYWxsIEdhbWVPYmplY3RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lR3JhcGgge1xuXG4gICAgLy8gc2luZ2xldG9uIGJlY2F1c2Ugd2Ugc2hvdWxkIG5ldmVyIGhhdmUgbW9yZSB0aGFuIG9uZSBTY2VuZUdyYXBoXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTY2VuZUdyYXBoO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCkgOiBTY2VuZUdyYXBoIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyB0aGlzKCkpO1xuICAgIH1cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cblxuICAgIC8qKlxuICAgICAqIEFuIG9yZGVyZWQgYXJyYXkgb2YgYWxsIEdhbWVPYmplY3RzIChyZWdhcmRsZXNzIG9mIHN0YXRlKVxuICAgICAqL1xuICAgIHByaXZhdGUgX2hpZXJhcmNoeTogQXJyYXk8R2FtZU9iamVjdD4gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEFsbCBjb2xsaWRlcnMgKGF0dGFjaGVkIHRvIEdhbWVPYmplY3RzKSBpbiB0aGUgc2NlbmVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9jb2xsaWRlcnM6IEFycmF5PENvbGxpZGVyPiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQSB1bmlxdWUgc3RyaW5nIGlkIHRvIEdhbWVPYmplY3QgbWFwcGluZ1xuICAgICAqL1xuICAgIHByaXZhdGUgX2dhbWVPYmplY3RzOiBNYXA8c3RyaW5nLCBHYW1lT2JqZWN0PiA9IG5ldyBNYXAoKTtcblxuICAgIGdldCBoaWVyYXJjaHkoKSA6IEFycmF5PEdhbWVPYmplY3Q+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpZXJhcmNoeTtcbiAgICB9XG5cbiAgICBnZXQgY29sbGlkZXJzKCkgOiBBcnJheTxDb2xsaWRlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sbGlkZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIEdhbWVPYmplY3QgdGhhdCBiZWxvbmdzIHRvIHRoZSBnaXZlbiBpZFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgKi9cbiAgICBnZXQoaWQ6IHN0cmluZykgOiBHYW1lT2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3RzLmdldChpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNvbGxpZGVyIGZvciBjb2xsaXNpb24gdHJhY2tpbmdcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gY29sbGlkZXIgXG4gICAgICovXG4gICAgYWRkQ29sbGlkZXIoY29sbGlkZXI6IENvbGxpZGVyKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb2xsaWRlcnMucHVzaChjb2xsaWRlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IEdhbWVPYmplY3RcbiAgICAqIFxuICAgICogQHR5cGUge3N0cmluZ30gaWQgICAgICAgICBOYW1lL2lkZW50aWZpZXIgb2YgdGhlIG9iamVjdFxuICAgICogQHR5cGUge29iamVjdH0gY29uZmlnICAgICBHYW1lT2JqZWN0IHNldHRpbmdzXG4gICAgKi9cbiAgICBpbnN0YW50aWF0ZShpZDogc3RyaW5nLCBjb25maWc6IEdhbWVPYmplY3RDb25maWcpIDogR2FtZU9iamVjdCB7XG4gICAgICAgIGlmKGlkID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5zdGFudGlhdGlvbiBmYWlsZWQ6IG5vIHVuaXF1ZSBpZCBnaXZlbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuX2dhbWVPYmplY3RzLmdldChpZCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5zdGFudGlhdGlvbiBmYWlsZWQ6IGEgR2FtZU9iamVjdCBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoZSBuYW1lICR7aWR9YClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdhbWVPYmplY3QgPSBtYWtlR2FtZU9iamVjdChpZCwgY29uZmlnKTtcblxuICAgICAgICB0aGlzLl9oaWVyYXJjaHkucHVzaChnYW1lT2JqZWN0KTtcbiAgICAgICAgdGhpcy5fZ2FtZU9iamVjdHMuc2V0KGlkLCBnYW1lT2JqZWN0KTtcblxuICAgICAgICByZXR1cm4gZ2FtZU9iamVjdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBpbiBhbiBhcnJheSBvZiBHYW1lT2JqZWN0cyBhbmQgcmVtb3ZlcyB0aGVtIGFsbCBcbiAgICAgKiBmcm9tIHRoZSBoaWVyYXJjaHkgaW1tZWRpYXRlbHlcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBnYW1lT2JqZWN0cyBcbiAgICAgKi9cbiAgICByZW1vdmVCYXRjaChnYW1lT2JqZWN0czogQXJyYXk8R2FtZU9iamVjdD4pIDogdm9pZCB7XG4gICAgICAgIGdhbWVPYmplY3RzLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVPYmplY3RzLmRlbGV0ZShvYmouaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5faGllcmFyY2h5ID0gdGhpcy5faGllcmFyY2h5LmZpbHRlcihvYmogPT4gZ2FtZU9iamVjdHMuaW5kZXhPZihvYmopIDwgMCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvU2NlbmVHcmFwaC50cyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcbmltcG9ydCB7IEJvdW5kaW5nQm94IH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cyc7XG4vLyBpbXBvcnQgeyB3aXRoRGlydHlGbGFnIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ByaXRlQ29uZmlnIHtcbiAgICBhc3NldHM6IEFycmF5PHN0cmluZz47XG4gICAgYm91bmRzOiBCb3VuZGluZ0JveDtcbiAgICB0aW1pbmc/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBTcHJpdGUge1xuXG4gICAgLyoqXG4gICAgICogV29ybGQtc3BhY2UgcmVwcmVzZW50YXRpb24gb2YgdGhlIHNwcml0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2JvdW5kaW5nQm94OiBCb3VuZGluZ0JveDtcblxuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIGltYWdlIHBhdGhzIHRvIGRyYXdcbiAgICAgKi9cbiAgICBwcml2YXRlIF9hc3NldHM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBET00gdGhhdCB0aGlzIHNwcml0ZSByZXByZXNlbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBMYXN0IHZlY3RvciBwb3NpdGlvbiB0aGlzIHNwcml0ZSB3YXMgZHJhd24gYXRcbiAgICAgKi9cbiAgICBwcml2YXRlIF9sYXN0UG9zaXRpb246IFZlY3RvciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSBtaWxsaXNlY29uZHMgYmV0d2VlbiBzcHJpdGUgZnJhbWUgY2hhbmdlc1xuICAgICAqL1xuICAgIHByaXZhdGUgX3RpbWluZzogbnVtYmVyID0gMTUwO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBmcmFtZSBvZiB0aGUgYXNzZXQgYXJyYXkgdG8gZHJhd1xuICAgICAqL1xuICAgIHByaXZhdGUgX2ZyYW1lSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBEcmF3IHRpbWVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uVGltZXI6IG51bWJlcjtcblxuXG5cbiAgICBwcml2YXRlIF9pc0RpcnR5OiBib29sZWFuID0gdHJ1ZTtcbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogU3ByaXRlQ29uZmlnKSB7XG4gICAgICAgIGlmKCFjb25maWcuYm91bmRzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Nwcml0ZSBpbnN0YW50aWF0aW9uIGZhaWxlZDogbm8gQm91bmRpbmdCb3ggcHJvdmlkZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2JvdW5kaW5nQm94ID0gY29uZmlnLmJvdW5kcztcbiAgICAgICAgdGhpcy5fYXNzZXRzID0gY29uZmlnLmFzc2V0cztcblxuICAgICAgICAvLyBpZiBtb3JlIHRoYW4gb25lIGltYWdlIHBhdGggaXMgZ2l2ZW4sIHRyZWF0IHRoaXMgc3ByaXRlIGFzIGFuIGFuaW1hdGVkIHNwcml0ZVxuICAgICAgICBpZihjb25maWcuYXNzZXRzICYmIGNvbmZpZy5hc3NldHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5fZnJhbWVJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb25UaW1lciA9IHNldEludGVydmFsKHRoaXMuX3VwZGF0ZUZyYW1lLmJpbmQodGhpcyksIHRoaXMuX3RpbWluZyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0UG9zaXRpb24gPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGdldCBib3VuZHMoKSA6IEJvdW5kaW5nQm94IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kaW5nQm94O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIERPTSB0aGF0IGhvbGRzIHRoaXMgc3ByaXRlXG4gICAgICovXG4gICAgcHVibGljIGFwcGVuZERvbSgpIDogdm9pZCB7XG4gICAgICAgIGNvbnN0IGJvdW5kcyA9IHRoaXMuX2JvdW5kaW5nQm94O1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3ByaXRlJyk7XG4gICAgICAgIGVsZW1lbnQuaWQgPSBgc3ByaXRlXyR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YDtcblxuICAgICAgICBpZih0aGlzLl9hc3NldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5fYXNzZXRzWzBdfSlgO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYm91bmRzLnBvc2l0aW9uLngudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gKC1ib3VuZHMucG9zaXRpb24ueSkudG9TdHJpbmcoKTsgICAvLyBmbGlwIFkgYmVjYXVzZSB0aGUgYnJvd3NlciBZIGlzIHJldmVyc2VkXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gKGJvdW5kcy5kaW1lbnNpb25zLngpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IChib3VuZHMuZGltZW5zaW9ucy55KS50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbGx5IHNldHMgdGhlIGRyYXcgcG9zaXRpb24gb2YgdGhlIFNwcml0ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSBvcmlnaW4gXG4gICAgICovXG4gICAgcHVibGljIHNldFBvc2l0aW9uKG9yaWdpbjogVmVjdG9yKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9ib3VuZGluZ0JveC5zZXRPcmlnaW4ob3JpZ2luKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgRE9NIHBvc2l0aW9uIG9mIHRoZSBTcHJpdGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gb3JpZ2luIFxuICAgICAqL1xuICAgIHB1YmxpYyByZW5kZXIob3JpZ2luOiBWZWN0b3IpIDogdm9pZCB7XG4gICAgICAgIC8vIFRPRE86IG1vdmUgcmVuZGVyIGxvZ2ljIGludG8gYSBTcHJpdGVSZW5kZXJlciBjbGFzc1xuICAgICAgICBjb25zdCBib3VuZHMgPSB0aGlzLl9ib3VuZGluZ0JveDtcbiAgICAgICAgYm91bmRzLnNldE9yaWdpbihvcmlnaW4pO1xuICAgICAgICBcbiAgICAgICAgaWYoXG4gICAgICAgICAgICBib3VuZHMucG9zaXRpb24ueCA9PT0gdGhpcy5fbGFzdFBvc2l0aW9uLnggJiYgXG4gICAgICAgICAgICBib3VuZHMucG9zaXRpb24ueSA9PT0gdGhpcy5fbGFzdFBvc2l0aW9uLnlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmxlZnQgPSBib3VuZHMucG9zaXRpb24ueC50b1N0cmluZygpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnRvcCA9ICgtYm91bmRzLnBvc2l0aW9uLnkpLnRvU3RyaW5nKCk7ICAgLy8gZmxpcCBZIGJlY2F1c2UgdGhlIGJyb3dzZXIgWSBpcyByZXZlcnNlZFxuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLndpZHRoID0gKGJvdW5kcy5kaW1lbnNpb25zLnggKiAxKS50b1N0cmluZygpOyAgIC8vIFRPRE86IHJlcGxhY2UgMSB3aXRoIHNjYWxpbmdcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAoYm91bmRzLmRpbWVuc2lvbnMueSAqIDEpLnRvU3RyaW5nKCk7ICAvLyBUT0RPOiByZXBsYWNlIDEgd2l0aCBzY2FsaW5nXG4gICAgICAgIFxuICAgICAgICB0aGlzLl9sYXN0UG9zaXRpb24gPSBib3VuZHMucG9zaXRpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9yY2VzIGEgZHJhdyBvZiB0aGUgbmV4dCBzcHJpdGUgaW4gYW4gYW5pbWF0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlRnJhbWUoKSA6IHZvaWQge1xuICAgICAgICAvLyBUT0RPOiB1cGRhdGUgdXNpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKClcbiAgICAgICAgdGhpcy5fZnJhbWVJbmRleCA9ICsrdGhpcy5fZnJhbWVJbmRleCAlIHRoaXMuX2Fzc2V0cy5sZW5ndGg7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuX2Fzc2V0c1t0aGlzLl9mcmFtZUluZGV4XX0pYDtcbiAgICB9XG5cblxuICAgIC8vIFRPRE86IHJlZmFjdG9yIHRoaXMgaW50byBtaXhpblxuICAgIHB1YmxpYyBjbGVhbigpIHtcbiAgICAgICAgdGhpcy5faXNEaXJ0eSA9IGZhbHNlO1xuICAgIH1cbiAgICBwdWJsaWMgZGlydHkoKSB7XG4gICAgICAgIHRoaXMuX2lzRGlydHkgPSB0cnVlO1xuICAgIH1cbiAgICBwdWJsaWMgaXNEaXJ0eSgpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RpcnR5O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL1Nwcml0ZS50cyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNmb3JtIHtcblxuICAgIHByaXZhdGUgX3Bvc2l0aW9uOiBWZWN0b3I7XG4gICAgcHJpdmF0ZSBfcm90YXRpb246IG51bWJlcjtcbiAgICBwcml2YXRlIF9zY2FsZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2xvY2FsUG9zaXRpb246IFZlY3RvciA9IFZlY3Rvci5vcmlnaW47XG5cbiAgICBwcml2YXRlIF9wYXJlbnQ6IFRyYW5zZm9ybSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfY2hpbGRyZW46IFRyYW5zZm9ybVtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSB0cmFuc2Zvcm0gbmVlZHMgYSByZWRyYXdcbiAgICAgKi9cbiAgICBwcml2YXRlIF9pc0RpcnR5OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwb3NpdGlvbjogVmVjdG9yID0gVmVjdG9yLm9yaWdpbixcbiAgICAgICAgcm90YXRpb246IG51bWJlciA9IDAsXG4gICAgICAgIHNjYWxlOiBudW1iZXIgPSAxLFxuICAgICkge1xuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLl9yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgICAgICB0aGlzLl9zY2FsZSA9IHNjYWxlO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gICAgfVxuICAgIHNldFBvc2l0aW9uKHZhbHVlOiBWZWN0b3IpIDogdm9pZCB7XG4gICAgICAgIGlmKHZhbHVlLnggPT09IHRoaXMuX3Bvc2l0aW9uLnggJiYgdmFsdWUueSA9PT0gdGhpcy5fcG9zaXRpb24ueSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGlmZiA9IHZhbHVlLnN1YnRyYWN0KHRoaXMuX3Bvc2l0aW9uKTtcblxuICAgICAgICAvLyBpZiB0aGlzIEdhbWVPYmplY3QgbW92ZWQsIHVwZGF0ZSBpdHMgbG9jYWwgcG9zaXRpb24gcmVsYXRpdmUgdG9cbiAgICAgICAgLy8gaXRzIHBhcmVudFxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbHVlO1xuICAgICAgICBpZih0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvY2FsUG9zaXRpb24gPSB2YWx1ZS5zdWJ0cmFjdCh0aGlzLl9wYXJlbnQuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGlmIHRoaXMgR2FtZU9iamVjdCBoYXMgY2hpbGRyZW4sIHVwZGF0ZSB0aGVpciBwb3NpdGlvbnNcbiAgICAgICAgaWYodGhpcy5fY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGNoaWxkLnNldFBvc2l0aW9uKGNoaWxkLmdldFBvc2l0aW9uKCkuYWRkKGRpZmYpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzRGlydHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGdldFBhcmVudCgpIDogVHJhbnNmb3JtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgICB9XG4gICAgc2V0UGFyZW50KHRyYW5zZm9ybTogVHJhbnNmb3JtKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSB0cmFuc2Zvcm07XG4gICAgICAgIHRoaXMuX2xvY2FsUG9zaXRpb24gPSB0aGlzLl9wb3NpdGlvbi5zdWJ0cmFjdCh0cmFuc2Zvcm0uZ2V0UG9zaXRpb24oKSk7XG4gICAgfVxuXG4gICAgZ2V0Q2hpbGRyZW4oKSA6IEFycmF5PFRyYW5zZm9ybT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW47XG4gICAgfVxuICAgIGFkZENoaWxkKHRyYW5zZm9ybTogVHJhbnNmb3JtKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKHRyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIFZlY3RvciBvZiB0aGUgcmVsYXRpdmUgZGlzdGFuY2UgdG8gdGhpcyBUcmFuc2Zvcm0ncyBwYXJlbnRcbiAgICAgKi9cbiAgICBnZXRMb2NhbFBvc2l0aW9uKCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxQb3NpdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG9ydGN1dCBtZXRob2QgZm9yIGFkZGluZyB0aGUgZ2l2ZW4gdmVjdG9yIHRvIHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZhbHVlIFxuICAgICAqL1xuICAgIHRyYW5zbGF0ZSh2YWx1ZTogVmVjdG9yKSA6IHZvaWQge1xuICAgICAgICBjb25zdCBuZXdQb3MgPSB0aGlzLl9wb3NpdGlvbi5hZGQodmFsdWUpO1xuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKG5ld1Bvcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgVHJhbnNmb3JtIGFzICdjbGVhbicuIFdoZW4gaW4gYSAnY2xlYW4nIHN0YXRlLCB0aGUgVHJhbnNmb3JtXG4gICAgICogd2lsbCBub3QgcmVkcmF3IHVudGlsIGl0cyBtYW5pcHVsYXRlZCBhZ2FpbiAobW92ZSwgc2NhbGUsIHJvdGF0ZSlcbiAgICAgKi9cbiAgICBjbGVhbigpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lzRGlydHkgPSBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogRm9yY2VzIGEgcmUtZHJhd1xuICAgICAqL1xuICAgIGRpcnR5KCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBUcmFuc2Zvcm0gbmVlZHMgdG8gYmUgcmVkcmF3biBkdWUgdG8gYSBtYW5pcHVsYXRpb25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRGlydHkoKSA6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEaXJ0eTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9UcmFuc2Zvcm0udHMiLCJpbXBvcnQgeyBUeXBlcyB9IGZyb20gJ2VuZ2luZS9pbnRlcm5hbCc7XG5cbi8qKlxuICogQWRkcyBhIGRpcnR5IGZsYWcgdG8gYSBiYXNlIGNsYXNzLlxuICogXG4gKiBBIGRpcnR5IGZsYWcgaW4gdGhpcyBjYXNlIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIFxuICogdGhlIGRlY29yYXRlZCBjbGFzcyBuZWVkcyB0byBiZSByZWRyYXduIGluIHRoZVxuICogcmVuZGVyIGN5Y2xlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoRGlydHlGbGFnPFQgZXh0ZW5kcyBUeXBlcy5Db25zdHJ1Y3Rvcj4oQmFzZTogVCkge1xuICAgIHJldHVybiBjbGFzcyBEaXJ0eUZsYWcgZXh0ZW5kcyBCYXNlIHtcbiAgICAgICAgcHJvdGVjdGVkIF9pc0RpcnR5OiBib29sZWFuID0gdHJ1ZTtcblxuICAgICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcHJvdGVjdGVkIGNsZWFuKCkgOiB2b2lkIHtcbiAgICAgICAgICAgIHRoaXMuX2lzRGlydHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBwcm90ZWN0ZWQgZGlydHkoKSA6IHZvaWQge1xuICAgICAgICAgICAgdGhpcy5faXNEaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJvdGVjdGVkIHNldERpcnR5RmxhZyhpc0RpcnR5OiBib29sZWFuKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0RpcnR5ID0gaXNEaXJ0eTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBnZXQgaXNEaXJ0eSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc0RpcnR5O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvRGlydHlGbGFnLnRzIiwiaW1wb3J0IHsgU2NlbmVHcmFwaCB9IGZyb20gXCJlbmdpbmUvbGlicmFyeS9vYmplY3RzXCI7XG5pbXBvcnQgeyBDb2xsaWRlciB9IGZyb20gXCJlbmdpbmUvbGlicmFyeS9jb2xsaXNpb25zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sbGlkZXJhYmxlIHtcbiAgICBvbkNvbGxpc2lvbihjb2xsaWRpbmdPYmpzOiBDb2xsaWRlcltdKTogdm9pZDtcbiAgICBvblVwZGF0ZSh0aW1lc3RlcDogbnVtYmVyKTogdm9pZDtcbn1cblxuLy8gYmFzZSBjbGFzcyBtdXN0IGhhdmUgYW4gb25VcGRhdGUgbGlmZWN5Y2xlIGhvb2sgbWV0aG9kIHNpbmNlXG4vLyB3ZSdyZSBwZXJmb3JtaW5nIG91ciBjb2xsaXNpb24gY2hlY2tzIGFmdGVyIGl0IGdldHMgY2FsbGVkLlxuLy9cbi8vIGl0IGFsc28gbXVzdCBleHRlbmQgdGhlIENvbGxpZGVyYWJsZSBpbnRlcmZhY2Ugc2luY2UgdGhhdCB3aWxsXG4vLyBwcm92aWRlIHRoZSBiYXNlIGNsYXNzIHdpdGggY29sbGlzaW9uIGRhdGEuXG50eXBlIENvbnN0cnVjdG9yPFQgPSBDb2xsaWRlcmFibGU+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aENvbGxpZGVyPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oQmFzZTogVCwgY29sbGlkZXI6IENvbGxpZGVyKSB7XG4gICAgcmV0dXJuIGNsYXNzIENvbGxpZGVyT2JqZWN0IGV4dGVuZHMgQmFzZSB7XG4gICAgICAgIHByaXZhdGUgX2NvbGxpZGVyOiBDb2xsaWRlcjtcblxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICAgICAgdGhpcy5fY29sbGlkZXIgPSBjb2xsaWRlcjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGdhbWVvYmplY3QgaGFzIGEgY29sbGlkZXInLCBjb2xsaWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZ2V0Q29sbGlkZXIoKSA6IENvbGxpZGVyIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb2xsaWRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBvblVwZGF0ZSh0aW1lc3RlcDogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlci5vblVwZGF0ZSh0aW1lc3RlcCk7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGltcGxlbWVudCBRdWFkVHJlZSBzbyB3ZSBkb24ndCBoYXZlIHRvIHF1ZXJ5IGV2ZXJ5XG4gICAgICAgICAgICAvLyBzaW5nbGUgR2FtZU9iamVjdCBpbiB0aGUgc2NlbmUuLi5cbiAgICAgICAgICAgIGNvbnN0IG5lYXJieUdhbWVPYmplY3RzID0gU2NlbmVHcmFwaC5pbnN0YW5jZS5jb2xsaWRlcnM7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbGxpZGluZ09ianM6IEFycmF5PENvbGxpZGVyPiA9IFtdO1xuICAgICAgICAgICAgbmVhcmJ5R2FtZU9iamVjdHMuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2NvbGxpZGVyLmNvbGxpZGVzV2l0aChvYmopKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGluZ09ianMucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZihjb2xsaWRpbmdPYmpzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzdXBlci5vbkNvbGxpc2lvbihjb2xsaWRpbmdPYmpzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0NvbGxpZGVyYWJsZS50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuaW1wb3J0IHsgS2V5Ym9hcmQsIEtleSB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L2lucHV0JztcbmltcG9ydCB7IFZpZXdwb3J0IH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvc2NyZWVuJztcbmltcG9ydCB7IE1hdGhzIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG5leHBvcnQgY2xhc3MgUGxhbmVNb3ZlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfdmVsb2NpdHk6IFZlY3RvciA9IFZlY3Rvci5vcmlnaW47XG5cbiAgICBwdWJsaWMgb25JbnN0YW50aWF0ZSgpIDogdm9pZCB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBvblVwZGF0ZSh0aW1lc3RlcDogbnVtYmVyKSA6IHZvaWQge1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSB0aGlzLmdhbWVPYmplY3QuZ2V0VHJhbnNmb3JtKCk7XG4gICAgICAgIGxldCBwb3MgPSB0cmFuc2Zvcm0uZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICBjb25zdCBrZXlib2FyZCA9IEtleWJvYXJkLmluc3RhbmNlO1xuXG4gICAgICAgIGlmKGtleWJvYXJkLmdldEtleVByZXNzKEtleS5EKSkge1xuICAgICAgICAgICAgcG9zID0gcG9zLmFkZChuZXcgVmVjdG9yKDQsIDApKTtcbiAgICAgICAgfVxuICAgICAgICBpZihrZXlib2FyZC5nZXRLZXlQcmVzcyhLZXkuQSkpIHtcbiAgICAgICAgICAgIHBvcyA9IHBvcy5hZGQobmV3IFZlY3RvcigtNCwgMCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGtleWJvYXJkLmdldEtleVByZXNzKEtleS5XKSkge1xuICAgICAgICAgICAgcG9zID0gcG9zLmFkZChuZXcgVmVjdG9yKDAsIDQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZihrZXlib2FyZC5nZXRLZXlQcmVzcyhLZXkuUykpIHtcbiAgICAgICAgICAgIHBvcyA9IHBvcy5hZGQobmV3IFZlY3RvcigwLCAtNCkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0cmFuc2Zvcm0uc2V0UG9zaXRpb24ocG9zKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2FtZXMvZmxhcHB5L2NvbXBvbmVudHMvUGxhbmVNb3ZlbWVudC50cyIsImV4cG9ydCB7IEtleWJvYXJkLCBLZXkgfSBmcm9tICcuL0tleWJvYXJkJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9pbnB1dC9pbmRleC50cyIsIi8qKlxuICogUmVwcmVzZW50cyBhIGtleWJvYXJkIGtleVxuICovXG5leHBvcnQgZW51bSBLZXkge1xuICAgIEEgPSA2NSxcbiAgICBXID0gODcsXG4gICAgUyA9IDgzLFxuICAgIEQgPSA2OCxcbiAgICBTUEFDRUJBUiA9IDMyLFxuICAgIEFSUk9XX0xFRlQgPSAzNyxcbiAgICBBUlJPV19VUCA9IDM4LFxuICAgIEFSUk9XX1JJR0hUID0gMzksXG4gICAgQVJST1dfRE9XTiA9IDQwLFxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMga2V5IHByZXNzLCBrZXkgZG93biwgZXRjIGV2ZW50IGRhdGFcbiAqL1xuaW50ZXJmYWNlIEtleWJvYXJkRXZlbnQge1xuICAgIGtleUNvZGU6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBIYW5kbGVzIGludGVyYWN0aW9uIHdpdGggdGhlIGtleWJvYXJkIGFuZCByZXRyaWV2aW5nXG4gKiBwcmVzcyB2YWx1ZXNcbiAqL1xuZXhwb3J0IGNsYXNzIEtleWJvYXJkIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9rZXlEb3duVmFsdWVzOiBNYXA8S2V5LCBudW1iZXI+ID0gbmV3IE1hcCgpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2tleVByZXNzQ29tcGxldGU6IE1hcDxLZXksIGJvb2xlYW4+ID0gbmV3IE1hcCgpO1xuXG4gICAgLyoqXG4gICAgICogU2luZ2xldG9uIHNpbmNlIHdlIG9ubHkgd2FudCBvbmUgbG9jYWwgS2V5Ym9hcmQgdG8gZXhpc3RcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEtleWJvYXJkO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24uYmluZCh0aGlzKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5VXAuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duLmJpbmQodGhpcykpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMga2V5IGRvd24gZXZlbnRzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9vbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIDogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMuX2tleURvd25WYWx1ZXMuc2V0KGtleUNvZGUsIDEpO1xuXG4gICAgICAgIGlmKHRoaXMuX2tleVByZXNzQ29tcGxldGUuZ2V0KGtleUNvZGUpKSB7XG4gICAgICAgICAgICB0aGlzLl9rZXlEb3duVmFsdWVzLnNldChrZXlDb2RlLCAxKTtcbiAgICAgICAgICAgIHRoaXMuX2tleVByZXNzQ29tcGxldGUuc2V0KGtleUNvZGUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMga2V5IHVwIGV2ZW50c1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgXG4gICAgICovXG4gICAgcHJpdmF0ZSBfb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkgOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcbiAgICAgICAgdGhpcy5fa2V5RG93blZhbHVlcy5zZXQoa2V5Q29kZSwgMCk7XG4gICAgICAgIHRoaXMuX2tleVByZXNzQ29tcGxldGUuc2V0KGtleUNvZGUsIHRydWUpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBrZXlwcmVzcyB2YWx1ZSBvZiB0aGUgZ2l2ZW4ga2V5XG4gICAgICogKDAgPSBub3QgcHJlc3NlZCB8IDEgPSBrZXkgZG93bilcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IGtleSBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0S2V5RG93bihrZXlDb2RlOiBLZXkpIDogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9rZXlEb3duVmFsdWVzLmdldChrZXlDb2RlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlIHx8IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBnZXRLZXlEb3duKCkgZXhjZXB0IHRvZ2dsZXMgdGhlIHZhbHVlIHRvIDBcbiAgICAgKiBhZnRlciBsaXN0ZW5pbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0S2V5UHJlc3Moa2V5Q29kZTogS2V5KSA6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fa2V5RG93blZhbHVlcy5nZXQoa2V5Q29kZSk7XG4gICAgICAgIGlmKHZhbHVlID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fa2V5UHJlc3NDb21wbGV0ZS5zZXQoa2V5Q29kZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvaW5wdXQvS2V5Ym9hcmQudHMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0LCBDb21wb25lbnQsIFNjZW5lR3JhcGgsIEJvdW5kaW5nQm94IH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L2lucHV0JztcbmltcG9ydCB7IFZpZXdwb3J0LCBDYW1lcmEgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9zY3JlZW4nO1xuXG5leHBvcnQgY2xhc3MgU2NlbmVNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIF9yb2NrTGlzdDogQXJyYXk8R2FtZU9iamVjdD4gPSBbXTtcbiAgICBwcml2YXRlIF9zY3JvbGxTcGVlZDogVmVjdG9yID0gVmVjdG9yLm9yaWdpbjtcblxuICAgIHB1YmxpYyBvbkluc3RhbnRpYXRlKCkgOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBTY2VuZUdyYXBoLmluc3RhbmNlO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIHNjZW5lLmluc3RhbnRpYXRlKCdiYWNrZ3JvdW5kU2t5JytpLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoODAwICogaSwgMCksXG4gICAgICAgICAgICAgICAgb3JkZXI6IC05OTksXG4gICAgICAgICAgICAgICAgc3ByaXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0czogWydhc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nJ10sXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kczogbmV3IEJvdW5kaW5nQm94KFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3Rvcig4MDAgKiBpLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoODAwLCA0ODApLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAvLyB0aW1pbmc6IDE1MCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb2NrID0gc2NlbmUuaW5zdGFudGlhdGUoJ3JvY2snLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcigzNTAsIC1WaWV3cG9ydC5pbnN0YW5jZS5oZWlnaHQgKyAyMzkpLFxuICAgICAgICAgICAgc3ByaXRlOiB7XG4gICAgICAgICAgICAgICAgYXNzZXRzOiBbJ2Fzc2V0cy9pbWFnZXMvcm9ja1VwLnBuZyddLFxuICAgICAgICAgICAgICAgIGJvdW5kczogbmV3IEJvdW5kaW5nQm94KFxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDM1MCwgLVZpZXdwb3J0Lmluc3RhbmNlLmhlaWdodCArIDIzOSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoMTA4LCAyMzkpLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBzY2VuZS5pbnN0YW50aWF0ZSgnZ3JvdW5kQm90dG9tJytpLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoODA4ICogaSwgLVZpZXdwb3J0Lmluc3RhbmNlLmhlaWdodCArIDcxKSxcbiAgICAgICAgICAgICAgICBzcHJpdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzOiBbJ2Fzc2V0cy9pbWFnZXMvZ3JvdW5kRGlydC5wbmcnXSxcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzOiBuZXcgQm91bmRpbmdCb3goXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDgwOCAqIGksIC1WaWV3cG9ydC5pbnN0YW5jZS5oZWlnaHQgKyA3MSksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDgwOCwgNzEpLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Njcm9sbFNwZWVkID0gbmV3IFZlY3RvcigzLCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25VcGRhdGUodGltZXN0ZXA6IG51bWJlcikgOiB2b2lkIHtcbiAgICAgICAgLy8gbGV0IGNhbWVyYVBvcyA9IENhbWVyYS50cmFuc2Zvcm0uZ2V0UG9zaXRpb24oKS5hZGQodGhpcy5fc2Nyb2xsU3BlZWQpO1xuICAgICAgICAvLyBjYW1lcmFQb3MgPSBjYW1lcmFQb3MubXVsdGlwbHkodGltZXN0ZXApO1xuXG4gICAgICAgIC8vIENhbWVyYS50cmFuc2Zvcm0uc2V0UG9zaXRpb24oY2FtZXJhUG9zKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2FtZXMvZmxhcHB5L2NvbXBvbmVudHMvU2NlbmVNYW5hZ2VyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==