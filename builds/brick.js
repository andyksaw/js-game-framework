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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Vector", {
  enumerable: true,
  get: function get() {
    return _Vector.default;
  }
});

var _Vector = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BoundingBox", {
  enumerable: true,
  get: function get() {
    return _BoundingBox.default;
  }
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function get() {
    return _Component.default;
  }
});
Object.defineProperty(exports, "GameObject", {
  enumerable: true,
  get: function get() {
    return _GameObject.default;
  }
});
Object.defineProperty(exports, "SceneGraph", {
  enumerable: true,
  get: function get() {
    return _SceneGraph.default;
  }
});
Object.defineProperty(exports, "Sprite", {
  enumerable: true,
  get: function get() {
    return _Sprite.default;
  }
});
Object.defineProperty(exports, "Transform", {
  enumerable: true,
  get: function get() {
    return _Transform.default;
  }
});

var _BoundingBox = _interopRequireDefault(__webpack_require__(6));

var _Component = _interopRequireDefault(__webpack_require__(8));

var _GameObject = _interopRequireDefault(__webpack_require__(9));

var _SceneGraph = _interopRequireDefault(__webpack_require__(25));

var _Sprite = _interopRequireDefault(__webpack_require__(14));

var _Transform = _interopRequireDefault(__webpack_require__(15));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Camera", {
  enumerable: true,
  get: function get() {
    return _Camera.default;
  }
});
Object.defineProperty(exports, "Canvas", {
  enumerable: true,
  get: function get() {
    return _Canvas.default;
  }
});
Object.defineProperty(exports, "Viewport", {
  enumerable: true,
  get: function get() {
    return _Viewport.default;
  }
});

var _Camera = _interopRequireDefault(__webpack_require__(10));

var _Canvas = _interopRequireDefault(__webpack_require__(11));

var _Viewport = _interopRequireDefault(__webpack_require__(12));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Keyboard", {
  enumerable: true,
  get: function get() {
    return _Keyboard.default;
  }
});

var _Keyboard = _interopRequireDefault(__webpack_require__(16));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = void 0;

var _GameLoop = __webpack_require__(5);

var _screen = __webpack_require__(2);

var _maths = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Base container for a game. A game should extend this
 * and fill it with game specific logic.
 */
var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);
  }

  _createClass(Game, [{
    key: "initialise",

    /**
     * Starts the engine game loop and the game's logic
     */
    value: function initialise() {
      _screen.Camera.transform.position = new _maths.Vector(0, 0);
      (0, _GameLoop.bootGameLoop)(this.onStart);
    }
    /**
     * Logic to run once after the main game loop is started
     */

  }, {
    key: "onStart",
    value: function onStart() {}
  }]);

  return Game;
}();

exports.Game = Game;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootGameLoop = bootGameLoop;

var _objects = __webpack_require__(1);

/**
 * Desired amount of time in milliseconds between frames
 *
 * @constant {number}
 */
var MS_PER_FRAME = 16;
/**
 *  Game speed (1 = normal speed | 0 = not moving)
 * 
 *  @constant {number}
 */

var TIME_STEP = 1;
/**
 *  Timestamp of the last rendered frame
 * 
 * @type {number}
 */

var lastTick;
/**
 * The main game loop.
 * 
 * Calculates frame stats and passes it to the update
 * and render loop
 */

function gameLoop() {
  // calculate how much time has actually passed since
  // the last frame and pass it to the update loop
  var currentTick = Date.now();
  var elapsed = currentTick - lastTick;
  var step = MS_PER_FRAME / elapsed * TIME_STEP;
  onUpdate(step);
  onRender();
  lastTick = currentTick;
  requestAnimationFrame(gameLoop);
}
/**
 *  Delegates work to every game object
 */


function onUpdate(timestep) {
  var hierarchy = _objects.SceneGraph.hierarchy;
  var corpseObjects = []; // loop over a buffer so that newly instantiated objects
  // always start execution from the next frame

  var bufferCount = hierarchy.length;

  for (var i = 0; i < bufferCount; i++) {
    var obj = hierarchy[i]; // any objects marked for deletion should not be executed

    if (obj.isDestroying()) {
      corpseObjects.push(obj);
      continue;
    }

    obj.onUpdate(timestep);
  } // cleanup any objects marked for deletion


  if (corpseObjects.length > 0) {
    _objects.SceneGraph.removeBatch(corpseObjects);
  }
}
/**
 * Renders every visible GameObject to DOM every frame
 */


