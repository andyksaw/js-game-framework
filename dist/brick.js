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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Vector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Maths__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Maths___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Maths__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__Maths__, "default")) __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Maths__["default"]; });



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/asaw/Documents/Dev/playground/game_engine/engine/library/objects/index.js'");

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Keyboard__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Keyboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Keyboard__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__Keyboard__, "default")) __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Keyboard__["default"]; });


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_engine_library_objects__);


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
    const hierarchy = __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["SceneGraph"].hierarchy;
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
        __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["SceneGraph"].removeBatch(corpseObjects);
    }
}

/**
 * Renders every visible GameObject to DOM every frame
 */
function onRender() {
    __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["SceneGraph"]
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__ = __webpack_require__(0);


/**
 * Represents a coordinate in 2D space
 */
class Vector {
    constructor(x, y) {
        this._x = x || 0;
        this._y = y || 0;
    }

    /**
     *  Returns the x-coordinate
     * 
     *  @return {number}
     */
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }

    /**
     *  Returns the y-coordinate
     * 
     *  @return {number}
     */
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
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

    add(vector) {
        return new Vector(
            this.x + vector.x,
            this.y + vector.y
        );
    }

    subtract(vector) {
        return new Vector(
            this.x - vector.x,
            this.y - vector.y
        );
    }

    multiply(scalar) {
        return new Vector(
            this.x * scalar,
            this.y * scalar
        );
    }

    clamp(min, max) {
        return new Vector(
            __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["a" /* Maths */].clamp(this.x, min.x, max.x),
            __WEBPACK_IMPORTED_MODULE_0_engine_library_maths__["a" /* Maths */].clamp(this.y, min.y, max.y)
        );
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
/* 10 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/asaw/Documents/Dev/playground/game_engine/engine/library/maths/Maths.js'");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_engine_library_objects__);


class Camera {
    get transform() {
        if(!this._transform) {
            this._transform = new __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["Transform"]();

            // since a camera move needs to update everything in view,
            // set all objects in the viewport as 'dirty' so they get
            // redrawn
            
            // TODO: viewport culling
            this._transform.setPosition = (value) => {
                this._transform._position = value;
                __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["SceneGraph"].hierarchy.forEach(obj => {
                    obj.getTransform().dirty();
                });
            }
        }
        return this._transform;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (new Camera());

/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/asaw/Documents/Dev/playground/game_engine/engine/library/input/Keyboard.js'");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collidable__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Collidable__["a"]; });


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Collidable {
    
    static get SHAPE_BOX() { return 1; }
    static get SHAPE_CIRCLE() { return 2; }
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

    /**
     * Returns whether the given collidable is currently colliding
     * with the current collidable.
     * 
     * @param {Collidable} collidable 
     * 
     * @returns {boolean}
     */
    collidesWith(collidable) {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Collidable;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_game__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_games_brick_components_block__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_games_brick_components_bat__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_games_brick_components_ball__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_engine_library_objects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_engine_library_objects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_engine_library_maths__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_engine_library_screen__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_engine_library_collisions__ = __webpack_require__(18);










class BrickGame extends __WEBPACK_IMPORTED_MODULE_0_engine_game__["a" /* Game */] {
    onStart() {
        const bat = __WEBPACK_IMPORTED_MODULE_4_engine_library_objects__["SceneGraph"].instantiate(__WEBPACK_IMPORTED_MODULE_2_games_brick_components_bat__["a" /* Bat */], {
            id: 'bat',
            dimensions: new __WEBPACK_IMPORTED_MODULE_5_engine_library_maths__["b" /* Vector */](180, 20),
            position: new __WEBPACK_IMPORTED_MODULE_5_engine_library_maths__["b" /* Vector */](50, 50),
            collider: __WEBPACK_IMPORTED_MODULE_7_engine_library_collisions__["BoxCollider"],
        });

        const ball = __WEBPACK_IMPORTED_MODULE_4_engine_library_objects__["SceneGraph"].instantiate(__WEBPACK_IMPORTED_MODULE_3_games_brick_components_ball__["a" /* Ball */], {
            id: 'ball',
            dimensions: new __WEBPACK_IMPORTED_MODULE_5_engine_library_maths__["b" /* Vector */](25, 25),
            position: __WEBPACK_IMPORTED_MODULE_6_engine_library_screen__["b" /* Viewport */].origin,
        });

        // Canvas.drawLine(new Vector(100, 350), new Vector(200, 350));
        
        // c.drawLine(new Vector(100, 350), new Vector(500, 250));
        // c.drawLine(new Vector(100, 350), new Vector(300, 450));

        // const line1 = new Vector(500, 250).subtract(new Vector(100, 350));
        // const line2 = new Vector(300, 450).subtract(new Vector(100, 350));
        // const dot = Vector.dot(line1, line2);
        // console.log(dot, line2.multiply(dot));
        // c.drawLine(new Vector(100, 350), line2.multiply(dot), 'blue');

        // const test = factory.instantiate(Bat, {
        //     id: 'bat',
        //     dimensions: new Vector(180, 20),
        //     position: new Vector(150, 150),
        // });

        // bat.addChild(test);


        // for(let i = 0; i < 3; i++) {
        //     const block = factory.instantiate(Block, {
        //         id: 'test',
        //         dimensions: new Vector(150, 35),
        //         position: new Vector(50 * i, 0),
        //     });
        // }
    }
}

const game = new BrickGame();
game.initialise();

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_engine_library_objects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_engine_library_input__ = __webpack_require__(3);




class Block extends __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["GameObject"] {
    getElementDom() {
        const element = document.createElement('div');
        element.classList.add('block');

        return element;
    }

    onUpdate(timestep) {
        
    }
}
/* unused harmony export Block */


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_engine_library_objects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_engine_library_input__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_engine_library_screen__ = __webpack_require__(2);





class Bat extends __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["GameObject"] {
    onInstantiate() {
        this._boxDirection = 1;
    }
    
    getElementDom() {
        const element = document.createElement('div');
        element.id = 'bat';

        return element;
    }

    onUpdate(timestep) {
        // input handlers
        const leftPress  = __WEBPACK_IMPORTED_MODULE_2_engine_library_input__["a" /* Keyboard */].getKeyDown('a');
        const rightPress = __WEBPACK_IMPORTED_MODULE_2_engine_library_input__["a" /* Keyboard */].getKeyDown('d');

        let speed = 10;
        let velocity = new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](0, 0);
        if(leftPress > 0) {
            velocity = new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](-speed, 0);
        }
        if(rightPress > 0) {
            velocity = new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](speed, 0);
        }
        velocity = velocity.multiply(timestep);


        this.position = this.position.add(velocity);

        // don't let the bat escape the screen
        if(this.bounds.left < 0) {
            this.position.x = this.dimensions.x / 2;
        }
        if(this.bounds.right > __WEBPACK_IMPORTED_MODULE_3_engine_library_screen__["b" /* Viewport */].width) {
            this.position.x = __WEBPACK_IMPORTED_MODULE_3_engine_library_screen__["b" /* Viewport */].width - this.dimensions.x / 2;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Bat;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_engine_library_objects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_engine_library_objects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_engine_library_input__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_engine_library_screen__ = __webpack_require__(2);






class Ball extends __WEBPACK_IMPORTED_MODULE_0_engine_library_objects__["GameObject"] {
    getElementDom() {
        const element = document.createElement('div');
        element.id = 'ball';

        return element;
    }

    onInstantiate() {
        this._velocity = new __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */](__WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["a" /* Maths */].random(-4, 4), 4);
    }

    onUpdate(timestep) {
        this._velocity = __WEBPACK_IMPORTED_MODULE_1_engine_library_maths__["b" /* Vector */].origin;
        
        this.position = this.position.add(this._velocity);

        if(this.bounds.right >= __WEBPACK_IMPORTED_MODULE_3_engine_library_screen__["b" /* Viewport */].width || this.bounds.left <= 0) {
            this._velocity.x = -this._velocity.x;
        }
        if(this.bounds.bottom >= __WEBPACK_IMPORTED_MODULE_3_engine_library_screen__["b" /* Viewport */].height || this.bounds.top <= 0) {
            this._velocity.y = -this._velocity.y;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Ball;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDM1NzFiZGY5ZjA1Y2Y2YjVkZjciLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvbWF0aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvc2NyZWVuL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9nYW1lLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L0dhbWVMb29wLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L21hdGhzL1ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvbGlicmFyeS9zY3JlZW4vQ2FtZXJhLmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L3NjcmVlbi9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL2xpYnJhcnkvc2NyZWVuL1ZpZXdwb3J0LmpzIiwid2VicGFjazovLy8uL2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMvQ29sbGlkYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lcy9icmljay9icmljay5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lcy9icmljay9jb21wb25lbnRzL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2dhbWVzL2JyaWNrL2NvbXBvbmVudHMvYmF0LmpzIiwid2VicGFjazovLy8uL2dhbWVzL2JyaWNrL2NvbXBvbmVudHMvYmFsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiww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Q0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiYnJpY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDM1NzFiZGY5ZjA1Y2Y2YjVkZjciLCJleHBvcnQgeyBkZWZhdWx0IGFzIFZlY3RvciB9IGZyb20gJy4vVmVjdG9yJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWF0aHMgfSBmcm9tICcuL01hdGhzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2VuZ2luZS9saWJyYXJ5L21hdGhzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW1lcmEgfSBmcm9tICcuL0NhbWVyYSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbnZhcyB9IGZyb20gJy4vQ2FudmFzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmlld3BvcnQgfSBmcm9tICcuL1ZpZXdwb3J0JztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2VuZ2luZS9saWJyYXJ5L3NjcmVlbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgYm9vdEdhbWVMb29wIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvR2FtZUxvb3AnO1xuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvc2NyZWVuJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcblxuLyoqXG4gKiBCYXNlIGNvbnRhaW5lciBmb3IgYSBnYW1lLiBBIGdhbWUgc2hvdWxkIGV4dGVuZCB0aGlzXG4gKiBhbmQgZmlsbCBpdCB3aXRoIGdhbWUgc3BlY2lmaWMgbG9naWMuXG4gKi9cbmV4cG9ydCBjbGFzcyBHYW1lIHtcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgZW5naW5lIGdhbWUgbG9vcCBhbmQgdGhlIGdhbWUncyBsb2dpY1xuICAgICAqL1xuICAgIGluaXRpYWxpc2UoKSB7XG4gICAgICAgIENhbWVyYS50cmFuc2Zvcm0ucG9zaXRpb24gPSBuZXcgVmVjdG9yKDAsIDApO1xuICAgICAgICBib290R2FtZUxvb3AodGhpcy5vblN0YXJ0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2dpYyB0byBydW4gb25jZSBhZnRlciB0aGUgbWFpbiBnYW1lIGxvb3AgaXMgc3RhcnRlZFxuICAgICAqL1xuICAgIG9uU3RhcnQoKSB7fVxuXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbmdpbmUvZ2FtZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7IFNjZW5lR3JhcGggfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcblxuLyoqXG4gKiBEZXNpcmVkIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGZyYW1lc1xuICpcbiAqIEBjb25zdGFudCB7bnVtYmVyfVxuICovXG5jb25zdCBNU19QRVJfRlJBTUUgPSAxNjtcblxuLyoqXG4gKiAgR2FtZSBzcGVlZCAoMSA9IG5vcm1hbCBzcGVlZCB8IDAgPSBub3QgbW92aW5nKVxuICogXG4gKiAgQGNvbnN0YW50IHtudW1iZXJ9XG4gKi9cbmNvbnN0IFRJTUVfU1RFUCA9IDE7XG5cbi8qKlxuICogIFRpbWVzdGFtcCBvZiB0aGUgbGFzdCByZW5kZXJlZCBmcmFtZVxuICogXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5sZXQgbGFzdFRpY2s7XG5cblxuLyoqXG4gKiBUaGUgbWFpbiBnYW1lIGxvb3AuXG4gKiBcbiAqIENhbGN1bGF0ZXMgZnJhbWUgc3RhdHMgYW5kIHBhc3NlcyBpdCB0byB0aGUgdXBkYXRlXG4gKiBhbmQgcmVuZGVyIGxvb3BcbiAqL1xuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgLy8gY2FsY3VsYXRlIGhvdyBtdWNoIHRpbWUgaGFzIGFjdHVhbGx5IHBhc3NlZCBzaW5jZVxuICAgIC8vIHRoZSBsYXN0IGZyYW1lIGFuZCBwYXNzIGl0IHRvIHRoZSB1cGRhdGUgbG9vcFxuICAgIGNvbnN0IGN1cnJlbnRUaWNrID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBlbGFwc2VkID0gY3VycmVudFRpY2sgLSBsYXN0VGljaztcbiAgICBjb25zdCBzdGVwID0gKE1TX1BFUl9GUkFNRSAvIGVsYXBzZWQpICogVElNRV9TVEVQO1xuICAgIFxuICAgIG9uVXBkYXRlKHN0ZXApO1xuICAgIG9uUmVuZGVyKCk7XG5cbiAgICBsYXN0VGljayA9IGN1cnJlbnRUaWNrO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5cblxuLyoqXG4gKiAgRGVsZWdhdGVzIHdvcmsgdG8gZXZlcnkgZ2FtZSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gb25VcGRhdGUodGltZXN0ZXApIHtcbiAgICBjb25zdCBoaWVyYXJjaHkgPSBTY2VuZUdyYXBoLmhpZXJhcmNoeTtcbiAgICBjb25zdCBjb3Jwc2VPYmplY3RzID0gW107XG5cbiAgICAvLyBsb29wIG92ZXIgYSBidWZmZXIgc28gdGhhdCBuZXdseSBpbnN0YW50aWF0ZWQgb2JqZWN0c1xuICAgIC8vIGFsd2F5cyBzdGFydCBleGVjdXRpb24gZnJvbSB0aGUgbmV4dCBmcmFtZVxuICAgIGNvbnN0IGJ1ZmZlckNvdW50ID0gaGllcmFyY2h5Lmxlbmd0aDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYnVmZmVyQ291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBvYmogPSBoaWVyYXJjaHlbaV07XG5cbiAgICAgICAgLy8gYW55IG9iamVjdHMgbWFya2VkIGZvciBkZWxldGlvbiBzaG91bGQgbm90IGJlIGV4ZWN1dGVkXG4gICAgICAgIGlmKG9iai5pc0Rlc3Ryb3lpbmcoKSkge1xuICAgICAgICAgICAgY29ycHNlT2JqZWN0cy5wdXNoKG9iaik7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBvYmoub25VcGRhdGUodGltZXN0ZXApO1xuICAgIH1cblxuICAgIC8vIGNsZWFudXAgYW55IG9iamVjdHMgbWFya2VkIGZvciBkZWxldGlvblxuICAgIGlmKGNvcnBzZU9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBTY2VuZUdyYXBoLnJlbW92ZUJhdGNoKGNvcnBzZU9iamVjdHMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZW5kZXJzIGV2ZXJ5IHZpc2libGUgR2FtZU9iamVjdCB0byBET00gZXZlcnkgZnJhbWVcbiAqL1xuZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgU2NlbmVHcmFwaFxuICAgICAgICAuaGllcmFyY2h5XG4gICAgICAgIC5mb3JFYWNoKG9iaiA9PiBvYmoucmVuZGVyKCkpO1xufVxuXG4vKipcbiAqIFN0YXJ0cyB0aGUgZ2FtZSBsb29wXG4gKi9cbmxldCBpc0Jvb3RlZCA9IGZhbHNlO1xuZXhwb3J0IGZ1bmN0aW9uIGJvb3RHYW1lTG9vcChvblN0YXJ0KSB7XG4gICAgaWYoaXNCb290ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsYXN0VGljayA9IERhdGUubm93KCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICBvblN0YXJ0KCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbmdpbmUvbGlicmFyeS9HYW1lTG9vcC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7IE1hdGhzIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBjb29yZGluYXRlIGluIDJEIHNwYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvciB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLl94ID0geCB8fCAwO1xuICAgICAgICB0aGlzLl95ID0geSB8fCAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBSZXR1cm5zIHRoZSB4LWNvb3JkaW5hdGVcbiAgICAgKiBcbiAgICAgKiAgQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCB4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5feDtcbiAgICB9XG4gICAgc2V0IHgodmFsdWUpIHtcbiAgICAgICAgdGhpcy5feCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBSZXR1cm5zIHRoZSB5LWNvb3JkaW5hdGVcbiAgICAgKiBcbiAgICAgKiAgQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCB5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5feTtcbiAgICB9XG4gICAgc2V0IHkodmFsdWUpIHtcbiAgICAgICAgdGhpcy5feSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgKGllLiBsZW5ndGgpIG9mIHRoZSB2ZWN0b3JcbiAgICAgKiBcbiAgICAgKiAgQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBtYWduaXR1ZGUoKSB7XG4gICAgICAgIGNvbnN0IHgyID0gdGhpcy5feCAqIHRoaXMuX3g7XG4gICAgICAgIGNvbnN0IHkyID0gdGhpcy5feSAqIHRoaXMuX3k7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeDIgKyB5Mik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHZlY3RvciB0aGF0IGlzIHBlcnBlbmRpY3VsYXIgdG8gdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBnZXQgbm9ybWFsKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigtdGhpcy55LCB0aGlzLngpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIGRpcmVjdGlvbiBnZXR0ZXJzXG4gICAgICovXG4gICAgc3RhdGljIGdldCBsZWZ0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigtMSwgMCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgcmlnaHQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDEsIDApO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHVwKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigwLCAxKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBkb3duKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigwLCAtMSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgb3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigwLCAwKTtcbiAgICB9XG5cbiAgICBhZGQodmVjdG9yKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFxuICAgICAgICAgICAgdGhpcy54ICsgdmVjdG9yLngsXG4gICAgICAgICAgICB0aGlzLnkgKyB2ZWN0b3IueVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN1YnRyYWN0KHZlY3Rvcikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihcbiAgICAgICAgICAgIHRoaXMueCAtIHZlY3Rvci54LFxuICAgICAgICAgICAgdGhpcy55IC0gdmVjdG9yLnlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBtdWx0aXBseShzY2FsYXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoXG4gICAgICAgICAgICB0aGlzLnggKiBzY2FsYXIsXG4gICAgICAgICAgICB0aGlzLnkgKiBzY2FsYXJcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjbGFtcChtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihcbiAgICAgICAgICAgIE1hdGhzLmNsYW1wKHRoaXMueCwgbWluLngsIG1heC54KSxcbiAgICAgICAgICAgIE1hdGhzLmNsYW1wKHRoaXMueSwgbWluLnksIG1heC55KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzY2FsYXIgdGhhdCBzaG93cyBob3cgbXVjaCB2ZWN0b3IxXG4gICAgICogaXMgaW4gdmVjdG9yMidzIGRpcmVjdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Kn0gdmVjdG9yMSBcbiAgICAgKiBAcGFyYW0geyp9IHZlY3RvcjIgXG4gICAgICogXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBkb3QodmVjdG9yMSwgdmVjdG9yMikge1xuICAgICAgICByZXR1cm4gKHZlY3RvcjEueCAqIHZlY3RvcjIueCkgKyAodmVjdG9yMS55ICogdmVjdG9yMi55KTtcbiAgICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbmdpbmUvbGlicmFyeS9tYXRocy9WZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgeyBUcmFuc2Zvcm0sIFNjZW5lR3JhcGggfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcblxuY2xhc3MgQ2FtZXJhIHtcbiAgICBnZXQgdHJhbnNmb3JtKCkge1xuICAgICAgICBpZighdGhpcy5fdHJhbnNmb3JtKSB7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCk7XG5cbiAgICAgICAgICAgIC8vIHNpbmNlIGEgY2FtZXJhIG1vdmUgbmVlZHMgdG8gdXBkYXRlIGV2ZXJ5dGhpbmcgaW4gdmlldyxcbiAgICAgICAgICAgIC8vIHNldCBhbGwgb2JqZWN0cyBpbiB0aGUgdmlld3BvcnQgYXMgJ2RpcnR5JyBzbyB0aGV5IGdldFxuICAgICAgICAgICAgLy8gcmVkcmF3blxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBUT0RPOiB2aWV3cG9ydCBjdWxsaW5nXG4gICAgICAgICAgICB0aGlzLl90cmFuc2Zvcm0uc2V0UG9zaXRpb24gPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2Zvcm0uX3Bvc2l0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgU2NlbmVHcmFwaC5oaWVyYXJjaHkuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYmouZ2V0VHJhbnNmb3JtKCkuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhbWVyYSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZW5naW5lL2xpYnJhcnkvc2NyZWVuL0NhbWVyYS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgeyBWaWV3cG9ydCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L3NjcmVlbic7XG5cbi8qKlxuICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRvIGludGVyYWN0IHdpdGggdGhlIEhUTUwgY2FudmFzXG4gKi9cbmNsYXNzIENhbnZhcyB7XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgaWYoIXRoaXMuX2NvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IFZpZXdwb3J0LndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IFZpZXdwb3J0LmhlaWdodDtcblxuICAgICAgICAgICAgdGhpcy5fY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYSBsaW5lIG9uIHRoZSBzY3JlZW5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yMSBcbiAgICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdmVjdG9yMiBcbiAgICAgKi9cbiAgICBkcmF3TGluZSh2ZWN0b3IxLCB2ZWN0b3IyLCBjb2xvciA9ICdncmVlbicpIHtcbiAgICAgICAgY29uc3QgYyA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICBjLm1vdmVUbyh2ZWN0b3IxLngsIHZlY3RvcjEueSk7XG4gICAgICAgIGMubGluZVRvKHZlY3RvcjIueCwgdmVjdG9yMi55KTtcbiAgICAgICAgYy5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhbnZhcygpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZW5naW5lL2xpYnJhcnkvc2NyZWVuL0NhbnZhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgYnJvd3NlciB3aW5kb3dcbiAqL1xuY2xhc3MgVmlld3BvcnQge1xuICAgIGNvbnN0cnVjdG9yKHZpZXdwb3J0V2lkdGggPSA4MDAsIHZpZXdwb3J0SGVpZ2h0ID0gNDAwKSB7XG4gICAgICAgIHRoaXMuX2Jyb3dzZXJIZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLl9icm93c2VyV2lkdGggPSAwO1xuICAgICAgICB0aGlzLl9yZWNhbGN1bGF0ZVNjcmVlbigpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZWNhbGN1bGF0ZVNjcmVlbi5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9icm93c2VyV2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jyb3dzZXJIZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IHNjcmVlbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGdldCBvcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFxuICAgICAgICAgICAgdGhpcy53aWR0aCAvIDIsXG4gICAgICAgICAgICB0aGlzLmhlaWdodCAvIDIsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlY2FsY3VsYXRlU2NyZWVuKCkge1xuICAgICAgICB0aGlzLl9icm93c2VySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLl9icm93c2VyV2lkdGggID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVmlld3BvcnQoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2VuZ2luZS9saWJyYXJ5L3NjcmVlbi9WaWV3cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaWRhYmxlIHtcbiAgICBcbiAgICBzdGF0aWMgZ2V0IFNIQVBFX0JPWCgpIHsgcmV0dXJuIDE7IH1cbiAgICBzdGF0aWMgZ2V0IFNIQVBFX0NJUkNMRSgpIHsgcmV0dXJuIDI7IH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0eXBlIG9mIGNvbGxpZGFibGUgdGhhdCBzaG91bGQgYmUgY2hlY2tlZFxuICAgICAqL1xuICAgIGdldFR5cGUoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0VHlwZSgpIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuXG4gICAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldFJlY3RhbmdsZSgpIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cbiAgICBcbiAgICBnZXRDaXJjbGUoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0Q2lyY2xlKCkgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBnaXZlbiBjb2xsaWRhYmxlIGlzIGN1cnJlbnRseSBjb2xsaWRpbmdcbiAgICAgKiB3aXRoIHRoZSBjdXJyZW50IGNvbGxpZGFibGUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtDb2xsaWRhYmxlfSBjb2xsaWRhYmxlIFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGNvbGxpZGVzV2l0aChjb2xsaWRhYmxlKSB7fVxuXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbmdpbmUvbGlicmFyeS9jb2xsaXNpb25zL0NvbGxpZGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJ2VuZ2luZS9nYW1lJztcbmltcG9ydCB7IEJsb2NrIH0gZnJvbSAnZ2FtZXMvYnJpY2svY29tcG9uZW50cy9ibG9jayc7XG5pbXBvcnQgeyBCYXQgfSBmcm9tICdnYW1lcy9icmljay9jb21wb25lbnRzL2JhdCc7XG5pbXBvcnQgeyBCYWxsIH0gZnJvbSAnZ2FtZXMvYnJpY2svY29tcG9uZW50cy9iYWxsJztcblxuaW1wb3J0IHsgU2NlbmVHcmFwaCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L29iamVjdHMnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvbWF0aHMnO1xuaW1wb3J0IHsgVmlld3BvcnQsIENhbnZhcyB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L3NjcmVlbic7XG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L2NvbGxpc2lvbnMnO1xuXG5jbGFzcyBCcmlja0dhbWUgZXh0ZW5kcyBHYW1lIHtcbiAgICBvblN0YXJ0KCkge1xuICAgICAgICBjb25zdCBiYXQgPSBTY2VuZUdyYXBoLmluc3RhbnRpYXRlKEJhdCwge1xuICAgICAgICAgICAgaWQ6ICdiYXQnLFxuICAgICAgICAgICAgZGltZW5zaW9uczogbmV3IFZlY3RvcigxODAsIDIwKSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDUwLCA1MCksXG4gICAgICAgICAgICBjb2xsaWRlcjogQm94Q29sbGlkZXIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGJhbGwgPSBTY2VuZUdyYXBoLmluc3RhbnRpYXRlKEJhbGwsIHtcbiAgICAgICAgICAgIGlkOiAnYmFsbCcsXG4gICAgICAgICAgICBkaW1lbnNpb25zOiBuZXcgVmVjdG9yKDI1LCAyNSksXG4gICAgICAgICAgICBwb3NpdGlvbjogVmlld3BvcnQub3JpZ2luLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDYW52YXMuZHJhd0xpbmUobmV3IFZlY3RvcigxMDAsIDM1MCksIG5ldyBWZWN0b3IoMjAwLCAzNTApKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGMuZHJhd0xpbmUobmV3IFZlY3RvcigxMDAsIDM1MCksIG5ldyBWZWN0b3IoNTAwLCAyNTApKTtcbiAgICAgICAgLy8gYy5kcmF3TGluZShuZXcgVmVjdG9yKDEwMCwgMzUwKSwgbmV3IFZlY3RvcigzMDAsIDQ1MCkpO1xuXG4gICAgICAgIC8vIGNvbnN0IGxpbmUxID0gbmV3IFZlY3Rvcig1MDAsIDI1MCkuc3VidHJhY3QobmV3IFZlY3RvcigxMDAsIDM1MCkpO1xuICAgICAgICAvLyBjb25zdCBsaW5lMiA9IG5ldyBWZWN0b3IoMzAwLCA0NTApLnN1YnRyYWN0KG5ldyBWZWN0b3IoMTAwLCAzNTApKTtcbiAgICAgICAgLy8gY29uc3QgZG90ID0gVmVjdG9yLmRvdChsaW5lMSwgbGluZTIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkb3QsIGxpbmUyLm11bHRpcGx5KGRvdCkpO1xuICAgICAgICAvLyBjLmRyYXdMaW5lKG5ldyBWZWN0b3IoMTAwLCAzNTApLCBsaW5lMi5tdWx0aXBseShkb3QpLCAnYmx1ZScpO1xuXG4gICAgICAgIC8vIGNvbnN0IHRlc3QgPSBmYWN0b3J5Lmluc3RhbnRpYXRlKEJhdCwge1xuICAgICAgICAvLyAgICAgaWQ6ICdiYXQnLFxuICAgICAgICAvLyAgICAgZGltZW5zaW9uczogbmV3IFZlY3RvcigxODAsIDIwKSxcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDE1MCwgMTUwKSxcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gYmF0LmFkZENoaWxkKHRlc3QpO1xuXG5cbiAgICAgICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAvLyAgICAgY29uc3QgYmxvY2sgPSBmYWN0b3J5Lmluc3RhbnRpYXRlKEJsb2NrLCB7XG4gICAgICAgIC8vICAgICAgICAgaWQ6ICd0ZXN0JyxcbiAgICAgICAgLy8gICAgICAgICBkaW1lbnNpb25zOiBuZXcgVmVjdG9yKDE1MCwgMzUpLFxuICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKDUwICogaSwgMCksXG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxuY29uc3QgZ2FtZSA9IG5ldyBCcmlja0dhbWUoKTtcbmdhbWUuaW5pdGlhbGlzZSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZ2FtZXMvYnJpY2svYnJpY2suanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvaW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgQmxvY2sgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgICBnZXRFbGVtZW50RG9tKCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSh0aW1lc3RlcCkge1xuICAgICAgICBcbiAgICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9nYW1lcy9icmljay9jb21wb25lbnRzL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvb2JqZWN0cyc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L2lucHV0JztcbmltcG9ydCB7IFZpZXdwb3J0IH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvc2NyZWVuJztcblxuZXhwb3J0IGNsYXNzIEJhdCBleHRlbmRzIEdhbWVPYmplY3Qge1xuICAgIG9uSW5zdGFudGlhdGUoKSB7XG4gICAgICAgIHRoaXMuX2JveERpcmVjdGlvbiA9IDE7XG4gICAgfVxuICAgIFxuICAgIGdldEVsZW1lbnREb20oKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5pZCA9ICdiYXQnO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHRpbWVzdGVwKSB7XG4gICAgICAgIC8vIGlucHV0IGhhbmRsZXJzXG4gICAgICAgIGNvbnN0IGxlZnRQcmVzcyAgPSBLZXlib2FyZC5nZXRLZXlEb3duKCdhJyk7XG4gICAgICAgIGNvbnN0IHJpZ2h0UHJlc3MgPSBLZXlib2FyZC5nZXRLZXlEb3duKCdkJyk7XG5cbiAgICAgICAgbGV0IHNwZWVkID0gMTA7XG4gICAgICAgIGxldCB2ZWxvY2l0eSA9IG5ldyBWZWN0b3IoMCwgMCk7XG4gICAgICAgIGlmKGxlZnRQcmVzcyA+IDApIHtcbiAgICAgICAgICAgIHZlbG9jaXR5ID0gbmV3IFZlY3Rvcigtc3BlZWQsIDApO1xuICAgICAgICB9XG4gICAgICAgIGlmKHJpZ2h0UHJlc3MgPiAwKSB7XG4gICAgICAgICAgICB2ZWxvY2l0eSA9IG5ldyBWZWN0b3Ioc3BlZWQsIDApO1xuICAgICAgICB9XG4gICAgICAgIHZlbG9jaXR5ID0gdmVsb2NpdHkubXVsdGlwbHkodGltZXN0ZXApO1xuXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHZlbG9jaXR5KTtcblxuICAgICAgICAvLyBkb24ndCBsZXQgdGhlIGJhdCBlc2NhcGUgdGhlIHNjcmVlblxuICAgICAgICBpZih0aGlzLmJvdW5kcy5sZWZ0IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5kaW1lbnNpb25zLnggLyAyO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuYm91bmRzLnJpZ2h0ID4gVmlld3BvcnQud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IFZpZXdwb3J0LndpZHRoIC0gdGhpcy5kaW1lbnNpb25zLnggLyAyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZ2FtZXMvYnJpY2svY29tcG9uZW50cy9iYXQuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9vYmplY3RzJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L21hdGhzJztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnZW5naW5lL2xpYnJhcnkvaW5wdXQnO1xuaW1wb3J0IHsgTWF0aHMgfSBmcm9tICdlbmdpbmUvbGlicmFyeS9tYXRocyc7XG5pbXBvcnQgeyBWaWV3cG9ydCB9IGZyb20gJ2VuZ2luZS9saWJyYXJ5L3NjcmVlbic7XG5cbmV4cG9ydCBjbGFzcyBCYWxsIGV4dGVuZHMgR2FtZU9iamVjdCB7XG4gICAgZ2V0RWxlbWVudERvbSgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmlkID0gJ2JhbGwnO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIG9uSW5zdGFudGlhdGUoKSB7XG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5ID0gbmV3IFZlY3RvcihNYXRocy5yYW5kb20oLTQsIDQpLCA0KTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSh0aW1lc3RlcCkge1xuICAgICAgICB0aGlzLl92ZWxvY2l0eSA9IFZlY3Rvci5vcmlnaW47XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5fdmVsb2NpdHkpO1xuXG4gICAgICAgIGlmKHRoaXMuYm91bmRzLnJpZ2h0ID49IFZpZXdwb3J0LndpZHRoIHx8IHRoaXMuYm91bmRzLmxlZnQgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5fdmVsb2NpdHkueCA9IC10aGlzLl92ZWxvY2l0eS54O1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuYm91bmRzLmJvdHRvbSA+PSBWaWV3cG9ydC5oZWlnaHQgfHwgdGhpcy5ib3VuZHMudG9wIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3ZlbG9jaXR5LnkgPSAtdGhpcy5fdmVsb2NpdHkueTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2dhbWVzL2JyaWNrL2NvbXBvbmVudHMvYmFsbC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==