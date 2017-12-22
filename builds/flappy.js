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

var _Vector = _interopRequireDefault(__webpack_require__(9));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "GameObjectFactory", {
  enumerable: true,
  get: function get() {
    return _GameObjectFactory.default;
  }
});
Object.defineProperty(exports, "GameObject", {
  enumerable: true,
  get: function get() {
    return _GameObject.GameObject;
  }
});
Object.defineProperty(exports, "BoundingBox", {
  enumerable: true,
  get: function get() {
    return _BoundingBox.default;
  }
});

var _GameObjectFactory = _interopRequireDefault(__webpack_require__(8));

var _GameObject = __webpack_require__(10);

var _BoundingBox = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
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

var _Canvas = _interopRequireDefault(__webpack_require__(15));

var _Viewport = _interopRequireDefault(__webpack_require__(16));

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

var _Keyboard = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports) {

"use strict";


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = void 0;

var _gameLoop = __webpack_require__(7);

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
      (0, _gameLoop.bootGameLoop)(this.onStart);
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
/* 7 */
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
  _objects.GameObjectFactory.hierarchy.forEach(function (obj) {
    return obj.onUpdate(timestep);
  });
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
/* 8 */
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
 * Singleton to hold all references to all instantiated GameObjects
 */
var GameObjectFactory =
/*#__PURE__*/
function () {
  function GameObjectFactory() {
    _classCallCheck(this, GameObjectFactory);

    // map of all GameObjects in the game
    this._gameObjects = new Map();
    this._colliders = new Map();
  }

  _createClass(GameObjectFactory, [{
    key: "instantiate",

    /**
    * Creates a new GameObject
    * 
    * @type {string} id                 Name/identifier of the object
    * @type {GameObject} gameObject     GameObject to create
    * @type {Vector} dimensions         Size of the GameObject
    * @type {Vector} position           Starting position of the object
    */
    value: function instantiate(gameObject, config) {
      var id = config.id,
          _config$dimensions = config.dimensions,
          dimensions = _config$dimensions === void 0 ? new _maths.Vector(0, 0) : _config$dimensions,
          _config$position = config.position,
          position = _config$position === void 0 ? new _maths.Vector(0, 0) : _config$position;

      if (id == null) {
        throw Error('Cannot instantiate a GameObject without a unique id');
      }

      var obj = new gameObject(id, dimensions, position);

      this._gameObjects.set(id, obj);

      obj.insertDom();
      return obj;
    }
    /**
     * Gets the GameObject that belongs to the given id
     * 
     * @param {*} id 
     */

  }, {
    key: "get",
    value: function get(id) {
      return this._gameObjects.get(id);
    }
  }, {
    key: "hierarchy",
    get: function get() {
      return this._gameObjects;
    }
  }]);

  return GameObjectFactory;
}();

var _default = new GameObjectFactory();

exports.default = _default;

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameObject = void 0;

var _maths = __webpack_require__(0);

var _objects = __webpack_require__(1);

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
   * @param {Vector} dimensions   Size of the object in 2d space
   * @param {Vector} position     Starting position of the object
   */
  function GameObject(id, dimensions) {
    var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, GameObject);

    this._id = id;
    this._dimensions = dimensions;
    this._position = position || new _maths.Vector(0, 0);
    this._isVisible = true; // child GameObjects of this GameObject

    this._children = [];
    this._boundingBox = new _objects.BoundingBox(position, dimensions);
  }

  _createClass(GameObject, [{
    key: "addChild",
    value: function addChild(gameObject) {
      this._children.push(gameObject);

      console.log(this);
    }
  }, {
    key: "insertDom",
    value: function insertDom() {
      var element = this.getElementDom();

      if (element) {
        element.classList.add('gameObject');
        this._element = element;
        document.body.appendChild(element);
      }

      this.onInstantiate();
    }
    /**
     * If a DOM element is returned from this method, the element
     * is stored in the GameObject and used as its sprite.
     */

  }, {
    key: "getElementDom",
    value: function getElementDom() {}
    /**
     * Logic to run when the object is first instantiated.
     */

  }, {
    key: "onInstantiate",
    value: function onInstantiate() {}
    /**
     * Logic to run when the object is destroyed
     */

  }, {
    key: "onDestroy",
    value: function onDestroy() {}
    /**
     * Logic to run every game loop frame
     */

  }, {
    key: "onUpdate",
    value: function onUpdate() {}
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
      }

      this._isVisible = isVisible;
    }
    /**
     * Renders the object in world space each game loop frame
     */

  }, {
    key: "render",
    value: function render() {
      if (!this._isVisible) {
        return;
      } // since we're using the Vector position as the centre pivot,
      // we need to add half of the size to all sides


      this._element.style.left = this._position.x - this._dimensions.x / 2;
      this._element.style.top = this._position.y - this._dimensions.y / 2;
      this._element.style.width = this._dimensions.x;
      this._element.style.height = this._dimensions.y;
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(vector) {
      var difference = vector.subtract(this._position);
      this._position = vector; // update bounding box position

      this._boundingBox.updatePosition(vector); // move any children along with this object


      this._children.forEach(function (child) {
        console.log(child);
        child.position = child.position.add(difference);
      });
    }
  }, {
    key: "visible",
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
    }
  }, {
    key: "bounds",
    get: function get() {
      return this._boundingBox;
    }
  }, {
    key: "dimensions",
    get: function get() {
      return this._dimensions;
    }
  }]);

  return GameObject;
}();