function onRender() {
  _objects.SceneGraph.hierarchy.forEach(function (obj) {
    return obj.render();
  });
}
/**
 * Starts the game loop
 */


var isBooted = false;

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _maths = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Represents the four corners of a GameObject, used for calculating
 * collisions between GameObjects.
 * 
 * Note: a bounding box may not necessarily be the same size as a 
 * GameObject's sprite.
 */
var BoundingBox =
/*#__PURE__*/
function () {
  /**
   * Returns a new bounding box using the given position and
   * size dimensions
   * 
   * @param {Vector} position 
   * @param {Vector} dimensions 
   */
  function BoundingBox(position, dimensions) {
    _classCallCheck(this, BoundingBox);

    this._dimensions = dimensions;
    this.updatePosition(position);
  }
  /**
   * Updates the bounding box position based on the new position
   * of the owning GameObject
   * 
   * @param {*} position      
   */


  _createClass(BoundingBox, [{
    key: "updatePosition",
    value: function updatePosition(position) {
      var halfWidth = this._dimensions.x / 2;
      var halfHeight = this._dimensions.y / 2;
      this._topLeft = new _maths.Vector(position.x - halfWidth, position.y - halfHeight);
      this._topRight = new _maths.Vector(position.x + halfWidth, position.y - halfHeight);
      this._botLeft = new _maths.Vector(position.x - halfWidth, position.y + halfHeight);
      this._botRight = new _maths.Vector(position.x + halfWidth, position.y + halfHeight);
    }
  }, {
    key: "topLeft",
    get: function get() {
      return this._topLeft;
    }
  }, {
    key: "topRight",
    get: function get() {
      return this._topRight;
    }
  }, {
    key: "botLeft",
    get: function get() {
      return this._botLeft;
    }
  }, {
    key: "botRight",
    get: function get() {
      return this._botRight;
    }
  }, {
    key: "top",
    get: function get() {
      return this._topLeft.y;
    }
  }, {
    key: "bottom",
    get: function get() {
      return this._botRight.y;
    }
  }, {
    key: "left",
    get: function get() {
      return this._topLeft.x;
    }
  }, {
    key: "right",
    get: function get() {
      return this._botRight.x;
    }
  }]);

  return BoundingBox;
}();

exports.default = BoundingBox;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Represents a coordinate in 2D space
 */
var Vector =
/*#__PURE__*/
function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this._x = x || 0;
    this._y = y || 0;
  }
  /**
   *  Returns the x-coordinate
   * 
   *  @return {number}
   */


  _createClass(Vector, [{
    key: "add",
    value: function add(vector) {
      return new Vector(this.x + vector.x, this.y + vector.y);
    }
  }, {
    key: "subtract",
    value: function subtract(vector) {
      return new Vector(this.x - vector.x, this.y - vector.y);
    }
  }, {
    key: "multiply",
    value: function multiply(scalar) {
      return new Vector(this.x * scalar, this.y * scalar);
    }
  }, {
    key: "x",
    get: function get() {
      return this._x;
    },
    set: function set(value) {
      this._x = value;
    }
    /**
     *  Returns the y-coordinate
     * 
     *  @return {number}
     */

  }, {
    key: "y",
    get: function get() {
      return this._y;
    },
    set: function set(value) {
      this._y = value;
    }
    /**
     *  Returns the magnitude (ie. length) of the vector
     * 
     *  @return {number}
     */

  }, {
    key: "magnitude",
    get: function get() {
      var x2 = this._x * this._x;
      var y2 = this._y * this._y;
      return Math.sqrt(x2 + y2);
    }
    /**
     * Gets a vector that is perpendicular to this vector
     */

  }, {
    key: "normal",
    get: function get() {
      return new Vector(-this.y, this.x);
    }
  }], [{
    key: "origin",
    value: function origin() {
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

  }, {
    key: "dot",
    value: function dot(vector1, vector2) {
      return vector1.x * vector2.x + vector1.y * vector2.y;
    }
  }]);

  return Vector;
}();

