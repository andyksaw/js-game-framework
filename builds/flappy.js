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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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
Object.defineProperty(exports, "Maths", {
  enumerable: true,
  get: function get() {
    return _Maths.default;
  }
});

var _Vector = _interopRequireDefault(__webpack_require__(7));

var _Maths = _interopRequireDefault(__webpack_require__(29));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
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
/* 6 */,
/* 7 */
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
    key: "clamp",
    value: function clamp(min, max) {
      return new Vector(_maths.Maths.clamp(this.x, min.x, max.x), _maths.Maths.clamp(this.y, min.y, max.y));
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
  /**
   * @return {Transform}
   */


  _createClass(GameObject, [{
    key: "getTransform",
    value: function getTransform() {
      return this._transform;
    }
    /**
     * @return {Sprite}
     */

  }, {
    key: "getSprite",
    value: function getSprite() {
      return this._sprite;
    }
    /**
     * Returns the unique identifier string of this GameObject
     * 
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this._id;
    }
    /**
     * Returns the DOM element that represents this GameObject
     * 
     * @return {HTMLNode}
     */

  }, {
    key: "getElement",
    value: function getElement() {
      return this._element;
    }
    /**
     * Returns whether the object is visible (but still executing
     * its update loop)
     * 
     * @return {boolean}
     */

  }, {
    key: "isVisible",
    value: function isVisible() {
      return this._isVisible;
    }
    /**
     * Returns whether the object will be destroyed next frame
     * 
     * @return {boolean}
     */

  }, {
    key: "isDestroying",
    value: function isDestroying() {
      return this._isDestroying;
    }
    /**
     * Returns whether the object is disabled (ie. not executing
     * its update loop and rendering)
     * 
     * @return {boolean}
     */

  }, {
    key: "isDisabled",
    value: function isDisabled() {
      return this._isDisabled;
    }
    /**
     * Injects this GameObject's DOM element into the document body
     * 
     * @param {string} id 
     */

  }, {
    key: "createDom",
    value: function createDom(id) {
      var zIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var element = document.createElement('div');
      element.id = id;
      element.classList.add('gameObject');

      if (zIndex !== 0) {
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

  }, {
    key: "addComponent",
    value: function addComponent(component) {
      this._components.push(component);
    }
    /**
     * Sets the Sprite that represents this GameObject. If no Sprite is
     * set, nothing will happen in the render cycle for this object.
     * 
     * @param {object} config 
     */

  }, {
    key: "setSprite",
    value: function setSprite() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._sprite = new _objects.Sprite(this._transform.getPosition(), config);

      this._sprite.appendDom();
    }
    /**
     * Sets this GameObject as the child of the given GameObject. In other
     * words, it will move, scale and rotate relatively whenever the parent does.
     * 
     * @param {GameObject} gameObject 
     */

  }, {
    key: "setParent",
    value: function setParent(gameObject) {
      this._transform.setParent(gameObject.getTransform());

      gameObject.getTransform().addChild(this._transform);
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
      this._element.style.display = isDisabled ? 'none' : 'hidden';
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

      var screenSpacePos = null;
      var isTransformDirty = false; // only redraw when the Transform has actually moved

      if (this._transform.isDirty()) {
        // the Transform stores our world-space coordinates,
        // but we need to render the object in screen-space
        screenSpacePos = this._getScreenPosition();
        this._element.style.left = screenSpacePos.x;
        this._element.style.top = screenSpacePos.y;

        this._transform.clean();

        isTransformDirty = true;
      } // only redraw the sprite if the Sprite or Transform has moved


      if (this._sprite && (isTransformDirty || this._sprite.isDirty())) {
        screenSpacePos = screenSpacePos || this._getScreenPosition();

        this._sprite.render(screenSpacePos);

        this._sprite.clean();
      }
    }
  }, {
    key: "_getScreenPosition",
    value: function _getScreenPosition() {
      var position = this._transform.getPosition();

      var cameraPos = _screen.Camera.transform.getPosition();

      return new _maths.Vector(position.x - cameraPos.x, position.y - cameraPos.y);
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
      var _this = this;

      if (!this._transform) {
        this._transform = new _objects.Transform(); // since a camera move needs to update everything in view,
        // set all objects in the viewport as 'dirty' so they get
        // redrawn
        // TODO: viewport culling

        this._transform.setPosition = function (value) {
          _this._transform._position = value;

          _objects.SceneGraph.hierarchy.forEach(function (obj) {
            obj.getTransform().dirty();
          });
        };
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
    var viewportWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 800;
    var viewportHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;

    _classCallCheck(this, Viewport);

    this._browserHeight = 0;
    this._browserWidth = 0;

    this._recalculateScreen();

    window.addEventListener('resize', this._recalculateScreen.bind(this));
  }

  _createClass(Viewport, [{
    key: "_recalculateScreen",
    value: function _recalculateScreen() {
      this._browserHeight = window.innerHeight;
      this._browserWidth = window.innerWidth;
    }
  }, {
    key: "width",
    get: function get() {
      return this._browserWidth;
    }
  }, {
    key: "height",
    get: function get() {
      return this._browserHeight;
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

    var assets = config.assets,
        _config$dimensions = config.dimensions,
        dimensions = _config$dimensions === void 0 ? new _maths.Vector() : _config$dimensions,
        _config$offset = config.offset,
        offset = _config$offset === void 0 ? new _maths.Vector() : _config$offset,
        _config$timing = config.timing,
        timing = _config$timing === void 0 ? 150 : _config$timing;
    this._assets = assets;
    this._origin = origin;
    this._dimensions = dimensions;
    this._offset = offset;

    if (assets.length > 1) {
      this._frameIndex = 0;
      this._animationTimer = setInterval(this._updateFrame.bind(this), timing);
    }

    this._lastPosition = new _maths.Vector();
    this._element = null;
    this._isDirty = true;
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
      element.style.backgroundImage = "url(".concat(this._assets[0], ")");
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
  }, {
    key: "_updateFrame",
    value: function _updateFrame() {
      // TODO: update using requestAnimationFrame()
      this._frameIndex = ++this._frameIndex % this._assets.length;
      this._element.style.backgroundImage = "url(".concat(this._assets[this._frameIndex], ")");
    }
  }, {
    key: "setOffset",
    value: function setOffset(value) {
      this._isDirty = true;
    }
  }, {
    key: "setDimensions",
    value: function setDimensions(value) {
      this._isDirty = true;
    }
  }, {
    key: "isDirty",
    value: function isDirty() {
      return this._isDirty;
    }
  }, {
    key: "clean",
    value: function clean() {
      this._isDirty = false;
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
    this._children = [];
    this._localPosition = _maths.Vector.origin();
    this._rotation = rotation;
    this._scale = scale;
    this._isDirty = true; // does the transform need re-rendering?
  }

  _createClass(Transform, [{
    key: "getPosition",
    value: function getPosition() {
      return this._position;
    }
  }, {
    key: "setPosition",
    value: function setPosition(value) {
      if (value.x === this._position.x && value.y === this._position.y) {
        return;
      }

      var diff = value.subtract(this._position); // if this GameObject moved, update its local position relative to
      // its parent

      this._position = value;

      if (this._parent) {
        this._localPosition = value.subtract(this._parent.getPosition());
      } // if this GameObject has children, update their positions


      if (this._children.length > 0) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this._children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _child = _step.value;

            _child.setPosition(_child.getPosition().add(diff));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      this._isDirty = true;
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
    key: "getChildren",
    value: function getChildren() {
      return this._children;
    }
  }, {
    key: "addChild",
    value: function addChild(transform) {
      this._children.push(transform);
    }
  }, {
    key: "getLocalPosition",
    value: function getLocalPosition() {
      return this._localPosition;
    }
    /**
     * Shortcut method for adding the given vector to the current position
     * 
     * @param {Vector} value 
     */

  }, {
    key: "translate",
    value: function translate(value) {
      var newPos = this._position.add(value);

      this.setPosition(newPos);
    }
    /**
     * Sets the Transform as 'clean'. When in a 'clean' state, the Transform
     * will not redraw until its manipulated again (move, scale, rotate)
     */

  }, {
    key: "clean",
    value: function clean() {
      this._isDirty = false;
    }
    /**
     * Forces a re-draw
     */

  }, {
    key: "dirty",
    value: function dirty() {
      this._isDirty = true;
    }
    /**
     * Returns whether the Transform needs to be redrawn due to a manipulation
     * 
     * @return {boolean}
     */

  }, {
    key: "isDirty",
    value: function isDirty() {
      return this._isDirty;
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Collidable", {
  enumerable: true,
  get: function get() {
    return _Collidable.default;
  }
});

var _Collidable = _interopRequireDefault(__webpack_require__(32));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(4);

var _PlaneMovement = __webpack_require__(24);

var _SceneManager = __webpack_require__(31);

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

var FlappyGame =
/*#__PURE__*/
function (_Game) {
  _inherits(FlappyGame, _Game);

  function FlappyGame() {
    _classCallCheck(this, FlappyGame);

    return _possibleConstructorReturn(this, (FlappyGame.__proto__ || Object.getPrototypeOf(FlappyGame)).apply(this, arguments));
  }

  _createClass(FlappyGame, [{
    key: "onStart",
    value: function onStart() {
      _screen.Camera.transform.position = new _maths.Vector(15, 0);

      var sceneManager = _objects.SceneGraph.instantiate('sceneManager', {
        components: [_SceneManager.SceneManager]
      });

      var planeRed = _objects.SceneGraph.instantiate('plane', {
        position: new _maths.Vector(50, -50),
        collider: _collisions.BoxCollider,
        sprite: {
          assets: ['assets/images/planeRed1.png'],
          // timing: 150,
          dimensions: new _maths.Vector(50, 50) // offset: new Vector(0, 0),

        },
        components: [_PlaneMovement.PlaneMovement]
      });
    }
  }]);

  return FlappyGame;
}(_game.Game);

var game = new FlappyGame();
game.initialise();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaneMovement = void 0;

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

var PlaneMovement =
/*#__PURE__*/
function (_Component) {
  _inherits(PlaneMovement, _Component);

  function PlaneMovement() {
    _classCallCheck(this, PlaneMovement);

    return _possibleConstructorReturn(this, (PlaneMovement.__proto__ || Object.getPrototypeOf(PlaneMovement)).apply(this, arguments));
  }

  _createClass(PlaneMovement, [{
    key: "onInstantiate",
    value: function onInstantiate() {
      this._velocity = _maths.Vector.origin();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(timestep) {
      var gravity = new _maths.Vector(0, -1);
      this._velocity = this._velocity.add(gravity); // take in keyboard input

      if (_input.Keyboard.getKeyPress(_input.Keyboard.SPACEBAR)) {
        this._velocity = new _maths.Vector(this._velocity.x, 10);
      }

      if (_input.Keyboard.getKeyPress(_input.Keyboard.D)) {
        this._velocity = this._velocity.add(new _maths.Vector(1, 0));
      }

      if (_input.Keyboard.getKeyPress(_input.Keyboard.A)) {
        this._velocity = this._velocity.add(new _maths.Vector(-1, 0));
      } // set max speeds


      this._velocity.x = _maths.Maths.clamp(this._velocity.x, -3.5, 3.5);
      this._velocity.y = Math.max(this._velocity.y, -10);
      this._velocity = this._velocity.multiply(timestep);
      var transform = this.gameObject.getTransform();
      var newPos = transform.getPosition().add(this._velocity);
      transform.setPosition(newPos);
    }
  }]);

  return PlaneMovement;
}(_objects.Component);

exports.PlaneMovement = PlaneMovement;

/***/ }),
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
          sprite = _config$sprite === void 0 ? {} : _config$sprite,
          _config$order = config.order,
          order = _config$order === void 0 ? 0 : _config$order;

      if (id == null) {
        throw new Error("Instantiation failed: no unique id given for ".concat(type(gameObject)));
      }

      if (this._gameObjects.get(id)) {
        throw new Error("Instantiation failed: a GameObject already exists with the name ".concat(id));
      }

      var obj = new _objects.GameObject(id, position);

      this._hierarchy.push(obj);

      this._gameObjects.set(id, obj);

      if (sprite.assets) {
        obj.setSprite(sprite);
      }

      components.forEach(function (componentName) {
        var component = new componentName(obj);
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

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Maths = function Maths() {
  _classCallCheck(this, Maths);
};

exports.default = Maths;

Maths.random = function (min, max) {
  var value = Math.random() * (min - max) - min;
  return Math.round(value);
};

Maths.clamp = function (value, min, max) {
  if (value <= min) return min;
  if (value >= max) return max;
  return value;
};

/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SceneManager = void 0;

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

var SceneManager =
/*#__PURE__*/
function (_Component) {
  _inherits(SceneManager, _Component);

  function SceneManager() {
    _classCallCheck(this, SceneManager);

    return _possibleConstructorReturn(this, (SceneManager.__proto__ || Object.getPrototypeOf(SceneManager)).apply(this, arguments));
  }

  _createClass(SceneManager, [{
    key: "onInstantiate",
    value: function onInstantiate() {
      for (var i = 0; i < 2; i++) {
        _objects.SceneGraph.instantiate('backgroundSky' + i, {
          position: new _maths.Vector(800 * i, 0),
          order: -999,
          sprite: {
            assets: ['assets/images/background.png'],
            // timing: 150,
            dimensions: new _maths.Vector(800, 480) // offset: new Vector(0, 0),

          },
          components: []
        });
      }

      this._rockList = [];

      var rock = _objects.SceneGraph.instantiate('rock', {
        position: new _maths.Vector(350, -_screen.Viewport.height + 239),
        sprite: {
          assets: ['assets/images/rockUp.png'],
          dimensions: new _maths.Vector(108, 239)
        }
      });

      for (var _i = 0; _i < 2; _i++) {
        _objects.SceneGraph.instantiate('groundBottom' + _i, {
          position: new _maths.Vector(808 * _i, -_screen.Viewport.height + 71),
          sprite: {
            assets: ['assets/images/groundDirt.png'],
            dimensions: new _maths.Vector(808, 71)
          }
        });
      }

      this._scrollSpeed = new _maths.Vector(3, 0);
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(timestep) {
      var cameraPos = _screen.Camera.transform.getPosition().add(this._scrollSpeed); // cameraPos = cameraPos.multiply(timestep);


      _screen.Camera.transform.setPosition(cameraPos);
    }
  }]);

  return SceneManager;
}(_objects.Component);

exports.SceneManager = SceneManager;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Collidable =
/*#__PURE__*/
function () {
  function Collidable() {
    _classCallCheck(this, Collidable);
  }

  _createClass(Collidable, [{
    key: "getType",

    /**
     * Returns the type of collidable that should be checked
     */
    value: function getType() {
      throw new Error('getType() not implemented');
    }
  }, {
    key: "getRectangle",
    value: function getRectangle() {
      throw new Error('getRectangle() not implemented');
    }
  }, {
    key: "getCircle",
    value: function getCircle() {
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

  }, {
    key: "collidesWith",
    value: function collidesWith(collidable) {}
  }], [{
    key: "SHAPE_BOX",
    get: function get() {
      return 1;
    }
  }, {
    key: "SHAPE_CIRCLE",
    get: function get() {
      return 2;
    }
  }]);

  return Collidable;
}();

exports.default = Collidable;

/***/ })
/******/ ]);