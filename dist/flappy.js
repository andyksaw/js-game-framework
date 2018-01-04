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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameObject__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__GameObject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GameObjectFactory__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__GameObjectFactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SceneGraph__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__SceneGraph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Sprite__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__Sprite__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Transform__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__Transform__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DirtyFlag__ = __webpack_require__(21);
/* unused harmony reexport withDirtyFlag */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Colliderable__ = __webpack_require__(3);
/* unused harmony reexport withCollider */











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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = withCollider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);

function withCollider(Base, collider) {
    return class ColliderableGameObject extends Base {
        constructor(...args) {
            super(...args);
            this._collider = collider;
        }
        getCollider() {
            return this._collider;
        }
        onUpdate(timestep) {
            super.onUpdate(timestep);
            const colliderPos = super.getTransform().getPosition();
            this._collider.setPosition(colliderPos);
            // TODO: implement QuadTree so we don't have to query every
            // single GameObject in the scene...
            const nearbyGameObjects = __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["d" /* SceneGraph */].instance.colliders;
            const collidingObjs = [];
            nearbyGameObjects.forEach(obj => {
                // if(
                //     obj instanceof GameObject && 
                //     this instanceof GameObject &&
                //     obj.getName() === this.getName()
                // ) {
                //     return;
                // }
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
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__ = __webpack_require__(6);

class BoxCollider extends __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["a" /* Collider */] {
    constructor(_boundingBox) {
        super();
        this._boundingBox = _boundingBox;
    }
    get boundingBox() {
        return this._boundingBox;
    }
    getType() {
        return __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["b" /* ColliderShape */].BOX;
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
            case __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["b" /* ColliderShape */].BOX:
                return this.rectToRectCheck(collider.getRectangle());
            case __WEBPACK_IMPORTED_MODULE_0_engine_library_collisions__["b" /* ColliderShape */].CIRCLE:
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
/* harmony export (immutable) */ __webpack_exports__["a"] = BoxCollider;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collider__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Collider__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Collider__["a"]; });



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
/* 14 */
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
        // console.log(`${this._id} is colliding with`, collidingObjs);
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
/* 15 */
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = makeGameObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_objects_Colliderable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_engine_library_objects_SceneGraph__ = __webpack_require__(4);



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
        __WEBPACK_IMPORTED_MODULE_2_engine_library_objects_SceneGraph__["a" /* default */].instance.addCollider(config.collider);
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
/* 19 */
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
            collider: new __WEBPACK_IMPORTED_MODULE_3_engine_library_collisions_colliders_BoxCollider__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["a" /* BoundingBox */](new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](350, -__WEBPACK_IMPORTED_MODULE_2_engine_library_screen__["b" /* Viewport */].instance.height + 239), new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](108, 239))),
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColliderShape; });
var ColliderShape;
(function (ColliderShape) {
    ColliderShape[ColliderShape["BOX"] = 0] = "BOX";
    ColliderShape[ColliderShape["CIRCLE"] = 1] = "CIRCLE";
})(ColliderShape || (ColliderShape = {}));
class Collider {
    get gameObject() {
        return this._gameObject;
    }
    setGameObject(gameObject) {
        this._gameObject = gameObject;
    }
    /**
     * Returns the type of collidable that should be checked
     */
    getType() {
        throw new Error('getType() not implemented');
    }
    /**
     * Returns the rectangle information of this object, if it
     * has a BoxCollider
     *
     * @returns {Box}
     */
    getRectangle() {
        throw new Error('getRectangle() not implemented');
    }
    /**
     * Returns the circle information of this object, if it
     * has a CircleCollider
     *
     * @returns {Circle}
     */
    getCircle() {
        throw new Error('getCircle() not implemented');
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Collider;



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoxCollider__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BoxCollider__["a"]; });
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



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmZkZDVhNzY2ZjFlZjVlMjdmYjMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvbWF0aHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9Db2xsaWRlcmFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9TY2VuZUdyYXBoLnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMvY29sbGlkZXJzL0JveENvbGxpZGVyLnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZXMvZmxhcHB5L2ZsYXBweS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9HYW1lTG9vcC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0JvdW5kaW5nQm94LnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L21hdGhzL1ZlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9tYXRocy9NYXRocy50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvc2NyZWVuL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vQ2FudmFzLnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L3NjcmVlbi9WaWV3cG9ydC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0dhbWVPYmplY3RGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvU3ByaXRlLnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvVHJhbnNmb3JtLnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvRGlydHlGbGFnLnRzIiwid2VicGFjazovLy8uL2dhbWVzL2ZsYXBweS9jb21wb25lbnRzL1BsYW5lTW92ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvaW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvaW5wdXQvS2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZXMvZmxhcHB5L2NvbXBvbmVudHMvU2NlbmVNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMvQ29sbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucy9jb2xsaWRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucy9jb2xsaWRlcnMvQ2lyY2xlQ29sbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVB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XHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmZmRkNWE3NjZmMWVmNWUyN2ZiMyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVmVjdG9yIH0gZnJvbSAnLi9WZWN0b3InO1xuXG5pbXBvcnQgKiBhcyBNYXRocyBmcm9tICcuL01hdGhzJztcbmV4cG9ydCB7IE1hdGhzIH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvbWF0aHMvaW5kZXgudHMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJvdW5kaW5nQm94IH0gZnJvbSAnLi9Cb3VuZGluZ0JveCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2FtZU9iamVjdCB9IGZyb20gJy4vR2FtZU9iamVjdCc7XG5leHBvcnQgeyBtYWtlR2FtZU9iamVjdCwgR2FtZU9iamVjdENvbmZpZyB9IGZyb20gJy4vR2FtZU9iamVjdEZhY3RvcnknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTY2VuZUdyYXBoIH0gZnJvbSAnLi9TY2VuZUdyYXBoJztcbmV4cG9ydCB7IFNwcml0ZSwgU3ByaXRlQ29uZmlnIH0gZnJvbSAnLi9TcHJpdGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUcmFuc2Zvcm0gfSBmcm9tICcuL1RyYW5zZm9ybSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhEaXJ0eUZsYWcgfSBmcm9tICcuL0RpcnR5RmxhZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhDb2xsaWRlciwgQ29sbGlkZXJhYmxlIH0gZnJvbSAnLi9Db2xsaWRlcmFibGUnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvaW5kZXgudHMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIENhbWVyYSB9IGZyb20gJy4vQ2FtZXJhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FudmFzIH0gZnJvbSAnLi9DYW52YXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWaWV3cG9ydCB9IGZyb20gJy4vVmlld3BvcnQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L3NjcmVlbi9pbmRleC50cyIsImltcG9ydCB7IFNjZW5lR3JhcGgsIFRyYW5zZm9ybSB9IGZyb20gXCJlbmdpbmUvbGlicmFyeS9vYmplY3RzXCI7XG5pbXBvcnQgeyBDb2xsaWRlciB9IGZyb20gXCJlbmdpbmUvbGlicmFyeS9jb2xsaXNpb25zXCI7XG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9HYW1lT2JqZWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sbGlkZXJhYmxlIGV4dGVuZHMgR2FtZU9iamVjdCB7XG4gICAgb25Db2xsaXNpb24oY29sbGlkaW5nT2JqczogQ29sbGlkZXJbXSk6IHZvaWQ7XG4gICAgb25VcGRhdGUodGltZXN0ZXA6IG51bWJlcik6IHZvaWQ7XG4gICAgZ2V0VHJhbnNmb3JtKCk6IFRyYW5zZm9ybTtcbn1cblxuLy8gYmFzZSBjbGFzcyBtdXN0IGhhdmUgYW4gb25VcGRhdGUgbGlmZWN5Y2xlIGhvb2sgbWV0aG9kIHNpbmNlXG4vLyB3ZSdyZSBwZXJmb3JtaW5nIG91ciBjb2xsaXNpb24gY2hlY2tzIGFmdGVyIGl0IGdldHMgY2FsbGVkLlxuLy9cbi8vIGl0IGFsc28gbXVzdCBleHRlbmQgdGhlIENvbGxpZGVyYWJsZSBpbnRlcmZhY2Ugc2luY2UgdGhhdCB3aWxsXG4vLyBwcm92aWRlIHRoZSBiYXNlIGNsYXNzIHdpdGggY29sbGlzaW9uIGRhdGEuXG50eXBlIENvbnN0cnVjdG9yPFQgPSBDb2xsaWRlcmFibGU+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aENvbGxpZGVyPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oQmFzZTogVCwgY29sbGlkZXI6IENvbGxpZGVyKSB7XG4gICAgcmV0dXJuIGNsYXNzIENvbGxpZGVyYWJsZUdhbWVPYmplY3QgZXh0ZW5kcyBCYXNlIHtcbiAgICAgICAgcHJpdmF0ZSBfY29sbGlkZXI6IENvbGxpZGVyO1xuXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgICAgICB0aGlzLl9jb2xsaWRlciA9IGNvbGxpZGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGdldENvbGxpZGVyKCkgOiBDb2xsaWRlciB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sbGlkZXI7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgb25VcGRhdGUodGltZXN0ZXA6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIub25VcGRhdGUodGltZXN0ZXApO1xuXG4gICAgICAgICAgICBjb25zdCBjb2xsaWRlclBvcyA9IHN1cGVyLmdldFRyYW5zZm9ybSgpLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLl9jb2xsaWRlci5zZXRQb3NpdGlvbihjb2xsaWRlclBvcyk7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGltcGxlbWVudCBRdWFkVHJlZSBzbyB3ZSBkb24ndCBoYXZlIHRvIHF1ZXJ5IGV2ZXJ5XG4gICAgICAgICAgICAvLyBzaW5nbGUgR2FtZU9iamVjdCBpbiB0aGUgc2NlbmUuLi5cbiAgICAgICAgICAgIGNvbnN0IG5lYXJieUdhbWVPYmplY3RzID0gU2NlbmVHcmFwaC5pbnN0YW5jZS5jb2xsaWRlcnM7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbGxpZGluZ09ianM6IEFycmF5PENvbGxpZGVyPiA9IFtdO1xuICAgICAgICAgICAgbmVhcmJ5R2FtZU9iamVjdHMuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgICAgIC8vIGlmKFxuICAgICAgICAgICAgICAgIC8vICAgICBvYmogaW5zdGFuY2VvZiBHYW1lT2JqZWN0ICYmIFxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzIGluc3RhbmNlb2YgR2FtZU9iamVjdCAmJlxuICAgICAgICAgICAgICAgIC8vICAgICBvYmouZ2V0TmFtZSgpID09PSB0aGlzLmdldE5hbWUoKVxuICAgICAgICAgICAgICAgIC8vICkge1xuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fY29sbGlkZXIuY29sbGlkZXNXaXRoKG9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGlkaW5nT2Jqcy5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmKGNvbGxpZGluZ09ianMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHN1cGVyLm9uQ29sbGlzaW9uKGNvbGxpZGluZ09ianMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvQ29sbGlkZXJhYmxlLnRzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuaW1wb3J0IHsgR2FtZU9iamVjdCwgbWFrZUdhbWVPYmplY3QsIEdhbWVPYmplY3RDb25maWcgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucyc7XG5cbi8qKlxuICogSGFuZGxlcyBpbnN0YW50aWF0aW9uLCBkZXN0cnVjdGlvbiBhbmQgbWFuYWdlbWVudCBvZiBhbGwgR2FtZU9iamVjdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVHcmFwaCB7XG5cbiAgICAvLyBzaW5nbGV0b24gYmVjYXVzZSB3ZSBzaG91bGQgbmV2ZXIgaGF2ZSBtb3JlIHRoYW4gb25lIFNjZW5lR3JhcGhcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFNjZW5lR3JhcGg7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSA6IFNjZW5lR3JhcGgge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQW4gb3JkZXJlZCBhcnJheSBvZiBhbGwgR2FtZU9iamVjdHMgKHJlZ2FyZGxlc3Mgb2Ygc3RhdGUpXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaGllcmFyY2h5OiBBcnJheTxHYW1lT2JqZWN0PiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQWxsIGNvbGxpZGVycyAoYXR0YWNoZWQgdG8gR2FtZU9iamVjdHMpIGluIHRoZSBzY2VuZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2NvbGxpZGVyczogQXJyYXk8Q29sbGlkZXI+ID0gW107XG5cbiAgICAvKipcbiAgICAgKiBBIHVuaXF1ZSBzdHJpbmcgaWQgdG8gR2FtZU9iamVjdCBtYXBwaW5nXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZ2FtZU9iamVjdHM6IE1hcDxzdHJpbmcsIEdhbWVPYmplY3Q+ID0gbmV3IE1hcCgpO1xuXG4gICAgZ2V0IGhpZXJhcmNoeSgpIDogQXJyYXk8R2FtZU9iamVjdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faGllcmFyY2h5O1xuICAgIH1cblxuICAgIGdldCBjb2xsaWRlcnMoKSA6IEFycmF5PENvbGxpZGVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xsaWRlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgR2FtZU9iamVjdCB0aGF0IGJlbG9uZ3MgdG8gdGhlIGdpdmVuIGlkXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqL1xuICAgIGdldChpZDogc3RyaW5nKSA6IEdhbWVPYmplY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdHMuZ2V0KGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29sbGlkZXIgZm9yIGNvbGxpc2lvbiB0cmFja2luZ1xuICAgICAqIFxuICAgICAqIEBwYXJhbSBjb2xsaWRlciBcbiAgICAgKi9cbiAgICBhZGRDb2xsaWRlcihjb2xsaWRlcjogQ29sbGlkZXIpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbGxpZGVycy5wdXNoKGNvbGxpZGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgR2FtZU9iamVjdFxuICAgICogXG4gICAgKiBAdHlwZSB7c3RyaW5nfSBpZCAgICAgICAgIE5hbWUvaWRlbnRpZmllciBvZiB0aGUgb2JqZWN0XG4gICAgKiBAdHlwZSB7b2JqZWN0fSBjb25maWcgICAgIEdhbWVPYmplY3Qgc2V0dGluZ3NcbiAgICAqL1xuICAgIGluc3RhbnRpYXRlKGlkOiBzdHJpbmcsIGNvbmZpZzogR2FtZU9iamVjdENvbmZpZykgOiBHYW1lT2JqZWN0IHtcbiAgICAgICAgaWYoaWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnN0YW50aWF0aW9uIGZhaWxlZDogbm8gdW5pcXVlIGlkIGdpdmVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5fZ2FtZU9iamVjdHMuZ2V0KGlkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnN0YW50aWF0aW9uIGZhaWxlZDogYSBHYW1lT2JqZWN0IGFscmVhZHkgZXhpc3RzIHdpdGggdGhlIG5hbWUgJHtpZH1gKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2FtZU9iamVjdCA9IG1ha2VHYW1lT2JqZWN0KGlkLCBjb25maWcpO1xuXG4gICAgICAgIHRoaXMuX2hpZXJhcmNoeS5wdXNoKGdhbWVPYmplY3QpO1xuICAgICAgICB0aGlzLl9nYW1lT2JqZWN0cy5zZXQoaWQsIGdhbWVPYmplY3QpO1xuXG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRha2VzIGluIGFuIGFycmF5IG9mIEdhbWVPYmplY3RzIGFuZCByZW1vdmVzIHRoZW0gYWxsIFxuICAgICAqIGZyb20gdGhlIGhpZXJhcmNoeSBpbW1lZGlhdGVseVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGdhbWVPYmplY3RzIFxuICAgICAqL1xuICAgIHJlbW92ZUJhdGNoKGdhbWVPYmplY3RzOiBBcnJheTxHYW1lT2JqZWN0PikgOiB2b2lkIHtcbiAgICAgICAgZ2FtZU9iamVjdHMuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZU9iamVjdHMuZGVsZXRlKG9iai5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9oaWVyYXJjaHkgPSB0aGlzLl9oaWVyYXJjaHkuZmlsdGVyKG9iaiA9PiBnYW1lT2JqZWN0cy5pbmRleE9mKG9iaikgPCAwKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9TY2VuZUdyYXBoLnRzIiwiaW1wb3J0IHsgQ29sbGlkZXIsIENvbGxpZGVyU2hhcGUsIEJveCwgQ2lyY2xlIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucyc7XG5pbXBvcnQgeyBCb3VuZGluZ0JveCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3hDb2xsaWRlciBleHRlbmRzIENvbGxpZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ib3VuZGluZ0JveDogQm91bmRpbmdCb3gpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJvdW5kaW5nQm94KCkgOiBCb3VuZGluZ0JveCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZGluZ0JveDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VHlwZSgpIDogQ29sbGlkZXJTaGFwZSB7XG4gICAgICAgIHJldHVybiBDb2xsaWRlclNoYXBlLkJPWDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmVjdGFuZ2xlKCkgOiBCb3gge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdCAgICA6IHRoaXMuX2JvdW5kaW5nQm94LmxlZnQsXG4gICAgICAgICAgICByaWdodCAgIDogdGhpcy5fYm91bmRpbmdCb3gucmlnaHQsXG4gICAgICAgICAgICB0b3AgICAgIDogdGhpcy5fYm91bmRpbmdCb3gudG9wLFxuICAgICAgICAgICAgYm90dG9tICA6IHRoaXMuX2JvdW5kaW5nQm94LmJvdHRvbSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29sbGlkZXNXaXRoKGNvbGxpZGVyOiBDb2xsaWRlcikgOiBib29sZWFuIHtcbiAgICAgICAgc3dpdGNoKGNvbGxpZGVyLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgY2FzZSBDb2xsaWRlclNoYXBlLkJPWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWN0VG9SZWN0Q2hlY2soY29sbGlkZXIuZ2V0UmVjdGFuZ2xlKCkpO1xuXG4gICAgICAgICAgICBjYXNlIENvbGxpZGVyU2hhcGUuQ0lSQ0xFOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlY3RUb0NpcmNsZUNoZWNrKGNvbGxpZGVyLmdldENpcmNsZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldFBvc2l0aW9uKHBvc2l0aW9uOiBWZWN0b3IpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2JvdW5kaW5nQm94LnNldE9yaWdpbihwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBjb2xsaXNpb24gZGV0ZWN0aW9uIGFnYWluc3QgYW5vdGhlciByZWN0YW5nbGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge30gcmVjdCBcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlY3RUb1JlY3RDaGVjayhyZWN0OiBCb3gpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHJlY3QucmlnaHQgID4gdGhpcy5fYm91bmRpbmdCb3gubGVmdCB8fFxuICAgICAgICAgICAgcmVjdC5sZWZ0ICAgPCB0aGlzLl9ib3VuZGluZ0JveC5yaWdodCB8fFxuICAgICAgICAgICAgcmVjdC50b3AgICAgPiB0aGlzLl9ib3VuZGluZ0JveC5ib3R0b20gfHxcbiAgICAgICAgICAgIHJlY3QuYm90dG9tIDwgdGhpcy5fYm91bmRpbmdCb3gudG9wXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWN0VG9DaXJjbGVDaGVjayhjaXJjbGU6IENpcmNsZSkge1xuICAgICAgICAvLyByZXR1cm4gKFxuXG4gICAgICAgIC8vICk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9jb2xsaXNpb25zL2NvbGxpZGVycy9Cb3hDb2xsaWRlci50cyIsImV4cG9ydCB7IFxuICAgIGRlZmF1bHQgYXMgQ29sbGlkZXIsIFxuICAgIENvbGxpZGVyU2hhcGUsIFxuICAgIEJveCxcbiAgICBDaXJjbGUsXG59IGZyb20gJy4vQ29sbGlkZXInO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMvaW5kZXgudHMiLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnZW5naW5lL2dhbWUnO1xuaW1wb3J0IHsgUGxhbmVNb3ZlbWVudCB9IGZyb20gJy4vY29tcG9uZW50cy9QbGFuZU1vdmVtZW50JztcbmltcG9ydCB7IFNjZW5lTWFuYWdlciB9IGZyb20gJy4vY29tcG9uZW50cy9TY2VuZU1hbmFnZXInO1xuXG5pbXBvcnQgeyBTY2VuZUdyYXBoLCBTcHJpdGUsIEJvdW5kaW5nQm94IH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5pbXBvcnQgeyBWaWV3cG9ydCwgQ2FudmFzLCBDYW1lcmEgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9zY3JlZW4nO1xuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9jb2xsaXNpb25zL2NvbGxpZGVycyc7XG5cbmNsYXNzIEZsYXBweUdhbWUgZXh0ZW5kcyBHYW1lIHtcbiAgICBvblN0YXJ0KCkge1xuICAgICAgICBjb25zdCBzY2VuZSA9IFNjZW5lR3JhcGguaW5zdGFuY2U7XG4gICAgICAgIGNvbnN0IHNjZW5lTWFuYWdlciA9IHNjZW5lLmluc3RhbnRpYXRlKCdzY2VuZU1hbmFnZXInLCB7XG4gICAgICAgICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgICAgICAgICAgU2NlbmVNYW5hZ2VyLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcGxhbmVSZWQgPSBzY2VuZS5pbnN0YW50aWF0ZSgncGxhbmUnLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3Rvcig1MCwgLTUwKSxcbiAgICAgICAgICAgIC8vIGNvbGxpZGVyOiBCb3hDb2xsaWRlcixcbiAgICAgICAgICAgIHNwcml0ZToge1xuICAgICAgICAgICAgICAgIGFzc2V0czogW1xuICAgICAgICAgICAgICAgICAgICAnYXNzZXRzL2ltYWdlcy9wbGFuZVJlZDEucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gJ2Fzc2V0cy9pbWFnZXMvcGxhbmVSZWQyLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIC8vICdhc3NldHMvaW1hZ2VzL3BsYW5lUmVkMy5wbmcnLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYm91bmRzOiBuZXcgQm91bmRpbmdCb3goXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoNTAsIC01MCksIFxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDUwLCA1MClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIC8vIHRpbWluZzogMTUwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbGxpZGVyOiBuZXcgQm94Q29sbGlkZXIoXG4gICAgICAgICAgICAgICAgbmV3IEJvdW5kaW5nQm94KFxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDUwLCAtNTApLCBcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3Rvcig1MCwgNTApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgICAgICAgICAgUGxhbmVNb3ZlbWVudCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3QgZ2FtZSA9IG5ldyBGbGFwcHlHYW1lKCk7XG5nYW1lLmluaXRpYWxpc2UoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nYW1lcy9mbGFwcHkvZmxhcHB5LnRzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBib290R2FtZUxvb3AgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9HYW1lTG9vcCc7XG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9zY3JlZW4nO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG4vKipcbiAqIEJhc2UgY29udGFpbmVyIGZvciBhIGdhbWUuIEEgZ2FtZSBzaG91bGQgZXh0ZW5kIHRoaXNcbiAqIGFuZCBmaWxsIGl0IHdpdGggZ2FtZSBzcGVjaWZpYyBsb2dpYy5cbiAqL1xuZXhwb3J0IGNsYXNzIEdhbWUge1xuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRoZSBlbmdpbmUgZ2FtZSBsb29wIGFuZCB0aGUgZ2FtZSdzIGxvZ2ljXG4gICAgICovXG4gICAgaW5pdGlhbGlzZSgpIHtcbiAgICAgICAgQ2FtZXJhLmluc3RhbmNlLnRyYW5zZm9ybS5zZXRQb3NpdGlvbihuZXcgVmVjdG9yKDAsIDApKTtcbiAgICAgICAgYm9vdEdhbWVMb29wKHRoaXMub25TdGFydCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9naWMgdG8gcnVuIG9uY2UgYWZ0ZXIgdGhlIG1haW4gZ2FtZSBsb29wIGlzIHN0YXJ0ZWRcbiAgICAgKi9cbiAgICBvblN0YXJ0KCkge31cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9nYW1lLnRzIiwiaW1wb3J0IHsgU2NlbmVHcmFwaCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuXG4vKipcbiAqIERlc2lyZWQgYW1vdW50IG9mIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gZnJhbWVzXG4gKlxuICogQGNvbnN0YW50IHtudW1iZXJ9XG4gKi9cbmNvbnN0IE1TX1BFUl9GUkFNRTogbnVtYmVyID0gMTY7XG5cbi8qKlxuICogIEdhbWUgc3BlZWQgKDEgPSBub3JtYWwgc3BlZWQgfCAwID0gbm90IG1vdmluZylcbiAqIFxuICogIEBjb25zdGFudCB7bnVtYmVyfVxuICovXG5jb25zdCBUSU1FX1NURVA6IG51bWJlciA9IDE7XG5cbi8qKlxuICogIFRpbWVzdGFtcCBvZiB0aGUgbGFzdCByZW5kZXJlZCBmcmFtZVxuICogXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5sZXQgbGFzdFRpY2s6IG51bWJlcjtcblxuXG4vKipcbiAqIFRoZSBtYWluIGdhbWUgbG9vcC5cbiAqIFxuICogQ2FsY3VsYXRlcyBmcmFtZSBzdGF0cyBhbmQgcGFzc2VzIGl0IHRvIHRoZSB1cGRhdGVcbiAqIGFuZCByZW5kZXIgbG9vcFxuICovXG5mdW5jdGlvbiBnYW1lTG9vcCgpIDogdm9pZCB7XG4gICAgLy8gY2FsY3VsYXRlIGhvdyBtdWNoIHRpbWUgaGFzIGFjdHVhbGx5IHBhc3NlZCBzaW5jZVxuICAgIC8vIHRoZSBsYXN0IGZyYW1lIGFuZCBwYXNzIGl0IHRvIHRoZSB1cGRhdGUgbG9vcFxuICAgIGNvbnN0IGN1cnJlbnRUaWNrID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBlbGFwc2VkID0gY3VycmVudFRpY2sgLSBsYXN0VGljaztcbiAgICBjb25zdCBzdGVwID0gKE1TX1BFUl9GUkFNRSAvIGVsYXBzZWQpICogVElNRV9TVEVQO1xuICAgIFxuICAgIG9uVXBkYXRlKHN0ZXApO1xuICAgIG9uUmVuZGVyKCk7XG5cbiAgICBsYXN0VGljayA9IGN1cnJlbnRUaWNrO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5cblxuLyoqXG4gKiAgRGVsZWdhdGVzIHdvcmsgdG8gZXZlcnkgZ2FtZSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gb25VcGRhdGUodGltZXN0ZXA6IG51bWJlcikge1xuICAgIGNvbnN0IGhpZXJhcmNoeSA9IFNjZW5lR3JhcGguaW5zdGFuY2UuaGllcmFyY2h5O1xuICAgIGNvbnN0IGNvcnBzZU9iamVjdHMgPSBbXTtcblxuICAgIC8vIGxvb3Agb3ZlciBhIGJ1ZmZlciBzbyB0aGF0IG5ld2x5IGluc3RhbnRpYXRlZCBvYmplY3RzXG4gICAgLy8gYWx3YXlzIHN0YXJ0IGV4ZWN1dGlvbiBmcm9tIHRoZSBuZXh0IGZyYW1lXG4gICAgY29uc3QgYnVmZmVyQ291bnQgPSBoaWVyYXJjaHkubGVuZ3RoO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBidWZmZXJDb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IGhpZXJhcmNoeVtpXTtcblxuICAgICAgICAvLyBhbnkgb2JqZWN0cyBtYXJrZWQgZm9yIGRlbGV0aW9uIHNob3VsZCBub3QgYmUgZXhlY3V0ZWRcbiAgICAgICAgaWYob2JqLmlzRGVzdHJveWluZygpKSB7XG4gICAgICAgICAgICBjb3Jwc2VPYmplY3RzLnB1c2gob2JqKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG9iai5vblVwZGF0ZSh0aW1lc3RlcCk7XG4gICAgfVxuXG4gICAgLy8gY2xlYW51cCBhbnkgb2JqZWN0cyBtYXJrZWQgZm9yIGRlbGV0aW9uXG4gICAgaWYoY29ycHNlT2JqZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIFNjZW5lR3JhcGguaW5zdGFuY2UucmVtb3ZlQmF0Y2goY29ycHNlT2JqZWN0cyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlbmRlcnMgZXZlcnkgdmlzaWJsZSBHYW1lT2JqZWN0IHRvIERPTSBldmVyeSBmcmFtZVxuICovXG5mdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICBTY2VuZUdyYXBoXG4gICAgICAgIC5pbnN0YW5jZVxuICAgICAgICAuaGllcmFyY2h5XG4gICAgICAgIC5mb3JFYWNoKG9iaiA9PiBvYmoucmVuZGVyKCkpO1xufVxuXG4vKipcbiAqIFN0YXJ0cyB0aGUgZ2FtZSBsb29wXG4gKi9cbmxldCBpc0Jvb3RlZCA9IGZhbHNlO1xuZXhwb3J0IGZ1bmN0aW9uIGJvb3RHYW1lTG9vcChvblN0YXJ0OiBGdW5jdGlvbikge1xuICAgIGlmKGlzQm9vdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGFzdFRpY2sgPSBEYXRlLm5vdygpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgb25TdGFydCgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L0dhbWVMb29wLnRzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSByZWN0YW5nbGUgaW4gd29ybGQtc3BhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm91bmRpbmdCb3gge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9vcmlnaW46IFZlY3RvcixcbiAgICAgICAgcHJpdmF0ZSBfZGltZW5zaW9uczogVmVjdG9yLFxuICAgICAgICBwcml2YXRlIF9vZmZzZXQ6IFZlY3RvciA9IFZlY3Rvci5vcmlnaW4sXG4gICAgKSB7fVxuXG4gICAgZ2V0IHBvc2l0aW9uKCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5fb3JpZ2luLmFkZCh0aGlzLl9vZmZzZXQpO1xuICAgIH1cbiAgICBcbiAgICBnZXQgbGVmdCgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueCAtICh0aGlzLl9kaW1lbnNpb25zLnggLyAyKTtcbiAgICB9XG4gICAgZ2V0IHJpZ2h0KCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54ICsgKHRoaXMuX2RpbWVuc2lvbnMueCAvIDIpO1xuICAgIH1cbiAgICBnZXQgdG9wKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi55ICsgKHRoaXMuX2RpbWVuc2lvbnMueSAvIDIpO1xuICAgIH1cbiAgICBnZXQgYm90dG9tKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi55IC0gKHRoaXMuX2RpbWVuc2lvbnMueSAvIDIpO1xuICAgIH1cblxuICAgIGdldCBkaW1lbnNpb25zKCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5fZGltZW5zaW9ucztcbiAgICB9XG4gICAgZ2V0IG9mZnNldCgpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29mZnNldDtcbiAgICB9XG4gICAgZ2V0IG9yaWdpbigpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yaWdpbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBCb3VuZGluZyBCb3hcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gb3JpZ2luIFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRPcmlnaW4ob3JpZ2luOiBWZWN0b3IpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX29yaWdpbiA9IG9yaWdpbjtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9Cb3VuZGluZ0JveC50cyIsImltcG9ydCB7IE1hdGhzIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBjb29yZGluYXRlIGluIDJEIHNwYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3g6IG51bWJlciA9IDAsXG4gICAgICAgIHByaXZhdGUgX3k6IG51bWJlciA9IDBcbiAgICApIHt9XG5cbiAgICAvKipcbiAgICAgKiAgUmV0dXJucyB0aGUgeC1jb29yZGluYXRlXG4gICAgICogXG4gICAgICogIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgeCgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3g7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIFJldHVybnMgdGhlIHktY29vcmRpbmF0ZVxuICAgICAqIFxuICAgICAqICBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHkoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl95O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgKGllLiBsZW5ndGgpIG9mIHRoZSB2ZWN0b3JcbiAgICAgKiBcbiAgICAgKiAgQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBtYWduaXR1ZGUoKSA6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHgyID0gdGhpcy5feCAqIHRoaXMuX3g7XG4gICAgICAgIGNvbnN0IHkyID0gdGhpcy5feSAqIHRoaXMuX3k7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeDIgKyB5Mik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHZlY3RvciB0aGF0IGlzIHBlcnBlbmRpY3VsYXIgdG8gdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBnZXQgbm9ybWFsKCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigtdGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGQodmVjdG9yOiBWZWN0b3IpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoXG4gICAgICAgICAgICB0aGlzLnggKyB2ZWN0b3IueCxcbiAgICAgICAgICAgIHRoaXMueSArIHZlY3Rvci55XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHN1YnRyYWN0KHZlY3RvcjogVmVjdG9yKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFxuICAgICAgICAgICAgdGhpcy54IC0gdmVjdG9yLngsXG4gICAgICAgICAgICB0aGlzLnkgLSB2ZWN0b3IueVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBtdWx0aXBseShzY2FsYXI6IG51bWJlcikgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihcbiAgICAgICAgICAgIHRoaXMueCAqIHNjYWxhcixcbiAgICAgICAgICAgIHRoaXMueSAqIHNjYWxhclxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhcHMgdGhpcyBWZWN0b3IgYmV0d2VlbiB0aGUgdmFsdWUgb2YgdHdvIFZlY3RvcnNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gbWluXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IG1heCBcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xhbXAobWluOiBWZWN0b3IsIG1heDogVmVjdG9yKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFxuICAgICAgICAgICAgTWF0aHMuY2xhbXAodGhpcy54LCBtaW4ueCwgbWF4LngpLFxuICAgICAgICAgICAgTWF0aHMuY2xhbXAodGhpcy55LCBtaW4ueSwgbWF4LnkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgZGlyZWN0aW9uIGdldHRlcnNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IGxlZnQoKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKC0xLCAwKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCByaWdodCgpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoMSwgMCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgdXAoKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDAsIDEpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGRvd24oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDAsIC0xKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBvcmlnaW4oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDAsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzY2FsYXIgdGhhdCBzaG93cyBob3cgbXVjaCB2ZWN0b3IxXG4gICAgICogaXMgaW4gdmVjdG9yMidzIGRpcmVjdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Kn0gdmVjdG9yMSBcbiAgICAgKiBAcGFyYW0geyp9IHZlY3RvcjIgXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZG90KHZlY3RvcjE6IFZlY3RvciwgdmVjdG9yMjogVmVjdG9yKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAodmVjdG9yMS54ICogdmVjdG9yMi54KSArICh2ZWN0b3IxLnkgKiB2ZWN0b3IyLnkpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9tYXRocy9WZWN0b3IudHMiLCIvKipcbiAqIFJldHVybnMgYSB3aG9sZSBudW1iZXIgYmV0d2VlbiBbbWluXSBhbmQgW21heF1cbiAqIFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggXG4gKiBcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIDogbnVtYmVyIHtcbiAgICBjb25zdCB2YWx1ZSA9IChNYXRoLnJhbmRvbSgpICogKG1pbiAtIG1heCkpIC0gbWluO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDYXBzIFt2YWx1ZV0gYmV0d2VlbiBtaW4gYW5kIG1heCAoaW5jbHVzaXZlKVxuICogXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBcbiAqIFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA6IG51bWJlciB7XG4gICAgaWYodmFsdWUgPD0gbWluKSByZXR1cm4gbWluO1xuICAgIGlmKHZhbHVlID49IG1heCkgcmV0dXJuIG1heDtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvbWF0aHMvTWF0aHMudHMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0LCBUcmFuc2Zvcm0sIFNwcml0ZSB9IGZyb20gXCJlbmdpbmUvbGlicmFyeS9vYmplY3RzXCI7XG5cbi8qKlxuICogQW4gaW50ZXJmYWNlIGZvciBpbnRlcmFjdGluZyB3aXRoIGEgR2FtZU9iamVjdC4gVGhpcyBpc1xuICogd2hlcmUgYWxtb3N0IGFsbCB0aGUgY3VzdG9tIGdhbWUgY29kZSBzaG91bGQgbGl2ZS5cbiAqIFxuICogQSBjb21wb25lbnQgc2hvdWxkIGJlIGluc3RhbnRpYXRlZCBhbmQgYXR0YWNoZWQgdG8gYVxuICogR2FtZU9iamVjdCB3aGVuIHRoZSBHYW1lT2JqZWN0IGlzIGNyZWF0ZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIEdhbWVPYmplY3QgdGhpcyBjb21wb25lbnQgYmVsb25ncyB0b1xuICAgICAqL1xuICAgIHByaXZhdGUgX2dhbWVPYmplY3Q6IEdhbWVPYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuX2dhbWVPYmplY3QgPSBnYW1lT2JqZWN0O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB0cmFuc2Zvcm0gZm9yIHRoZSBHYW1lT2JqZWN0IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogXG4gICAgICogQHJldHVybiB7VHJhbnNmb3JtfVxuICAgICAqL1xuICAgIGdldCB0cmFuc2Zvcm0oKSA6IFRyYW5zZm9ybSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lT2JqZWN0LmdldFRyYW5zZm9ybSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNwcml0ZSBmb3IgdGhlIEdhbWVPYmplY3Qgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtTcHJpdGV9XG4gICAgICovXG4gICAgZ2V0IHNwcml0ZSgpIDogU3ByaXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3QuZ2V0U3ByaXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgR2FtZU9iamVjdCB0aGlzIGNvbXBvbmVudCBiZWxvbmdzIHRvXG4gICAgICogXG4gICAgICogQHJldHVybiB7R2FtZU9iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgZ2FtZU9iamVjdCgpIDogR2FtZU9iamVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lT2JqZWN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ2ljIHRvIHJ1biB3aGVuIHRoZSBvYmplY3QgaXMgZmlyc3QgaW5zdGFudGlhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkluc3RhbnRpYXRlKCkgOiB2b2lkIHt9XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9naWMgdG8gcnVuIGV2ZXJ5IGdhbWUgbG9vcCBmcmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBvblVwZGF0ZSh0aW1lc3RlcDogbnVtYmVyKSA6IHZvaWQge31cblxuICAgIC8qKlxuICAgICAqIExvZ2ljIHRvIHJ1biB3aGVuIHRoZSBvYmplY3QgaXMgZGVzdHJveWVkXG4gICAgICovXG4gICAgcHVibGljIG9uRGVzdHJveSgpIDogdm9pZCB7fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvQ29tcG9uZW50LnRzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuaW1wb3J0IHsgQm91bmRpbmdCb3gsIFRyYW5zZm9ybSwgU3ByaXRlLCBTcHJpdGVDb25maWcsIENvbXBvbmVudCwgQ29sbGlkZXJhYmxlIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cyc7XG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9zY3JlZW4nO1xuaW1wb3J0IHsgQ29sbGlkZXIgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9jb2xsaXNpb25zJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIG9iamVjdCBpbiB0aGUgc2NlbmVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU9iamVjdCBpbXBsZW1lbnRzIENvbGxpZGVyYWJsZSB7XG5cbiAgICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgX2lzVmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBfaXNEZXN0cm95aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBfdHJhbnNmb3JtOiBUcmFuc2Zvcm07XG4gICAgcHJpdmF0ZSBfc3ByaXRlOiBTcHJpdGU7XG4gICAgcHJpdmF0ZSBfY29tcG9uZW50czogQXJyYXk8Q29tcG9uZW50PiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBHYW1lT2JqZWN0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkICAgICAgICAgICBVbmlxdWUgaWRlbnRpZmllclxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSBwb3NpdGlvbiAgICAgU3RhcnRpbmcgcG9zaXRpb24gb2YgdGhlIG9iamVjdFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICBnZXQgaWQoKSA6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtUcmFuc2Zvcm19XG4gICAgICovXG4gICAgcHVibGljIGdldFRyYW5zZm9ybSgpIDogVHJhbnNmb3JtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zZm9ybTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTcHJpdGV9XG4gICAgICovXG4gICAgcHVibGljIGdldFNwcml0ZSgpIDogU3ByaXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgc3RyaW5nIG9mIHRoaXMgR2FtZU9iamVjdFxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TmFtZSgpIDogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIERPTSBlbGVtZW50IHRoYXQgcmVwcmVzZW50cyB0aGlzIEdhbWVPYmplY3RcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtIVE1MRGl2RWxlbWVudH1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RWxlbWVudCgpIDogSFRNTERpdkVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIG9iamVjdCBpcyB2aXNpYmxlIChidXQgc3RpbGwgZXhlY3V0aW5nXG4gICAgICogaXRzIHVwZGF0ZSBsb29wKVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHVibGljIGlzVmlzaWJsZSgpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1Zpc2libGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgb2JqZWN0IHdpbGwgYmUgZGVzdHJveWVkIG5leHQgZnJhbWVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIHB1YmxpYyBpc0Rlc3Ryb3lpbmcoKSA6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEZXN0cm95aW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgb2JqZWN0IGlzIGRpc2FibGVkIChpZS4gbm90IGV4ZWN1dGluZ1xuICAgICAqIGl0cyB1cGRhdGUgbG9vcCBhbmQgcmVuZGVyaW5nKVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHVibGljIGlzRGlzYWJsZWQoKSA6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBIVE1MIGVsZW1lbnQgdGhhdCByZXByZXNlbnRzIHRoaXMgR2FtZU9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnQgXG4gICAgICovXG4gICAgcHVibGljIHNldEVsZW1lbnQoZWxlbWVudDogSFRNTERpdkVsZW1lbnQpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBjb21wb25lbnQgdGhhdCBob29rcyBpbnRvIHRoaXMgR2FtZU9iamVjdCdzIGxpZmVjeWNsZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnQgXG4gICAgICovXG4gICAgcHVibGljIGFkZENvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgU3ByaXRlIHRoYXQgcmVwcmVzZW50cyB0aGlzIEdhbWVPYmplY3QuIElmIG5vIFNwcml0ZSBpc1xuICAgICAqIHNldCwgbm90aGluZyB3aWxsIGhhcHBlbiBpbiB0aGUgcmVuZGVyIGN5Y2xlIGZvciB0aGlzIG9iamVjdC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1Nwcml0ZX0gY29uZmlnIFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRTcHJpdGUoc3ByaXRlOiBTcHJpdGUpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IHNwcml0ZTtcbiAgICB9XG4gICAgIFxuICAgIC8qKlxuICAgICAqIFNldHMgdGhpcyBHYW1lT2JqZWN0IGFzIHRoZSBjaGlsZCBvZiB0aGUgZ2l2ZW4gR2FtZU9iamVjdC4gSW4gb3RoZXJcbiAgICAgKiB3b3JkcywgaXQgd2lsbCBtb3ZlLCBzY2FsZSBhbmQgcm90YXRlIHJlbGF0aXZlbHkgd2hlbmV2ZXIgdGhlIHBhcmVudCBkb2VzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gZ2FtZU9iamVjdCBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0UGFyZW50KGdhbWVPYmplY3Q6IHRoaXMpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybS5zZXRQYXJlbnQoZ2FtZU9iamVjdC5nZXRUcmFuc2Zvcm0oKSk7XG4gICAgICAgIGdhbWVPYmplY3QuZ2V0VHJhbnNmb3JtKCkuYWRkQ2hpbGQodGhpcy5fdHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBvYmplY3QuIFNldHRpbmcgdG8gZmFsc2VcbiAgICAgKiBlZmZlY3RpdmVseSBzZXRzICdkaXNwbGF5OiBub25lJyBjc3NcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmlzaWJsZSBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0VmlzaWJpbGl0eShpc1Zpc2libGU6IGJvb2xlYW4pIDogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuX2lzVmlzaWJsZSAhPSBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzVmlzaWJsZSA/ICdub25lJyA6ICdoaWRkZW4nO1xuICAgICAgICAgICAgdGhpcy5faXNWaXNpYmxlID0gaXNWaXNpYmxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB3aGV0aGVyIHRoZSBvYmplY3QgaXMgZGlzYWJsZWQuXG4gICAgICogXG4gICAgICogSW4gYSBkaXNhYmxlZCBzdGF0ZSwgdGhlIG9iamVjdCBuZWl0aGVyIHJlbmRlcnMgbm9yXG4gICAgICogZXhlY3V0ZXMgaXRzIHVwZGF0ZSBsb29wLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNEaXNhYmxlZCBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0RGlzYWJsZWQoaXNEaXNhYmxlZDogYm9vbGVhbikgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzRGlzYWJsZWQgPyAnbm9uZScgOiAnaGlkZGVuJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXJrcyB0aGUgb2JqZWN0IGZvciBkZXN0cnVjdGlvbiBhdCB0aGUgZW5kIG9mIHRoZSBmcmFtZS5cbiAgICAgKiBGdXJ0aGVybW9yZSwgdGhlIG9iamVjdCB3aWxsIG5vdCBleGVjdXRlIGl0cyB1cGRhdGUgbG9vcCBpZiBcbiAgICAgKiBpdCBoYXNuJ3QgYWxyZWFkeSBleGVjdXRlZCBpdCB5ZXQuXG4gICAgICovXG4gICAgcHVibGljIGRlc3Ryb3koKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9pc0Rlc3Ryb3lpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uRGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIG9uSW5zdGFudGlhdGUoKSBvbiBhbGwgY29tcG9uZW50cyBvbiB0aGlzIEdhbWVPYmplY3RcbiAgICAgKi9cbiAgICBwdWJsaWMgb25JbnN0YW50aWF0ZSgpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaChjID0+IGMub25JbnN0YW50aWF0ZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBvbkRlc3Ryb3koKSBvbiBhbGwgY29tcG9uZW50cyBvbiB0aGlzIEdhbWVPYmplY3RcbiAgICAgKi9cbiAgICBwdWJsaWMgb25EZXN0cm95KCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKGMgPT4gYy5vbkRlc3Ryb3koKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgb25VcGRhdGUoKSBvbiBhbGwgY29tcG9uZW50cyBvbiB0aGlzIEdhbWVPYmplY3RcbiAgICAgKi9cbiAgICBwdWJsaWMgb25VcGRhdGUodGltZXN0ZXA6IG51bWJlcikgOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5faXNEaXNhYmxlZCB8fCB0aGlzLl9pc0Rlc3Ryb3lpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goYyA9PiBjLm9uVXBkYXRlKHRpbWVzdGVwKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ29sbGlzaW9uKGNvbGxpZGluZ09ianM6IENvbGxpZGVyW10pIDogdm9pZCB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3RoaXMuX2lkfSBpcyBjb2xsaWRpbmcgd2l0aGAsIGNvbGxpZGluZ09ianMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIG9iamVjdCBpbiB3b3JsZCBzcGFjZSBlYWNoIGdhbWUgbG9vcCBmcmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZW5kZXIoKSA6IHZvaWQge1xuICAgICAgICBpZighdGhpcy5faXNWaXNpYmxlIHx8IHRoaXMuX2lzRGlzYWJsZWQgfHwgdGhpcy5faXNEZXN0cm95aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBzY3JlZW5TcGFjZVBvcyA9IG51bGw7XG4gICAgICAgIGxldCBpc1RyYW5zZm9ybURpcnR5ID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICAvLyBvbmx5IHJlZHJhdyB3aGVuIHRoZSBUcmFuc2Zvcm0gaGFzIGFjdHVhbGx5IG1vdmVkXG4gICAgICAgIGlmKHRoaXMuX3RyYW5zZm9ybS5pc0RpcnR5KCkpIHtcbiAgICAgICAgICAgIC8vIHRoZSBUcmFuc2Zvcm0gc3RvcmVzIG91ciB3b3JsZC1zcGFjZSBjb29yZGluYXRlcyxcbiAgICAgICAgICAgIC8vIGJ1dCB3ZSBuZWVkIHRvIHJlbmRlciB0aGUgb2JqZWN0IGluIHNjcmVlbi1zcGFjZVxuICAgICAgICAgICAgc2NyZWVuU3BhY2VQb3MgPSB0aGlzLl9nZXRTY3JlZW5Qb3NpdGlvbigpO1xuXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmxlZnQgPSBzY3JlZW5TcGFjZVBvcy54LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnRvcCAgPSBzY3JlZW5TcGFjZVBvcy55LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybS5jbGVhbigpO1xuXG4gICAgICAgICAgICBpc1RyYW5zZm9ybURpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9ubHkgcmVkcmF3IHRoZSBzcHJpdGUgaWYgdGhlIFNwcml0ZSBvciBUcmFuc2Zvcm0gaGFzIG1vdmVkXG4gICAgICAgIGlmKHRoaXMuX3Nwcml0ZSAmJiAoaXNUcmFuc2Zvcm1EaXJ0eSB8fCB0aGlzLl9zcHJpdGUuaXNEaXJ0eSgpKSkge1xuICAgICAgICAgICAgc2NyZWVuU3BhY2VQb3MgPSBzY3JlZW5TcGFjZVBvcyB8fCB0aGlzLl9nZXRTY3JlZW5Qb3NpdGlvbigpO1xuXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGUucmVuZGVyKHNjcmVlblNwYWNlUG9zKTtcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5jbGVhbigpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRTY3JlZW5Qb3NpdGlvbigpIDogVmVjdG9yIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLl90cmFuc2Zvcm0uZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgY2FtZXJhUG9zID0gQ2FtZXJhLmluc3RhbmNlLnRyYW5zZm9ybS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoXG4gICAgICAgICAgICBwb3NpdGlvbi54IC0gY2FtZXJhUG9zLngsXG4gICAgICAgICAgICBwb3NpdGlvbi55IC0gY2FtZXJhUG9zLnlcbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9HYW1lT2JqZWN0LnRzIiwiaW1wb3J0IHsgVHJhbnNmb3JtLCBTY2VuZUdyYXBoIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBDYW1lcmE7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZSB8fCAodGhpcy5faW5zdGFuY2UgPSBuZXcgdGhpcygpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFuc2Zvcm06IFRyYW5zZm9ybTtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKTtcblxuICAgICAgICAvLyBzaW5jZSBhIGNhbWVyYSBtb3ZlIG5lZWRzIHRvIHVwZGF0ZSBldmVyeXRoaW5nIGluIHZpZXcsXG4gICAgICAgIC8vIHNldCBhbGwgb2JqZWN0cyBpbiB0aGUgdmlld3BvcnQgYXMgJ2RpcnR5JyBzbyB0aGV5IGdldFxuICAgICAgICAvLyByZWRyYXduXG4gICAgICAgIFxuICAgICAgICAvLyBUT0RPOiB2aWV3cG9ydCBjdWxsaW5nXG4gICAgICAgIGNvbnN0IHNldFBvc2l0aW9uRnVuYyA9IHRoaXMuX3RyYW5zZm9ybS5zZXRQb3NpdGlvbi5iaW5kKHRoaXMuX3RyYW5zZm9ybSk7XG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybS5zZXRQb3NpdGlvbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgc2V0UG9zaXRpb25GdW5jKHZhbHVlKTtcbiAgICAgICAgICAgIFNjZW5lR3JhcGguaW5zdGFuY2UuaGllcmFyY2h5LmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgICAgICBvYmouZ2V0VHJhbnNmb3JtKCkuZGlydHkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHRyYW5zZm9ybSgpIDogVHJhbnNmb3JtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zZm9ybTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvc2NyZWVuL0NhbWVyYS50cyIsImltcG9ydCB7IFZpZXdwb3J0IH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvc2NyZWVuJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcblxuLyoqXG4gKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgSFRNTCBjYW52YXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IENhbnZhcztcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyB0aGlzKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbnRleHQ6IGFueTtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgaWYoIXRoaXMuX2NvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhczogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gVmlld3BvcnQuaW5zdGFuY2Uud2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gVmlld3BvcnQuaW5zdGFuY2UuaGVpZ2h0O1xuXG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyBhIGxpbmUgb24gdGhlIHNjcmVlblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IxIFxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IyIFxuICAgICAqL1xuICAgIGRyYXdMaW5lKHZlY3RvcjE6IFZlY3RvciwgdmVjdG9yMjogVmVjdG9yLCBjb2xvciA9ICdncmVlbicpIHtcbiAgICAgICAgY29uc3QgYyA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICBjLm1vdmVUbyh2ZWN0b3IxLngsIHZlY3RvcjEueSk7XG4gICAgICAgIGMubGluZVRvKHZlY3RvcjIueCwgdmVjdG9yMi55KTtcbiAgICAgICAgYy5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vQ2FudmFzLnRzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGJyb3dzZXIgd2luZG93XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdwb3J0IHtcblxuICAgIC8vIHNpbmdsZXRvbiBiZWNhdXNlIHdlIGRvbid0IHdhbnQgbW9yZSB0aGFuIG9uZSBicm93c2VyIHJlc2l6ZSBldmVudCBsaXN0ZW5lclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVmlld3BvcnQ7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSA6IFZpZXdwb3J0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyB0aGlzKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2Jyb3dzZXJIZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9icm93c2VyV2lkdGg6IG51bWJlcjtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdmlld3BvcnRXaWR0aDogbnVtYmVyID0gODAwLCBcbiAgICAgICAgcHJpdmF0ZSB2aWV3cG9ydEhlaWdodDogbnVtYmVyID0gNDAwXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX3JlY2FsY3VsYXRlU2NyZWVuKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZWNhbGN1bGF0ZVNjcmVlbi5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBnZXQgd2lkdGgoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9icm93c2VyV2lkdGg7XG4gICAgfVxuICAgIGdldCBoZWlnaHQoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9icm93c2VySGVpZ2h0O1xuICAgIH1cbiAgICBnZXQgc2NyZWVuKCkgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuICAgIGdldCBvcmlnaW4oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFxuICAgICAgICAgICAgdGhpcy53aWR0aCAvIDIsXG4gICAgICAgICAgICB0aGlzLmhlaWdodCAvIDIsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmUtY2FjaGUgdGhlIHNpemUgb2YgdGhlIGJyb3dzZXIgd2luZG93IHRvIHByZXZlbnQgcmVmbG93cy9yZWxheW91dHNcbiAgICAgKi9cbiAgICBfcmVjYWxjdWxhdGVTY3JlZW4oKSA6IHZvaWQge1xuICAgICAgICAvLyBUT0RPOiBleGVjdXRlIG9ubHkgZHVyaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICB0aGlzLl9icm93c2VySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLl9icm93c2VyV2lkdGggID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L3NjcmVlbi9WaWV3cG9ydC50cyIsImltcG9ydCB7IFRyYW5zZm9ybSwgU3ByaXRlLCBTcHJpdGVDb25maWcsIEdhbWVPYmplY3QsIENvbXBvbmVudCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuaW1wb3J0IHsgQ29sbGlkZXIgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9jb2xsaXNpb25zJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcbmltcG9ydCB3aXRoQ29sbGlkZXIgZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9Db2xsaWRlcmFibGUnO1xuaW1wb3J0IFNjZW5lR3JhcGggZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9TY2VuZUdyYXBoJztcblxuZXhwb3J0IGludGVyZmFjZSBHYW1lT2JqZWN0Q29uZmlnIHtcbiAgICBwb3NpdGlvbj86IFZlY3RvcjtcbiAgICBjb21wb25lbnRzPzogQXJyYXk8bmV3KG9iajogR2FtZU9iamVjdCkgPT4gQ29tcG9uZW50PjtcbiAgICBzcHJpdGU/OiBTcHJpdGVDb25maWc7XG4gICAgb3JkZXI/OiBudW1iZXI7XG4gICAgY29sbGlkZXI/OiBDb2xsaWRlcjtcbn1cblxuLyoqXG4gKiBJbnNlcnRzIGEgbmV3IEdhbWVPYmplY3QgPGRpdj4gaW50byB0aGUgcGFnZSBib2R5XG4gKiBcbiAqIEBwYXJhbSBpZCAgICAgICAgVW5pcXVlIGlkZW50aWZpZXJcbiAqIEBwYXJhbSB6SW5kZXggICAgQmFzaWNhbGx5IHRoZSBvYmplY3QncyBwZXJtYW5lbnQgWiBheGlzIGNvb3JkaW5hdGVcbiAqL1xuZnVuY3Rpb24gaW5qZWN0RG9tKGlkOiBzdHJpbmcsIHpJbmRleDogbnVtYmVyID0gMCkgOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuaWQgPSBpZDtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWVPYmplY3QnKTtcbiAgICBlbGVtZW50LnN0eWxlLnpJbmRleCA9IHpJbmRleC50b1N0cmluZygpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUdhbWVPYmplY3QoaWQ6IHN0cmluZywgY29uZmlnOiBHYW1lT2JqZWN0Q29uZmlnKSA6IEdhbWVPYmplY3Qge1xuICAgIGxldCBnYW1lT2JqZWN0VHlwZSA9IEdhbWVPYmplY3Q7XG5cbiAgICAvLyBpZiB0aGUgb2JqZWN0IHJlcXVpcmVzIGEgY29sbGlkZXIsIGFwcGx5IHRoZSBnaXZlbiBjb2xsaWRlciBtaXhpbiBcbiAgICAvLyB0byB0aGUgR2FtZU9iamVjdFxuICAgIGlmKGNvbmZpZy5jb2xsaWRlcikge1xuICAgICAgICBnYW1lT2JqZWN0VHlwZSA9IHdpdGhDb2xsaWRlcihHYW1lT2JqZWN0LCBjb25maWcuY29sbGlkZXIpO1xuICAgICAgICBTY2VuZUdyYXBoLmluc3RhbmNlLmFkZENvbGxpZGVyKGNvbmZpZy5jb2xsaWRlcik7XG4gICAgfVxuICAgIGxldCBvYmogPSBuZXcgZ2FtZU9iamVjdFR5cGUoaWQsIG5ldyBUcmFuc2Zvcm0oY29uZmlnLnBvc2l0aW9uKSk7XG5cbiAgICBcbiAgICBpZihjb25maWcuc3ByaXRlICYmIGNvbmZpZy5zcHJpdGUuYXNzZXRzKSB7XG4gICAgICAgIGNvbnN0IHNwcml0ZUluc3RhbmNlID0gbmV3IFNwcml0ZShjb25maWcuc3ByaXRlKTtcbiAgICAgICAgc3ByaXRlSW5zdGFuY2UuYXBwZW5kRG9tKCk7XG4gICAgICAgIG9iai5zZXRTcHJpdGUoc3ByaXRlSW5zdGFuY2UpO1xuICAgIH1cblxuICAgIGlmKGNvbmZpZy5jb21wb25lbnRzKSB7XG4gICAgICAgIGNvbmZpZy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50TmFtZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgY29tcG9uZW50TmFtZShvYmopO1xuICAgICAgICAgICAgb2JqLmFkZENvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gaW5qZWN0RG9tKGlkLCBjb25maWcub3JkZXIpO1xuICAgIG9iai5zZXRFbGVtZW50KGVsZW1lbnQpO1xuICAgIG9iai5vbkluc3RhbnRpYXRlKCk7XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvR2FtZU9iamVjdEZhY3RvcnkudHMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5pbXBvcnQgeyBCb3VuZGluZ0JveCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuLy8gaW1wb3J0IHsgd2l0aERpcnR5RmxhZyB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNwcml0ZUNvbmZpZyB7XG4gICAgYXNzZXRzOiBBcnJheTxzdHJpbmc+O1xuICAgIGJvdW5kczogQm91bmRpbmdCb3g7XG4gICAgdGltaW5nPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcblxuICAgIC8qKlxuICAgICAqIFdvcmxkLXNwYWNlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzcHJpdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9ib3VuZGluZ0JveDogQm91bmRpbmdCb3g7XG5cbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBpbWFnZSBwYXRocyB0byBkcmF3XG4gICAgICovXG4gICAgcHJpdmF0ZSBfYXNzZXRzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgRE9NIHRoYXQgdGhpcyBzcHJpdGUgcmVwcmVzZW50c1xuICAgICAqL1xuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogTGFzdCB2ZWN0b3IgcG9zaXRpb24gdGhpcyBzcHJpdGUgd2FzIGRyYXduIGF0XG4gICAgICovXG4gICAgcHJpdmF0ZSBfbGFzdFBvc2l0aW9uOiBWZWN0b3IgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgbWlsbGlzZWNvbmRzIGJldHdlZW4gc3ByaXRlIGZyYW1lIGNoYW5nZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIF90aW1pbmc6IG51bWJlciA9IDE1MDtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgZnJhbWUgb2YgdGhlIGFzc2V0IGFycmF5IHRvIGRyYXdcbiAgICAgKi9cbiAgICBwcml2YXRlIF9mcmFtZUluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICogRHJhdyB0aW1lclxuICAgICAqL1xuICAgIHByaXZhdGUgX2FuaW1hdGlvblRpbWVyOiBudW1iZXI7XG5cblxuXG4gICAgcHJpdmF0ZSBfaXNEaXJ0eTogYm9vbGVhbiA9IHRydWU7XG4gICAgXG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFNwcml0ZUNvbmZpZykge1xuICAgICAgICBpZighY29uZmlnLmJvdW5kcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTcHJpdGUgaW5zdGFudGlhdGlvbiBmYWlsZWQ6IG5vIEJvdW5kaW5nQm94IHByb3ZpZGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9ib3VuZGluZ0JveCA9IGNvbmZpZy5ib3VuZHM7XG4gICAgICAgIHRoaXMuX2Fzc2V0cyA9IGNvbmZpZy5hc3NldHM7XG5cbiAgICAgICAgLy8gaWYgbW9yZSB0aGFuIG9uZSBpbWFnZSBwYXRoIGlzIGdpdmVuLCB0cmVhdCB0aGlzIHNwcml0ZSBhcyBhbiBhbmltYXRlZCBzcHJpdGVcbiAgICAgICAgaWYoY29uZmlnLmFzc2V0cyAmJiBjb25maWcuYXNzZXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uVGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLl91cGRhdGVGcmFtZS5iaW5kKHRoaXMpLCB0aGlzLl90aW1pbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGFzdFBvc2l0aW9uID0gbmV3IFZlY3RvcigpO1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgYm91bmRzKCkgOiBCb3VuZGluZ0JveCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZGluZ0JveDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBET00gdGhhdCBob2xkcyB0aGlzIHNwcml0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBhcHBlbmREb20oKSA6IHZvaWQge1xuICAgICAgICBjb25zdCBib3VuZHMgPSB0aGlzLl9ib3VuZGluZ0JveDtcblxuICAgICAgICBjb25zdCBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nwcml0ZScpO1xuICAgICAgICBlbGVtZW50LmlkID0gYHNwcml0ZV8ke25ldyBEYXRlKCkuZ2V0VGltZSgpfWA7XG5cbiAgICAgICAgaWYodGhpcy5fYXNzZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuX2Fzc2V0c1swXX0pYDtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGJvdW5kcy5wb3NpdGlvbi54LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9ICgtYm91bmRzLnBvc2l0aW9uLnkpLnRvU3RyaW5nKCk7ICAgLy8gZmxpcCBZIGJlY2F1c2UgdGhlIGJyb3dzZXIgWSBpcyByZXZlcnNlZFxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IChib3VuZHMuZGltZW5zaW9ucy54KS50b1N0cmluZygpO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAoYm91bmRzLmRpbWVuc2lvbnMueSkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWxseSBzZXRzIHRoZSBkcmF3IHBvc2l0aW9uIG9mIHRoZSBTcHJpdGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gb3JpZ2luIFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRQb3NpdGlvbihvcmlnaW46IFZlY3RvcikgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYm91bmRpbmdCb3guc2V0T3JpZ2luKG9yaWdpbik7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIERPTSBwb3NpdGlvbiBvZiB0aGUgU3ByaXRlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZWN0b3J9IG9yaWdpbiBcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVuZGVyKG9yaWdpbjogVmVjdG9yKSA6IHZvaWQge1xuICAgICAgICAvLyBUT0RPOiBtb3ZlIHJlbmRlciBsb2dpYyBpbnRvIGEgU3ByaXRlUmVuZGVyZXIgY2xhc3NcbiAgICAgICAgY29uc3QgYm91bmRzID0gdGhpcy5fYm91bmRpbmdCb3g7XG4gICAgICAgIGJvdW5kcy5zZXRPcmlnaW4ob3JpZ2luKTtcbiAgICAgICAgXG4gICAgICAgIGlmKFxuICAgICAgICAgICAgYm91bmRzLnBvc2l0aW9uLnggPT09IHRoaXMuX2xhc3RQb3NpdGlvbi54ICYmIFxuICAgICAgICAgICAgYm91bmRzLnBvc2l0aW9uLnkgPT09IHRoaXMuX2xhc3RQb3NpdGlvbi55XG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5sZWZ0ID0gYm91bmRzLnBvc2l0aW9uLngudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS50b3AgPSAoLWJvdW5kcy5wb3NpdGlvbi55KS50b1N0cmluZygpOyAgIC8vIGZsaXAgWSBiZWNhdXNlIHRoZSBicm93c2VyIFkgaXMgcmV2ZXJzZWRcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS53aWR0aCA9IChib3VuZHMuZGltZW5zaW9ucy54ICogMSkudG9TdHJpbmcoKTsgICAvLyBUT0RPOiByZXBsYWNlIDEgd2l0aCBzY2FsaW5nXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gKGJvdW5kcy5kaW1lbnNpb25zLnkgKiAxKS50b1N0cmluZygpOyAgLy8gVE9ETzogcmVwbGFjZSAxIHdpdGggc2NhbGluZ1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fbGFzdFBvc2l0aW9uID0gYm91bmRzLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcmNlcyBhIGRyYXcgb2YgdGhlIG5leHQgc3ByaXRlIGluIGFuIGFuaW1hdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZUZyYW1lKCkgOiB2b2lkIHtcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlIHVzaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpXG4gICAgICAgIHRoaXMuX2ZyYW1lSW5kZXggPSArK3RoaXMuX2ZyYW1lSW5kZXggJSB0aGlzLl9hc3NldHMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLl9hc3NldHNbdGhpcy5fZnJhbWVJbmRleF19KWA7XG4gICAgfVxuXG5cbiAgICAvLyBUT0RPOiByZWZhY3RvciB0aGlzIGludG8gbWl4aW5cbiAgICBwdWJsaWMgY2xlYW4oKSB7XG4gICAgICAgIHRoaXMuX2lzRGlydHkgPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIGRpcnR5KCkge1xuICAgICAgICB0aGlzLl9pc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIGlzRGlydHkoKSA6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEaXJ0eTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvb2JqZWN0cy9TcHJpdGUudHMiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zZm9ybSB7XG5cbiAgICBwcml2YXRlIF9wb3NpdGlvbjogVmVjdG9yO1xuICAgIHByaXZhdGUgX3JvdGF0aW9uOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfc2NhbGU6IG51bWJlcjtcbiAgICBwcml2YXRlIF9sb2NhbFBvc2l0aW9uOiBWZWN0b3IgPSBWZWN0b3Iub3JpZ2luO1xuXG4gICAgcHJpdmF0ZSBfcGFyZW50OiBUcmFuc2Zvcm0gPSBudWxsO1xuICAgIHByaXZhdGUgX2NoaWxkcmVuOiBUcmFuc2Zvcm1bXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgdHJhbnNmb3JtIG5lZWRzIGEgcmVkcmF3XG4gICAgICovXG4gICAgcHJpdmF0ZSBfaXNEaXJ0eTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcG9zaXRpb246IFZlY3RvciA9IFZlY3Rvci5vcmlnaW4sXG4gICAgICAgIHJvdGF0aW9uOiBudW1iZXIgPSAwLFxuICAgICAgICBzY2FsZTogbnVtYmVyID0gMSxcbiAgICApIHtcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5fcm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5fc2NhbGUgPSBzY2FsZTtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICAgIH1cbiAgICBzZXRQb3NpdGlvbih2YWx1ZTogVmVjdG9yKSA6IHZvaWQge1xuICAgICAgICBpZih2YWx1ZS54ID09PSB0aGlzLl9wb3NpdGlvbi54ICYmIHZhbHVlLnkgPT09IHRoaXMuX3Bvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpZmYgPSB2YWx1ZS5zdWJ0cmFjdCh0aGlzLl9wb3NpdGlvbik7XG5cbiAgICAgICAgLy8gaWYgdGhpcyBHYW1lT2JqZWN0IG1vdmVkLCB1cGRhdGUgaXRzIGxvY2FsIHBvc2l0aW9uIHJlbGF0aXZlIHRvXG4gICAgICAgIC8vIGl0cyBwYXJlbnRcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSB2YWx1ZTtcbiAgICAgICAgaWYodGhpcy5fcGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NhbFBvc2l0aW9uID0gdmFsdWUuc3VidHJhY3QodGhpcy5fcGFyZW50LmdldFBvc2l0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBpZiB0aGlzIEdhbWVPYmplY3QgaGFzIGNoaWxkcmVuLCB1cGRhdGUgdGhlaXIgcG9zaXRpb25zXG4gICAgICAgIGlmKHRoaXMuX2NoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvcihsZXQgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXRQb3NpdGlvbihjaGlsZC5nZXRQb3NpdGlvbigpLmFkZChkaWZmKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRQYXJlbnQoKSA6IFRyYW5zZm9ybSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gICAgfVxuICAgIHNldFBhcmVudCh0cmFuc2Zvcm06IFRyYW5zZm9ybSkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gdHJhbnNmb3JtO1xuICAgICAgICB0aGlzLl9sb2NhbFBvc2l0aW9uID0gdGhpcy5fcG9zaXRpb24uc3VidHJhY3QodHJhbnNmb3JtLmdldFBvc2l0aW9uKCkpO1xuICAgIH1cblxuICAgIGdldENoaWxkcmVuKCkgOiBBcnJheTxUcmFuc2Zvcm0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuO1xuICAgIH1cbiAgICBhZGRDaGlsZCh0cmFuc2Zvcm06IFRyYW5zZm9ybSkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaCh0cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBWZWN0b3Igb2YgdGhlIHJlbGF0aXZlIGRpc3RhbmNlIHRvIHRoaXMgVHJhbnNmb3JtJ3MgcGFyZW50XG4gICAgICovXG4gICAgZ2V0TG9jYWxQb3NpdGlvbigpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsUG9zaXRpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvcnRjdXQgbWV0aG9kIGZvciBhZGRpbmcgdGhlIGdpdmVuIHZlY3RvciB0byB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2YWx1ZSBcbiAgICAgKi9cbiAgICB0cmFuc2xhdGUodmFsdWU6IFZlY3RvcikgOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmV3UG9zID0gdGhpcy5fcG9zaXRpb24uYWRkKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihuZXdQb3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIFRyYW5zZm9ybSBhcyAnY2xlYW4nLiBXaGVuIGluIGEgJ2NsZWFuJyBzdGF0ZSwgdGhlIFRyYW5zZm9ybVxuICAgICAqIHdpbGwgbm90IHJlZHJhdyB1bnRpbCBpdHMgbWFuaXB1bGF0ZWQgYWdhaW4gKG1vdmUsIHNjYWxlLCByb3RhdGUpXG4gICAgICovXG4gICAgY2xlYW4oKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9pc0RpcnR5ID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEZvcmNlcyBhIHJlLWRyYXdcbiAgICAgKi9cbiAgICBkaXJ0eSgpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lzRGlydHkgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgVHJhbnNmb3JtIG5lZWRzIHRvIGJlIHJlZHJhd24gZHVlIHRvIGEgbWFuaXB1bGF0aW9uXG4gICAgICogXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0RpcnR5KCkgOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGlydHk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L29iamVjdHMvVHJhbnNmb3JtLnRzIiwiaW1wb3J0IHsgVHlwZXMgfSBmcm9tICdlbmdpbmUvaW50ZXJuYWwnO1xuXG4vKipcbiAqIEFkZHMgYSBkaXJ0eSBmbGFnIHRvIGEgYmFzZSBjbGFzcy5cbiAqIFxuICogQSBkaXJ0eSBmbGFnIGluIHRoaXMgY2FzZSBpcyB1c2VkIHRvIGRldGVybWluZSBpZiBcbiAqIHRoZSBkZWNvcmF0ZWQgY2xhc3MgbmVlZHMgdG8gYmUgcmVkcmF3biBpbiB0aGVcbiAqIHJlbmRlciBjeWNsZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aERpcnR5RmxhZzxUIGV4dGVuZHMgVHlwZXMuQ29uc3RydWN0b3I+KEJhc2U6IFQpIHtcbiAgICByZXR1cm4gY2xhc3MgRGlydHlGbGFnIGV4dGVuZHMgQmFzZSB7XG4gICAgICAgIHByb3RlY3RlZCBfaXNEaXJ0eTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAgICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHByb3RlY3RlZCBjbGVhbigpIDogdm9pZCB7XG4gICAgICAgICAgICB0aGlzLl9pc0RpcnR5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcHJvdGVjdGVkIGRpcnR5KCkgOiB2b2lkIHtcbiAgICAgICAgICAgIHRoaXMuX2lzRGlydHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHByb3RlY3RlZCBzZXREaXJ0eUZsYWcoaXNEaXJ0eTogYm9vbGVhbikge1xuICAgICAgICAgICAgdGhpcy5faXNEaXJ0eSA9IGlzRGlydHk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZ2V0IGlzRGlydHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNEaXJ0eTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9vYmplY3RzL0RpcnR5RmxhZy50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuaW1wb3J0IHsgS2V5Ym9hcmQsIEtleSB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L2lucHV0JztcbmltcG9ydCB7IFZpZXdwb3J0IH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvc2NyZWVuJztcbmltcG9ydCB7IE1hdGhzIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG5leHBvcnQgY2xhc3MgUGxhbmVNb3ZlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfdmVsb2NpdHk6IFZlY3RvciA9IFZlY3Rvci5vcmlnaW47XG5cbiAgICBwdWJsaWMgb25JbnN0YW50aWF0ZSgpIDogdm9pZCB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBvblVwZGF0ZSh0aW1lc3RlcDogbnVtYmVyKSA6IHZvaWQge1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSB0aGlzLmdhbWVPYmplY3QuZ2V0VHJhbnNmb3JtKCk7XG4gICAgICAgIGxldCBwb3MgPSB0cmFuc2Zvcm0uZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICBjb25zdCBrZXlib2FyZCA9IEtleWJvYXJkLmluc3RhbmNlO1xuXG4gICAgICAgIGlmKGtleWJvYXJkLmdldEtleVByZXNzKEtleS5EKSkge1xuICAgICAgICAgICAgcG9zID0gcG9zLmFkZChuZXcgVmVjdG9yKDQsIDApKTtcbiAgICAgICAgfVxuICAgICAgICBpZihrZXlib2FyZC5nZXRLZXlQcmVzcyhLZXkuQSkpIHtcbiAgICAgICAgICAgIHBvcyA9IHBvcy5hZGQobmV3IFZlY3RvcigtNCwgMCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGtleWJvYXJkLmdldEtleVByZXNzKEtleS5XKSkge1xuICAgICAgICAgICAgcG9zID0gcG9zLmFkZChuZXcgVmVjdG9yKDAsIDQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZihrZXlib2FyZC5nZXRLZXlQcmVzcyhLZXkuUykpIHtcbiAgICAgICAgICAgIHBvcyA9IHBvcy5hZGQobmV3IFZlY3RvcigwLCAtNCkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0cmFuc2Zvcm0uc2V0UG9zaXRpb24ocG9zKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2FtZXMvZmxhcHB5L2NvbXBvbmVudHMvUGxhbmVNb3ZlbWVudC50cyIsImV4cG9ydCB7IEtleWJvYXJkLCBLZXkgfSBmcm9tICcuL0tleWJvYXJkJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbGlicmFyeS9pbnB1dC9pbmRleC50cyIsIi8qKlxuICogUmVwcmVzZW50cyBhIGtleWJvYXJkIGtleVxuICovXG5leHBvcnQgZW51bSBLZXkge1xuICAgIEEgPSA2NSxcbiAgICBXID0gODcsXG4gICAgUyA9IDgzLFxuICAgIEQgPSA2OCxcbiAgICBTUEFDRUJBUiA9IDMyLFxuICAgIEFSUk9XX0xFRlQgPSAzNyxcbiAgICBBUlJPV19VUCA9IDM4LFxuICAgIEFSUk9XX1JJR0hUID0gMzksXG4gICAgQVJST1dfRE9XTiA9IDQwLFxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMga2V5IHByZXNzLCBrZXkgZG93biwgZXRjIGV2ZW50IGRhdGFcbiAqL1xuaW50ZXJmYWNlIEtleWJvYXJkRXZlbnQge1xuICAgIGtleUNvZGU6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBIYW5kbGVzIGludGVyYWN0aW9uIHdpdGggdGhlIGtleWJvYXJkIGFuZCByZXRyaWV2aW5nXG4gKiBwcmVzcyB2YWx1ZXNcbiAqL1xuZXhwb3J0IGNsYXNzIEtleWJvYXJkIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9rZXlEb3duVmFsdWVzOiBNYXA8S2V5LCBudW1iZXI+ID0gbmV3IE1hcCgpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2tleVByZXNzQ29tcGxldGU6IE1hcDxLZXksIGJvb2xlYW4+ID0gbmV3IE1hcCgpO1xuXG4gICAgLyoqXG4gICAgICogU2luZ2xldG9uIHNpbmNlIHdlIG9ubHkgd2FudCBvbmUgbG9jYWwgS2V5Ym9hcmQgdG8gZXhpc3RcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEtleWJvYXJkO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24uYmluZCh0aGlzKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5VXAuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duLmJpbmQodGhpcykpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMga2V5IGRvd24gZXZlbnRzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9vbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIDogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMuX2tleURvd25WYWx1ZXMuc2V0KGtleUNvZGUsIDEpO1xuXG4gICAgICAgIGlmKHRoaXMuX2tleVByZXNzQ29tcGxldGUuZ2V0KGtleUNvZGUpKSB7XG4gICAgICAgICAgICB0aGlzLl9rZXlEb3duVmFsdWVzLnNldChrZXlDb2RlLCAxKTtcbiAgICAgICAgICAgIHRoaXMuX2tleVByZXNzQ29tcGxldGUuc2V0KGtleUNvZGUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMga2V5IHVwIGV2ZW50c1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgXG4gICAgICovXG4gICAgcHJpdmF0ZSBfb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkgOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcbiAgICAgICAgdGhpcy5fa2V5RG93blZhbHVlcy5zZXQoa2V5Q29kZSwgMCk7XG4gICAgICAgIHRoaXMuX2tleVByZXNzQ29tcGxldGUuc2V0KGtleUNvZGUsIHRydWUpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBrZXlwcmVzcyB2YWx1ZSBvZiB0aGUgZ2l2ZW4ga2V5XG4gICAgICogKDAgPSBub3QgcHJlc3NlZCB8IDEgPSBrZXkgZG93bilcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IGtleSBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0S2V5RG93bihrZXlDb2RlOiBLZXkpIDogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9rZXlEb3duVmFsdWVzLmdldChrZXlDb2RlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlIHx8IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBnZXRLZXlEb3duKCkgZXhjZXB0IHRvZ2dsZXMgdGhlIHZhbHVlIHRvIDBcbiAgICAgKiBhZnRlciBsaXN0ZW5pbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0S2V5UHJlc3Moa2V5Q29kZTogS2V5KSA6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fa2V5RG93blZhbHVlcy5nZXQoa2V5Q29kZSk7XG4gICAgICAgIGlmKHZhbHVlID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fa2V5UHJlc3NDb21wbGV0ZS5zZXQoa2V5Q29kZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvaW5wdXQvS2V5Ym9hcmQudHMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0LCBDb21wb25lbnQsIFNjZW5lR3JhcGgsIEJvdW5kaW5nQm94IH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L2lucHV0JztcbmltcG9ydCB7IFZpZXdwb3J0LCBDYW1lcmEgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9zY3JlZW4nO1xuaW1wb3J0IEJveENvbGxpZGVyIGZyb20gJ2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMvY29sbGlkZXJzL0JveENvbGxpZGVyJztcblxuZXhwb3J0IGNsYXNzIFNjZW5lTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfcm9ja0xpc3Q6IEFycmF5PEdhbWVPYmplY3Q+ID0gW107XG4gICAgcHJpdmF0ZSBfc2Nyb2xsU3BlZWQ6IFZlY3RvciA9IFZlY3Rvci5vcmlnaW47XG5cbiAgICBwdWJsaWMgb25JbnN0YW50aWF0ZSgpIDogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gU2NlbmVHcmFwaC5pbnN0YW5jZTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBzY2VuZS5pbnN0YW50aWF0ZSgnYmFja2dyb3VuZFNreScraSwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDgwMCAqIGksIDApLFxuICAgICAgICAgICAgICAgIG9yZGVyOiAtOTk5LFxuICAgICAgICAgICAgICAgIHNwcml0ZToge1xuICAgICAgICAgICAgICAgICAgICBhc3NldHM6IFsnYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZyddLFxuICAgICAgICAgICAgICAgICAgICBib3VuZHM6IG5ldyBCb3VuZGluZ0JveChcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoODAwICogaSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDgwMCwgNDgwKSxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGltaW5nOiAxNTAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm9jayA9IHNjZW5lLmluc3RhbnRpYXRlKCdyb2NrJywge1xuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoMzUwLCAtVmlld3BvcnQuaW5zdGFuY2UuaGVpZ2h0ICsgMjM5KSxcbiAgICAgICAgICAgIHNwcml0ZToge1xuICAgICAgICAgICAgICAgIGFzc2V0czogWydhc3NldHMvaW1hZ2VzL3JvY2tVcC5wbmcnXSxcbiAgICAgICAgICAgICAgICBib3VuZHM6IG5ldyBCb3VuZGluZ0JveChcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3RvcigzNTAsIC1WaWV3cG9ydC5pbnN0YW5jZS5oZWlnaHQgKyAyMzkpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDEwOCwgMjM5KSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbGxpZGVyOiBuZXcgQm94Q29sbGlkZXIoXG4gICAgICAgICAgICAgICAgbmV3IEJvdW5kaW5nQm94KFxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDM1MCwgLVZpZXdwb3J0Lmluc3RhbmNlLmhlaWdodCArIDIzOSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IoMTA4LCAyMzkpLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICApLFxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBzY2VuZS5pbnN0YW50aWF0ZSgnZ3JvdW5kQm90dG9tJytpLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IoODA4ICogaSwgLVZpZXdwb3J0Lmluc3RhbmNlLmhlaWdodCArIDcxKSxcbiAgICAgICAgICAgICAgICBzcHJpdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzOiBbJ2Fzc2V0cy9pbWFnZXMvZ3JvdW5kRGlydC5wbmcnXSxcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzOiBuZXcgQm91bmRpbmdCb3goXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDgwOCAqIGksIC1WaWV3cG9ydC5pbnN0YW5jZS5oZWlnaHQgKyA3MSksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKDgwOCwgNzEpLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Njcm9sbFNwZWVkID0gbmV3IFZlY3RvcigzLCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25VcGRhdGUodGltZXN0ZXA6IG51bWJlcikgOiB2b2lkIHtcbiAgICAgICAgLy8gbGV0IGNhbWVyYVBvcyA9IENhbWVyYS50cmFuc2Zvcm0uZ2V0UG9zaXRpb24oKS5hZGQodGhpcy5fc2Nyb2xsU3BlZWQpO1xuICAgICAgICAvLyBjYW1lcmFQb3MgPSBjYW1lcmFQb3MubXVsdGlwbHkodGltZXN0ZXApO1xuXG4gICAgICAgIC8vIENhbWVyYS50cmFuc2Zvcm0uc2V0UG9zaXRpb24oY2FtZXJhUG9zKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2FtZXMvZmxhcHB5L2NvbXBvbmVudHMvU2NlbmVNYW5hZ2VyLnRzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcImVuZ2luZS9saWJyYXJ5L21hdGhzXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcImVuZ2luZS9saWJyYXJ5L29iamVjdHNcIjtcblxuZXhwb3J0IGVudW0gQ29sbGlkZXJTaGFwZSB7XG4gICAgQk9YLFxuICAgIENJUkNMRSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb3gge1xuICAgIHRvcDogbnVtYmVyLFxuICAgIHJpZ2h0OiBudW1iZXIsXG4gICAgYm90dG9tOiBudW1iZXIsXG4gICAgbGVmdDogbnVtYmVyLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENpcmNsZSB7XG4gICAgcmFkaXVzOiBudW1iZXIsXG4gICAgcG9zaXRpb246IFZlY3Rvcixcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29sbGlkZXIge1xuXG4gICAgcHJpdmF0ZSBfZ2FtZU9iamVjdDogR2FtZU9iamVjdDtcblxuICAgIHB1YmxpYyBnZXQgZ2FtZU9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3Q7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEdhbWVPYmplY3QoZ2FtZU9iamVjdDogR2FtZU9iamVjdCkge1xuICAgICAgICB0aGlzLl9nYW1lT2JqZWN0ID0gZ2FtZU9iamVjdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0eXBlIG9mIGNvbGxpZGFibGUgdGhhdCBzaG91bGQgYmUgY2hlY2tlZFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRUeXBlKCkgOiBDb2xsaWRlclNoYXBlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXRUeXBlKCkgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmVjdGFuZ2xlIGluZm9ybWF0aW9uIG9mIHRoaXMgb2JqZWN0LCBpZiBpdFxuICAgICAqIGhhcyBhIEJveENvbGxpZGVyXG4gICAgICogXG4gICAgICogQHJldHVybnMge0JveH1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UmVjdGFuZ2xlKCkgOiBCb3gge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldFJlY3RhbmdsZSgpIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjaXJjbGUgaW5mb3JtYXRpb24gb2YgdGhpcyBvYmplY3QsIGlmIGl0XG4gICAgICogaGFzIGEgQ2lyY2xlQ29sbGlkZXJcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7Q2lyY2xlfVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDaXJjbGUoKSA6IENpcmNsZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0Q2lyY2xlKCkgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBnaXZlbiBjb2xsaWRhYmxlIGlzIGN1cnJlbnRseSBjb2xsaWRpbmdcbiAgICAgKiB3aXRoIHRoZSBjdXJyZW50IGNvbGxpZGFibGUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtDb2xsaWRlcn0gY29sbGlkZXIgXG4gICAgICogXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGNvbGxpZGVzV2l0aChjb2xsaWRlcjogQ29sbGlkZXIpIDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIENvbGxpZGVyXG4gICAgICogXG4gICAgICogQHBhcmFtIHBvc2l0aW9uXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHNldFBvc2l0aW9uKHBvc2l0aW9uOiBWZWN0b3IpIDogdm9pZDtcblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMvQ29sbGlkZXIudHMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJveENvbGxpZGVyIH0gZnJvbSAnLi9Cb3hDb2xsaWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENpcmNsZUNvbGxpZGVyIH0gZnJvbSAnLi9DaXJjbGVDb2xsaWRlcic7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucy9jb2xsaWRlcnMvaW5kZXgudHMiLCJpbXBvcnQgeyBDb2xsaWRlciwgQ29sbGlkZXJTaGFwZSwgQm94LCBDaXJjbGUgfSBmcm9tIFwiZW5naW5lL2xpYnJhcnkvY29sbGlzaW9uc1wiO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcImVuZ2luZS9saWJyYXJ5L21hdGhzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZUNvbGxpZGVyIGV4dGVuZHMgQ29sbGlkZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9vcmlnaW46IFZlY3RvciwgXG4gICAgICAgIHByaXZhdGUgX29mZnNldDogVmVjdG9yLFxuICAgICAgICBwcml2YXRlIF9yYWRpdXM6IG51bWJlclxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBwb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yaWdpbi5hZGQodGhpcy5fb2Zmc2V0KTtcbiAgICB9XG4gICAgZ2V0IHJhZGl1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JhZGl1cztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VHlwZSgpIDogQ29sbGlkZXJTaGFwZSB7XG4gICAgICAgIHJldHVybiBDb2xsaWRlclNoYXBlLkNJUkNMRTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2lyY2xlKCkgOiBDaXJjbGUge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICAgICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBjb2xsaWRlc1dpdGgoY29sbGlkZXI6IENvbGxpZGVyKSA6IGJvb2xlYW4ge1xuICAgICAgICBzd2l0Y2goY29sbGlkZXIuZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICBjYXNlIENvbGxpZGVyU2hhcGUuQk9YOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNpcmNsZVRvUmVjdENoZWNrKGNvbGxpZGVyLmdldFJlY3RhbmdsZSgpKTtcblxuICAgICAgICAgICAgY2FzZSBDb2xsaWRlclNoYXBlLkNJUkNMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaXJjbGVUb0NpcmNsZUNoZWNrKGNvbGxpZGVyLmdldENpcmNsZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UG9zaXRpb24ocG9zaXRpb246IFZlY3RvcikgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fb3JpZ2luID0gcG9zaXRpb247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaXJjbGVUb1JlY3RDaGVjayhyZWN0OiBCb3gpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNpcmNsZVRvQ2lyY2xlQ2hlY2soY2lyY2xlOiBDaXJjbGUpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2xpYnJhcnkvY29sbGlzaW9ucy9jb2xsaWRlcnMvQ2lyY2xlQ29sbGlkZXIudHMiXSwic291cmNlUm9vdCI6IiJ9