exports.default = Vector;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * An interface for interacting with a GameObject. This is
 * where almost all the custom game code should live.
 * 
 * A component should be instantiated and attached to a
 * GameObject when the GameObject is created.
 */
var Component =
/*#__PURE__*/
function () {
  function Component(gameObject) {
    _classCallCheck(this, Component);

    this._gameObject = gameObject;
  }
  /**
   * Gets the transform for the GameObject of this component
   * 
   * @return {Transform}
   */


  _createClass(Component, [{
    key: "onInstantiate",

    /**
     * Logic to run when the object is first instantiated.
     */
    value: function onInstantiate() {}
    /**
     * Logic to run every game loop frame
     */

  }, {
    key: "onUpdate",
    value: function onUpdate() {}
    /**
     * Logic to run when the object is destroyed
     */

  }, {
    key: "onDestroy",
    value: function onDestroy() {}
  }, {
    key: "transform",
    get: function get() {
      return this._gameObject.transform;
    }
    /**
     * Gets the sprite for the GameObject of this component
     * 
     * @return {Sprite}
     */

  }, {
    key: "sprite",
    get: function get() {
      return this._gameObject.sprite;
    }
    /**
     * Gets the GameObject this component belongs to
     * 
     * @return {GameObject}
     */

  }, {
    key: "gameObject",
    get: function get() {
      return this._gameObject;
    }
  }]);

  return Component;
}();

exports.default = Component;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _maths = __webpack_require__(0);

var _objects = __webpack_require__(1);

var _screen = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Represents an object in the scene
 */
var GameObject =
/*#__PURE__*/
function () {
  /**
   * Creates a new GameObject
   * 
   * @param {string} id           Unique identifier
   * @param {Vector} position     Starting position of the object
   */
  function GameObject(id) {
    var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, GameObject);

    this._id = id;
    this._isVisible = true;
    this._isDestroying = false;
    this._isDisabled = false;
    this._components = [];
    this._sprite = null;
    this._transform = new _objects.Transform(position);
  }

  _createClass(GameObject, [{
    key: "getTransform",
    value: function getTransform() {
      return this._transform;
    }
  }, {
    key: "getSprite",
    value: function getSprite() {
      return this._sprite;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this._id;
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this._element;
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      return this._isVisible;
    }
  }, {
    key: "isDestroying",
    value: function isDestroying() {
      return this._isDestroying;
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      return this._isDisabled;
    }
  }, {
    key: "createDom",
    value: function createDom(id) {
      var element = document.createElement('div');
      element.id = id;
      element.classList.add('gameObject');
      document.body.appendChild(element);
      this._element = element;
      this.onInstantiate();
    }
  }, {
    key: "addComponent",
    value: function addComponent(component) {
      this._components.push(component);
    }
  }, {
    key: "setSprite",
    value: function setSprite() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._sprite = new _objects.Sprite(this._transform.getPosition(), config);

      this._sprite.appendDom();
    }
  }, {
    key: "setParent",
    value: function setParent(gameObject) {
      this._transform.setParent(gameObject.getTransform());

      console.log(this._transform);
    }
    /**
     * Sets the visibility of the object. Setting to false
     * effectively sets 'display: none' css
     * 
     * @param {boolean} isVisible 
     */

  }, {
    key: "setVisibility",
    value: function setVisibility(isVisible) {
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

  }, {
    key: "setDisabled",
    value: function setDisabled(isDisabled) {
      this._isDisabled = isDisabled;
    }
    /**
     * Marks the object for destruction at the end of the frame.
     * Furthermore, the object will not execute its update loop if 
     * it hasn't already executed it yet.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._isDestroying = true;
      this.onDestroy();
    }
    /**
     * Calls onInstantiate() on all components on this GameObject
     */

  }, {
    key: "onInstantiate",
    value: function onInstantiate() {
      this._components.forEach(function (c) {
        return c.onInstantiate();
      });
    }
    /**
     * Calls onDestroy() on all components on this GameObject
     */

  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this._components.forEach(function (c) {
        return c.onDestroy();
      });
    }
    /**
     * Calls onUpdate() on all components on this GameObject
     */

  }, {
    key: "onUpdate",
    value: function onUpdate(timestep) {
      if (this._isDisabled || this._isDestroying) {
        return;
      }

      this._components.forEach(function (c) {
        return c.onUpdate(timestep);
      });
    }
    /**
     * Renders the object in world space each game loop frame
     */

  }, {
    key: "render",
    value: function render() {
      if (!this._isVisible || this._isDisabled || this._isDestroying) {
        return;
      }

      var position = this._transform.getPosition(); // the Transform stores our world-space coordinates,
      // but we need to render the object in screen-space


      var cameraPos = _screen.Camera.transform.getPosition();

      var screenSpacePos = new _maths.Vector(position.x - cameraPos.x, position.y - cameraPos.y);
      this._element.style.left = screenSpacePos.x;
      this._element.style.top = screenSpacePos.y;

      if (this._sprite) {
        this._sprite.render(screenSpacePos, 1);
      }
    }
  }]);

  return GameObject;
}();

