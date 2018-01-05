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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Vector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Maths__ = __webpack_require__(12);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Maths__; });





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoundingBox__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BoundingBox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Component__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Transform__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__Transform__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DirtyFlag__ = __webpack_require__(21);
/* unused harmony reexport withDirtyFlag */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gameobject_GameObject__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__gameobject_GameObject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gameobject_GameObjectFactory__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__gameobject_GameObjectFactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__modules__["a"]; });






// modules



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Camera__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Camera__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Canvas__ = __webpack_require__(16);
/* unused harmony reexport Canvas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Viewport__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Viewport__["a"]; });





/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/asaw/Documents/Dev/playground/game_engine/engine/library/objects/Colliderable.ts'");

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/asaw/Documents/Dev/playground/game_engine/engine/library/collisions/colliders/BoxCollider.ts'");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collider__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Collider__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__Collider__, "default")) __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Collider__["default"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__Collider__, "ColliderShape")) __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Collider__["ColliderShape"]; });



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_game__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PlaneMovement__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_SceneManager__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_engine_library_maths__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_engine_library_collisions_colliders__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_engine_library_SceneGraph__ = __webpack_require__(29);







class FlappyGame extends __WEBPACK_IMPORTED_MODULE_0_engine_game__["a" /* Game */] {
    onStart() {
        const scene = __WEBPACK_IMPORTED_MODULE_6_engine_library_SceneGraph__["a" /* default */].instance;
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
            collider: new __WEBPACK_IMPORTED_MODULE_5_engine_library_collisions_colliders__["a" /* BoxCollider */](new __WEBPACK_IMPORTED_MODULE_3_engine_library_objects__["a" /* BoundingBox */](new __WEBPACK_IMPORTED_MODULE_4_engine_library_maths__["b" /* Vector */](50, -50), new __WEBPACK_IMPORTED_MODULE_4_engine_library_maths__["b" /* Vector */](50, 50))),
            components: [
                __WEBPACK_IMPORTED_MODULE_1__components_PlaneMovement__["a" /* PlaneMovement */],
            ],
        });
    }
}
const game = new FlappyGame();
game.initialise();


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_GameLoop__ = __webpack_require__(9);
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bootGameLoop;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_SceneGraph__ = __webpack_require__(29);

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
    const hierarchy = __WEBPACK_IMPORTED_MODULE_0_engine_library_SceneGraph__["a" /* default */].instance.hierarchy;
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
        __WEBPACK_IMPORTED_MODULE_0_engine_library_SceneGraph__["a" /* default */].instance.removeBatch(corpseObjects);
    }
}
/**
 * Renders every visible GameObject to DOM every frame
 */