exports.GameObject = GameObject;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
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
/* 14 */,
/* 15 */
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
/* 16 */
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
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(6);

var _plane = __webpack_require__(20);

var _objects = __webpack_require__(1);

var _maths = __webpack_require__(0);

var _screen = __webpack_require__(2);

var _collisions = __webpack_require__(4);

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
      var plane = _objects.GameObjectFactory.instantiate(_plane.Plane, {
        id: 'bat',
        dimensions: new _maths.Vector(50, 50),
        position: new _maths.Vector(50, 50),
        collider: _collisions.BoxCollider
      });
    }
  }]);

  return FlappyGame;
}(_game.Game);

var game = new FlappyGame();
game.initialise();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plane = void 0;

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

var Plane =
/*#__PURE__*/
function (_GameObject) {
  _inherits(Plane, _GameObject);

  function Plane() {
    _classCallCheck(this, Plane);

    return _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).apply(this, arguments));
  }

  _createClass(Plane, [{
    key: "getElementDom",
    value: function getElementDom() {
      var element = document.createElement('div');
      element.id = 'plane';
      return element;
    }
  }, {
    key: "onInstantiate",
    value: function onInstantiate() {
      this._velocity = _maths.Vector.origin();
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(timestep) {
      var gravity = new _maths.Vector(0, 1);
      this._velocity = this._velocity.add(gravity);

      if (_input.Keyboard.getKeyPress(_input.Keyboard.SPACEBAR)) {
        this._velocity = new _maths.Vector(this._velocity.x, -15);
      }

      if (_input.Keyboard.getKeyDown(_input.Keyboard.D)) {
        this._velocity = this._velocity.add(new _maths.Vector(1, 0));
      }

      if (_input.Keyboard.getKeyDown(_input.Keyboard.A)) {
        this._velocity = this._velocity.add(new _maths.Vector(-1, 0));
      } // clamp max speeds


      if (this._velocity.y >= 15) {
        this._velocity.y = 15;
      }

      if (this._velocity.x >= 10) {
        this._velocity.x = 10;
      }

      if (this._velocity.x < -10) {
        this._velocity.x = -10;
      }

      this._velocity = new _maths.Vector(this._velocity.x * timestep, this._velocity.y * timestep);
      this.position = this.position.add(this._velocity); // clamp horizontal axis to screen

      if (this.bounds.left <= 0) {
        this.position.x = this.dimensions.x / 2;
        this._velocity.x = 0;
      }

      if (this.bounds.right >= _screen.Viewport.width) {
        this.position.x = _screen.Viewport.width - this.dimensions.x / 2;
        this._velocity.x = 0;
      }

      if (this.bounds.top <= 0) {
        this.position.y = this.dimensions.y / 2;
        this._velocity.y = 0;
      } // if(this.bounds.right >= Viewport.width || this.bounds.left <= 0) {
      //     this._velocity.x = -this._velocity.x;
      // }
      // if(this.bounds.bottom >= Viewport.height || this.bounds.top <= 0) {
      //     this._velocity.y = -this._velocity.y;
      // }

    }
  }]);

  return Plane;
}(_objects.GameObject);

exports.Plane = Plane;

/***/ }),
/* 21 */
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

/***/ })
/******/ ]);