exports.default = GameObject;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objects = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Camera =
/*#__PURE__*/
function () {
  function Camera() {
    _classCallCheck(this, Camera);
  }

  _createClass(Camera, [{
    key: "transform",
    get: function get() {
      if (!this._transform) {
        this._transform = new _objects.Transform();
      }

      return this._transform;
    }
  }]);

  return Camera;
}();

var _default = new Camera();

exports.default = _default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _screen = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Collection of methods to interact with the HTML canvas
 */
var Canvas =
/*#__PURE__*/
function () {
  function Canvas() {
    _classCallCheck(this, Canvas);
  }

  _createClass(Canvas, [{
    key: "getContext",
    value: function getContext() {
      if (!this._context) {
        var canvas = document.getElementById('canvas');
        canvas.width = _screen.Viewport.width;
        canvas.height = _screen.Viewport.height;
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

  }, {
    key: "drawLine",
    value: function drawLine(vector1, vector2) {
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'green';
      var c = this.getContext();
      c.beginPath();
      c.moveTo(vector1.x, vector1.y);
      c.lineTo(vector2.x, vector2.y);
      c.strokeStyle = color;
      c.stroke();
    }
  }]);

  return Canvas;
}();

var _default = new Canvas();

exports.default = _default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _maths = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Represents the browser window
 */
var Viewport =
/*#__PURE__*/
function () {
  function Viewport() {
    _classCallCheck(this, Viewport);

    this._viewportHeight;
    this._viewportWidth;
  }

  _createClass(Viewport, [{
    key: "width",
    get: function get() {
      return window.innerWidth;
    }
  }, {
    key: "height",
    get: function get() {
      return window.innerHeight;
    }
  }, {
    key: "screen",
    get: function get() {
      return new _maths.Vector(this.width, this.height);
    }
  }, {
    key: "origin",
    get: function get() {
      return new _maths.Vector(this.width / 2, this.height / 2);
    }
  }]);

  return Viewport;
}();

var _default = new Viewport();

exports.default = _default;

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _maths = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite =
/*#__PURE__*/
function () {
  function Sprite(origin, config) {
    _classCallCheck(this, Sprite);

    var asset = config.asset,
        _config$dimensions = config.dimensions,
        dimensions = _config$dimensions === void 0 ? new _maths.Vector() : _config$dimensions,
        _config$offset = config.offset,
        offset = _config$offset === void 0 ? new _maths.Vector() : _config$offset;
    this._asset = asset;
    this._origin = origin;
    this._dimensions = dimensions;
    this._offset = offset;
    this._lastPosition = new _maths.Vector();
    this._element = null;
  }
  /**
   * Creates the DOM that holds this sprite
   */


  _createClass(Sprite, [{
    key: "appendDom",
    value: function appendDom() {
      var element = document.createElement('div');
      element.classList.add('sprite');
      element.id = "sprite_".concat(new Date().getTime());
      element.style.width = this._dimensions.x;
      element.style.height = this._dimensions.y;
      element.style.left = this._origin.x;
      element.style.top = this._origin.y;
      element.style.backgroundImage = "url(".concat(this._asset, ")");
      document.body.appendChild(element);
      this._element = element;
    }
    /**
     * Updates the DOM position of the Sprite
     * 
     * @param {Vector} origin 
     */

  }, {
    key: "render",
    value: function render(origin) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var x = origin.x + this._offset.x;
      var y = origin.y + this._offset.y;

      if (x === this._lastPosition.x && y === this._lastPosition.y) {
        return;
      }

      this._element.style.left = x;
      this._element.style.top = -y; // flip Y because the browser Y is reversed

      this._element.style.width = this._dimensions.x * scale;
      this._element.style.height = this._dimensions.y * scale;
      this._origin = origin;
      this._lastPosition = new _maths.Vector(x, y);
    }
  }]);

  return Sprite;
}();

exports.default = Sprite;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _maths = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Transform =
/*#__PURE__*/
function () {
  function Transform() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _maths.Vector.origin();
    var rotation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    _classCallCheck(this, Transform);

    this._position = position;
    this._parent = null;
    this._localPosition = _maths.Vector.origin();
    this._rotation = rotation;
    this._scale = scale;
  }

  _createClass(Transform, [{
    key: "getPosition",
    value: function getPosition() {
      return this._position;
    }
  }, {
    key: "setPosition",
    value: function setPosition(value) {
      var transformParent = this._parent; // console.log(this);
      // if(transformParent) {
      //     let combinedLocal = this._localPosition;
      //     while(transformParent) {
      //         console.log('test');
      //         combinedLocal = combinedLocal.multiply(parent.localPosition);
      //         transformParent = transformParent.parent;
      //     }
      //     this._position = combinedLocal.multiply
      //     return;
      // }

      this._position = value;
    }
  }, {
    key: "getParent",
    value: function getParent() {
      return this._parent;
    }
  }, {
    key: "setParent",
    value: function setParent(transform) {
      this._parent = transform;
      this._localPosition = this._position.subtract(transform.getPosition());
    }
  }, {
    key: "getLocalPosition",
    value: function getLocalPosition() {
      return this._localPosition;
    }
  }]);

  return Transform;
}();

