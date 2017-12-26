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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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
Object.defineProperty(exports, "GameObjectFactory", {
  enumerable: true,
  get: function get() {
    return _GameObjectFactory.default;
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

var _BoundingBox = _interopRequireDefault(__webpack_require__(9));

var _Component = _interopRequireDefault(__webpack_require__(24));

var _GameObject = _interopRequireDefault(__webpack_require__(8));

var _GameObjectFactory = _interopRequireDefault(__webpack_require__(6));

var _Sprite = _interopRequireDefault(__webpack_require__(23));

var _Transform = _interopRequireDefault(__webpack_require__(25));

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

var _Camera = _interopRequireDefault(__webpack_require__(27));

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

var _Keyboard = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = void 0;

var _GameLoop = __webpack_require__(22);

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
/* 5 */,
/* 6 */
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
var GameObjectFactory =
/*#__PURE__*/
function () {
  function GameObjectFactory() {
    _classCallCheck(this, GameObjectFactory);

    // an ordered list (array) of all GameObjects
    this._hierarchy = []; // a unique id to GameObject mapping

    this._gameObjects = new Map();
  }

  _createClass(GameObjectFactory, [{
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

  return GameObjectFactory;
}();

var _default = new GameObjectFactory();

exports.default = _default;

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
    this._transform = new _objects.Transform(position);
    this._sprite = null; // this._boundingBox = new BoundingBox(position, dimensions);
    // child GameObjects of this GameObject
    // this._children = [];
  }

  _createClass(GameObject, [{
    key: "createDom",
    // set pivot(value) {
    // }
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
      this._sprite = new _objects.Sprite(this.transform.position, config);

      this._sprite.appendDom();
    }
  }, {
    key: "_setCollider",
    value: function _setCollider(collider) {
      this._collider = collider;
    }
  }, {
    key: "_setBoundingBox",
    value: function _setBoundingBox(dimensions) {} // this._boundingBox = new BoundingBox(this.transform.position, dimensions);
    // addChild(gameObject) {
    //     this._children.push(gameObject);
    //     console.log(this);
    // }

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
      if (this.isDisabled || this.isDestroying) {
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
      if (!this._isVisible || this._isDisabled || this.isDestroying) {
        return;
      }

      var position = this.transform.position; // the Transform stores our world-space coordinates,
      // but we need to render the object in screen-space

      var cameraPos = _screen.Camera.transform.position;
      var screenSpacePos = new _maths.Vector(position.x - cameraPos.x, position.y - cameraPos.y);
      this._element.style.left = screenSpacePos.x;
      this._element.style.top = screenSpacePos.y;

      if (this._sprite) {
        this._sprite.render(screenSpacePos);
      }
    }
  }, {
    key: "transform",
    get: function get() {
      return this._transform;
    }
  }, {
    key: "sprite",
    get: function get() {
      return this._sprite;
    }
  }, {
    key: "isVisible",
    get: function get() {
      return this._isVisible;
    }
  }, {
    key: "name",
    get: function get() {
      return this._id;
    }
  }, {
    key: "element",
    get: function get() {
      return this._element;
    } // get bounds() {
    //     return this._boundingBox;
    // }

  }, {
    key: "isDestroying",
    get: function get() {
      return this._isDestroying;
    }
  }, {
    key: "isDisabled",
    get: function get() {
      return this._isDisabled;
    }
  }]);

  return GameObject;
}();

exports.default = GameObject;

/***/ }),
/* 9 */
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
/* 10 */
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
/* 13 */
/***/ (function(module, exports) {



/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(4);

var _PlaneMovement = __webpack_require__(26);

var _objects = __webpack_require__(1);

var _maths = __webpack_require__(0);

var _screen = __webpack_require__(2);

var _collisions = __webpack_require__(13);

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

      var plane = _objects.GameObjectFactory.instantiate('plane', {
        position: new _maths.Vector(50, -50),
        collider: _collisions.BoxCollider,
        sprite: {
          asset: 'assets/images/planeRed1.png',
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
/* 20 */,
/* 21 */,
/* 22 */
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
  var hierarchy = _objects.GameObjectFactory.hierarchy;
  var corpseObjects = []; // loop over a buffer so that newly instantiated objects
  // always start execution from the next frame

  var bufferCount = hierarchy.length;

  for (var i = 0; i < bufferCount; i++) {
    var obj = hierarchy[i]; // any objects marked for deletion should not be executed

    if (obj.isDestroying) {
      corpseObjects.push(obj);
      continue;
    }

    obj.onUpdate(timestep);
  } // cleanup any objects marked for deletion


  if (corpseObjects.length > 0) {
    _objects.GameObjectFactory.removeBatch(corpseObjects);
  }
}
/**
 * Renders every visible GameObject to DOM every frame
 */


function onRender() {
  _objects.GameObjectFactory.hierarchy.forEach(function (obj) {
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
/* 23 */
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
      var x = origin.x + this._offset.x;
      var y = origin.y + this._offset.y;

      if (x === this._lastPosition.x && y === this._lastPosition.y) {
        return;
      }

      this._element.style.left = x;
      this._element.style.top = -y; // flip Y because the browser Y is reversed

      this._origin = origin;
      this._lastPosition = new _maths.Vector(x, y);
    }
  }]);

  return Sprite;
}();

exports.default = Sprite;

/***/ }),
/* 24 */
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
 * An interface for interacting with a GameObject.
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
     */

  }, {
    key: "sprite",
    get: function get() {
      return this._gameObject.sprite;
    }
  }]);

  return Component;
}();

exports.default = Component;

/***/ }),
/* 25 */
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
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Transform);

    this._position = position || _maths.Vector.origin();
  }

  _createClass(Transform, [{
    key: "setPosition",
    value: function setPosition(position) {
      this._position = position;
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(value) {
      this._position = value;
    }
  }]);

  return Transform;
}();

exports.default = Transform;

/***/ }),
/* 26 */
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
      // const gravity = new Vector(0, -1);
      // this._velocity = this._velocity.add(gravity);
      // if(Keyboard.getKeyPress(Keyboard.SPACEBAR)) {
      //     this._velocity = new Vector(0, 15);
      // }
      // this._velocity = this._velocity.multiply(timestep);
      // this.transform.position = this.transform.position
      //     .add(this._velocity);
      if (_input.Keyboard.getKeyPress(_input.Keyboard.A)) {
        _screen.Camera.transform.position = _screen.Camera.transform.position.add(new _maths.Vector(-1, 0));
      }

      if (_input.Keyboard.getKeyPress(_input.Keyboard.D)) {
        _screen.Camera.transform.position = _screen.Camera.transform.position.add(new _maths.Vector(1, 0));
      }

      if (_input.Keyboard.getKeyPress(_input.Keyboard.W)) {
        _screen.Camera.transform.position = _screen.Camera.transform.position.add(new _maths.Vector(0, 1));
      }

      if (_input.Keyboard.getKeyPress(_input.Keyboard.S)) {
        _screen.Camera.transform.position = _screen.Camera.transform.position.add(new _maths.Vector(0, -1));
      }
    }
  }]);

  return PlaneMovement;
}(_objects.Component);

exports.PlaneMovement = PlaneMovement;

/***/ }),
/* 27 */
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

/***/ })
/******/ ]);