function onRender() {
    __WEBPACK_IMPORTED_MODULE_0_engine_library_SceneGraph__["a" /* default */]
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_SceneGraph__ = __webpack_require__(29);


class Camera {
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    constructor() {
        this._transform = new __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["e" /* Transform */]();
        // since a camera move needs to update everything in view,
        // set all objects in the viewport as 'dirty' so they get
        // redrawn
        // TODO: viewport culling
        const setPositionFunc = this._transform.setPosition.bind(this._transform);
        this._transform.setPosition = (value) => {
            setPositionFunc(value);
            __WEBPACK_IMPORTED_MODULE_1_engine_library_SceneGraph__["a" /* default */].instance.hierarchy.forEach(obj => {
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
/* 16 */
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
/* 17 */
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
/* 18 */,
/* 19 */,
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_engine_library_input__ = __webpack_require__(23);



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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Keyboard__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Keyboard__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Keyboard__["a"]; });



/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_engine_library_screen__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_engine_library_collisions_colliders_BoxCollider__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_engine_library_collisions_colliders_BoxCollider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_engine_library_collisions_colliders_BoxCollider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_engine_library_SceneGraph__ = __webpack_require__(29);





class SceneManager extends __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["b" /* Component */] {
    constructor() {
        super(...arguments);
        this._rockList = [];
        this._scrollSpeed = __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */].origin;
    }
    onInstantiate() {
        const scene = __WEBPACK_IMPORTED_MODULE_4_engine_library_SceneGraph__["a" /* default */].instance;
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
            collider: new __WEBPACK_IMPORTED_MODULE_3_engine_library_collisions_colliders_BoxCollider__["default"](new __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["a" /* BoundingBox */](new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](350, -__WEBPACK_IMPORTED_MODULE_2_engine_library_screen__["b" /* Viewport */].instance.height + 239), new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](108, 239))),
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



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/asaw/Documents/Dev/playground/game_engine/engine/library/collisions/Collider.ts'");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoxCollider__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoxCollider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__BoxCollider__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__BoxCollider__, "default")) __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BoxCollider__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CircleCollider__ = __webpack_require__(28);
/* unused harmony reexport CircleCollider */




/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__ = __webpack_require__(6);

class CircleCollider extends __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["a" /* Collider */] {
    constructor(_origin, _offset, _radius) {
        super();
        this._origin = _origin;
        this._offset = _offset;
        this._radius = _radius;
    }
    get position() {
        return this._origin.add(this._offset);
    }
    get radius() {
        return this._radius;
    }
    getType() {
        return __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["b" /* ColliderShape */].CIRCLE;
    }
    getCircle() {
        return {
            position: this.position,
            radius: this.radius,
        };
    }
    collidesWith(collider) {
        switch (collider.getType()) {
            case __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["b" /* ColliderShape */].BOX:
                return this.circleToRectCheck(collider.getRectangle());
            case __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["b" /* ColliderShape */].CIRCLE:
                return this.circleToCircleCheck(collider.getCircle());
        }
        return false;
    }
    setPosition(position) {
        this._origin = position;
    }
    circleToRectCheck(rect) {
        return false;
    }
    circleToCircleCheck(circle) {
        return false;
    }
}
/* unused harmony export default */



/***/ }),
/* 29 */
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
        const gameObject = Object(__WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["f" /* makeGameObject */])(id, config);
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_screen__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_objects_gameobject_GameObjectRenderer__ = __webpack_require__(31);


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
        // console.log(`${this._id} is colliding with`, collidingObjs);
    }
    /**
     * Renders the object in world space each game loop frame
     */
    render() {
        if (!this._isVisible || this._isDisabled || this._isDestroying) {
            return;
        }
        const didGameObjectRender = Object(__WEBPACK_IMPORTED_MODULE_1_engine_library_objects_gameobject_GameObjectRenderer__["a" /* render */])(this._element, this._transform, __WEBPACK_IMPORTED_MODULE_0_engine_library_screen__["a" /* Camera */].instance);
        // only redraw the sprite if the Sprite or Transform has moved
        if (this._sprite && (didGameObjectRender || this._sprite.isDirty())) {
            // screenSpacePos = screenSpacePos || this._getScreenPosition();
            // this._sprite.render(screenSpacePos);
            // this._sprite.clean();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameObject;



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = render;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__ = __webpack_require__(0);

/**
 * Renders the given element into screen space
 *
 * @param element
 * @param transform
 * @param camera
 *
 * @return {boolean}    Whether a render was performed this frame
 */
function render(element, transform, camera) {
    // only redraw when the Transform has actually moved
    if (!transform.isDirty()) {
        return false;
    }
    // the Transform stores our world-space coordinates,
    // but we need to render the object in screen-space
    const worldPos = transform.getPosition();
    const cameraPos = camera.transform.getPosition();
    const screenSpacePos = new __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["b" /* Vector */](worldPos.x - cameraPos.x, worldPos.y - cameraPos.y);
    element.style.left = screenSpacePos.x + 'px';
    element.style.top = screenSpacePos.y + 'px';
    transform.clean();
    return true;
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = makeGameObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_objects_Colliderable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_objects_Colliderable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_engine_library_objects_Colliderable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_engine_library_SceneGraph__ = __webpack_require__(29);



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
        gameObjectType = Object(__WEBPACK_IMPORTED_MODULE_1_engine_library_objects_Colliderable__["default"])(__WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["c" /* GameObject */], config.collider);
        __WEBPACK_IMPORTED_MODULE_2_engine_library_SceneGraph__["a" /* default */].instance.addCollider(config.collider);
    }
    let obj = new gameObjectType(id, new __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["e" /* Transform */](config.position));
    if (config.sprite && config.sprite.assets) {
        const spriteInstance = new __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["d" /* Sprite */](config.sprite);
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
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprite_Sprite__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sprite_Sprite__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collisions_colliders__ = __webpack_require__(36);
/* unused harmony reexport BoxCollider */
/* unused harmony reexport CircleCollider */




/***/ }),
/* 35 */
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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoxCollider__ = __webpack_require__(37);
/* unused harmony reexport BoxCollider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CircleCollider__ = __webpack_require__(38);
/* unused harmony reexport CircleCollider */




/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
throw new Error("Cannot find module \"engine/library/collisions\"");

class BoxCollider extends __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["Collider"] {
    constructor(_boundingBox) {
        super();
        this._boundingBox = _boundingBox;
    }
    get boundingBox() {
        return this._boundingBox;
    }
    getType() {
        return __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["ColliderShape"].BOX;
    }
    getRectangle() {
        return {
            left: this._boundingBox.left,
            right: this._boundingBox.right,
            top: this._boundingBox.top,
            bottom: this._boundingBox.bottom,
        };
    }
    collidesWith(collider) {
        switch (collider.getType()) {
            case __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["ColliderShape"].BOX:
                return this.rectToRectCheck(collider.getRectangle());
            case __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["ColliderShape"].CIRCLE:
                return this.rectToCircleCheck(collider.getCircle());
        }
        return false;
    }
    setPosition(position) {
        this._boundingBox.setOrigin(position);
    }
    /**
     * Performs a collision detection against another rectangle
     *
     * @param {} rect
     */
    rectToRectCheck(rect) {
        return (rect.right > this._boundingBox.left ||
            rect.left < this._boundingBox.right ||
            rect.top > this._boundingBox.bottom ||
            rect.bottom < this._boundingBox.top);
    }
    rectToCircleCheck(circle) {
        // return (
        // );
        return false;
    }
}
/* unused harmony export default */



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
throw new Error("Cannot find module \"engine/library/collisions\"");

class CircleCollider extends __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["Collider"] {
    constructor(_origin, _offset, _radius) {
        super();
        this._origin = _origin;
        this._offset = _offset;
        this._radius = _radius;
    }
    get position() {
        return this._origin.add(this._offset);
    }
    get radius() {
        return this._radius;
    }
    getType() {
        return __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["ColliderShape"].CIRCLE;
    }
    getCircle() {
        return {
            position: this.position,
            radius: this.radius,
        };
    }
    collidesWith(collider) {
        switch (collider.getType()) {
            case __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["ColliderShape"].BOX:
                return this.circleToRectCheck(collider.getRectangle());
            case __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["ColliderShape"].CIRCLE:
                return this.circleToCircleCheck(collider.getCircle());
        }
        return false;
    }
    setPosition(position) {
        this._origin = position;
    }
    circleToRectCheck(rect) {
        return false;
    }
    circleToCircleCheck(circle) {
        return false;
    }
}
/* unused harmony export default */



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGE2Zjk4YzQ4NmQxODNkZTZlZWQiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvbWF0aHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9nYW1lcy9mbGFwcHkvZmxhcHB5LnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9nYW1lLnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L0dhbWVMb29wLnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvQm91bmRpbmdCb3gudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvbWF0aHMvVmVjdG9yLnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L21hdGhzL01hdGhzLnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L3NjcmVlbi9DYW1lcmEudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvc2NyZWVuL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vVmlld3BvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9UcmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9EaXJ0eUZsYWcudHMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZXMvZmxhcHB5L2NvbXBvbmVudHMvUGxhbmVNb3ZlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9pbnB1dC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9pbnB1dC9LZXlib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9nYW1lcy9mbGFwcHkvY29tcG9uZW50cy9TY2VuZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucy9jb2xsaWRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucy9jb2xsaWRlcnMvQ2lyY2xlQ29sbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvU2NlbmVHcmFwaC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL2dhbWVvYmplY3QvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL2dhbWVvYmplY3QvR2FtZU9iamVjdFJlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvZ2FtZW9iamVjdC9HYW1lT2JqZWN0RmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL21vZHVsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9tb2R1bGVzL3Nwcml0ZS9TcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9tb2R1bGVzL2NvbGxpc2lvbnMvY29sbGlkZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvbW9kdWxlcy9jb2xsaXNpb25zL2NvbGxpZGVycy9Cb3hDb2xsaWRlci50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL21vZHVsZXMvY29sbGlzaW9ucy9jb2xsaWRlcnMvQ2lyY2xlQ29sbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3RDZDO0FBRVo7QUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIc0M7QUFDSjtBQUNBO0FBQ0k7QUFFUztBQUNrQjtBQUVsRixVQUFVO0FBQ3VDOzs7Ozs7Ozs7Ozs7OztBQ1RKO0FBQ0E7QUFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0c3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ0xlO0FBQ3dCO0FBQ0Y7QUFFSTtBQUNmO0FBRW9CO0FBQ2Y7QUFFbkQsZ0JBQWlCLFNBQVEseURBQUk7SUFDekIsT0FBTztRQUNILE1BQU0sS0FBSyxHQUFHLDBFQUFVLENBQUMsUUFBUSxDQUFDO1FBQ2xDLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO1lBQ25ELFVBQVUsRUFBRTtnQkFDUiw4RUFBWTthQUNmO1NBQ0osQ0FBQyxDQUFDO1FBRUgsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDeEMsUUFBUSxFQUFFLElBQUksb0VBQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDN0IseUJBQXlCO1lBQ3pCLE1BQU0sRUFBRTtnQkFDSixNQUFNLEVBQUU7b0JBQ0osNkJBQTZCO2lCQUdoQztnQkFDRCxNQUFNLEVBQUUsSUFBSSwyRUFBVyxDQUNuQixJQUFJLG9FQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQ25CLElBQUksb0VBQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQ3JCO2FBRUo7WUFDRCxRQUFRLEVBQUUsSUFBSSx3RkFBVyxDQUNyQixJQUFJLDJFQUFXLENBQ1gsSUFBSSxvRUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUNuQixJQUFJLG9FQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUNyQixDQUNKO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLGdGQUFhO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztBQUM5QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Ozs7Ozs7Ozs7O0FDaERMO0FBRTBDO0FBQ1I7QUFDRDtBQUU5Qzs7O0dBR0c7QUFDRztJQUVGOztPQUVHO0lBQ0gsVUFBVTtRQUNOLHFFQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxvRUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELHFGQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU8sS0FBSSxDQUFDO0NBRWY7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FDekJrRDtBQUduRDs7OztHQUlHO0FBQ0gsTUFBTSxZQUFZLEdBQVcsRUFBRSxDQUFDO0FBRWhDOzs7O0dBSUc7QUFDSCxNQUFNLFNBQVMsR0FBVyxDQUFDLENBQUM7QUFFNUI7Ozs7R0FJRztBQUNILElBQUksUUFBZ0IsQ0FBQztBQUdyQjs7Ozs7R0FLRztBQUNIO0lBQ0ksb0RBQW9EO0lBQ3BELGdEQUFnRDtJQUNoRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDL0IsTUFBTSxPQUFPLEdBQUcsV0FBVyxHQUFHLFFBQVEsQ0FBQztJQUN2QyxNQUFNLElBQUksR0FBRyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFbEQsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2YsUUFBUSxFQUFFLENBQUM7SUFFWCxRQUFRLEdBQUcsV0FBVyxDQUFDO0lBQ3ZCLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFHRDs7R0FFRztBQUNILGtCQUFrQixRQUFnQjtJQUM5QixNQUFNLFNBQVMsR0FBRywwRUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDaEQsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBRXpCLHdEQUF3RDtJQUN4RCw2Q0FBNkM7SUFDN0MsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUNyQyxHQUFHLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNsQyxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFekIseURBQXlEO1FBQ3pELEVBQUUsRUFBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsUUFBUSxDQUFDO1FBQ2IsQ0FBQztRQUNELEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDBDQUEwQztJQUMxQyxFQUFFLEVBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLDBFQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDO0FBQ0wsQ0FBQztBQUVEOztHQUVHO0FBQ0g7SUFDSSwwRUFBVTtTQUNMLFFBQVE7U0FDUixTQUFTO1NBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUVEOztHQUVHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ2Ysc0JBQXVCLE9BQWlCO0lBQzFDLEVBQUUsRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ1YsTUFBTSxDQUFDO0lBQ1gsQ0FBQztJQUNELFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEIscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDOzs7Ozs7Ozs7QUM5RjZDO0FBRTlDOztHQUVHO0FBQ1c7SUFDVixZQUNZLE9BQWUsRUFDZixXQUFtQixFQUNuQixVQUFrQixvRUFBTSxDQUFDLE1BQU07UUFGL0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQXdCO0lBQ3hDLENBQUM7SUFFSixJQUFJLFFBQVE7UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELElBQUksR0FBRztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxJQUFJLE1BQU07UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksTUFBTTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFNBQVMsQ0FBQyxNQUFjO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7Q0FDSjtBQUFBO0FBQUE7Ozs7Ozs7OztBQy9DNEM7QUFFN0M7O0dBRUc7QUFDVztJQUNWLFlBQ1ksS0FBYSxDQUFDLEVBQ2QsS0FBYSxDQUFDO1FBRGQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDdkIsQ0FBQztJQUVKOzs7O09BSUc7SUFDSCxJQUFJLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSSxTQUFTO1FBQ1QsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzdCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxNQUFNO1FBQ04sTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLEdBQUcsQ0FBQyxNQUFjO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FDYixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ2pCLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FDcEIsQ0FBQztJQUNOLENBQUM7SUFFTSxRQUFRLENBQUMsTUFBYztRQUMxQixNQUFNLENBQUMsSUFBSSxNQUFNLENBQ2IsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUNqQixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQ3BCLENBQUM7SUFDTixDQUFDO0lBRU0sUUFBUSxDQUFDLE1BQWM7UUFDMUIsTUFBTSxDQUFDLElBQUksTUFBTSxDQUNiLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUNmLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUNsQixDQUFDO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFXO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FDYixtRUFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNqQyxtRUFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUNwQyxDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTSxLQUFLLElBQUk7UUFDWCxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELE1BQU0sS0FBSyxLQUFLO1FBQ1osTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsTUFBTSxLQUFLLEVBQUU7UUFDVCxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxNQUFNLEtBQUssSUFBSTtRQUNYLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsTUFBTSxLQUFLLE1BQU07UUFDYixNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBZSxFQUFFLE9BQWU7UUFDOUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0o7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FDaEhEO0FBQUE7Ozs7Ozs7R0FPRztBQUNHLGdCQUFpQixHQUFXLEVBQUUsR0FBVztJQUMzQyxNQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQ7Ozs7Ozs7O0dBUUc7QUFDRyxlQUFnQixLQUFhLEVBQUUsR0FBVyxFQUFFLEdBQVc7SUFDekQsRUFBRSxFQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7UUFBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQzVCLEVBQUUsRUFBQyxLQUFLLElBQUksR0FBRyxDQUFDO1FBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2pCLENBQUM7Ozs7Ozs7O0FDeEJEOzs7Ozs7R0FNRztBQUNXO0lBTVYsWUFBWSxVQUFzQjtRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksU0FBUztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSSxNQUFNO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLFVBQVU7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxhQUFhLEtBQVcsQ0FBQztJQUVoQzs7T0FFRztJQUNJLFFBQVEsQ0FBQyxRQUFnQixJQUFVLENBQUM7SUFFM0M7O09BRUc7SUFDSSxTQUFTLEtBQVcsQ0FBQztDQUMvQjtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FDNURrRDtBQUNBO0FBRXJDO0lBRUgsTUFBTSxLQUFLLFFBQVE7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBSUQ7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUkseUVBQVMsRUFBRSxDQUFDO1FBRWxDLDBEQUEwRDtRQUMxRCx5REFBeUQ7UUFDekQsVUFBVTtRQUVWLHlCQUF5QjtRQUN6QixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDcEMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLDBFQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3hDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztDQUNKO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDL0JnRDtBQUdqRDs7R0FFRztBQUNXO0lBRUgsTUFBTSxLQUFLLFFBQVE7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBSUQsZ0JBQXVCLENBQUM7SUFFeEIsVUFBVTtRQUNOLEVBQUUsRUFBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sTUFBTSxHQUFRLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEQsTUFBTSxDQUFDLEtBQUssR0FBRyx1RUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkMsTUFBTSxDQUFDLE1BQU0sR0FBRyx1RUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxRQUFRLENBQUMsT0FBZSxFQUFFLE9BQWUsRUFBRSxLQUFLLEdBQUcsT0FBTztRQUN0RCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FDSjtBQUFBO0FBQUE7Ozs7Ozs7OztBQzFDNkM7QUFFOUM7O0dBRUc7QUFDVztJQVdWLFlBQ1ksZ0JBQXdCLEdBQUcsRUFDM0IsaUJBQXlCLEdBQUc7UUFENUIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsbUJBQWMsR0FBZCxjQUFjLENBQWM7UUFFcEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQWJNLE1BQU0sS0FBSyxRQUFRO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQWFELElBQUksS0FBSztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxNQUFNO1FBQ04sTUFBTSxDQUFDLElBQUksb0VBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsSUFBSSxNQUFNO1FBQ04sTUFBTSxDQUFDLElBQUksb0VBQU0sQ0FDYixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FDbEIsQ0FBQztJQUNOLENBQUM7SUFFRDs7T0FFRztJQUNILGtCQUFrQjtRQUNkLGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBSSxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQzVDLENBQUM7Q0FDSjtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FDaEQ2QztBQUVoQztJQWVWLFlBQ0ksV0FBbUIsb0VBQU0sQ0FBQyxNQUFNLEVBQ2hDLFdBQW1CLENBQUMsRUFDcEIsUUFBZ0IsQ0FBQztRQWJiLG1CQUFjLEdBQVcsb0VBQU0sQ0FBQyxNQUFNLENBQUM7UUFFdkMsWUFBTyxHQUFjLElBQUksQ0FBQztRQUMxQixjQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUVwQzs7V0FFRztRQUNLLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFPN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVELFdBQVc7UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsV0FBVyxDQUFDLEtBQWE7UUFDckIsRUFBRSxFQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVDLGtFQUFrRTtRQUNsRSxhQUFhO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsRUFBRSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNyRSxDQUFDO1FBRUQsMERBQTBEO1FBQzFELEVBQUUsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEdBQUcsRUFBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckQsQ0FBQztRQUNMLENBQUM7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsU0FBUztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxTQUFTLENBQUMsU0FBb0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsV0FBVztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDRCxRQUFRLENBQUMsU0FBb0I7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0JBQWdCO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsS0FBYTtRQUNuQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSztRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsT0FBTztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Q0FDSjtBQUFBO0FBQUE7Ozs7Ozs7O0FDM0dEO0FBQUE7Ozs7OztHQU1HO0FBQ1csdUJBQXFELElBQU87SUFDdEUsTUFBTSxDQUFDLGVBQWdCLFNBQVEsSUFBSTtRQUcvQixZQUFZLEdBQUcsSUFBVztZQUN0QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUhULGFBQVEsR0FBWSxJQUFJLENBQUM7UUFJbkMsQ0FBQztRQUVTLEtBQUs7WUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDO1FBQ1MsS0FBSztZQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUM7UUFDUyxZQUFZLENBQUMsT0FBZ0I7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDNUIsQ0FBQztRQUVELElBQUksT0FBTztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7S0FDSjtBQUNMLENBQUM7Ozs7Ozs7Ozs7O0FDL0JrRDtBQUNMO0FBQ087QUFJL0MsbUJBQXFCLFNBQVEseUVBQVM7SUFBNUM7O1FBQ1ksY0FBUyxHQUFXLG9FQUFNLENBQUMsTUFBTSxDQUFDO0lBMkI5QyxDQUFDO0lBekJVLGFBQWE7SUFFcEIsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFnQjtRQUM1QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2pELElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVsQyxNQUFNLFFBQVEsR0FBRyxzRUFBUSxDQUFDLFFBQVEsQ0FBQztRQUVuQyxFQUFFLEVBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxpRUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLG9FQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNELEVBQUUsRUFBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGlFQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksb0VBQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFDRCxFQUFFLEVBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxpRUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLG9FQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNELEVBQUUsRUFBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGlFQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksb0VBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFRCxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDSjtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FDbEMwQzs7Ozs7Ozs7QUNBM0M7QUFBQTs7R0FFRztBQUNILElBQVksR0FVWDtBQVZELFdBQVksR0FBRztJQUNYLHdCQUFNO0lBQ04sd0JBQU07SUFDTix3QkFBTTtJQUNOLHdCQUFNO0lBQ04sc0NBQWE7SUFDYiwwQ0FBZTtJQUNmLHNDQUFhO0lBQ2IsNENBQWdCO0lBQ2hCLDBDQUFlO0FBQ25CLENBQUMsRUFWVyxHQUFHLEtBQUgsR0FBRyxRQVVkO0FBU0Q7OztHQUdHO0FBQ0c7SUFZRjtRQVhpQixtQkFBYyxHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzdDLHNCQUFpQixHQUFzQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBVzlELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQVBNLE1BQU0sS0FBSyxRQUFRO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQU9NLE9BQU87UUFDVixNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssVUFBVSxDQUFDLEtBQW9CO1FBQ25DLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXBDLEVBQUUsRUFBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssUUFBUSxDQUFDLEtBQW9CO1FBQ2pDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFHRDs7Ozs7T0FLRztJQUNJLFVBQVUsQ0FBQyxPQUFZO1FBQzFCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxXQUFXLENBQUMsT0FBWTtRQUMzQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxFQUFFLEVBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBQ0o7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7OztBQ2pHMkU7QUFDOUI7QUFFVztBQUNpQjtBQUN2QjtBQUU3QyxrQkFBb0IsU0FBUSx5RUFBUztJQUEzQzs7UUFDWSxjQUFTLEdBQXNCLEVBQUUsQ0FBQztRQUNsQyxpQkFBWSxHQUFXLG9FQUFNLENBQUMsTUFBTSxDQUFDO0lBNkRqRCxDQUFDO0lBM0RVLGFBQWE7UUFDaEIsTUFBTSxLQUFLLEdBQUcsMEVBQVUsQ0FBQyxRQUFRLENBQUM7UUFFbEMsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUMsQ0FBQyxFQUFFO2dCQUNqQyxRQUFRLEVBQUUsSUFBSSxvRUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNoQyxLQUFLLEVBQUUsQ0FBQyxHQUFHO2dCQUNYLE1BQU0sRUFBRTtvQkFDSixNQUFNLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztvQkFDeEMsTUFBTSxFQUFFLElBQUksMkVBQVcsQ0FDbkIsSUFBSSxvRUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3RCLElBQUksb0VBQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQ3ZCO2lCQUVKO2dCQUNELFVBQVUsRUFBRSxFQUNYO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ25DLFFBQVEsRUFBRSxJQUFJLG9FQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsdUVBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUMxRCxNQUFNLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQ3BDLE1BQU0sRUFBRSxJQUFJLDJFQUFXLENBQ25CLElBQUksb0VBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1RUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQ2hELElBQUksb0VBQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQ3ZCO2FBQ0o7WUFDRCxRQUFRLEVBQUUsSUFBSSx3RkFBVyxDQUNyQixJQUFJLDJFQUFXLENBQ1gsSUFBSSxvRUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVFQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFDaEQsSUFBSSxvRUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FDdkIsQ0FDSjtTQUNKLENBQUMsQ0FBQztRQUVILEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxHQUFDLENBQUMsRUFBRTtnQkFDaEMsUUFBUSxFQUFFLElBQUksb0VBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsdUVBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDN0QsTUFBTSxFQUFFO29CQUNKLE1BQU0sRUFBRSxDQUFDLDhCQUE4QixDQUFDO29CQUN4QyxNQUFNLEVBQUUsSUFBSSwyRUFBVyxDQUNuQixJQUFJLG9FQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLHVFQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFDbkQsSUFBSSxvRUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FDdEI7aUJBQ0o7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLG9FQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBZ0I7UUFDNUIseUVBQXlFO1FBQ3pFLDRDQUE0QztRQUU1QywyQ0FBMkM7SUFDL0MsQ0FBQztDQUNKO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RXNEO0FBQ007Ozs7Ozs7OztBQ0RvQjtBQUduRSxvQkFBc0IsU0FBUSwyRUFBUTtJQUNoRCxZQUNZLE9BQWUsRUFDZixPQUFlLEVBQ2YsT0FBZTtRQUV2QixLQUFLLEVBQUUsQ0FBQztRQUpBLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUczQixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsSUFBSSxNQUFNO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVNLE9BQU87UUFDVixNQUFNLENBQUMsZ0ZBQWEsQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUVNLFNBQVM7UUFDWixNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3RCLENBQUM7SUFDTixDQUFDO0lBRU0sWUFBWSxDQUFDLFFBQWtCO1FBQ2xDLE1BQU0sRUFBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUssZ0ZBQWEsQ0FBQyxHQUFHO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBRTNELEtBQUssZ0ZBQWEsQ0FBQyxNQUFNO2dCQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxXQUFXLENBQUMsUUFBZ0I7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVPLGlCQUFpQixDQUFDLElBQVM7UUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU8sbUJBQW1CLENBQUMsTUFBYztRQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7Q0FDSjtBQUFBO0FBQUE7Ozs7Ozs7OztBQ3BEcUY7QUFHdEY7O0dBRUc7QUFDVztJQU9WO1FBRUE7O1dBRUc7UUFDSyxlQUFVLEdBQXNCLEVBQUUsQ0FBQztRQUUzQzs7V0FFRztRQUNLLGVBQVUsR0FBb0IsRUFBRSxDQUFDO1FBRXpDOztXQUVHO1FBQ0ssaUJBQVksR0FBNEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQWZuQyxDQUFDO0lBSGpCLE1BQU0sS0FBSyxRQUFRO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQWtCRCxJQUFJLFNBQVM7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxHQUFHLENBQUMsRUFBVTtRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFdBQVcsQ0FBQyxRQUFrQjtRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRixXQUFXLENBQUMsRUFBVSxFQUFFLE1BQXdCO1FBQzVDLEVBQUUsRUFBQyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBQ0QsRUFBRSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLG1FQUFtRSxFQUFFLEVBQUUsQ0FBQztRQUM1RixDQUFDO1FBRUQsTUFBTSxVQUFVLEdBQUcsc0ZBQWMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXRDLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsV0FBVyxDQUFDLFdBQThCO1FBQ3RDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztDQUNKO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQ3pGOEM7QUFDK0I7QUFFOUU7O0dBRUc7QUFDVztJQVlWOzs7OztPQUtHO0lBQ0gsWUFBWSxFQUFVLEVBQUUsU0FBb0I7UUFkcEMsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUk3QixnQkFBVyxHQUFxQixFQUFFLENBQUM7UUFTdkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxFQUFFO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksWUFBWTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7T0FFRztJQUNJLFNBQVM7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE9BQU87UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFVBQVU7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxTQUFTO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxZQUFZO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksVUFBVTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksVUFBVSxDQUFDLE9BQXVCO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksWUFBWSxDQUFDLFNBQW9CO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLFNBQVMsQ0FBQyxNQUFjO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLFNBQVMsQ0FBQyxVQUFnQjtRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxhQUFhLENBQUMsU0FBa0I7UUFDbkMsRUFBRSxFQUFDLElBQUksQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUNoQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxXQUFXLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxPQUFPO1FBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNJLGFBQWE7UUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxTQUFTO1FBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxRQUFRLENBQUMsUUFBZ0I7UUFDNUIsRUFBRSxFQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxXQUFXLENBQUMsYUFBeUI7UUFDeEMsK0RBQStEO0lBQ25FLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU07UUFDVCxFQUFFLEVBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDNUQsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELE1BQU0sbUJBQW1CLEdBQUcsNEdBQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUscUVBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwRiw4REFBOEQ7UUFDOUQsRUFBRSxFQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLGdFQUFnRTtZQUVoRSx1Q0FBdUM7WUFDdkMsd0JBQXdCO1FBQzVCLENBQUM7SUFFTCxDQUFDO0NBQ0o7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FDeE42QztBQUU5Qzs7Ozs7Ozs7R0FRRztBQUNHLGdCQUNGLE9BQXVCLEVBQ3ZCLFNBQW9CLEVBQ3BCLE1BQWM7SUFHZCxvREFBb0Q7SUFDcEQsRUFBRSxFQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxvREFBb0Q7SUFDcEQsbURBQW1EO0lBQ25ELE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRWpELE1BQU0sY0FBYyxHQUFHLElBQUksb0VBQU0sQ0FDN0IsUUFBUSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxFQUN4QixRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQzNCLENBQUM7SUFFRixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxjQUFjLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUM3QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBSSxjQUFjLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUU3QyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFbEIsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7O0FDeEMrRjtBQUdqQztBQUNaO0FBVW5EOzs7OztHQUtHO0FBQ0gsbUJBQW1CLEVBQVUsRUFBRSxTQUFpQixDQUFDO0lBQzdDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDaEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXpDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRW5DLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQUVLLHdCQUF5QixFQUFVLEVBQUUsTUFBd0I7SUFDL0QsSUFBSSxjQUFjLEdBQUcsMEVBQVUsQ0FBQztJQUVoQyxxRUFBcUU7SUFDckUsb0JBQW9CO0lBQ3BCLEVBQUUsRUFBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqQixjQUFjLEdBQUcsb0ZBQVksQ0FBQywwRUFBVSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCwwRUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsQ0FBQyxFQUFFLEVBQUUsSUFBSSx5RUFBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBR2pFLEVBQUUsRUFBQyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2QyxNQUFNLGNBQWMsR0FBRyxJQUFJLHNFQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzQixHQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxFQUFFLEVBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDdEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekMsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hCLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUVwQixNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ2YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUM3RHNEO0FBQ2M7Ozs7Ozs7OztBQ0R2QjtBQVV4QztJQTBDRixZQUFZLE1BQW9CO1FBbkNoQzs7V0FFRztRQUNLLFlBQU8sR0FBa0IsRUFBRSxDQUFDO1FBT3BDOztXQUVHO1FBQ0ssa0JBQWEsR0FBVyxJQUFJLENBQUM7UUFFckM7O1dBRUc7UUFDSyxZQUFPLEdBQVcsR0FBRyxDQUFDO1FBRTlCOztXQUVHO1FBQ0ssZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFTeEIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUk3QixFQUFFLEVBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7UUFDNUUsQ0FBQztRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFFN0IsZ0ZBQWdGO1FBQ2hGLEVBQUUsRUFBQyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25GLENBQUM7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksb0VBQU0sRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxTQUFTO1FBQ1osTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUVqQyxNQUFNLE9BQU8sR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsRUFBRSxHQUFHLFVBQVUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1FBRTlDLEVBQUUsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzFELE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUcsMkNBQTJDO1lBQ2xHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN2RCxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUQsQ0FBQztRQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksV0FBVyxDQUFDLE1BQWM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsTUFBYztRQUN4QixzREFBc0Q7UUFDdEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNqQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpCLEVBQUUsRUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUM3QyxDQUFDLENBQUMsQ0FBQztZQUNDLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUcsMkNBQTJDO1FBQ3hHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUcsK0JBQStCO1FBQ25HLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUUsK0JBQStCO1FBRW5HLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7O09BRUc7SUFDSyxZQUFZO1FBQ2hCLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0lBQ25GLENBQUM7SUFHRCxpQ0FBaUM7SUFDMUIsS0FBSztRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDTSxLQUFLO1FBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUNNLE9BQU87UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0NBQ0o7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN2SnNEO0FBQ007Ozs7Ozs7OztBQ0RvQjtBQUluRSxpQkFBbUIsU0FBUSxtRUFBUTtJQUM3QyxZQUFvQixZQUF5QjtRQUN6QyxLQUFLLEVBQUUsQ0FBQztRQURRLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBRTdDLENBQUM7SUFFRCxJQUFXLFdBQVc7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVNLE9BQU87UUFDVixNQUFNLENBQUMsd0VBQWEsQ0FBQyxHQUFHLENBQUM7SUFDN0IsQ0FBQztJQUVNLFlBQVk7UUFDZixNQUFNLENBQUM7WUFDSCxJQUFJLEVBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJO1lBQ2hDLEtBQUssRUFBSyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUs7WUFDakMsR0FBRyxFQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRztZQUMvQixNQUFNLEVBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO1NBQ3JDLENBQUM7SUFDTixDQUFDO0lBRU0sWUFBWSxDQUFDLFFBQWtCO1FBQ2xDLE1BQU0sRUFBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUssd0VBQWEsQ0FBQyxHQUFHO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztZQUV6RCxLQUFLLHdFQUFhLENBQUMsTUFBTTtnQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU0sV0FBVyxDQUFDLFFBQWdCO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssZUFBZSxDQUFDLElBQVM7UUFDN0IsTUFBTSxDQUFDLENBQ0gsSUFBSSxDQUFDLEtBQUssR0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUk7WUFDcEMsSUFBSSxDQUFDLElBQUksR0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUs7WUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU07WUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDdEMsQ0FBQztJQUNOLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxNQUFjO1FBQ3BDLFdBQVc7UUFFWCxLQUFLO1FBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBRUo7QUFBQTtBQUFBOzs7Ozs7Ozs7QUMvRGdGO0FBR25FLG9CQUFzQixTQUFRLG1FQUFRO0lBQ2hELFlBQ1ksT0FBZSxFQUNmLE9BQWUsRUFDZixPQUFlO1FBRXZCLEtBQUssRUFBRSxDQUFDO1FBSkEsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBRzNCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRU0sT0FBTztRQUNWLE1BQU0sQ0FBQyx3RUFBYSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBRU0sU0FBUztRQUNaLE1BQU0sQ0FBQztZQUNILFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQztJQUNOLENBQUM7SUFFTSxZQUFZLENBQUMsUUFBa0I7UUFDbEMsTUFBTSxFQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSyx3RUFBYSxDQUFDLEdBQUc7Z0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFFM0QsS0FBSyx3RUFBYSxDQUFDLE1BQU07Z0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLFdBQVcsQ0FBQyxRQUFnQjtRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztJQUM1QixDQUFDO0lBRU8saUJBQWlCLENBQUMsSUFBUztRQUMvQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxNQUFjO1FBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUNKO0FBQUE7QUFBQSIsImZpbGUiOiJmbGFwcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkYTZmOThjNDg2ZDE4M2RlNmVlZCIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVmVjdG9yIH0gZnJvbSAnLi9WZWN0b3InO1xuXG5pbXBvcnQgKiBhcyBNYXRocyBmcm9tICcuL01hdGhzJztcbmV4cG9ydCB7IE1hdGhzIH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvbWF0aHMvaW5kZXgudHMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJvdW5kaW5nQm94IH0gZnJvbSAnLi9Cb3VuZGluZ0JveCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHJhbnNmb3JtIH0gZnJvbSAnLi9UcmFuc2Zvcm0nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoRGlydHlGbGFnIH0gZnJvbSAnLi9EaXJ0eUZsYWcnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdhbWVPYmplY3QgfSBmcm9tICcuL2dhbWVvYmplY3QvR2FtZU9iamVjdCc7XG5leHBvcnQgeyBtYWtlR2FtZU9iamVjdCwgR2FtZU9iamVjdENvbmZpZyB9IGZyb20gJy4vZ2FtZW9iamVjdC9HYW1lT2JqZWN0RmFjdG9yeSc7XG5cbi8vIG1vZHVsZXNcbmV4cG9ydCB7IFNwcml0ZSwgU3ByaXRlQ29uZmlnIH0gZnJvbSAnLi9tb2R1bGVzJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL2luZGV4LnRzIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW1lcmEgfSBmcm9tICcuL0NhbWVyYSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbnZhcyB9IGZyb20gJy4vQ2FudmFzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmlld3BvcnQgfSBmcm9tICcuL1ZpZXdwb3J0JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vaW5kZXgudHMiLCJleHBvcnQgeyBcbiAgICBkZWZhdWx0IGFzIENvbGxpZGVyLCBcbiAgICBDb2xsaWRlclNoYXBlLCBcbiAgICBCb3gsXG4gICAgQ2lyY2xlLFxufSBmcm9tICcuL0NvbGxpZGVyJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9jb2xsaXNpb25zL2luZGV4LnRzIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJ2VuZ2luZS9nYW1lJztcbmltcG9ydCB7IFBsYW5lTW92ZW1lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvUGxhbmVNb3ZlbWVudCc7XG5pbXBvcnQgeyBTY2VuZU1hbmFnZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvU2NlbmVNYW5hZ2VyJztcblxuaW1wb3J0IHsgU3ByaXRlLCBCb3VuZGluZ0JveCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuaW1wb3J0IHsgVmlld3BvcnQsIENhbnZhcywgQ2FtZXJhIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvc2NyZWVuJztcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucy9jb2xsaWRlcnMnO1xuaW1wb3J0IFNjZW5lR3JhcGggZnJvbSAnZW5naW5lL2xpYnJhcnkvU2NlbmVHcmFwaCc7XG5cbmNsYXNzIEZsYXBweUdhbWUgZXh0ZW5kcyBHYW1lIHtcbiAgICBvblN0YXJ0KCkge1xuICAgICAgICBjb25zdCBzY2VuZSA9IFNjZW5lR3JhcGguaW5zdGFuY2U7XG4gICAgICAgIGNvbnN0IHNjZW5lTWFuYWdlciA9IHNjZW5lLmluc3RhbnRpYXRlKCdzY2VuZU1hbmFnZXInLCB7XG4gICAgICAgICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgICAgICAgICAgU2NlbmVNYW5hZ2VyLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcGxhbmVSZWQgPSBzY2VuZS5pbnN0YW50aWF0ZSgncGxhbmUnLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3Rvcig1MCwgLTUwKSxcbiAgICAgICAgICAgIC8vIGNvbGxpZGVyOiBCb3hDb2xsaWRlcixcbiAgICAgICAgICAgIHNwcml0ZToge1xuICAgICAgICAgICAgICAgIGFzc2V0czogW1xuICAgICAgICAgICAgICAgICAgICAnYXNzZXRzL2ltYWdlcy9wbGFuZVJlZDEucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gJ2Fzc2V0cy9pbWFnZXMvcGxhbmVSZWQyLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIC8vICdhc3NldHMvaW1hZ2VzL3BsYW5lUmVkMy5wbmcnLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYm91bmRzOiBuZXcgQm91bmRpbmdCb3goXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoNTAsIC01MCksIFxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDUwLCA1MClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIC8vIHRpbWluZzogMTUwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbGxpZGVyOiBuZXcgQm94Q29sbGlkZXIoXG4gICAgICAgICAgICAgICAgbmV3IEJvdW5kaW5nQm94KFxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDUwLCAtNTApLCBcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3Rvcig1MCwgNTApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgICAgICAgICAgUGxhbmVNb3ZlbWVudCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3QgZ2FtZSA9IG5ldyBGbGFwcHlHYW1lKCk7XG5nYW1lLmluaXRpYWxpc2UoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nYW1lcy9mbGFwcHkvZmxhcHB5LnRzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBib290R2FtZUxvb3AgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9HYW1lTG9vcCc7XG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9zY3JlZW4nO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG4vKipcbiAqIEJhc2UgY29udGFpbmVyIGZvciBhIGdhbWUuIEEgZ2FtZSBzaG91bGQgZXh0ZW5kIHRoaXNcbiAqIGFuZCBmaWxsIGl0IHdpdGggZ2FtZSBzcGVjaWZpYyBsb2dpYy5cbiAqL1xuZXhwb3J0IGNsYXNzIEdhbWUge1xuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRoZSBlbmdpbmUgZ2FtZSBsb29wIGFuZCB0aGUgZ2FtZSdzIGxvZ2ljXG4gICAgICovXG4gICAgaW5pdGlhbGlzZSgpIHtcbiAgICAgICAgQ2FtZXJhLmluc3RhbmNlLnRyYW5zZm9ybS5zZXRQb3NpdGlvbihuZXcgVmVjdG9yKDAsIDApKTtcbiAgICAgICAgYm9vdEdhbWVMb29wKHRoaXMub25TdGFydCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9naWMgdG8gcnVuIG9uY2UgYWZ0ZXIgdGhlIG1haW4gZ2FtZSBsb29wIGlzIHN0YXJ0ZWRcbiAgICAgKi9cbiAgICBvblN0YXJ0KCkge31cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9nYW1lLnRzIiwiaW1wb3J0IFNjZW5lR3JhcGggZnJvbSBcImVuZ2luZS9saWJyYXJ5L1NjZW5lR3JhcGhcIjtcblxuXG4vKipcbiAqIERlc2lyZWQgYW1vdW50IG9mIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gZnJhbWVzXG4gKlxuICogQGNvbnN0YW50IHtudW1iZXJ9XG4gKi9cbmNvbnN0IE1TX1BFUl9GUkFNRTogbnVtYmVyID0gMTY7XG5cbi8qKlxuICogIEdhbWUgc3BlZWQgKDEgPSBub3JtYWwgc3BlZWQgfCAwID0gbm90IG1vdmluZylcbiAqIFxuICogIEBjb25zdGFudCB7bnVtYmVyfVxuICovXG5jb25zdCBUSU1FX1NURVA6IG51bWJlciA9IDE7XG5cbi8qKlxuICogIFRpbWVzdGFtcCBvZiB0aGUgbGFzdCByZW5kZXJlZCBmcmFtZVxuICogXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5sZXQgbGFzdFRpY2s6IG51bWJlcjtcblxuXG4vKipcbiAqIFRoZSBtYWluIGdhbWUgbG9vcC5cbiAqIFxuICogQ2FsY3VsYXRlcyBmcmFtZSBzdGF0cyBhbmQgcGFzc2VzIGl0IHRvIHRoZSB1cGRhdGVcbiAqIGFuZCByZW5kZXIgbG9vcFxuICovXG5mdW5jdGlvbiBnYW1lTG9vcCgpIDogdm9pZCB7XG4gICAgLy8gY2FsY3VsYXRlIGhvdyBtdWNoIHRpbWUgaGFzIGFjdHVhbGx5IHBhc3NlZCBzaW5jZVxuICAgIC8vIHRoZSBsYXN0IGZyYW1lIGFuZCBwYXNzIGl0IHRvIHRoZSB1cGRhdGUgbG9vcFxuICAgIGNvbnN0IGN1cnJlbnRUaWNrID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBlbGFwc2VkID0gY3VycmVudFRpY2sgLSBsYXN0VGljaztcbiAgICBjb25zdCBzdGVwID0gKE1TX1BFUl9GUkFNRSAvIGVsYXBzZWQpICogVElNRV9TVEVQO1xuICAgIFxuICAgIG9uVXBkYXRlKHN0ZXApO1xuICAgIG9uUmVuZGVyKCk7XG5cbiAgICBsYXN0VGljayA9IGN1cnJlbnRUaWNrO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5cblxuLyoqXG4gKiAgRGVsZWdhdGVzIHdvcmsgdG8gZXZlcnkgZ2FtZSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gb25VcGRhdGUodGltZXN0ZXA6IG51bWJlcikge1xuICAgIGNvbnN0IGhpZXJhcmNoeSA9IFNjZW5lR3JhcGguaW5zdGFuY2UuaGllcmFyY2h5O1xuICAgIGNvbnN0IGNvcnBzZU9iamVjdHMgPSBbXTtcblxuICAgIC8vIGxvb3Agb3ZlciBhIGJ1ZmZlciBzbyB0aGF0IG5ld2x5IGluc3RhbnRpYXRlZCBvYmplY3RzXG4gICAgLy8gYWx3YXlzIHN0YXJ0IGV4ZWN1dGlvbiBmcm9tIHRoZSBuZXh0IGZyYW1lXG4gICAgY29uc3QgYnVmZmVyQ291bnQgPSBoaWVyYXJjaHkubGVuZ3RoO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBidWZmZXJDb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IGhpZXJhcmNoeVtpXTtcblxuICAgICAgICAvLyBhbnkgb2JqZWN0cyBtYXJrZWQgZm9yIGRlbGV0aW9uIHNob3VsZCBub3QgYmUgZXhlY3V0ZWRcbiAgICAgICAgaWYob2JqLmlzRGVzdHJveWluZygpKSB7XG4gICAgICAgICAgICBjb3Jwc2VPYmplY3RzLnB1c2gob2JqKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG9iai5vblVwZGF0ZSh0aW1lc3RlcCk7XG4gICAgfVxuXG4gICAgLy8gY2xlYW51cCBhbnkgb2JqZWN0cyBtYXJrZWQgZm9yIGRlbGV0aW9uXG4gICAgaWYoY29ycHNlT2JqZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIFNjZW5lR3JhcGguaW5zdGFuY2UucmVtb3ZlQmF0Y2goY29ycHNlT2JqZWN0cyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlbmRlcnMgZXZlcnkgdmlzaWJsZSBHYW1lT2JqZWN0IHRvIERPTSBldmVyeSBmcmFtZVxuICovXG5mdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICBTY2VuZUdyYXBoXG4gICAgICAgIC5pbnN0YW5jZVxuICAgICAgICAuaGllcmFyY2h5XG4gICAgICAgIC5mb3JFYWNoKG9iaiA9PiBvYmoucmVuZGVyKCkpO1xufVxuXG4vKipcbiAqIFN0YXJ0cyB0aGUgZ2FtZSBsb29wXG4gKi9cbmxldCBpc0Jvb3RlZCA9IGZhbHNlO1xuZXhwb3J0IGZ1bmN0aW9uIGJvb3RHYW1lTG9vcChvblN0YXJ0OiBGdW5jdGlvbikge1xuICAgIGlmKGlzQm9vdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGFzdFRpY2sgPSBEYXRlLm5vdygpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgb25TdGFydCgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L0dhbWVMb29wLnRzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSByZWN0YW5nbGUgaW4gd29ybGQtc3BhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm91bmRpbmdCb3gge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9vcmlnaW46IFZlY3RvcixcbiAgICAgICAgcHJpdmF0ZSBfZGltZW5zaW9uczogVmVjdG9yLFxuICAgICAgICBwcml2YXRlIF9vZmZzZXQ6IFZlY3RvciA9IFZlY3Rvci5vcmlnaW4sXG4gICAgKSB7fVxuXG4gICAgZ2V0IHBvc2l0aW9uKCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5fb3JpZ2luLmFkZCh0aGlzLl9vZmZzZXQpO1xuICAgIH1cbiAgICBcbiAgICBnZXQgbGVmdCgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueCAtICh0aGlzLl9kaW1lbnNpb25zLnggLyAyKTtcbiAgICB9XG4gICAgZ2V0IHJpZ2h0KCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54ICsgKHRoaXMuX2RpbWVuc2lvbnMueCAvIDIpO1xuICAgIH1cbiAgICBnZXQgdG9wKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi55ICsgKHRoaXMuX2RpbWVuc2lvbnMueSAvIDIpO1xuICAgIH1cbiAgICBnZXQgYm90dG9tKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi55IC0gKHRoaXMuX2RpbWVuc2lvbnMueSAvIDIpO1xuICAgIH1cblxuICAgIGdldCBkaW1lbnNpb25zKCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5fZGltZW5zaW9ucztcbiAgICB9XG4gICAgZ2V0IG9mZnNldCgpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29mZnNldDtcbiAgICB9XG4gICAgZ2V0IG9yaWdpbigpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yaWdpbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBCb3VuZGluZyBCb3hcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gb3JpZ2luIFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRPcmlnaW4ob3JpZ2luOiBWZWN0b3IpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX29yaWdpbiA9IG9yaWdpbjtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9Cb3VuZGluZ0JveC50cyIsImltcG9ydCB7IE1hdGhzIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBjb29yZGluYXRlIGluIDJEIHNwYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3g6IG51bWJlciA9IDAsXG4gICAgICAgIHByaXZhdGUgX3k6IG51bWJlciA9IDBcbiAgICApIHt9XG5cbiAgICAvKipcbiAgICAgKiAgUmV0dXJucyB0aGUgeC1jb29yZGluYXRlXG4gICAgICogXG4gICAgICogIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgeCgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3g7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIFJldHVybnMgdGhlIHktY29vcmRpbmF0ZVxuICAgICAqIFxuICAgICAqICBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHkoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl95O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgKGllLiBsZW5ndGgpIG9mIHRoZSB2ZWN0b3JcbiAgICAgKiBcbiAgICAgKiAgQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBtYWduaXR1ZGUoKSA6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHgyID0gdGhpcy5feCAqIHRoaXMuX3g7XG4gICAgICAgIGNvbnN0IHkyID0gdGhpcy5feSAqIHRoaXMuX3k7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeDIgKyB5Mik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHZlY3RvciB0aGF0IGlzIHBlcnBlbmRpY3VsYXIgdG8gdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBnZXQgbm9ybWFsKCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigtdGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGQodmVjdG9yOiBWZWN0b3IpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoXG4gICAgICAgICAgICB0aGlzLnggKyB2ZWN0b3IueCxcbiAgICAgICAgICAgIHRoaXMueSArIHZlY3Rvci55XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHN1YnRyYWN0KHZlY3RvcjogVmVjdG9yKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFxuICAgICAgICAgICAgdGhpcy54IC0gdmVjdG9yLngsXG4gICAgICAgICAgICB0aGlzLnkgLSB2ZWN0b3IueVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBtdWx0aXBseShzY2FsYXI6IG51bWJlcikgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihcbiAgICAgICAgICAgIHRoaXMueCAqIHNjYWxhcixcbiAgICAgICAgICAgIHRoaXMueSAqIHNjYWxhclxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhcHMgdGhpcyBWZWN0b3IgYmV0d2VlbiB0aGUgdmFsdWUgb2YgdHdvIFZlY3RvcnNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gbWluXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IG1heCBcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xhbXAobWluOiBWZWN0b3IsIG1heDogVmVjdG9yKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFxuICAgICAgICAgICAgTWF0aHMuY2xhbXAodGhpcy54LCBtaW4ueCwgbWF4LngpLFxuICAgICAgICAgICAgTWF0aHMuY2xhbXAodGhpcy55LCBtaW4ueSwgbWF4LnkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgZGlyZWN0aW9uIGdldHRlcnNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IGxlZnQoKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKC0xLCAwKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCByaWdodCgpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoMSwgMCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgdXAoKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDAsIDEpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGRvd24oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDAsIC0xKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBvcmlnaW4oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDAsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzY2FsYXIgdGhhdCBzaG93cyBob3cgbXVjaCB2ZWN0b3IxXG4gICAgICogaXMgaW4gdmVjdG9yMidzIGRpcmVjdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Kn0gdmVjdG9yMSBcbiAgICAgKiBAcGFyYW0geyp9IHZlY3RvcjIgXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZG90KHZlY3RvcjE6IFZlY3RvciwgdmVjdG9yMjogVmVjdG9yKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAodmVjdG9yMS54ICogdmVjdG9yMi54KSArICh2ZWN0b3IxLnkgKiB2ZWN0b3IyLnkpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9tYXRocy9WZWN0b3IudHMiLCIvKipcbiAqIFJldHVybnMgYSB3aG9sZSBudW1iZXIgYmV0d2VlbiBbbWluXSBhbmQgW21heF1cbiAqIFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggXG4gKiBcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIDogbnVtYmVyIHtcbiAgICBjb25zdCB2YWx1ZSA9IChNYXRoLnJhbmRvbSgpICogKG1pbiAtIG1heCkpIC0gbWluO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDYXBzIFt2YWx1ZV0gYmV0d2VlbiBtaW4gYW5kIG1heCAoaW5jbHVzaXZlKVxuICogXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBcbiAqIFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA6IG51bWJlciB7XG4gICAgaWYodmFsdWUgPD0gbWluKSByZXR1cm4gbWluO1xuICAgIGlmKHZhbHVlID49IG1heCkgcmV0dXJuIG1heDtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvbWF0aHMvTWF0aHMudHMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0LCBUcmFuc2Zvcm0sIFNwcml0ZSB9IGZyb20gXCJlbmdpbmUvbGlicmFyeS9vYmplY3RzXCI7XG5cbi8qKlxuICogQW4gaW50ZXJmYWNlIGZvciBpbnRlcmFjdGluZyB3aXRoIGEgR2FtZU9iamVjdC4gVGhpcyBpc1xuICogd2hlcmUgYWxtb3N0IGFsbCB0aGUgY3VzdG9tIGdhbWUgY29kZSBzaG91bGQgbGl2ZS5cbiAqIFxuICogQSBjb21wb25lbnQgc2hvdWxkIGJlIGluc3RhbnRpYXRlZCBhbmQgYXR0YWNoZWQgdG8gYVxuICogR2FtZU9iamVjdCB3aGVuIHRoZSBHYW1lT2JqZWN0IGlzIGNyZWF0ZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIEdhbWVPYmplY3QgdGhpcyBjb21wb25lbnQgYmVsb25ncyB0b1xuICAgICAqL1xuICAgIHByaXZhdGUgX2dhbWVPYmplY3Q6IEdhbWVPYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuX2dhbWVPYmplY3QgPSBnYW1lT2JqZWN0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB0cmFuc2Zvcm0gZm9yIHRoZSBHYW1lT2JqZWN0IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogXG4gICAgICogQHJldHVybiB7VHJhbnNmb3JtfVxuICAgICAqL1xuICAgIGdldCB0cmFuc2Zvcm0oKSA6IFRyYW5zZm9ybSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lT2JqZWN0LmdldFRyYW5zZm9ybSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNwcml0ZSBmb3IgdGhlIEdhbWVPYmplY3Qgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtTcHJpdGV9XG4gICAgICovXG4gICAgZ2V0IHNwcml0ZSgpIDogU3ByaXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3QuZ2V0U3ByaXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgR2FtZU9iamVjdCB0aGlzIGNvbXBvbmVudCBiZWxvbmdzIHRvXG4gICAgICogXG4gICAgICogQHJldHVybiB7R2FtZU9iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgZ2FtZU9iamVjdCgpIDogR2FtZU9iamVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lT2JqZWN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ2ljIHRvIHJ1biB3aGVuIHRoZSBvYmplY3QgaXMgZmlyc3QgaW5zdGFudGlhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkluc3RhbnRpYXRlKCkgOiB2b2lkIHt9XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9naWMgdG8gcnVuIGV2ZXJ5IGdhbWUgbG9vcCBmcmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBvblVwZGF0ZSh0aW1lc3RlcDogbnVtYmVyKSA6IHZvaWQge31cblxuICAgIC8qKlxuICAgICAqIExvZ2ljIHRvIHJ1biB3aGVuIHRoZSBvYmplY3QgaXMgZGVzdHJveWVkXG4gICAgICovXG4gICAgcHVibGljIG9uRGVzdHJveSgpIDogdm9pZCB7fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvQ29tcG9uZW50LnRzIiwiaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cyc7XG5pbXBvcnQgU2NlbmVHcmFwaCBmcm9tICdlbmdpbmUvbGlicmFyeS9TY2VuZUdyYXBoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IENhbWVyYTtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyB0aGlzKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYW5zZm9ybTogVHJhbnNmb3JtO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybSgpO1xuXG4gICAgICAgIC8vIHNpbmNlIGEgY2FtZXJhIG1vdmUgbmVlZHMgdG8gdXBkYXRlIGV2ZXJ5dGhpbmcgaW4gdmlldyxcbiAgICAgICAgLy8gc2V0IGFsbCBvYmplY3RzIGluIHRoZSB2aWV3cG9ydCBhcyAnZGlydHknIHNvIHRoZXkgZ2V0XG4gICAgICAgIC8vIHJlZHJhd25cbiAgICAgICAgXG4gICAgICAgIC8vIFRPRE86IHZpZXdwb3J0IGN1bGxpbmdcbiAgICAgICAgY29uc3Qgc2V0UG9zaXRpb25GdW5jID0gdGhpcy5fdHJhbnNmb3JtLnNldFBvc2l0aW9uLmJpbmQodGhpcy5fdHJhbnNmb3JtKTtcbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtLnNldFBvc2l0aW9uID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBzZXRQb3NpdGlvbkZ1bmModmFsdWUpO1xuICAgICAgICAgICAgU2NlbmVHcmFwaC5pbnN0YW5jZS5oaWVyYXJjaHkuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgICAgIG9iai5nZXRUcmFuc2Zvcm0oKS5kaXJ0eSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdHJhbnNmb3JtKCkgOiBUcmFuc2Zvcm0ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vQ2FtZXJhLnRzIiwiaW1wb3J0IHsgVmlld3BvcnQgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9zY3JlZW4nO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG4vKipcbiAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0byBpbnRlcmFjdCB3aXRoIHRoZSBIVE1MIGNhbnZhc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQ2FudmFzO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29udGV4dDogYW55O1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBpZighdGhpcy5fY29udGV4dCkge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBWaWV3cG9ydC5pbnN0YW5jZS53aWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBWaWV3cG9ydC5pbnN0YW5jZS5oZWlnaHQ7XG5cbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXdzIGEgbGluZSBvbiB0aGUgc2NyZWVuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvcjEgXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvcjIgXG4gICAgICovXG4gICAgZHJhd0xpbmUodmVjdG9yMTogVmVjdG9yLCB2ZWN0b3IyOiBWZWN0b3IsIGNvbG9yID0gJ2dyZWVuJykge1xuICAgICAgICBjb25zdCBjID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgIGMubW92ZVRvKHZlY3RvcjEueCwgdmVjdG9yMS55KTtcbiAgICAgICAgYy5saW5lVG8odmVjdG9yMi54LCB2ZWN0b3IyLnkpO1xuICAgICAgICBjLnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L3NjcmVlbi9DYW52YXMudHMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgYnJvd3NlciB3aW5kb3dcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld3BvcnQge1xuXG4gICAgLy8gc2luZ2xldG9uIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCBtb3JlIHRoYW4gb25lIGJyb3dzZXIgcmVzaXplIGV2ZW50IGxpc3RlbmVyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBWaWV3cG9ydDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpIDogVmlld3BvcnQge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYnJvd3NlckhlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2Jyb3dzZXJXaWR0aDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB2aWV3cG9ydFdpZHRoOiBudW1iZXIgPSA4MDAsIFxuICAgICAgICBwcml2YXRlIHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIgPSA0MDBcbiAgICApIHtcbiAgICAgICAgdGhpcy5fcmVjYWxjdWxhdGVTY3JlZW4oKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3JlY2FsY3VsYXRlU2NyZWVuLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jyb3dzZXJXaWR0aDtcbiAgICB9XG4gICAgZ2V0IGhlaWdodCgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jyb3dzZXJIZWlnaHQ7XG4gICAgfVxuICAgIGdldCBzY3JlZW4oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG4gICAgZ2V0IG9yaWdpbigpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoXG4gICAgICAgICAgICB0aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0IC8gMixcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZS1jYWNoZSB0aGUgc2l6ZSBvZiB0aGUgYnJvd3NlciB3aW5kb3cgdG8gcHJldmVudCByZWZsb3dzL3JlbGF5b3V0c1xuICAgICAqL1xuICAgIF9yZWNhbGN1bGF0ZVNjcmVlbigpIDogdm9pZCB7XG4gICAgICAgIC8vIFRPRE86IGV4ZWN1dGUgb25seSBkdXJpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgIHRoaXMuX2Jyb3dzZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuX2Jyb3dzZXJXaWR0aCAgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvc2NyZWVuL1ZpZXdwb3J0LnRzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2Zvcm0ge1xuXG4gICAgcHJpdmF0ZSBfcG9zaXRpb246IFZlY3RvcjtcbiAgICBwcml2YXRlIF9yb3RhdGlvbjogbnVtYmVyO1xuICAgIHByaXZhdGUgX3NjYWxlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfbG9jYWxQb3NpdGlvbjogVmVjdG9yID0gVmVjdG9yLm9yaWdpbjtcblxuICAgIHByaXZhdGUgX3BhcmVudDogVHJhbnNmb3JtID0gbnVsbDtcbiAgICBwcml2YXRlIF9jaGlsZHJlbjogVHJhbnNmb3JtW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHRyYW5zZm9ybSBuZWVkcyBhIHJlZHJhd1xuICAgICAqL1xuICAgIHByaXZhdGUgX2lzRGlydHk6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHBvc2l0aW9uOiBWZWN0b3IgPSBWZWN0b3Iub3JpZ2luLFxuICAgICAgICByb3RhdGlvbjogbnVtYmVyID0gMCxcbiAgICAgICAgc2NhbGU6IG51bWJlciA9IDEsXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuX3JvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMuX3NjYWxlID0gc2NhbGU7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgICB9XG4gICAgc2V0UG9zaXRpb24odmFsdWU6IFZlY3RvcikgOiB2b2lkIHtcbiAgICAgICAgaWYodmFsdWUueCA9PT0gdGhpcy5fcG9zaXRpb24ueCAmJiB2YWx1ZS55ID09PSB0aGlzLl9wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkaWZmID0gdmFsdWUuc3VidHJhY3QodGhpcy5fcG9zaXRpb24pO1xuXG4gICAgICAgIC8vIGlmIHRoaXMgR2FtZU9iamVjdCBtb3ZlZCwgdXBkYXRlIGl0cyBsb2NhbCBwb3NpdGlvbiByZWxhdGl2ZSB0b1xuICAgICAgICAvLyBpdHMgcGFyZW50XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsdWU7XG4gICAgICAgIGlmKHRoaXMuX3BhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5fbG9jYWxQb3NpdGlvbiA9IHZhbHVlLnN1YnRyYWN0KHRoaXMuX3BhcmVudC5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gaWYgdGhpcyBHYW1lT2JqZWN0IGhhcyBjaGlsZHJlbiwgdXBkYXRlIHRoZWlyIHBvc2l0aW9uc1xuICAgICAgICBpZih0aGlzLl9jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IobGV0IGNoaWxkIG9mIHRoaXMuX2NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuc2V0UG9zaXRpb24oY2hpbGQuZ2V0UG9zaXRpb24oKS5hZGQoZGlmZikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0UGFyZW50KCkgOiBUcmFuc2Zvcm0ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgIH1cbiAgICBzZXRQYXJlbnQodHJhbnNmb3JtOiBUcmFuc2Zvcm0pIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy5fbG9jYWxQb3NpdGlvbiA9IHRoaXMuX3Bvc2l0aW9uLnN1YnRyYWN0KHRyYW5zZm9ybS5nZXRQb3NpdGlvbigpKTtcbiAgICB9XG5cbiAgICBnZXRDaGlsZHJlbigpIDogQXJyYXk8VHJhbnNmb3JtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcbiAgICB9XG4gICAgYWRkQ2hpbGQodHJhbnNmb3JtOiBUcmFuc2Zvcm0pIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2godHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgVmVjdG9yIG9mIHRoZSByZWxhdGl2ZSBkaXN0YW5jZSB0byB0aGlzIFRyYW5zZm9ybSdzIHBhcmVudFxuICAgICAqL1xuICAgIGdldExvY2FsUG9zaXRpb24oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbFBvc2l0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3J0Y3V0IG1ldGhvZCBmb3IgYWRkaW5nIHRoZSBnaXZlbiB2ZWN0b3IgdG8gdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmFsdWUgXG4gICAgICovXG4gICAgdHJhbnNsYXRlKHZhbHVlOiBWZWN0b3IpIDogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5ld1BvcyA9IHRoaXMuX3Bvc2l0aW9uLmFkZCh2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24obmV3UG9zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBUcmFuc2Zvcm0gYXMgJ2NsZWFuJy4gV2hlbiBpbiBhICdjbGVhbicgc3RhdGUsIHRoZSBUcmFuc2Zvcm1cbiAgICAgKiB3aWxsIG5vdCByZWRyYXcgdW50aWwgaXRzIG1hbmlwdWxhdGVkIGFnYWluIChtb3ZlLCBzY2FsZSwgcm90YXRlKVxuICAgICAqL1xuICAgIGNsZWFuKCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNEaXJ0eSA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBGb3JjZXMgYSByZS1kcmF3XG4gICAgICovXG4gICAgZGlydHkoKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9pc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIFRyYW5zZm9ybSBuZWVkcyB0byBiZSByZWRyYXduIGR1ZSB0byBhIG1hbmlwdWxhdGlvblxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNEaXJ0eSgpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RpcnR5O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL1RyYW5zZm9ybS50cyIsImltcG9ydCB7IFR5cGVzIH0gZnJvbSAnZW5naW5lL2ludGVybmFsJztcblxuLyoqXG4gKiBBZGRzIGEgZGlydHkgZmxhZyB0byBhIGJhc2UgY2xhc3MuXG4gKiBcbiAqIEEgZGlydHkgZmxhZyBpbiB0aGlzIGNhc2UgaXMgdXNlZCB0byBkZXRlcm1pbmUgaWYgXG4gKiB0aGUgZGVjb3JhdGVkIGNsYXNzIG5lZWRzIHRvIGJlIHJlZHJhd24gaW4gdGhlXG4gKiByZW5kZXIgY3ljbGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhEaXJ0eUZsYWc8VCBleHRlbmRzIFR5cGVzLkNvbnN0cnVjdG9yPihCYXNlOiBUKSB7XG4gICAgcmV0dXJuIGNsYXNzIERpcnR5RmxhZyBleHRlbmRzIEJhc2Uge1xuICAgICAgICBwcm90ZWN0ZWQgX2lzRGlydHk6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBwcm90ZWN0ZWQgY2xlYW4oKSA6IHZvaWQge1xuICAgICAgICAgICAgdGhpcy5faXNEaXJ0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHByb3RlY3RlZCBkaXJ0eSgpIDogdm9pZCB7XG4gICAgICAgICAgICB0aGlzLl9pc0RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwcm90ZWN0ZWQgc2V0RGlydHlGbGFnKGlzRGlydHk6IGJvb2xlYW4pIHtcbiAgICAgICAgICAgIHRoaXMuX2lzRGlydHkgPSBpc0RpcnR5O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGdldCBpc0RpcnR5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGlydHk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9EaXJ0eUZsYWcudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcbmltcG9ydCB7IEtleWJvYXJkLCBLZXkgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9pbnB1dCc7XG5pbXBvcnQgeyBWaWV3cG9ydCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L3NjcmVlbic7XG5pbXBvcnQgeyBNYXRocyB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcblxuZXhwb3J0IGNsYXNzIFBsYW5lTW92ZW1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByaXZhdGUgX3ZlbG9jaXR5OiBWZWN0b3IgPSBWZWN0b3Iub3JpZ2luO1xuXG4gICAgcHVibGljIG9uSW5zdGFudGlhdGUoKSA6IHZvaWQge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgb25VcGRhdGUodGltZXN0ZXA6IG51bWJlcikgOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gdGhpcy5nYW1lT2JqZWN0LmdldFRyYW5zZm9ybSgpO1xuICAgICAgICBsZXQgcG9zID0gdHJhbnNmb3JtLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgY29uc3Qga2V5Ym9hcmQgPSBLZXlib2FyZC5pbnN0YW5jZTtcblxuICAgICAgICBpZihrZXlib2FyZC5nZXRLZXlQcmVzcyhLZXkuRCkpIHtcbiAgICAgICAgICAgIHBvcyA9IHBvcy5hZGQobmV3IFZlY3Rvcig0LCAwKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoa2V5Ym9hcmQuZ2V0S2V5UHJlc3MoS2V5LkEpKSB7XG4gICAgICAgICAgICBwb3MgPSBwb3MuYWRkKG5ldyBWZWN0b3IoLTQsIDApKTtcbiAgICAgICAgfVxuICAgICAgICBpZihrZXlib2FyZC5nZXRLZXlQcmVzcyhLZXkuVykpIHtcbiAgICAgICAgICAgIHBvcyA9IHBvcy5hZGQobmV3IFZlY3RvcigwLCA0KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoa2V5Ym9hcmQuZ2V0S2V5UHJlc3MoS2V5LlMpKSB7XG4gICAgICAgICAgICBwb3MgPSBwb3MuYWRkKG5ldyBWZWN0b3IoMCwgLTQpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdHJhbnNmb3JtLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dhbWVzL2ZsYXBweS9jb21wb25lbnRzL1BsYW5lTW92ZW1lbnQudHMiLCJleHBvcnQgeyBLZXlib2FyZCwgS2V5IH0gZnJvbSAnLi9LZXlib2FyZCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvaW5wdXQvaW5kZXgudHMiLCIvKipcbiAqIFJlcHJlc2VudHMgYSBrZXlib2FyZCBrZXlcbiAqL1xuZXhwb3J0IGVudW0gS2V5IHtcbiAgICBBID0gNjUsXG4gICAgVyA9IDg3LFxuICAgIFMgPSA4MyxcbiAgICBEID0gNjgsXG4gICAgU1BBQ0VCQVIgPSAzMixcbiAgICBBUlJPV19MRUZUID0gMzcsXG4gICAgQVJST1dfVVAgPSAzOCxcbiAgICBBUlJPV19SSUdIVCA9IDM5LFxuICAgIEFSUk9XX0RPV04gPSA0MCxcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGtleSBwcmVzcywga2V5IGRvd24sIGV0YyBldmVudCBkYXRhXG4gKi9cbmludGVyZmFjZSBLZXlib2FyZEV2ZW50IHtcbiAgICBrZXlDb2RlOiBudW1iZXI7XG59XG5cbi8qKlxuICogSGFuZGxlcyBpbnRlcmFjdGlvbiB3aXRoIHRoZSBrZXlib2FyZCBhbmQgcmV0cmlldmluZ1xuICogcHJlc3MgdmFsdWVzXG4gKi9cbmV4cG9ydCBjbGFzcyBLZXlib2FyZCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfa2V5RG93blZhbHVlczogTWFwPEtleSwgbnVtYmVyPiA9IG5ldyBNYXAoKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9rZXlQcmVzc0NvbXBsZXRlOiBNYXA8S2V5LCBib29sZWFuPiA9IG5ldyBNYXAoKTtcblxuICAgIC8qKlxuICAgICAqIFNpbmdsZXRvbiBzaW5jZSB3ZSBvbmx5IHdhbnQgb25lIGxvY2FsIEtleWJvYXJkIHRvIGV4aXN0XG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBLZXlib2FyZDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyB0aGlzKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duLmJpbmQodGhpcykpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXlVcC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGtleSBkb3duIGV2ZW50c1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgXG4gICAgICovXG4gICAgcHJpdmF0ZSBfb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuICAgICAgICB0aGlzLl9rZXlEb3duVmFsdWVzLnNldChrZXlDb2RlLCAxKTtcblxuICAgICAgICBpZih0aGlzLl9rZXlQcmVzc0NvbXBsZXRlLmdldChrZXlDb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5fa2V5RG93blZhbHVlcy5zZXQoa2V5Q29kZSwgMSk7XG4gICAgICAgICAgICB0aGlzLl9rZXlQcmVzc0NvbXBsZXRlLnNldChrZXlDb2RlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGtleSB1cCBldmVudHNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IFxuICAgICAqL1xuICAgIHByaXZhdGUgX29uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIDogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMuX2tleURvd25WYWx1ZXMuc2V0KGtleUNvZGUsIDApO1xuICAgICAgICB0aGlzLl9rZXlQcmVzc0NvbXBsZXRlLnNldChrZXlDb2RlLCB0cnVlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQga2V5cHJlc3MgdmFsdWUgb2YgdGhlIGdpdmVuIGtleVxuICAgICAqICgwID0gbm90IHByZXNzZWQgfCAxID0ga2V5IGRvd24pXG4gICAgICogXG4gICAgICogQHBhcmFtIHsqfSBrZXkgXG4gICAgICovXG4gICAgcHVibGljIGdldEtleURvd24oa2V5Q29kZTogS2V5KSA6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fa2V5RG93blZhbHVlcy5nZXQoa2V5Q29kZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZSB8fCAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgZ2V0S2V5RG93bigpIGV4Y2VwdCB0b2dnbGVzIHRoZSB2YWx1ZSB0byAwXG4gICAgICogYWZ0ZXIgbGlzdGVuaW5nXG4gICAgICovXG4gICAgcHVibGljIGdldEtleVByZXNzKGtleUNvZGU6IEtleSkgOiBudW1iZXIge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2tleURvd25WYWx1ZXMuZ2V0KGtleUNvZGUpO1xuICAgICAgICBpZih2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2tleVByZXNzQ29tcGxldGUuc2V0KGtleUNvZGUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L2lucHV0L0tleWJvYXJkLnRzIiwiaW1wb3J0IHsgR2FtZU9iamVjdCwgQ29tcG9uZW50LCBCb3VuZGluZ0JveCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9pbnB1dCc7XG5pbXBvcnQgeyBWaWV3cG9ydCwgQ2FtZXJhIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvc2NyZWVuJztcbmltcG9ydCBCb3hDb2xsaWRlciBmcm9tICdlbmdpbmUvbGlicmFyeS9jb2xsaXNpb25zL2NvbGxpZGVycy9Cb3hDb2xsaWRlcic7XG5pbXBvcnQgU2NlbmVHcmFwaCBmcm9tICdlbmdpbmUvbGlicmFyeS9TY2VuZUdyYXBoJztcblxuZXhwb3J0IGNsYXNzIFNjZW5lTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfcm9ja0xpc3Q6IEFycmF5PEdhbWVPYmplY3Q+ID0gW107XG4gICAgcHJpdmF0ZSBfc2Nyb2xsU3BlZWQ6IFZlY3RvciA9IFZlY3Rvci5vcmlnaW47XG5cbiAgICBwdWJsaWMgb25JbnN0YW50aWF0ZSgpIDogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gU2NlbmVHcmFwaC5pbnN0YW5jZTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBzY2VuZS5pbnN0YW50aWF0ZSgnYmFja2dyb3VuZFNreScraSwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDgwMCAqIGksIDApLFxuICAgICAgICAgICAgICAgIG9yZGVyOiAtOTk5LFxuICAgICAgICAgICAgICAgIHNwcml0ZToge1xuICAgICAgICAgICAgICAgICAgICBhc3NldHM6IFsnYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZyddLFxuICAgICAgICAgICAgICAgICAgICBib3VuZHM6IG5ldyBCb3VuZGluZ0JveChcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoODAwICogaSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDgwMCwgNDgwKSxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGltaW5nOiAxNTAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm9jayA9IHNjZW5lLmluc3RhbnRpYXRlKCdyb2NrJywge1xuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoMzUwLCAtVmlld3BvcnQuaW5zdGFuY2UuaGVpZ2h0ICsgMjM5KSxcbiAgICAgICAgICAgIHNwcml0ZToge1xuICAgICAgICAgICAgICAgIGFzc2V0czogWydhc3NldHMvaW1hZ2VzL3JvY2tVcC5wbmcnXSxcbiAgICAgICAgICAgICAgICBib3VuZHM6IG5ldyBCb3VuZGluZ0JveChcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3RvcigzNTAsIC1WaWV3cG9ydC5pbnN0YW5jZS5oZWlnaHQgKyAyMzkpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDEwOCwgMjM5KSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbGxpZGVyOiBuZXcgQm94Q29sbGlkZXIoXG4gICAgICAgICAgICAgICAgbmV3IEJvdW5kaW5nQm94KFxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDM1MCwgLVZpZXdwb3J0Lmluc3RhbmNlLmhlaWdodCArIDIzOSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoMTA4LCAyMzkpLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICApLFxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBzY2VuZS5pbnN0YW50aWF0ZSgnZ3JvdW5kQm90dG9tJytpLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoODA4ICogaSwgLVZpZXdwb3J0Lmluc3RhbmNlLmhlaWdodCArIDcxKSxcbiAgICAgICAgICAgICAgICBzcHJpdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzOiBbJ2Fzc2V0cy9pbWFnZXMvZ3JvdW5kRGlydC5wbmcnXSxcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzOiBuZXcgQm91bmRpbmdCb3goXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDgwOCAqIGksIC1WaWV3cG9ydC5pbnN0YW5jZS5oZWlnaHQgKyA3MSksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDgwOCwgNzEpLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Njcm9sbFNwZWVkID0gbmV3IFZlY3RvcigzLCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25VcGRhdGUodGltZXN0ZXA6IG51bWJlcikgOiB2b2lkIHtcbiAgICAgICAgLy8gbGV0IGNhbWVyYVBvcyA9IENhbWVyYS50cmFuc2Zvcm0uZ2V0UG9zaXRpb24oKS5hZGQodGhpcy5fc2Nyb2xsU3BlZWQpO1xuICAgICAgICAvLyBjYW1lcmFQb3MgPSBjYW1lcmFQb3MubXVsdGlwbHkodGltZXN0ZXApO1xuXG4gICAgICAgIC8vIENhbWVyYS50cmFuc2Zvcm0uc2V0UG9zaXRpb24oY2FtZXJhUG9zKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2FtZXMvZmxhcHB5L2NvbXBvbmVudHMvU2NlbmVNYW5hZ2VyLnRzIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3hDb2xsaWRlciB9IGZyb20gJy4vQm94Q29sbGlkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaXJjbGVDb2xsaWRlciB9IGZyb20gJy4vQ2lyY2xlQ29sbGlkZXInO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMvY29sbGlkZXJzL2luZGV4LnRzIiwiaW1wb3J0IHsgQ29sbGlkZXIsIENvbGxpZGVyU2hhcGUsIEJveCwgQ2lyY2xlIH0gZnJvbSBcImVuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnNcIjtcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJlbmdpbmUvbGlicmFyeS9tYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGVDb2xsaWRlciBleHRlbmRzIENvbGxpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfb3JpZ2luOiBWZWN0b3IsIFxuICAgICAgICBwcml2YXRlIF9vZmZzZXQ6IFZlY3RvcixcbiAgICAgICAgcHJpdmF0ZSBfcmFkaXVzOiBudW1iZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgcG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcmlnaW4uYWRkKHRoaXMuX29mZnNldCk7XG4gICAgfVxuICAgIGdldCByYWRpdXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yYWRpdXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFR5cGUoKSA6IENvbGxpZGVyU2hhcGUge1xuICAgICAgICByZXR1cm4gQ29sbGlkZXJTaGFwZS5DSVJDTEU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENpcmNsZSgpIDogQ2lyY2xlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29sbGlkZXNXaXRoKGNvbGxpZGVyOiBDb2xsaWRlcikgOiBib29sZWFuIHtcbiAgICAgICAgc3dpdGNoKGNvbGxpZGVyLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgY2FzZSBDb2xsaWRlclNoYXBlLkJPWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaXJjbGVUb1JlY3RDaGVjayhjb2xsaWRlci5nZXRSZWN0YW5nbGUoKSk7XG5cbiAgICAgICAgICAgIGNhc2UgQ29sbGlkZXJTaGFwZS5DSVJDTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlVG9DaXJjbGVDaGVjayhjb2xsaWRlci5nZXRDaXJjbGUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBvc2l0aW9uKHBvc2l0aW9uOiBWZWN0b3IpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX29yaWdpbiA9IHBvc2l0aW9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2lyY2xlVG9SZWN0Q2hlY2socmVjdDogQm94KSA6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaXJjbGVUb0NpcmNsZUNoZWNrKGNpcmNsZTogQ2lyY2xlKSA6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMvY29sbGlkZXJzL0NpcmNsZUNvbGxpZGVyLnRzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuaW1wb3J0IHsgR2FtZU9iamVjdCwgbWFrZUdhbWVPYmplY3QsIEdhbWVPYmplY3RDb25maWcgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucyc7XG5cbi8qKlxuICogSGFuZGxlcyBpbnN0YW50aWF0aW9uLCBkZXN0cnVjdGlvbiBhbmQgbWFuYWdlbWVudCBvZiBhbGwgR2FtZU9iamVjdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVHcmFwaCB7XG5cbiAgICAvLyBzaW5nbGV0b24gYmVjYXVzZSB3ZSBzaG91bGQgbmV2ZXIgaGF2ZSBtb3JlIHRoYW4gb25lIFNjZW5lR3JhcGhcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFNjZW5lR3JhcGg7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSA6IFNjZW5lR3JhcGgge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQW4gb3JkZXJlZCBhcnJheSBvZiBhbGwgR2FtZU9iamVjdHMgKHJlZ2FyZGxlc3Mgb2Ygc3RhdGUpXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaGllcmFyY2h5OiBBcnJheTxHYW1lT2JqZWN0PiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQWxsIGNvbGxpZGVycyAoYXR0YWNoZWQgdG8gR2FtZU9iamVjdHMpIGluIHRoZSBzY2VuZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2NvbGxpZGVyczogQXJyYXk8Q29sbGlkZXI+ID0gW107XG5cbiAgICAvKipcbiAgICAgKiBBIHVuaXF1ZSBzdHJpbmcgaWQgdG8gR2FtZU9iamVjdCBtYXBwaW5nXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZ2FtZU9iamVjdHM6IE1hcDxzdHJpbmcsIEdhbWVPYmplY3Q+ID0gbmV3IE1hcCgpO1xuXG4gICAgZ2V0IGhpZXJhcmNoeSgpIDogQXJyYXk8R2FtZU9iamVjdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faGllcmFyY2h5O1xuICAgIH1cblxuICAgIGdldCBjb2xsaWRlcnMoKSA6IEFycmF5PENvbGxpZGVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xsaWRlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgR2FtZU9iamVjdCB0aGF0IGJlbG9uZ3MgdG8gdGhlIGdpdmVuIGlkXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqL1xuICAgIGdldChpZDogc3RyaW5nKSA6IEdhbWVPYmplY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdHMuZ2V0KGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29sbGlkZXIgZm9yIGNvbGxpc2lvbiB0cmFja2luZ1xuICAgICAqIFxuICAgICAqIEBwYXJhbSBjb2xsaWRlciBcbiAgICAgKi9cbiAgICBhZGRDb2xsaWRlcihjb2xsaWRlcjogQ29sbGlkZXIpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbGxpZGVycy5wdXNoKGNvbGxpZGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgR2FtZU9iamVjdFxuICAgICogXG4gICAgKiBAdHlwZSB7c3RyaW5nfSBpZCAgICAgICAgIE5hbWUvaWRlbnRpZmllciBvZiB0aGUgb2JqZWN0XG4gICAgKiBAdHlwZSB7b2JqZWN0fSBjb25maWcgICAgIEdhbWVPYmplY3Qgc2V0dGluZ3NcbiAgICAqL1xuICAgIGluc3RhbnRpYXRlKGlkOiBzdHJpbmcsIGNvbmZpZzogR2FtZU9iamVjdENvbmZpZykgOiBHYW1lT2JqZWN0IHtcbiAgICAgICAgaWYoaWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnN0YW50aWF0aW9uIGZhaWxlZDogbm8gdW5pcXVlIGlkIGdpdmVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5fZ2FtZU9iamVjdHMuZ2V0KGlkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnN0YW50aWF0aW9uIGZhaWxlZDogYSBHYW1lT2JqZWN0IGFscmVhZHkgZXhpc3RzIHdpdGggdGhlIG5hbWUgJHtpZH1gKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2FtZU9iamVjdCA9IG1ha2VHYW1lT2JqZWN0KGlkLCBjb25maWcpO1xuXG4gICAgICAgIHRoaXMuX2hpZXJhcmNoeS5wdXNoKGdhbWVPYmplY3QpO1xuICAgICAgICB0aGlzLl9nYW1lT2JqZWN0cy5zZXQoaWQsIGdhbWVPYmplY3QpO1xuXG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRha2VzIGluIGFuIGFycmF5IG9mIEdhbWVPYmplY3RzIGFuZCByZW1vdmVzIHRoZW0gYWxsIFxuICAgICAqIGZyb20gdGhlIGhpZXJhcmNoeSBpbW1lZGlhdGVseVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGdhbWVPYmplY3RzIFxuICAgICAqL1xuICAgIHJlbW92ZUJhdGNoKGdhbWVPYmplY3RzOiBBcnJheTxHYW1lT2JqZWN0PikgOiB2b2lkIHtcbiAgICAgICAgZ2FtZU9iamVjdHMuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZU9iamVjdHMuZGVsZXRlKG9iai5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9oaWVyYXJjaHkgPSB0aGlzLl9oaWVyYXJjaHkuZmlsdGVyKG9iaiA9PiBnYW1lT2JqZWN0cy5pbmRleE9mKG9iaikgPCAwKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvU2NlbmVHcmFwaC50cyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcbmltcG9ydCB7IEJvdW5kaW5nQm94LCBUcmFuc2Zvcm0sIFNwcml0ZSwgU3ByaXRlQ29uZmlnLCBDb21wb25lbnQsIENvbGxpZGVyYWJsZSB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvc2NyZWVuJztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMvZ2FtZW9iamVjdC9HYW1lT2JqZWN0UmVuZGVyZXInO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gb2JqZWN0IGluIHRoZSBzY2VuZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT2JqZWN0IGltcGxlbWVudHMgQ29sbGlkZXJhYmxlIHtcblxuICAgIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfaXNWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIF9pc0Rlc3Ryb3lpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9pc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIF90cmFuc2Zvcm06IFRyYW5zZm9ybTtcbiAgICBwcml2YXRlIF9zcHJpdGU6IFNwcml0ZTtcbiAgICBwcml2YXRlIF9jb21wb25lbnRzOiBBcnJheTxDb21wb25lbnQ+ID0gW107XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IEdhbWVPYmplY3RcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgICAgICAgICAgIFVuaXF1ZSBpZGVudGlmaWVyXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IHBvc2l0aW9uICAgICBTdGFydGluZyBwb3NpdGlvbiBvZiB0aGUgb2JqZWN0XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgdHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIH1cblxuICAgIGdldCBpZCgpIDogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1RyYW5zZm9ybX1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0VHJhbnNmb3JtKCkgOiBUcmFuc2Zvcm0ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1Nwcml0ZX1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U3ByaXRlKCkgOiBTcHJpdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB1bmlxdWUgaWRlbnRpZmllciBzdHJpbmcgb2YgdGhpcyBHYW1lT2JqZWN0XG4gICAgICogXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXROYW1lKCkgOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgRE9NIGVsZW1lbnQgdGhhdCByZXByZXNlbnRzIHRoaXMgR2FtZU9iamVjdFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge0hUTUxEaXZFbGVtZW50fVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRFbGVtZW50KCkgOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgb2JqZWN0IGlzIHZpc2libGUgKGJ1dCBzdGlsbCBleGVjdXRpbmdcbiAgICAgKiBpdHMgdXBkYXRlIGxvb3ApXG4gICAgICogXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNWaXNpYmxlKCkgOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmlzaWJsZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBvYmplY3Qgd2lsbCBiZSBkZXN0cm95ZWQgbmV4dCBmcmFtZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHVibGljIGlzRGVzdHJveWluZygpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Rlc3Ryb3lpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBvYmplY3QgaXMgZGlzYWJsZWQgKGllLiBub3QgZXhlY3V0aW5nXG4gICAgICogaXRzIHVwZGF0ZSBsb29wIGFuZCByZW5kZXJpbmcpXG4gICAgICogXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNEaXNhYmxlZCgpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIEhUTUwgZWxlbWVudCB0aGF0IHJlcHJlc2VudHMgdGhpcyBHYW1lT2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0RWxlbWVudChlbGVtZW50OiBIVE1MRGl2RWxlbWVudCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNvbXBvbmVudCB0aGF0IGhvb2tzIGludG8gdGhpcyBHYW1lT2JqZWN0J3MgbGlmZWN5Y2xlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudCBcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkQ29tcG9uZW50KGNvbXBvbmVudDogQ29tcG9uZW50KSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBTcHJpdGUgdGhhdCByZXByZXNlbnRzIHRoaXMgR2FtZU9iamVjdC4gSWYgbm8gU3ByaXRlIGlzXG4gICAgICogc2V0LCBub3RoaW5nIHdpbGwgaGFwcGVuIGluIHRoZSByZW5kZXIgY3ljbGUgZm9yIHRoaXMgb2JqZWN0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7U3ByaXRlfSBjb25maWcgXG4gICAgICovXG4gICAgcHVibGljIHNldFNwcml0ZShzcHJpdGU6IFNwcml0ZSkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc3ByaXRlID0gc3ByaXRlO1xuICAgIH1cbiAgICAgXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGlzIEdhbWVPYmplY3QgYXMgdGhlIGNoaWxkIG9mIHRoZSBnaXZlbiBHYW1lT2JqZWN0LiBJbiBvdGhlclxuICAgICAqIHdvcmRzLCBpdCB3aWxsIG1vdmUsIHNjYWxlIGFuZCByb3RhdGUgcmVsYXRpdmVseSB3aGVuZXZlciB0aGUgcGFyZW50IGRvZXMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtHYW1lT2JqZWN0fSBnYW1lT2JqZWN0IFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRQYXJlbnQoZ2FtZU9iamVjdDogdGhpcykgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtLnNldFBhcmVudChnYW1lT2JqZWN0LmdldFRyYW5zZm9ybSgpKTtcbiAgICAgICAgZ2FtZU9iamVjdC5nZXRUcmFuc2Zvcm0oKS5hZGRDaGlsZCh0aGlzLl90cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIG9iamVjdC4gU2V0dGluZyB0byBmYWxzZVxuICAgICAqIGVmZmVjdGl2ZWx5IHNldHMgJ2Rpc3BsYXk6IG5vbmUnIGNzc1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWaXNpYmxlIFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRWaXNpYmlsaXR5KGlzVmlzaWJsZTogYm9vbGVhbikgOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5faXNWaXNpYmxlICE9IGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNWaXNpYmxlID8gJ25vbmUnIDogJ2hpZGRlbic7XG4gICAgICAgICAgICB0aGlzLl9pc1Zpc2libGUgPSBpc1Zpc2libGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHdoZXRoZXIgdGhlIG9iamVjdCBpcyBkaXNhYmxlZC5cbiAgICAgKiBcbiAgICAgKiBJbiBhIGRpc2FibGVkIHN0YXRlLCB0aGUgb2JqZWN0IG5laXRoZXIgcmVuZGVycyBub3JcbiAgICAgKiBleGVjdXRlcyBpdHMgdXBkYXRlIGxvb3AuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc0Rpc2FibGVkIFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXREaXNhYmxlZChpc0Rpc2FibGVkOiBib29sZWFuKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNEaXNhYmxlZCA/ICdub25lJyA6ICdoaWRkZW4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcmtzIHRoZSBvYmplY3QgZm9yIGRlc3RydWN0aW9uIGF0IHRoZSBlbmQgb2YgdGhlIGZyYW1lLlxuICAgICAqIEZ1cnRoZXJtb3JlLCB0aGUgb2JqZWN0IHdpbGwgbm90IGV4ZWN1dGUgaXRzIHVwZGF0ZSBsb29wIGlmIFxuICAgICAqIGl0IGhhc24ndCBhbHJlYWR5IGV4ZWN1dGVkIGl0IHlldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzdHJveSgpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lzRGVzdHJveWluZyA9IHRydWU7XG4gICAgICAgIHRoaXMub25EZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgb25JbnN0YW50aWF0ZSgpIG9uIGFsbCBjb21wb25lbnRzIG9uIHRoaXMgR2FtZU9iamVjdFxuICAgICAqL1xuICAgIHB1YmxpYyBvbkluc3RhbnRpYXRlKCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKGMgPT4gYy5vbkluc3RhbnRpYXRlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIG9uRGVzdHJveSgpIG9uIGFsbCBjb21wb25lbnRzIG9uIHRoaXMgR2FtZU9iamVjdFxuICAgICAqL1xuICAgIHB1YmxpYyBvbkRlc3Ryb3koKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goYyA9PiBjLm9uRGVzdHJveSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBvblVwZGF0ZSgpIG9uIGFsbCBjb21wb25lbnRzIG9uIHRoaXMgR2FtZU9iamVjdFxuICAgICAqL1xuICAgIHB1YmxpYyBvblVwZGF0ZSh0aW1lc3RlcDogbnVtYmVyKSA6IHZvaWQge1xuICAgICAgICBpZih0aGlzLl9pc0Rpc2FibGVkIHx8IHRoaXMuX2lzRGVzdHJveWluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaChjID0+IGMub25VcGRhdGUodGltZXN0ZXApKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Db2xsaXNpb24oY29sbGlkaW5nT2JqczogQ29sbGlkZXJbXSkgOiB2b2lkIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCR7dGhpcy5faWR9IGlzIGNvbGxpZGluZyB3aXRoYCwgY29sbGlkaW5nT2Jqcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgb2JqZWN0IGluIHdvcmxkIHNwYWNlIGVhY2ggZ2FtZSBsb29wIGZyYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlbmRlcigpIDogdm9pZCB7XG4gICAgICAgIGlmKCF0aGlzLl9pc1Zpc2libGUgfHwgdGhpcy5faXNEaXNhYmxlZCB8fCB0aGlzLl9pc0Rlc3Ryb3lpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpZEdhbWVPYmplY3RSZW5kZXIgPSByZW5kZXIodGhpcy5fZWxlbWVudCwgdGhpcy5fdHJhbnNmb3JtLCBDYW1lcmEuaW5zdGFuY2UpO1xuXG4gICAgICAgIC8vIG9ubHkgcmVkcmF3IHRoZSBzcHJpdGUgaWYgdGhlIFNwcml0ZSBvciBUcmFuc2Zvcm0gaGFzIG1vdmVkXG4gICAgICAgIGlmKHRoaXMuX3Nwcml0ZSAmJiAoZGlkR2FtZU9iamVjdFJlbmRlciB8fCB0aGlzLl9zcHJpdGUuaXNEaXJ0eSgpKSkge1xuICAgICAgICAgICAgLy8gc2NyZWVuU3BhY2VQb3MgPSBzY3JlZW5TcGFjZVBvcyB8fCB0aGlzLl9nZXRTY3JlZW5Qb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAvLyB0aGlzLl9zcHJpdGUucmVuZGVyKHNjcmVlblNwYWNlUG9zKTtcbiAgICAgICAgICAgIC8vIHRoaXMuX3Nwcml0ZS5jbGVhbigpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9nYW1lb2JqZWN0L0dhbWVPYmplY3QudHMiLCJpbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwiZW5naW5lL2xpYnJhcnkvb2JqZWN0c1wiO1xuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcImVuZ2luZS9saWJyYXJ5L3NjcmVlblwiO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcImVuZ2luZS9saWJyYXJ5L21hdGhzXCI7XG5cbi8qKlxuICogUmVuZGVycyB0aGUgZ2l2ZW4gZWxlbWVudCBpbnRvIHNjcmVlbiBzcGFjZVxuICogXG4gKiBAcGFyYW0gZWxlbWVudCBcbiAqIEBwYXJhbSB0cmFuc2Zvcm0gXG4gKiBAcGFyYW0gY2FtZXJhIFxuICogXG4gKiBAcmV0dXJuIHtib29sZWFufSAgICBXaGV0aGVyIGEgcmVuZGVyIHdhcyBwZXJmb3JtZWQgdGhpcyBmcmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKFxuICAgIGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50LCBcbiAgICB0cmFuc2Zvcm06IFRyYW5zZm9ybSwgXG4gICAgY2FtZXJhOiBDYW1lcmEsXG4pIDogYm9vbGVhbiB7XG5cbiAgICAvLyBvbmx5IHJlZHJhdyB3aGVuIHRoZSBUcmFuc2Zvcm0gaGFzIGFjdHVhbGx5IG1vdmVkXG4gICAgaWYoIXRyYW5zZm9ybS5pc0RpcnR5KCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHRoZSBUcmFuc2Zvcm0gc3RvcmVzIG91ciB3b3JsZC1zcGFjZSBjb29yZGluYXRlcyxcbiAgICAvLyBidXQgd2UgbmVlZCB0byByZW5kZXIgdGhlIG9iamVjdCBpbiBzY3JlZW4tc3BhY2VcbiAgICBjb25zdCB3b3JsZFBvcyA9IHRyYW5zZm9ybS5nZXRQb3NpdGlvbigpO1xuICAgIGNvbnN0IGNhbWVyYVBvcyA9IGNhbWVyYS50cmFuc2Zvcm0uZ2V0UG9zaXRpb24oKTtcblxuICAgIGNvbnN0IHNjcmVlblNwYWNlUG9zID0gbmV3IFZlY3RvcihcbiAgICAgICAgd29ybGRQb3MueCAtIGNhbWVyYVBvcy54LFxuICAgICAgICB3b3JsZFBvcy55IC0gY2FtZXJhUG9zLnlcbiAgICApO1xuXG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gc2NyZWVuU3BhY2VQb3MueCArICdweCc7XG4gICAgZWxlbWVudC5zdHlsZS50b3AgID0gc2NyZWVuU3BhY2VQb3MueSArICdweCc7XG5cbiAgICB0cmFuc2Zvcm0uY2xlYW4oKTtcblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvZ2FtZW9iamVjdC9HYW1lT2JqZWN0UmVuZGVyZXIudHMiLCJpbXBvcnQgeyBUcmFuc2Zvcm0sIFNwcml0ZSwgU3ByaXRlQ29uZmlnLCBHYW1lT2JqZWN0LCBDb21wb25lbnQgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5pbXBvcnQgd2l0aENvbGxpZGVyIGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMvQ29sbGlkZXJhYmxlJztcbmltcG9ydCBTY2VuZUdyYXBoIGZyb20gJ2VuZ2luZS9saWJyYXJ5L1NjZW5lR3JhcGgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVPYmplY3RDb25maWcge1xuICAgIHBvc2l0aW9uPzogVmVjdG9yO1xuICAgIGNvbXBvbmVudHM/OiBBcnJheTxuZXcob2JqOiBHYW1lT2JqZWN0KSA9PiBDb21wb25lbnQ+O1xuICAgIHNwcml0ZT86IFNwcml0ZUNvbmZpZztcbiAgICBvcmRlcj86IG51bWJlcjtcbiAgICBjb2xsaWRlcj86IENvbGxpZGVyO1xufVxuXG4vKipcbiAqIEluc2VydHMgYSBuZXcgR2FtZU9iamVjdCA8ZGl2PiBpbnRvIHRoZSBwYWdlIGJvZHlcbiAqIFxuICogQHBhcmFtIGlkICAgICAgICBVbmlxdWUgaWRlbnRpZmllclxuICogQHBhcmFtIHpJbmRleCAgICBCYXNpY2FsbHkgdGhlIG9iamVjdCdzIHBlcm1hbmVudCBaIGF4aXMgY29vcmRpbmF0ZVxuICovXG5mdW5jdGlvbiBpbmplY3REb20oaWQ6IHN0cmluZywgekluZGV4OiBudW1iZXIgPSAwKSA6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5pZCA9IGlkO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZU9iamVjdCcpO1xuICAgIGVsZW1lbnQuc3R5bGUuekluZGV4ID0gekluZGV4LnRvU3RyaW5nKCk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlR2FtZU9iamVjdChpZDogc3RyaW5nLCBjb25maWc6IEdhbWVPYmplY3RDb25maWcpIDogR2FtZU9iamVjdCB7XG4gICAgbGV0IGdhbWVPYmplY3RUeXBlID0gR2FtZU9iamVjdDtcblxuICAgIC8vIGlmIHRoZSBvYmplY3QgcmVxdWlyZXMgYSBjb2xsaWRlciwgYXBwbHkgdGhlIGdpdmVuIGNvbGxpZGVyIG1peGluIFxuICAgIC8vIHRvIHRoZSBHYW1lT2JqZWN0XG4gICAgaWYoY29uZmlnLmNvbGxpZGVyKSB7XG4gICAgICAgIGdhbWVPYmplY3RUeXBlID0gd2l0aENvbGxpZGVyKEdhbWVPYmplY3QsIGNvbmZpZy5jb2xsaWRlcik7XG4gICAgICAgIFNjZW5lR3JhcGguaW5zdGFuY2UuYWRkQ29sbGlkZXIoY29uZmlnLmNvbGxpZGVyKTtcbiAgICB9XG4gICAgbGV0IG9iaiA9IG5ldyBnYW1lT2JqZWN0VHlwZShpZCwgbmV3IFRyYW5zZm9ybShjb25maWcucG9zaXRpb24pKTtcblxuICAgIFxuICAgIGlmKGNvbmZpZy5zcHJpdGUgJiYgY29uZmlnLnNwcml0ZS5hc3NldHMpIHtcbiAgICAgICAgY29uc3Qgc3ByaXRlSW5zdGFuY2UgPSBuZXcgU3ByaXRlKGNvbmZpZy5zcHJpdGUpO1xuICAgICAgICBzcHJpdGVJbnN0YW5jZS5hcHBlbmREb20oKTtcbiAgICAgICAgb2JqLnNldFNwcml0ZShzcHJpdGVJbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgaWYoY29uZmlnLmNvbXBvbmVudHMpIHtcbiAgICAgICAgY29uZmlnLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnROYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBjb21wb25lbnROYW1lKG9iaik7XG4gICAgICAgICAgICBvYmouYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSBpbmplY3REb20oaWQsIGNvbmZpZy5vcmRlcik7XG4gICAgb2JqLnNldEVsZW1lbnQoZWxlbWVudCk7XG4gICAgb2JqLm9uSW5zdGFudGlhdGUoKTtcblxuICAgIHJldHVybiBvYmo7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9nYW1lb2JqZWN0L0dhbWVPYmplY3RGYWN0b3J5LnRzIiwiZXhwb3J0IHsgU3ByaXRlLCBTcHJpdGVDb25maWcgfSBmcm9tICcuL3Nwcml0ZS9TcHJpdGUnO1xuZXhwb3J0IHsgQm94Q29sbGlkZXIsIENpcmNsZUNvbGxpZGVyIH0gZnJvbSAnLi9jb2xsaXNpb25zL2NvbGxpZGVycyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL21vZHVsZXMvaW5kZXgudHMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5pbXBvcnQgeyBCb3VuZGluZ0JveCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuLy8gaW1wb3J0IHsgd2l0aERpcnR5RmxhZyB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNwcml0ZUNvbmZpZyB7XG4gICAgYXNzZXRzOiBBcnJheTxzdHJpbmc+O1xuICAgIGJvdW5kczogQm91bmRpbmdCb3g7XG4gICAgdGltaW5nPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcblxuICAgIC8qKlxuICAgICAqIFdvcmxkLXNwYWNlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzcHJpdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9ib3VuZGluZ0JveDogQm91bmRpbmdCb3g7XG5cbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBpbWFnZSBwYXRocyB0byBkcmF3XG4gICAgICovXG4gICAgcHJpdmF0ZSBfYXNzZXRzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgRE9NIHRoYXQgdGhpcyBzcHJpdGUgcmVwcmVzZW50c1xuICAgICAqL1xuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogTGFzdCB2ZWN0b3IgcG9zaXRpb24gdGhpcyBzcHJpdGUgd2FzIGRyYXduIGF0XG4gICAgICovXG4gICAgcHJpdmF0ZSBfbGFzdFBvc2l0aW9uOiBWZWN0b3IgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgbWlsbGlzZWNvbmRzIGJldHdlZW4gc3ByaXRlIGZyYW1lIGNoYW5nZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIF90aW1pbmc6IG51bWJlciA9IDE1MDtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgZnJhbWUgb2YgdGhlIGFzc2V0IGFycmF5IHRvIGRyYXdcbiAgICAgKi9cbiAgICBwcml2YXRlIF9mcmFtZUluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICogRHJhdyB0aW1lclxuICAgICAqL1xuICAgIHByaXZhdGUgX2FuaW1hdGlvblRpbWVyOiBudW1iZXI7XG5cblxuXG4gICAgcHJpdmF0ZSBfaXNEaXJ0eTogYm9vbGVhbiA9IHRydWU7XG4gICAgXG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFNwcml0ZUNvbmZpZykge1xuICAgICAgICBpZighY29uZmlnLmJvdW5kcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTcHJpdGUgaW5zdGFudGlhdGlvbiBmYWlsZWQ6IG5vIEJvdW5kaW5nQm94IHByb3ZpZGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9ib3VuZGluZ0JveCA9IGNvbmZpZy5ib3VuZHM7XG4gICAgICAgIHRoaXMuX2Fzc2V0cyA9IGNvbmZpZy5hc3NldHM7XG5cbiAgICAgICAgLy8gaWYgbW9yZSB0aGFuIG9uZSBpbWFnZSBwYXRoIGlzIGdpdmVuLCB0cmVhdCB0aGlzIHNwcml0ZSBhcyBhbiBhbmltYXRlZCBzcHJpdGVcbiAgICAgICAgaWYoY29uZmlnLmFzc2V0cyAmJiBjb25maWcuYXNzZXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uVGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLl91cGRhdGVGcmFtZS5iaW5kKHRoaXMpLCB0aGlzLl90aW1pbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGFzdFBvc2l0aW9uID0gbmV3IFZlY3RvcigpO1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgYm91bmRzKCkgOiBCb3VuZGluZ0JveCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZGluZ0JveDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBET00gdGhhdCBob2xkcyB0aGlzIHNwcml0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBhcHBlbmREb20oKSA6IHZvaWQge1xuICAgICAgICBjb25zdCBib3VuZHMgPSB0aGlzLl9ib3VuZGluZ0JveDtcblxuICAgICAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nwcml0ZScpO1xuICAgICAgICBlbGVtZW50LmlkID0gYHNwcml0ZV8ke25ldyBEYXRlKCkuZ2V0VGltZSgpfWA7XG5cbiAgICAgICAgaWYodGhpcy5fYXNzZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuX2Fzc2V0c1swXX0pYDtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGJvdW5kcy5wb3NpdGlvbi54LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9ICgtYm91bmRzLnBvc2l0aW9uLnkpLnRvU3RyaW5nKCk7ICAgLy8gZmxpcCBZIGJlY2F1c2UgdGhlIGJyb3dzZXIgWSBpcyByZXZlcnNlZFxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IChib3VuZHMuZGltZW5zaW9ucy54KS50b1N0cmluZygpO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAoYm91bmRzLmRpbWVuc2lvbnMueSkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWxseSBzZXRzIHRoZSBkcmF3IHBvc2l0aW9uIG9mIHRoZSBTcHJpdGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gb3JpZ2luIFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRQb3NpdGlvbihvcmlnaW46IFZlY3RvcikgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYm91bmRpbmdCb3guc2V0T3JpZ2luKG9yaWdpbik7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIERPTSBwb3NpdGlvbiBvZiB0aGUgU3ByaXRlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IG9yaWdpbiBcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVuZGVyKG9yaWdpbjogVmVjdG9yKSA6IHZvaWQge1xuICAgICAgICAvLyBUT0RPOiBtb3ZlIHJlbmRlciBsb2dpYyBpbnRvIGEgU3ByaXRlUmVuZGVyZXIgY2xhc3NcbiAgICAgICAgY29uc3QgYm91bmRzID0gdGhpcy5fYm91bmRpbmdCb3g7XG4gICAgICAgIGJvdW5kcy5zZXRPcmlnaW4ob3JpZ2luKTtcbiAgICAgICAgXG4gICAgICAgIGlmKFxuICAgICAgICAgICAgYm91bmRzLnBvc2l0aW9uLnggPT09IHRoaXMuX2xhc3RQb3NpdGlvbi54ICYmIFxuICAgICAgICAgICAgYm91bmRzLnBvc2l0aW9uLnkgPT09IHRoaXMuX2xhc3RQb3NpdGlvbi55XG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5sZWZ0ID0gYm91bmRzLnBvc2l0aW9uLngudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS50b3AgPSAoLWJvdW5kcy5wb3NpdGlvbi55KS50b1N0cmluZygpOyAgIC8vIGZsaXAgWSBiZWNhdXNlIHRoZSBicm93c2VyIFkgaXMgcmV2ZXJzZWRcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS53aWR0aCA9IChib3VuZHMuZGltZW5zaW9ucy54ICogMSkudG9TdHJpbmcoKTsgICAvLyBUT0RPOiByZXBsYWNlIDEgd2l0aCBzY2FsaW5nXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gKGJvdW5kcy5kaW1lbnNpb25zLnkgKiAxKS50b1N0cmluZygpOyAgLy8gVE9ETzogcmVwbGFjZSAxIHdpdGggc2NhbGluZ1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fbGFzdFBvc2l0aW9uID0gYm91bmRzLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcmNlcyBhIGRyYXcgb2YgdGhlIG5leHQgc3ByaXRlIGluIGFuIGFuaW1hdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZUZyYW1lKCkgOiB2b2lkIHtcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlIHVzaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpXG4gICAgICAgIHRoaXMuX2ZyYW1lSW5kZXggPSArK3RoaXMuX2ZyYW1lSW5kZXggJSB0aGlzLl9hc3NldHMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLl9hc3NldHNbdGhpcy5fZnJhbWVJbmRleF19KWA7XG4gICAgfVxuXG5cbiAgICAvLyBUT0RPOiByZWZhY3RvciB0aGlzIGludG8gbWl4aW5cbiAgICBwdWJsaWMgY2xlYW4oKSB7XG4gICAgICAgIHRoaXMuX2lzRGlydHkgPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIGRpcnR5KCkge1xuICAgICAgICB0aGlzLl9pc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIGlzRGlydHkoKSA6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEaXJ0eTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9tb2R1bGVzL3Nwcml0ZS9TcHJpdGUudHMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJveENvbGxpZGVyIH0gZnJvbSAnLi9Cb3hDb2xsaWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENpcmNsZUNvbGxpZGVyIH0gZnJvbSAnLi9DaXJjbGVDb2xsaWRlcic7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9tb2R1bGVzL2NvbGxpc2lvbnMvY29sbGlkZXJzL2luZGV4LnRzIiwiaW1wb3J0IHsgQ29sbGlkZXIsIENvbGxpZGVyU2hhcGUsIEJveCwgQ2lyY2xlIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucyc7XG5pbXBvcnQgeyBCb3VuZGluZ0JveCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3hDb2xsaWRlciBleHRlbmRzIENvbGxpZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ib3VuZGluZ0JveDogQm91bmRpbmdCb3gpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJvdW5kaW5nQm94KCkgOiBCb3VuZGluZ0JveCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZGluZ0JveDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VHlwZSgpIDogQ29sbGlkZXJTaGFwZSB7XG4gICAgICAgIHJldHVybiBDb2xsaWRlclNoYXBlLkJPWDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmVjdGFuZ2xlKCkgOiBCb3gge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdCAgICA6IHRoaXMuX2JvdW5kaW5nQm94LmxlZnQsXG4gICAgICAgICAgICByaWdodCAgIDogdGhpcy5fYm91bmRpbmdCb3gucmlnaHQsXG4gICAgICAgICAgICB0b3AgICAgIDogdGhpcy5fYm91bmRpbmdCb3gudG9wLFxuICAgICAgICAgICAgYm90dG9tICA6IHRoaXMuX2JvdW5kaW5nQm94LmJvdHRvbSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29sbGlkZXNXaXRoKGNvbGxpZGVyOiBDb2xsaWRlcikgOiBib29sZWFuIHtcbiAgICAgICAgc3dpdGNoKGNvbGxpZGVyLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgY2FzZSBDb2xsaWRlclNoYXBlLkJPWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWN0VG9SZWN0Q2hlY2soY29sbGlkZXIuZ2V0UmVjdGFuZ2xlKCkpO1xuXG4gICAgICAgICAgICBjYXNlIENvbGxpZGVyU2hhcGUuQ0lSQ0xFOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlY3RUb0NpcmNsZUNoZWNrKGNvbGxpZGVyLmdldENpcmNsZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldFBvc2l0aW9uKHBvc2l0aW9uOiBWZWN0b3IpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2JvdW5kaW5nQm94LnNldE9yaWdpbihwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBjb2xsaXNpb24gZGV0ZWN0aW9uIGFnYWluc3QgYW5vdGhlciByZWN0YW5nbGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge30gcmVjdCBcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlY3RUb1JlY3RDaGVjayhyZWN0OiBCb3gpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHJlY3QucmlnaHQgID4gdGhpcy5fYm91bmRpbmdCb3gubGVmdCB8fFxuICAgICAgICAgICAgcmVjdC5sZWZ0ICAgPCB0aGlzLl9ib3VuZGluZ0JveC5yaWdodCB8fFxuICAgICAgICAgICAgcmVjdC50b3AgICAgPiB0aGlzLl9ib3VuZGluZ0JveC5ib3R0b20gfHxcbiAgICAgICAgICAgIHJlY3QuYm90dG9tIDwgdGhpcy5fYm91bmRpbmdCb3gudG9wXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWN0VG9DaXJjbGVDaGVjayhjaXJjbGU6IENpcmNsZSkge1xuICAgICAgICAvLyByZXR1cm4gKFxuXG4gICAgICAgIC8vICk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL21vZHVsZXMvY29sbGlzaW9ucy9jb2xsaWRlcnMvQm94Q29sbGlkZXIudHMiLCJpbXBvcnQgeyBDb2xsaWRlciwgQ29sbGlkZXJTaGFwZSwgQm94LCBDaXJjbGUgfSBmcm9tIFwiZW5naW5lL2xpYnJhcnkvY29sbGlzaW9uc1wiO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcImVuZ2luZS9saWJyYXJ5L21hdGhzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZUNvbGxpZGVyIGV4dGVuZHMgQ29sbGlkZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9vcmlnaW46IFZlY3RvciwgXG4gICAgICAgIHByaXZhdGUgX29mZnNldDogVmVjdG9yLFxuICAgICAgICBwcml2YXRlIF9yYWRpdXM6IG51bWJlclxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBwb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yaWdpbi5hZGQodGhpcy5fb2Zmc2V0KTtcbiAgICB9XG4gICAgZ2V0IHJhZGl1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JhZGl1cztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VHlwZSgpIDogQ29sbGlkZXJTaGFwZSB7XG4gICAgICAgIHJldHVybiBDb2xsaWRlclNoYXBlLkNJUkNMRTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2lyY2xlKCkgOiBDaXJjbGUge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICAgICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBjb2xsaWRlc1dpdGgoY29sbGlkZXI6IENvbGxpZGVyKSA6IGJvb2xlYW4ge1xuICAgICAgICBzd2l0Y2goY29sbGlkZXIuZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICBjYXNlIENvbGxpZGVyU2hhcGUuQk9YOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNpcmNsZVRvUmVjdENoZWNrKGNvbGxpZGVyLmdldFJlY3RhbmdsZSgpKTtcblxuICAgICAgICAgICAgY2FzZSBDb2xsaWRlclNoYXBlLkNJUkNMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaXJjbGVUb0NpcmNsZUNoZWNrKGNvbGxpZGVyLmdldENpcmNsZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UG9zaXRpb24ocG9zaXRpb246IFZlY3RvcikgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fb3JpZ2luID0gcG9zaXRpb247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaXJjbGVUb1JlY3RDaGVjayhyZWN0OiBCb3gpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNpcmNsZVRvQ2lyY2xlQ2hlY2soY2lyY2xlOiBDaXJjbGUpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9tb2R1bGVzL2NvbGxpc2lvbnMvY29sbGlkZXJzL0NpcmNsZUNvbGxpZGVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==