exports.default = Transform;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Handles interaction with the keyboard and retrieving
 * press values
 */
var Keyboard =
/*#__PURE__*/
function () {
  _createClass(Keyboard, [{
    key: "A",
    get: function get() {
      return 65;
    }
  }, {
    key: "W",
    get: function get() {
      return 87;
    }
  }, {
    key: "S",
    get: function get() {
      return 83;
    }
  }, {
    key: "D",
    get: function get() {
      return 68;
    }
  }, {
    key: "SPACEBAR",
    get: function get() {
      return 32;
    }
  }, {
    key: "ARROW_LEFT",
    get: function get() {
      return 37;
    }
  }, {
    key: "ARROW_UP",
    get: function get() {
      return 38;
    }
  }, {
    key: "ARROW_RIGHT",
    get: function get() {
      return 39;
    }
  }, {
    key: "ARROW_DOWN",
    get: function get() {
      return 40;
    }
  }]);

  function Keyboard() {
    var _this = this;

    _classCallCheck(this, Keyboard);

    this._onKeyDown = function (event) {
      var keyCode = event.keyCode;

      _this._keyDownValues.set(keyCode, 1);

      if (_this._keyPressComplete.get(keyCode) === true) {
        _this._keyPressComplete.set(keyCode, 1);

        _this._keyPressComplete.set(keyCode, false);
      }
    };

    this._onKeyUp = function (event) {
      var keyCode = event.keyCode;

      _this._keyDownValues.set(keyCode, 0);

      _this._keyPressComplete.set(keyCode, true);
    };

    this.getKeyDown = function (keyCode) {
      var value = _this._keyDownValues.get(keyCode);

      return value || 0;
    };

    this.getKeyPress = function (keyCode) {
      var value = _this._keyDownValues.get(keyCode);

      if (value > 0) {
        _this._keyPressComplete.set(keyCode, 0);
      }

      return value;
    };

    this._keyDownValues = new Map();
    this._keyPressComplete = new Map();

    this._setUp();
  }

  _createClass(Keyboard, [{
    key: "_setUp",
    value: function _setUp() {
      this._listenKeyDown = window.addEventListener('keydown', this._onKeyDown);
      this._listenKeyUp = window.addEventListener('keyup', this._onKeyUp);
    }
  }, {
    key: "_tearDown",
    value: function _tearDown() {
      window.removeEventListener('keydown', this._listenKeyDown);
      window.removeEventListener('keyup', this._listenKeyUp);
    }
  }]);

  return Keyboard;
}();

