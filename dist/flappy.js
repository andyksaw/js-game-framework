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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class SceneGraph {
    constructor() {
        this._ids = new Set();
        this._objects = [];
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    getObjects() {
        return this._objects;
    }
    add(id, object) {
        if (!id) {
            throw new Error('SceneGraph insert failed: id is required');
        }
        if (!object) {
            throw new Error('SceneGraph insert failed: no GameObject given');
        }
        if (this._ids.has(id)) {
            throw new Error(`SceneGraph insert failed: duplicate id [${id}]`);
        }
        this._ids.add(id);
        this._objects.push({ id, object });
    }
    remove(id) {
        if (!id) {
            throw new Error('SceneGraph remove failed: no id given');
        }
        if (!this._ids.has(id)) {
            throw new Error('SceneGraph remove failed: object not found in the hierarchy');
        }
        this._ids.delete(id);
        for (let i = 0; i < this._objects.length; i++) {
            const obj = this._objects[i];
            if (obj.id === id) {
                this._objects.splice(i, 1);
                break;
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SceneGraph;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CameraObject__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__CameraObject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Camera__ = __webpack_require__(12);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Camera__; });





/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = withTransform;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_modules_Transform__ = __webpack_require__(10);

function withTransform(Base) {
    return class Transformable extends Base {
        constructor(...args) {
            super(args);
            this._transform = new __WEBPACK_IMPORTED_MODULE_0_engine_modules_Transform__["a" /* default */]();
        }
        get transform() {
            return this._transform;
        }
        destroy() {
            super.destroy();
            this._transform = null;
        }
    };
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Vector__["a"]; });



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getReturnTypeOf;
function getReturnTypeOf(fn) {
    return {};
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_modules_Transformable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_internal_mixins__ = __webpack_require__(4);


class GameObjectClass {
    constructor() {
        this._isVisible = true;
        this._components = [];
    }
    get isDestroying() {
        return this._isDestroying;
    }
    get isDisabled() {
        return this._isDisabled;
    }
    get isVisible() {
        return this._isVisible;
    }
    destroy() {
        this._isDestroying = true;
        this._components.forEach(c => c.onDestroy());
    }
    onUpdate(timestep) {
        this._components.forEach(c => c.onUpdate(timestep));
    }
    onRender() {
    }
    addComponent(component) {
        this._components.push(component);
        component.onInstantiate();
    }
}
const GameObject = Object(__WEBPACK_IMPORTED_MODULE_0_engine_modules_Transformable__["a" /* default */])(GameObjectClass);
/* harmony export (immutable) */ __webpack_exports__["a"] = GameObject;

const returnType = Object(__WEBPACK_IMPORTED_MODULE_1_engine_internal_mixins__["a" /* getReturnTypeOf */])(GameObject);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_game__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_modules__ = __webpack_require__(13);


new class FlappyGame extends __WEBPACK_IMPORTED_MODULE_0_engine_game__["a" /* Game */] {
    onStart() {
        __WEBPACK_IMPORTED_MODULE_1_engine_modules__["a" /* GameObjectFactory */].instantiate('test', {});
    }
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_GameLoop__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_modules_viewport__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_engine_maths__ = __webpack_require__(3);



class Game {
    constructor() {
        this._gameLoop = new __WEBPACK_IMPORTED_MODULE_0_engine_GameLoop__["a" /* default */]();
        this.initialise();
    }
    initialise() {
        const camera = __WEBPACK_IMPORTED_MODULE_1_engine_modules_viewport__["a" /* Camera */].getMain();
        camera.transform.setPosition(__WEBPACK_IMPORTED_MODULE_2_engine_maths__["a" /* Vector */].origin);
        this._gameLoop.startGameLoop(this.onStart);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_SceneGraph__ = __webpack_require__(0);

class GameLoop {
    constructor() {
        this._msPerFrame = 16;
        this._timestep = 1;
        this._performLoop = this._performLoop.bind(this);
    }
    get timestep() {
        return this._timestep;
    }
    get isRunning() {
        return this._isBooted;
    }
    _performLoop() {
        const currentTick = Date.now();
        const elapsed = currentTick - this._lastTick;
        const step = (this._msPerFrame / elapsed) * this._timestep;
        this._onUpdate(step);
        this._onRender();
        this._lastTick = currentTick;
        requestAnimationFrame(this._performLoop);
    }
    _onUpdate(timestep) {
        const graph = __WEBPACK_IMPORTED_MODULE_0_engine_SceneGraph__["a" /* default */].instance.getObjects();
        const corpseObjects = [];
        const bufferCount = graph.length;
        for (let i = 0; i < bufferCount; i++) {
            const obj = graph[i].object;
            obj.onUpdate(timestep);
        }
    }
    _onRender() {
        __WEBPACK_IMPORTED_MODULE_0_engine_SceneGraph__["a" /* default */].instance.getObjects().forEach(obj => obj.object.onRender());
    }
    startGameLoop(startCallback) {
        if (!this._isBooted) {
            this._lastTick = Date.now();
            requestAnimationFrame(this._performLoop);
            startCallback();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameLoop;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_modules_Transformable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_internal_mixins__ = __webpack_require__(4);


class CameraObjectClass {
    destroy() { }
}
const CameraObject = Object(__WEBPACK_IMPORTED_MODULE_0_engine_modules_Transformable__["a" /* default */])(CameraObjectClass);
/* harmony export (immutable) */ __webpack_exports__["a"] = CameraObject;

const returnType = Object(__WEBPACK_IMPORTED_MODULE_1_engine_internal_mixins__["a" /* getReturnTypeOf */])(CameraObject);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_maths__ = __webpack_require__(3);

class Transform {
    constructor(_position = __WEBPACK_IMPORTED_MODULE_0_engine_maths__["a" /* Vector */].origin, _rotation = 0, _scale = 0, _localPosition = __WEBPACK_IMPORTED_MODULE_0_engine_maths__["a" /* Vector */].origin) {
        this._position = _position;
        this._rotation = _rotation;
        this._scale = _scale;
        this._localPosition = _localPosition;
        this._children = [];
        this._parent = null;
    }
    get position() {
        return this._position;
    }
    get localPosition() {
        return this._localPosition;
    }
    get rotation() {
        return this._rotation;
    }
    get scale() {
        return this._scale;
    }
    get children() {
        return this._children;
    }
    destroy() {
        this._position = null;
        this._localPosition = null;
        this._children = null;
        this._parent = null;
    }
    setPosition(position, autoUpdateLocalPos = true) {
        if (this._position.isEqualTo(position)) {
            return;
        }
        const diff = position.subtract(this._position);
        this._position = position;
        if (this._parent && autoUpdateLocalPos) {
            this._updateLocalPos();
        }
        this._children.forEach(child => {
            child.setPosition(child.position.add(diff), false);
        });
    }
    setRotation(rotation) {
        this._rotation = rotation;
    }
    setScale(scale) {
        this._scale = scale;
    }
    addChild(transform) {
        this._children.push(transform);
        transform.setParent(this);
    }
    setParent(transform) {
        this._parent = transform;
        this._updateLocalPos();
    }
    _updateLocalPos() {
        this._localPosition = this._position.subtract(this._parent.position);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Transform;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Vector {
    constructor(_x = 0, _y = 0) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get magnitude() {
        const x2 = this._x * this._x;
        const y2 = this._y * this._y;
        return Math.sqrt(x2 + y2);
    }
    get normal() {
        return new Vector(-this.y, this.x);
    }
    add(vector) {
        return new Vector(this._x + vector.x, this._y + vector.y);
    }
    subtract(vector) {
        return new Vector(this._x - vector.x, this._y - vector.y);
    }
    multiply(scalar) {
        return new Vector(this._x * scalar, this._y * scalar);
    }
    isEqualTo(vector) {
        return (this._x === vector._x &&
            this._y === vector._y);
    }
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
/* harmony export (immutable) */ __webpack_exports__["getMain"] = getMain;
/* harmony export (immutable) */ __webpack_exports__["switchCamera"] = switchCamera;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_modules_viewport__ = __webpack_require__(1);

let _currentCamera;
function getMain() {
    return this._currentCamera || (this._currentCamera = new __WEBPACK_IMPORTED_MODULE_0_engine_modules_viewport__["b" /* CameraObject */]());
}
function switchCamera(camera) {
    _currentCamera = camera;
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameobject_GameObject__ = __webpack_require__(5);
/* unused harmony reexport GameObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameobject_GameObjectFactory__ = __webpack_require__(14);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__gameobject_GameObjectFactory__; });





/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["instantiate"] = instantiate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_modules_gameobject_GameObject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_SceneGraph__ = __webpack_require__(0);


let gameObjectContainer = document.body.querySelector('#gameObjects');
function createDivElement(id, zIndex = 0) {
    const element = document.createElement('div');
    element.id = id;
    element.style.zIndex = zIndex.toString();
    element.classList.add('gameObject');
    if (!gameObjectContainer) {
        const container = document.createElement('div');
        container.id = 'gameObjects';
        gameObjectContainer = document.body.appendChild(container);
    }
    return gameObjectContainer.appendChild(element);
}
function instantiate(id, config) {
    const gameObject = new __WEBPACK_IMPORTED_MODULE_0_engine_modules_gameobject_GameObject__["a" /* GameObject */]();
    createDivElement(id, config.order);
    if (config.components) {
        config.components.forEach(c => gameObject.addComponent(c));
    }
    __WEBPACK_IMPORTED_MODULE_1_engine_SceneGraph__["a" /* default */].instance.add(id, gameObject);
    return gameObject;
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTUzZDYzOWI2MDkxODg3YjRhNjIiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL1NjZW5lR3JhcGgudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL21vZHVsZXMvdmlld3BvcnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL21vZHVsZXMvVHJhbnNmb3JtYWJsZS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbWF0aHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2ludGVybmFsL21peGlucy50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbW9kdWxlcy9nYW1lb2JqZWN0L0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZXMvZmxhcHB5L2ZsYXBweS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvR2FtZUxvb3AudHMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL21vZHVsZXMvdmlld3BvcnQvQ2FtZXJhT2JqZWN0LnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9tb2R1bGVzL1RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbWF0aHMvVmVjdG9yLnRzIiwid2VicGFjazovLy8uL2VuZ2luZS9tb2R1bGVzL3ZpZXdwb3J0L0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbW9kdWxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbW9kdWxlcy9nYW1lb2JqZWN0L0dhbWVPYmplY3RGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUFPLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRUsscUJBQXNCLEVBQVUsRUFBRSxNQUF3QjtJQUM1RCxNQUFNLFVBQVUsR0FBRyxJQUFJLHdGQUFVLEVBQUUsQ0FBQztJQUNwQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRW5DLEVBQUUsRUFBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNuQixNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsa0VBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUV4QyxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3RCLENBQUMiLCJmaWxlIjoiZmxhcHB5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTUzZDYzOWI2MDkxODg3YjRhNjIiLCJpbXBvcnQgeyBHYW1lT2JqZWN0VHlwZSB9IGZyb20gXCJlbmdpbmUvbW9kdWxlcy9nYW1lb2JqZWN0L0dhbWVPYmplY3RcIjtcblxuXG4vKipcbiAqIERhdGEgc3RvcmVkIGluc2lkZSB0aGUgU2NlbmVHcmFwaCBmb3IgZWFjaCBvYmplY3QgaW4gdGhlIHNjZW5lXG4gKi9cbmludGVyZmFjZSBUcmFja2VkT2JqZWN0IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG9iamVjdDogR2FtZU9iamVjdFR5cGU7XG59XG5cbi8qKlxuICogSGFuZGxlcyBpbnN0YW50aWF0aW9uLCBkZXN0cnVjdGlvbiBhbmQgbWFuYWdlbWVudCBvZiBhbGwgR2FtZU9iamVjdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVHcmFwaCB7XG5cbiAgICAvLyBzaW5nbGV0b24gYmVjYXVzZSB3ZSBzaG91bGQgbmV2ZXIgaGF2ZSBtb3JlIHRoYW4gb25lIFNjZW5lR3JhcGhcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFNjZW5lR3JhcGg7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSA6IFNjZW5lR3JhcGgge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuXG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIHVuaXF1ZSBpZGVudGlmaWVycyBvZiBHYW1lT2JqZWN0c1xuICAgICAqL1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG5cbiAgICAvKipcbiAgICAgKiBPcmRlcmVkIGxpc3Qgb2YgR2FtZU9iamVjdHMgaW4gdGhlIHNjZW5lXG4gICAgICovXG4gICAgcHJpdmF0ZSByZWFkb25seSBfb2JqZWN0czogQXJyYXk8VHJhY2tlZE9iamVjdD4gPSBbXTtcblxuXG4gICAgcHVibGljIGdldE9iamVjdHMoKSA6IEFycmF5PFRyYWNrZWRPYmplY3Q+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29iamVjdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhIEdhbWVPYmplY3Qgb250byB0aGUgZW5kIG9mIHRoZSBvYmplY3QgaGllcmFyY2h5XG4gICAgICogXG4gICAgICogQHBhcmFtIGlkICAgICAgICBVbmlxdWUgaWRlbnRpZmllclxuICAgICAqIEBwYXJhbSBvYmplY3QgICAgR2FtZU9iamVjdCB0byBpbnNlcnRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkKGlkOiBzdHJpbmcsIG9iamVjdDogR2FtZU9iamVjdFR5cGUpIHtcbiAgICAgICAgaWYoIWlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjZW5lR3JhcGggaW5zZXJ0IGZhaWxlZDogaWQgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZighb2JqZWN0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjZW5lR3JhcGggaW5zZXJ0IGZhaWxlZDogbm8gR2FtZU9iamVjdCBnaXZlbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuX2lkcy5oYXMoaWQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNjZW5lR3JhcGggaW5zZXJ0IGZhaWxlZDogZHVwbGljYXRlIGlkIFske2lkfV1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lkcy5hZGQoaWQpO1xuICAgICAgICB0aGlzLl9vYmplY3RzLnB1c2goeyBpZCwgb2JqZWN0IH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBHYW1lT2JqZWN0IGZyb20gdGhlIGhpZXJhcmNoeVxuICAgICAqIFxuICAgICAqIEBwYXJhbSBpZCAgICBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgb2JqZWN0IHRvIHJlbW92ZVxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmUoaWQ6IHN0cmluZykge1xuICAgICAgICBpZighaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2NlbmVHcmFwaCByZW1vdmUgZmFpbGVkOiBubyBpZCBnaXZlbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLl9pZHMuaGFzKGlkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTY2VuZUdyYXBoIHJlbW92ZSBmYWlsZWQ6IG9iamVjdCBub3QgZm91bmQgaW4gdGhlIGhpZXJhcmNoeScpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9pZHMuZGVsZXRlKGlkKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5fb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0gdGhpcy5fb2JqZWN0c1tpXTtcbiAgICAgICAgICAgIGlmKG9iai5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vYmplY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvU2NlbmVHcmFwaC50cyIsImV4cG9ydCB7IENhbWVyYU9iamVjdCwgQ2FtZXJhT2JqZWN0VHlwZSB9IGZyb20gJy4vQ2FtZXJhT2JqZWN0JztcblxuaW1wb3J0ICogYXMgQ2FtZXJhIGZyb20gJy4vQ2FtZXJhJztcbmV4cG9ydCB7IENhbWVyYSB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL21vZHVsZXMvdmlld3BvcnQvaW5kZXgudHMiLCJpbXBvcnQgVHJhbnNmb3JtIGZyb20gXCJlbmdpbmUvbW9kdWxlcy9UcmFuc2Zvcm1cIjtcbmltcG9ydCBJRGVzdHJveWFibGUgZnJvbSBcImVuZ2luZS9tb2R1bGVzL0lEZXN0cm95YWJsZVwiO1xuXG50eXBlIENvbnN0cnVjdG9yPFQgZXh0ZW5kcyBJRGVzdHJveWFibGUgPSBJRGVzdHJveWFibGU+ID0gbmV3KC4uLmFyZ3M6IGFueVtdKSA9PiBUO1xuXG4vKipcbiAqIFN1cHBsaWVzIGEgVHJhbnNmb3JtIHRvIHRoZSBnaXZlbiBiYXNlIGNsYXNzLlxuICogXG4gKiBCYXNlIGNsYXNzIG11c3QgaW1wbGVtZW50IElEZXN0cm95YWJsZSBzbyB0aGF0IHRoaXMgbWl4aW5cbiAqIGNhbiBjbGVhbiB1cCBpdHMgcmVmZXJlbmNlIG9uIGRlc3RydWN0aW9uLlxuICogXG4gKiBAcGFyYW0gQmFzZSBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFRyYW5zZm9ybTxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KEJhc2U6IFQpIHtcbiAgICByZXR1cm4gY2xhc3MgVHJhbnNmb3JtYWJsZSBleHRlbmRzIEJhc2Uge1xuICAgICAgICBwcml2YXRlIF90cmFuc2Zvcm06IFRyYW5zZm9ybTtcblxuICAgICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICAgICAgc3VwZXIoYXJncyk7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCk7XG4gICAgICAgIH1cblxuICAgICAgICBnZXQgdHJhbnNmb3JtKCkgOiBUcmFuc2Zvcm0ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zZm9ybTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBkZXN0cm95KCkgOiB2b2lkIHtcbiAgICAgICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL21vZHVsZXMvVHJhbnNmb3JtYWJsZS50cyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVmVjdG9yIH0gZnJvbSAnLi9WZWN0b3InO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9tYXRocy9pbmRleC50cyIsInR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcoLi4uYXJnczogYW55W10pID0+IFQ7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmluYWwgdHlwZSBvZiBhIENvbnN0cnVjdG9yLlxuICogXG4gKiBVc2VkIHRvIGdldCB0aGUgdHlwZSByZXR1cm5lZCBieSBhIG1peGluIGJlY2F1c2UgdGhlXG4gKiBjb21waWxlciBjYW4ndCBpbmZlciBpdCBieSBpdHNlbGYuXG4gKiBcbiAqIEBwYXJhbSBmbiAgICBDb25zdHJ1Y3RvciB0byBnZXQgdGhlIHR5cGUgb2ZcbiAqIFxuICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NzczMjAxNS93aGF0cy10aGUtdHlwZS1vZi1hLW1peGluLWNsYXNzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXR1cm5UeXBlT2Y8VD4oZm46IENvbnN0cnVjdG9yPFQ+KTogVCB7XG4gICAgcmV0dXJuIHt9IGFzIFQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL2ludGVybmFsL21peGlucy50cyIsImltcG9ydCB3aXRoVHJhbnNmb3JtIGZyb20gXCJlbmdpbmUvbW9kdWxlcy9UcmFuc2Zvcm1hYmxlXCI7XG5pbXBvcnQgSURlc3Ryb3lhYmxlIGZyb20gXCJlbmdpbmUvbW9kdWxlcy9JRGVzdHJveWFibGVcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcImVuZ2luZS9tb2R1bGVzL2NvbXBvbmVudHMvQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBnZXRSZXR1cm5UeXBlT2YgfSBmcm9tIFwiZW5naW5lL2ludGVybmFsL21peGluc1wiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gb2JqZWN0IGluIHRoZSBzY2VuZVxuICovXG5jbGFzcyBHYW1lT2JqZWN0Q2xhc3MgaW1wbGVtZW50cyBJRGVzdHJveWFibGUge1xuXG4gICAgcHJpdmF0ZSBfaXNEZXN0cm95aW5nOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2lzRGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfaXNWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHByaXZhdGUgX2NvbXBvbmVudHM6IEFycmF5PENvbXBvbmVudD4gPSBbXTtcblxuXG4gICAgY29uc3RydWN0b3IoXG5cbiAgICApIHt9XG5cbiAgICBnZXQgaXNEZXN0cm95aW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEZXN0cm95aW5nO1xuICAgIH1cbiAgICBnZXQgaXNEaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZWQ7XG4gICAgfVxuICAgIGdldCBpc1Zpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9pc0Rlc3Ryb3lpbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaChjID0+IGMub25EZXN0cm95KCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblVwZGF0ZSh0aW1lc3RlcDogbnVtYmVyKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goYyA9PiBjLm9uVXBkYXRlKHRpbWVzdGVwKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVuZGVyKCkgOiB2b2lkIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW1tZWRpYXRlbHkgYWRkcyBhIGNvbXBvbmVudCB0byB0aGlzIEdhbWVPYmplY3QuXG4gICAgICogXG4gICAgICogQWRkaW5nIGEgY29tcG9uZW50IGFueXRpbWUgb3RoZXIgdGhhbiBkdXJpbmcgY29uc3RydWN0aW9uXG4gICAgICogb2YgdGhpcyBHYW1lT2JqZWN0IG1heSB5aWVsZCB1bnByZWRpY3RhYmxlIHJlc3VsdHMuXG4gICAgICogXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCBcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkQ29tcG9uZW50KGNvbXBvbmVudDogQ29tcG9uZW50KSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgY29tcG9uZW50Lm9uSW5zdGFudGlhdGUoKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IEdhbWVPYmplY3QgPSB3aXRoVHJhbnNmb3JtKEdhbWVPYmplY3RDbGFzcyk7XG5cbi8vIGV4cG9ydCB0aGUgVHlwZSBhcyB3ZWxsIHNvIHdlIGNhbiB1c2UgdGhpc1xuLy8gYXMgYSBwcm9wZXJ0eSB0eXBlIChzZWUgaW50ZXJuYWwvbWl4aW5zKVxuY29uc3QgcmV0dXJuVHlwZSA9IGdldFJldHVyblR5cGVPZihHYW1lT2JqZWN0KTtcbmV4cG9ydCB0eXBlIEdhbWVPYmplY3RUeXBlID0gdHlwZW9mIHJldHVyblR5cGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL21vZHVsZXMvZ2FtZW9iamVjdC9HYW1lT2JqZWN0LnRzIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJ2VuZ2luZS9nYW1lJztcbmltcG9ydCB7IEdhbWVPYmplY3RGYWN0b3J5IH0gZnJvbSAnZW5naW5lL21vZHVsZXMnO1xuLy8gaW1wb3J0IHsgUGxhbmVNb3ZlbWVudCB9IGZyb20gJy4vY29tcG9uZW50cy9QbGFuZU1vdmVtZW50Jztcbi8vIGltcG9ydCB7IFNjZW5lTWFuYWdlciB9IGZyb20gJy4vY29tcG9uZW50cy9TY2VuZU1hbmFnZXInO1xuXG4vLyBpbXBvcnQgeyBTcHJpdGUsIEJvdW5kaW5nQm94IH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cyc7XG4vLyBpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG4vLyBpbXBvcnQgeyBWaWV3cG9ydCwgQ2FudmFzLCBDYW1lcmEgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9zY3JlZW4nO1xuLy8gaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9jb2xsaXNpb25zL2NvbGxpZGVycyc7XG4vLyBpbXBvcnQgU2NlbmVHcmFwaCBmcm9tICdlbmdpbmUvbGlicmFyeS9TY2VuZUdyYXBoJztcblxubmV3IGNsYXNzIEZsYXBweUdhbWUgZXh0ZW5kcyBHYW1lIHtcbiAgICBvblN0YXJ0KCkgOiB2b2lkIHtcblxuICAgICAgICBHYW1lT2JqZWN0RmFjdG9yeS5pbnN0YW50aWF0ZSgndGVzdCcsIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zdCBzY2VuZSA9IFNjZW5lR3JhcGguaW5zdGFuY2U7XG4gICAgICAgIC8vIGNvbnN0IHNjZW5lTWFuYWdlciA9IHNjZW5lLmluc3RhbnRpYXRlKCdzY2VuZU1hbmFnZXInLCB7XG4gICAgICAgIC8vICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgIC8vICAgICAgICAgU2NlbmVNYW5hZ2VyLFxuICAgICAgICAvLyAgICAgXSxcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gY29uc3QgcGxhbmVSZWQgPSBzY2VuZS5pbnN0YW50aWF0ZSgncGxhbmUnLCB7XG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogbmV3IFZlY3Rvcig1MCwgLTUwKSxcbiAgICAgICAgLy8gICAgIC8vIGNvbGxpZGVyOiBCb3hDb2xsaWRlcixcbiAgICAgICAgLy8gICAgIHNwcml0ZToge1xuICAgICAgICAvLyAgICAgICAgIGFzc2V0czogW1xuICAgICAgICAvLyAgICAgICAgICAgICAnYXNzZXRzL2ltYWdlcy9wbGFuZVJlZDEucG5nJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJ2Fzc2V0cy9pbWFnZXMvcGxhbmVSZWQyLnBuZycsXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICdhc3NldHMvaW1hZ2VzL3BsYW5lUmVkMy5wbmcnLFxuICAgICAgICAvLyAgICAgICAgIF0sXG4gICAgICAgIC8vICAgICAgICAgYm91bmRzOiBuZXcgQm91bmRpbmdCb3goXG4gICAgICAgIC8vICAgICAgICAgICAgIG5ldyBWZWN0b3IoNTAsIC01MCksIFxuICAgICAgICAvLyAgICAgICAgICAgICBuZXcgVmVjdG9yKDUwLCA1MClcbiAgICAgICAgLy8gICAgICAgICApLFxuICAgICAgICAvLyAgICAgICAgIC8vIHRpbWluZzogMTUwLFxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIGNvbGxpZGVyOiBuZXcgQm94Q29sbGlkZXIoXG4gICAgICAgIC8vICAgICAgICAgbmV3IEJvdW5kaW5nQm94KFxuICAgICAgICAvLyAgICAgICAgICAgICBuZXcgVmVjdG9yKDUwLCAtNTApLCBcbiAgICAgICAgLy8gICAgICAgICAgICAgbmV3IFZlY3Rvcig1MCwgNTApXG4gICAgICAgIC8vICAgICAgICAgKSxcbiAgICAgICAgLy8gICAgICksXG4gICAgICAgIC8vICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgIC8vICAgICAgICAgUGxhbmVNb3ZlbWVudCxcbiAgICAgICAgLy8gICAgIF0sXG4gICAgICAgIC8vIH0pO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nYW1lcy9mbGFwcHkvZmxhcHB5LnRzIiwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIEdhbWVMb29wIH0gZnJvbSAnZW5naW5lL0dhbWVMb29wJztcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gJ2VuZ2luZS9tb2R1bGVzL3ZpZXdwb3J0JztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9tYXRocyc7XG5cbi8qKlxuICogQmFzZSBjb250YWluZXIgZm9yIGEgZ2FtZS4gQSBnYW1lIHNob3VsZCBleHRlbmQgdGhpc1xuICogYW5kIGZpbGwgaXQgd2l0aCBnYW1lIHNwZWNpZmljIGxvZ2ljLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2FtZSB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb25lIGFuZCBvbmx5IGdhbWUgbG9vcC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9nYW1lTG9vcDogR2FtZUxvb3AgPSBuZXcgR2FtZUxvb3AoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBydW4gdGhlIGdhbWUgYXMgc29vbiBhcyBhIGdhbWUgY2xhc3MgaXMgaW5zdGFudGlhdGVkXG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgZW5naW5lIGdhbWUgbG9vcCBhbmQgdGhlIGdhbWUncyBsb2dpY1xuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdGlhbGlzZSgpIDogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IENhbWVyYS5nZXRNYWluKCk7XG4gICAgICAgIGNhbWVyYS50cmFuc2Zvcm0uc2V0UG9zaXRpb24oVmVjdG9yLm9yaWdpbik7XG5cbiAgICAgICAgdGhpcy5fZ2FtZUxvb3Auc3RhcnRHYW1lTG9vcCh0aGlzLm9uU3RhcnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ2ljIHRvIHJ1biBvbmNlIGFmdGVyIHRoZSBtYWluIGdhbWUgbG9vcCBpcyBzdGFydGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG9uU3RhcnQoKSA6IHZvaWQ7XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvZ2FtZS50cyIsImltcG9ydCBTY2VuZUdyYXBoIGZyb20gXCJlbmdpbmUvU2NlbmVHcmFwaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTG9vcCB7XG4gICAgLyoqXG4gICAgICogRGVzaXJlZCBhbW91bnQgb2YgdGltZSBpbiBtaWxsaXNlY29uZHMgYmV0d2VlbiBmcmFtZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIF9tc1BlckZyYW1lOiBudW1iZXIgPSAxNjtcblxuICAgIC8qKlxuICAgICAqIEdhbWUgc3BlZWQgKDEgPSBub3JtYWwgc3BlZWQgfCAwID0gbm90IG1vdmluZylcbiAgICAgKi9cbiAgICBwcml2YXRlIF90aW1lc3RlcDogbnVtYmVyID0gMTtcblxuICAgIC8qKlxuICAgICAqIFRpbWVzdGFtcCBvZiB0aGUgbGFzdCByZW5kZXJlZCBmcmFtZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2xhc3RUaWNrOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBJcyB0aGUgbG9vcCBydW5uaW5nIGFscmVhZHlcbiAgICAgKi9cbiAgICBwcml2YXRlIF9pc0Jvb3RlZDogYm9vbGVhbjtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3BlcmZvcm1Mb29wID0gdGhpcy5fcGVyZm9ybUxvb3AuYmluZCh0aGlzKTtcbiAgICB9XG5cblxuICAgIGdldCB0aW1lc3RlcCgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWVzdGVwO1xuICAgIH1cbiAgICBnZXQgaXNSdW5uaW5nKCkgOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQm9vdGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBtYWluIGdhbWUgbG9vcC5cbiAgICAgKiBcbiAgICAgKiBDYWxjdWxhdGVzIGZyYW1lIHN0YXRzIGFuZCBwYXNzZXMgaXQgdG8gdGhlIHVwZGF0ZVxuICAgICAqIGFuZCByZW5kZXIgbG9vcFxuICAgICAqL1xuICAgIHByaXZhdGUgX3BlcmZvcm1Mb29wKCkgOiB2b2lkIHtcbiAgICAgICAgLy8gY2FsY3VsYXRlIGhvdyBtdWNoIHRpbWUgaGFzIGFjdHVhbGx5IHBhc3NlZCBzaW5jZVxuICAgICAgICAvLyB0aGUgbGFzdCBmcmFtZSBhbmQgcGFzcyBpdCB0byB0aGUgdXBkYXRlIGxvb3BcbiAgICAgICAgY29uc3QgY3VycmVudFRpY2sgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBlbGFwc2VkID0gY3VycmVudFRpY2sgLSB0aGlzLl9sYXN0VGljaztcbiAgICAgICAgY29uc3Qgc3RlcCA9ICh0aGlzLl9tc1BlckZyYW1lIC8gZWxhcHNlZCkgKiB0aGlzLl90aW1lc3RlcDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX29uVXBkYXRlKHN0ZXApO1xuICAgICAgICB0aGlzLl9vblJlbmRlcigpO1xuXG4gICAgICAgIHRoaXMuX2xhc3RUaWNrID0gY3VycmVudFRpY2s7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9wZXJmb3JtTG9vcCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiAgRGVsZWdhdGVzIHdvcmsgdG8gZXZlcnkgR2FtZU9iamVjdFxuICAgICAqL1xuICAgIHByaXZhdGUgX29uVXBkYXRlKHRpbWVzdGVwOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZ3JhcGggPSBTY2VuZUdyYXBoLmluc3RhbmNlLmdldE9iamVjdHMoKTtcbiAgICAgICAgY29uc3QgY29ycHNlT2JqZWN0cyA9IFtdO1xuXG4gICAgICAgIC8vIGxvb3Agb3ZlciBhIGJ1ZmZlciBzbyB0aGF0IG5ld2x5IGluc3RhbnRpYXRlZCBvYmplY3RzXG4gICAgICAgIC8vIGFsd2F5cyBzdGFydCBleGVjdXRpb24gZnJvbSB0aGUgbmV4dCBmcmFtZSBvbndhcmRzXG4gICAgICAgIGNvbnN0IGJ1ZmZlckNvdW50ID0gZ3JhcGgubGVuZ3RoO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYnVmZmVyQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0gZ3JhcGhbaV0ub2JqZWN0O1xuXG4gICAgICAgICAgICAvLyBhbnkgb2JqZWN0cyBtYXJrZWQgZm9yIGRlbGV0aW9uIHNob3VsZCBub3QgYmUgZXhlY3V0ZWRcbiAgICAgICAgICAgIC8vIGlmKG9iai5pc0Rlc3Ryb3lpbmcoKSkge1xuICAgICAgICAgICAgLy8gICAgIGNvcnBzZU9iamVjdHMucHVzaChvYmopO1xuICAgICAgICAgICAgLy8gICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgb2JqLm9uVXBkYXRlKHRpbWVzdGVwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNsZWFudXAgYW55IG9iamVjdHMgbWFya2VkIGZvciBkZWxldGlvblxuICAgICAgICAvLyBpZihjb3Jwc2VPYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gICAgIFNjZW5lR3JhcGguaW5zdGFuY2UucmVtb3ZlQmF0Y2goY29ycHNlT2JqZWN0cyk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGV2ZXJ5IHZpc2libGUgR2FtZU9iamVjdCB0byBET00gZXZlcnkgZnJhbWVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9vblJlbmRlcigpIHtcbiAgICAgICAgU2NlbmVHcmFwaC5pbnN0YW5jZS5nZXRPYmplY3RzKCkuZm9yRWFjaChcbiAgICAgICAgICAgIG9iaiA9PiBvYmoub2JqZWN0Lm9uUmVuZGVyKClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIGdhbWUgbG9vcFxuICAgICAqIFxuICAgICAqIEBwYXJhbSBzdGFydENhbGxiYWNrICAgICBMb2dpYyB0byBwZXJmb3JtIGltbWVkaWF0ZWx5IGFmdGVyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBnYW1lIGxvb3AgaGFzIHN0YXJ0ZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhcnRHYW1lTG9vcChzdGFydENhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICBpZighdGhpcy5faXNCb290ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RUaWNrID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9wZXJmb3JtTG9vcCk7XG4gICAgICAgICAgICBzdGFydENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9ICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL0dhbWVMb29wLnRzIiwiaW1wb3J0IHdpdGhUcmFuc2Zvcm0gZnJvbSBcImVuZ2luZS9tb2R1bGVzL1RyYW5zZm9ybWFibGVcIjtcbmltcG9ydCBJRGVzdHJveWFibGUgZnJvbSBcImVuZ2luZS9tb2R1bGVzL0lEZXN0cm95YWJsZVwiO1xuaW1wb3J0IHsgZ2V0UmV0dXJuVHlwZU9mIH0gZnJvbSAnZW5naW5lL2ludGVybmFsL21peGlucyc7XG5cbmNsYXNzIENhbWVyYU9iamVjdENsYXNzIGltcGxlbWVudHMgSURlc3Ryb3lhYmxlIHtcbiAgICBwdWJsaWMgZGVzdHJveSgpIDogdm9pZCB7fVxufVxuXG5leHBvcnQgY29uc3QgQ2FtZXJhT2JqZWN0ID0gd2l0aFRyYW5zZm9ybShDYW1lcmFPYmplY3RDbGFzcyk7XG5cbi8vIGV4cG9ydCB0aGUgVHlwZSBhcyB3ZWxsIHNvIHdlIGNhbiB1c2UgdGhpc1xuLy8gYXMgYSBwcm9wZXJ0eSB0eXBlIChzZWUgaW50ZXJuYWwvbWl4aW5zKVxuY29uc3QgcmV0dXJuVHlwZSA9IGdldFJldHVyblR5cGVPZihDYW1lcmFPYmplY3QpO1xuZXhwb3J0IHR5cGUgQ2FtZXJhT2JqZWN0VHlwZSA9IHR5cGVvZiByZXR1cm5UeXBlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9tb2R1bGVzL3ZpZXdwb3J0L0NhbWVyYU9iamVjdC50cyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJlbmdpbmUvbWF0aHNcIjtcbmltcG9ydCBJRGVzdHJveWFibGUgZnJvbSBcImVuZ2luZS9tb2R1bGVzL0lEZXN0cm95YWJsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2Zvcm0gaW1wbGVtZW50cyBJRGVzdHJveWFibGUge1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiBjaGlsZCB0cmFuc2Zvcm1zIHRoYXQgd2lsbCBtb3ZlIHJlbGF0aXZlbHkgXG4gICAgICogd2l0aCB0aGlzIHRyYW5zZm9ybVxuICAgICAqL1xuICAgIHByaXZhdGUgX2NoaWxkcmVuOiBBcnJheTxUcmFuc2Zvcm0+ID0gW107XG5cbiAgICAvKipcbiAgICAgKiBBIHRyYW5zZm9ybSB0aGF0IHRoaXMgdHJhbnNmb3JtIG1vdmVzIHJlbGF0aXZlbHkgdG9cbiAgICAgKi9cbiAgICBwcml2YXRlIF9wYXJlbnQ6IFRyYW5zZm9ybSA9IG51bGw7XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9wb3NpdGlvbjogVmVjdG9yID0gVmVjdG9yLm9yaWdpbixcbiAgICAgICAgcHJpdmF0ZSBfcm90YXRpb246IG51bWJlciA9IDAsXG4gICAgICAgIHByaXZhdGUgX3NjYWxlOiBudW1iZXIgPSAwLFxuICAgICAgICBwcml2YXRlIF9sb2NhbFBvc2l0aW9uOiBWZWN0b3IgPSBWZWN0b3Iub3JpZ2luLFxuICAgICkge31cblxuICAgIGdldCBwb3NpdGlvbigpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICAgIH1cbiAgICBnZXQgbG9jYWxQb3NpdGlvbigpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsUG9zaXRpb247XG4gICAgfVxuICAgIGdldCByb3RhdGlvbigpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0aW9uO1xuICAgIH1cbiAgICBnZXQgc2NhbGUoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zY2FsZTtcbiAgICB9XG4gICAgZ2V0IGNoaWxkcmVuKCkgOiBBcnJheTxUcmFuc2Zvcm0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLl9sb2NhbFBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBudWxsXG4gICAgfVxuXG4gICAgcHVibGljIHNldFBvc2l0aW9uKHBvc2l0aW9uOiBWZWN0b3IsIGF1dG9VcGRhdGVMb2NhbFBvczogYm9vbGVhbiA9IHRydWUpIDogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuX3Bvc2l0aW9uLmlzRXF1YWxUbyhwb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpZmYgPSBwb3NpdGlvbi5zdWJ0cmFjdCh0aGlzLl9wb3NpdGlvbik7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XG5cbiAgICAgICAgLy8gc2luY2UgdGhpcyBHYW1lT2JqZWN0IGluaXRpYXRlZCB0aGUgbW92ZSwgdXBkYXRlIGl0c1xuICAgICAgICAvLyBsb2NhbCBwb3NpdGlvblxuICAgICAgICBpZih0aGlzLl9wYXJlbnQgJiYgYXV0b1VwZGF0ZUxvY2FsUG9zKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVMb2NhbFBvcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJvcGFnYXRlIHRoZSBwb3NpdGlvbiBjaGFuZ2UgZG93biB0byBjaGlsZHJlblxuICAgICAgICB0aGlzLl9jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGNoaWxkLnNldFBvc2l0aW9uKGNoaWxkLnBvc2l0aW9uLmFkZChkaWZmKSwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Um90YXRpb24ocm90YXRpb246IG51bWJlcikgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcm90YXRpb24gPSByb3RhdGlvbjtcbiAgICB9XG4gICAgcHVibGljIHNldFNjYWxlKHNjYWxlOiBudW1iZXIpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NjYWxlID0gc2NhbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNoaWxkIHRvIHRoaXMgdHJhbnNmb3JtIGltbWVkaWF0ZWx5LiBDaGlsZHJlbiB3aWxsXG4gICAgICogbW92ZSB3aXRoIHRoZWlyIHBhcmVudFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB0cmFuc2Zvcm0gXG4gICAgICovXG4gICAgcHVibGljIGFkZENoaWxkKHRyYW5zZm9ybTogVHJhbnNmb3JtKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKHRyYW5zZm9ybSk7XG4gICAgICAgIHRyYW5zZm9ybS5zZXRQYXJlbnQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcGFyZW50IG9mIHRoaXMgdHJhbnNmb3JtLiBUaGlzIHRyYW5zZm9ybSB3aWxsIGF1dG8gXG4gICAgICogbW92ZSB3aGVuZXZlciB0aGUgcGFyZW50IG1vdmVzXG4gICAgICogXG4gICAgICogQHBhcmFtIHRyYW5zZm9ybSBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0UGFyZW50KHRyYW5zZm9ybTogVHJhbnNmb3JtKSA6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSB0cmFuc2Zvcm07XG4gICAgICAgIHRoaXMuX3VwZGF0ZUxvY2FsUG9zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgbG9jYWwgcG9zaXRpb24gb2YgdGhpcyB0cmFuc2Zvcm0gcmVsYXRpdmUgdG8gXG4gICAgICogaXRzIHBhcmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZUxvY2FsUG9zKCkge1xuICAgICAgICB0aGlzLl9sb2NhbFBvc2l0aW9uID0gdGhpcy5fcG9zaXRpb24uc3VidHJhY3QodGhpcy5fcGFyZW50LnBvc2l0aW9uKTtcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbW9kdWxlcy9UcmFuc2Zvcm0udHMiLCIvKipcbiAqIFJlcHJlc2VudHMgYW4gaW1tdXRhYmxlIGNvb3JkaW5hdGUgaW4gMkQgc3BhY2UuXG4gKiBBbGwgbm9uLWdldHRlciBtZXRob2RzIHJldHVybiBhIG5ldyBWZWN0b3IgY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfeDogbnVtYmVyID0gMCxcbiAgICAgICAgcHJpdmF0ZSBfeTogbnVtYmVyID0gMFxuICAgICkge31cblxuICAgIC8qKlxuICAgICAqICBSZXR1cm5zIHRoZSB4LWNvb3JkaW5hdGVcbiAgICAgKiBcbiAgICAgKiAgQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCB4KCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5feDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgUmV0dXJucyB0aGUgeS1jb29yZGluYXRlXG4gICAgICogXG4gICAgICogIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgeSgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3k7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIFJldHVybnMgdGhlIG1hZ25pdHVkZSAoaWUuIGxlbmd0aCkgb2YgdGhlIHZlY3RvclxuICAgICAqIFxuICAgICAqICBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IG1hZ25pdHVkZSgpIDogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgeDIgPSB0aGlzLl94ICogdGhpcy5feDtcbiAgICAgICAgY29uc3QgeTIgPSB0aGlzLl95ICogdGhpcy5feTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4MiArIHkyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgdmVjdG9yIHRoYXQgaXMgcGVycGVuZGljdWxhciB0byB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIGdldCBub3JtYWwoKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKC10aGlzLnksIHRoaXMueCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZCh2ZWN0b3I6IFZlY3RvcikgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihcbiAgICAgICAgICAgIHRoaXMuX3ggKyB2ZWN0b3IueCxcbiAgICAgICAgICAgIHRoaXMuX3kgKyB2ZWN0b3IueVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdWJ0cmFjdCh2ZWN0b3I6IFZlY3RvcikgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihcbiAgICAgICAgICAgIHRoaXMuX3ggLSB2ZWN0b3IueCxcbiAgICAgICAgICAgIHRoaXMuX3kgLSB2ZWN0b3IueVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBtdWx0aXBseShzY2FsYXI6IG51bWJlcikgOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihcbiAgICAgICAgICAgIHRoaXMuX3ggKiBzY2FsYXIsXG4gICAgICAgICAgICB0aGlzLl95ICogc2NhbGFyXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzRXF1YWxUbyh2ZWN0b3I6IFZlY3RvcikgOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuX3ggPT09IHZlY3Rvci5feCAmJlxuICAgICAgICAgICAgdGhpcy5feSA9PT0gdmVjdG9yLl95XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgZGlyZWN0aW9uIGdldHRlcnNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IGxlZnQoKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKC0xLCAwKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCByaWdodCgpIDogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoMSwgMCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgdXAoKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDAsIDEpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGRvd24oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDAsIC0xKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBvcmlnaW4oKSA6IFZlY3RvciB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDAsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzY2FsYXIgdGhhdCBzaG93cyBob3cgbXVjaCB2ZWN0b3IxXG4gICAgICogaXMgaW4gdmVjdG9yMidzIGRpcmVjdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Kn0gdmVjdG9yMSBcbiAgICAgKiBAcGFyYW0geyp9IHZlY3RvcjIgXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZG90KHZlY3RvcjE6IFZlY3RvciwgdmVjdG9yMjogVmVjdG9yKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAodmVjdG9yMS54ICogdmVjdG9yMi54KSArICh2ZWN0b3IxLnkgKiB2ZWN0b3IyLnkpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbmdpbmUvbWF0aHMvVmVjdG9yLnRzIiwiaW1wb3J0IHsgQ2FtZXJhT2JqZWN0VHlwZSwgQ2FtZXJhT2JqZWN0IH0gZnJvbSAnZW5naW5lL21vZHVsZXMvdmlld3BvcnQnO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50IGNhbWVyYSBiZWluZyBkaXNwbGF5ZWQgaW4gdGhlIHZpZXdwb3J0XG4gKi9cbmxldCBfY3VycmVudENhbWVyYTogQ2FtZXJhT2JqZWN0VHlwZTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYWluIGNhbWVyYVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFpbigpIDogQ2FtZXJhT2JqZWN0VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDYW1lcmEgfHwgKHRoaXMuX2N1cnJlbnRDYW1lcmEgPSBuZXcgQ2FtZXJhT2JqZWN0KCkpO1xufVxuXG4vKipcbiAqIFN3aXRjaGVzIHRoZSBjYW1lcmEgYmVpbmcgZGlzcGxheWVkIHRvIHRoZSBnaXZlbiBjYW1lcmFcbiAqIFxuICogQHBhcmFtIGNhbWVyYSBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaENhbWVyYShjYW1lcmE6IENhbWVyYU9iamVjdFR5cGUpIDogdm9pZCB7XG4gICAgX2N1cnJlbnRDYW1lcmEgPSBjYW1lcmE7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL21vZHVsZXMvdmlld3BvcnQvQ2FtZXJhLnRzIiwiZXhwb3J0IHsgR2FtZU9iamVjdCwgR2FtZU9iamVjdFR5cGUgfSBmcm9tICcuL2dhbWVvYmplY3QvR2FtZU9iamVjdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIElEZXN0cm95YWJsZSB9IGZyb20gJy4vSURlc3Ryb3lhYmxlJztcblxuaW1wb3J0ICogYXMgR2FtZU9iamVjdEZhY3RvcnkgZnJvbSAnLi9nYW1lb2JqZWN0L0dhbWVPYmplY3RGYWN0b3J5JztcbmV4cG9ydCB7IEdhbWVPYmplY3RGYWN0b3J5IH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW5naW5lL21vZHVsZXMvaW5kZXgudHMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJlbmdpbmUvbW9kdWxlcy9jb21wb25lbnRzL0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdFR5cGUsIEdhbWVPYmplY3QgfSBmcm9tIFwiZW5naW5lL21vZHVsZXMvZ2FtZW9iamVjdC9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgU2NlbmVHcmFwaCBmcm9tIFwiZW5naW5lL1NjZW5lR3JhcGhcIjtcblxuaW50ZXJmYWNlIEdhbWVPYmplY3RDb25maWcge1xuICAgIG9yZGVyPzogbnVtYmVyO1xuICAgIGNvbXBvbmVudHM/OiBBcnJheTxDb21wb25lbnQ+LFxufVxuXG5sZXQgZ2FtZU9iamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignI2dhbWVPYmplY3RzJyk7XG5cbi8qKlxuICogSW5qZWN0cyBhIG5ldyA8ZGl2PiBlbGVtZW50IGludG8gdGhlIHBhZ2UgdG8gcmVwcmVzZW50XG4gKiBhIEdhbWVPYmplY3RcbiAqIFxuICogQHBhcmFtIGlkIFxuICovXG5mdW5jdGlvbiBjcmVhdGVEaXZFbGVtZW50KGlkOiBzdHJpbmcsIHpJbmRleDogbnVtYmVyID0gMCkgOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZWxlbWVudC5pZCA9IGlkO1xuICAgIGVsZW1lbnQuc3R5bGUuekluZGV4ID0gekluZGV4LnRvU3RyaW5nKCk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lT2JqZWN0Jyk7XG5cbiAgICBpZighZ2FtZU9iamVjdENvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmlkID0gJ2dhbWVPYmplY3RzJztcbiAgICAgICAgZ2FtZU9iamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2FtZU9iamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlKGlkOiBzdHJpbmcsIGNvbmZpZzogR2FtZU9iamVjdENvbmZpZykgOiBHYW1lT2JqZWN0VHlwZSB7XG4gICAgY29uc3QgZ2FtZU9iamVjdCA9IG5ldyBHYW1lT2JqZWN0KCk7XG4gICAgY3JlYXRlRGl2RWxlbWVudChpZCwgY29uZmlnLm9yZGVyKTtcbiAgICBcbiAgICBpZihjb25maWcuY29tcG9uZW50cykge1xuICAgICAgICBjb25maWcuY29tcG9uZW50cy5mb3JFYWNoKGMgPT4gZ2FtZU9iamVjdC5hZGRDb21wb25lbnQoYykpO1xuICAgIH1cblxuICAgIFNjZW5lR3JhcGguaW5zdGFuY2UuYWRkKGlkLCBnYW1lT2JqZWN0KTtcblxuICAgIHJldHVybiBnYW1lT2JqZWN0O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VuZ2luZS9tb2R1bGVzL2dhbWVvYmplY3QvR2FtZU9iamVjdEZhY3RvcnkudHMiXSwic291cmNlUm9vdCI6IiJ9