var _default = new Keyboard();

exports.default = _default;

/***/ }),
/* 17 */
/***/ (function(module, exports) {



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(4);

var _block = __webpack_require__(19);

var _bat = __webpack_require__(20);

var _ball = __webpack_require__(21);

var _objects = __webpack_require__(1);

var _maths = __webpack_require__(0);

var _screen = __webpack_require__(2);

var _collisions = __webpack_require__(17);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrickGame =
/*#__PURE__*/
function (_Game) {
  _inherits(BrickGame, _Game);

  function BrickGame() {
    _classCallCheck(this, BrickGame);

    return _possibleConstructorReturn(this, (BrickGame.__proto__ || Object.getPrototypeOf(BrickGame)).apply(this, arguments));
  }

  _createClass(BrickGame, [{
    key: "onStart",
    value: function onStart() {
      var bat = _objects.SceneGraph.instantiate(_bat.Bat, {
        id: 'bat',
        dimensions: new _maths.Vector(180, 20),
        position: new _maths.Vector(50, 50),
        collider: _collisions.BoxCollider
      });

      var ball = _objects.SceneGraph.instantiate(_ball.Ball, {
        id: 'ball',
        dimensions: new _maths.Vector(25, 25),
        position: _screen.Viewport.origin
      }); // Canvas.drawLine(new Vector(100, 350), new Vector(200, 350));
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
  }]);

  return BrickGame;
}(_game.Game);

var game = new BrickGame();
game.initialise();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = void 0;

var _objects = __webpack_require__(1);

var _maths = __webpack_require__(0);

var _input = __webpack_require__(3);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Block =
/*#__PURE__*/
function (_GameObject) {
  _inherits(Block, _GameObject);

  function Block() {
    _classCallCheck(this, Block);

    return _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).apply(this, arguments));
  }

  _createClass(Block, [{
    key: "getElementDom",
    value: function getElementDom() {
      var element = document.createElement('div');
      element.classList.add('block');
      return element;
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(timestep) {}
  }]);

  return Block;
}(_objects.GameObject);

exports.Block = Block;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bat = void 0;

var _objects = __webpack_require__(1);

var _maths = __webpack_require__(0);

var _input = __webpack_require__(3);

var _screen = __webpack_require__(2);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bat =
/*#__PURE__*/
function (_GameObject) {
  _inherits(Bat, _GameObject);

  function Bat() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Bat);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Bat.__proto__ || Object.getPrototypeOf(Bat)).call.apply(_ref, [this].concat(args))), _this._boxDirection = 1, _temp));
  }

  _createClass(Bat, [{
    key: "getElementDom",
    value: function getElementDom() {
      var element = document.createElement('div');
      element.id = 'bat';
      return element;
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(timestep) {
      // input handlers
      var leftPress = _input.Keyboard.getKeyDown('a');

      var rightPress = _input.Keyboard.getKeyDown('d');

      var speed = 10;
      var velocity = new _maths.Vector(0, 0);

      if (leftPress > 0) {
        velocity = new _maths.Vector(-speed, 0);
      }

      if (rightPress > 0) {
        velocity = new _maths.Vector(speed, 0);
      }

      velocity = velocity.multiply(timestep);
      this.position = this.position.add(velocity); // don't let the bat escape the screen

      if (this.bounds.left < 0) {
        this.position.x = this.dimensions.x / 2;
      }

      if (this.bounds.right > _screen.Viewport.width) {
        this.position.x = _screen.Viewport.width - this.dimensions.x / 2;
      }
    }
  }]);

  return Bat;
}(_objects.GameObject);

exports.Bat = Bat;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ball = void 0;

var _objects = __webpack_require__(1);

var _maths = __webpack_require__(0);

var _input = __webpack_require__(3);

var _utility = __webpack_require__(22);

var _screen = __webpack_require__(2);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ball =
/*#__PURE__*/
function (_GameObject) {
  _inherits(Ball, _GameObject);

  function Ball() {
    _classCallCheck(this, Ball);

    return _possibleConstructorReturn(this, (Ball.__proto__ || Object.getPrototypeOf(Ball)).apply(this, arguments));
  }

  _createClass(Ball, [{
    key: "getElementDom",
    value: function getElementDom() {
      var element = document.createElement('div');
      element.id = 'ball';
      return element;
    }
  }, {
    key: "onInstantiate",
    value: function onInstantiate() {
      this._velocity = new _maths.Vector((0, _utility.random)(-4, 4), 4);
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(timestep) {
      this._velocity = _maths.Vector.origin;
      this.position = this.position.add(this._velocity);

      if (this.bounds.right >= _screen.Viewport.width || this.bounds.left <= 0) {
        this._velocity.x = -this._velocity.x;
      }

      if (this.bounds.bottom >= _screen.Viewport.height || this.bounds.top <= 0) {
        this._velocity.y = -this._velocity.y;
      }
    }
  }]);

  return Ball;
}(_objects.GameObject);

exports.Ball = Ball;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = void 0;

var random = function random(min, max) {
  var value = Math.random() * (min - max) - min;
  return Math.round(value);
};

exports.random = random;

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _maths = __webpack_require__(0);

var _objects = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Singleton to hold all references to all instantiated GameObjects
 */
var SceneGraph =
/*#__PURE__*/
function () {
  function SceneGraph() {
    _classCallCheck(this, SceneGraph);

    // an ordered list (array) of all GameObjects
    this._hierarchy = []; // a unique id to GameObject mapping

    this._gameObjects = new Map();
  }

  _createClass(SceneGraph, [{
    key: "get",

    /**
     * Gets the GameObject that belongs to the given id
     * 
     * @param {*} id 
     */
    value: function get(id) {
      return this._gameObjects.get(id);
    }
    /**
    * Creates a new GameObject
    * 
    * @type {string} id         Name/identifier of the object
    * @type {object} config     GameObject settings
    */

  }, {
    key: "instantiate",
    value: function instantiate(id, config) {
      var _config$position = config.position,
          position = _config$position === void 0 ? new _maths.Vector(0, 0) : _config$position,
          _config$components = config.components,
          components = _config$components === void 0 ? [] : _config$components,
          _config$sprite = config.sprite,
          sprite = _config$sprite === void 0 ? {} : _config$sprite;

      if (id == null) {
        throw new Error("Instantiation failed: no unique id given for ".concat(type(gameObject)));
      }

      if (this._gameObjects.get(id)) {
        throw new Error("Instantiation failed: a GameObject already exists with the name ".concat(id));
      }

      var obj = new _objects.GameObject(id, position);

      this._hierarchy.push(obj);

      this._gameObjects.set(id, obj);

      if (sprite.asset) {
        obj.setSprite(sprite);
      }

      components.forEach(function (componentName) {
        var component = new componentName(obj);
        obj.addComponent(component);
      });
      obj.createDom(id);
      return obj;
    }
    /**
     * Takes in an array of GameObjects and removes them all 
     * from the hierarchy immediately
     * 
     * @param {array} gameObjects 
     */

  }, {
    key: "removeBatch",
    value: function removeBatch(gameObjects) {
      var _this = this;

      gameObjects.forEach(function (obj) {
        _this._gameObjects.delete(obj.id);
      });
      this._hierarchy = this._hierarchy.filter(function (obj) {
        return gameObjects.indexOf(obj) < 0;
      });
    }
  }, {
    key: "hierarchy",
    get: function get() {
      return this._hierarchy;
    }
  }]);

  return SceneGraph;
}();

var _default = new SceneGraph();

exports.default = _default;

/***/ })
/******/ ]);