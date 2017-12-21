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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameObjectFactory = void 0;

var _vector = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var instance = null;
/**
 * Singleton to hold all instantiated GameObjects
 */

var GameObjectFactory =
/*#__PURE__*/
function () {
  function GameObjectFactory() {
    _classCallCheck(this, GameObjectFactory);

    if (instance != null) {
      return instance;
    }

    instance = this; // map of all GameObjects in the game

    this._gameObjects = new Map();
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
          dimensions = _config$dimensions === void 0 ? new _vector.default(0, 0) : _config$dimensions,
          _config$position = config.position,
          position = _config$position === void 0 ? new _vector.default(0, 0) : _config$position;

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

exports.GameObjectFactory = GameObjectFactory;

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(3);

var _block = __webpack_require__(10);

var _bat = __webpack_require__(8);

var _ball = __webpack_require__(5);

var _gameObjectFactory = __webpack_require__(0);

var _vector = _interopRequireDefault(__webpack_require__(1));

var _viewport = _interopRequireDefault(__webpack_require__(13));

var _canvas = _interopRequireDefault(__webpack_require__(11));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var factory = new _gameObjectFactory.GameObjectFactory();
      var bat = factory.instantiate(_bat.Bat, {
        id: 'bat',
        dimensions: new _vector.default(180, 20),
        position: new _vector.default(50, 50)
      });
      var ball = factory.instantiate(_ball.Ball, {
        id: 'ball',
        dimensions: new _vector.default(25, 25),
        position: _viewport.default.origin
      });
      var c = new _canvas.default(); // c.drawLine(new Vector(100, 350), new Vector(200, 350));
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = void 0;

var _gameLoop = __webpack_require__(4);

var _canvas = _interopRequireDefault(__webpack_require__(11));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var canvas = new _canvas.default();
    }
  }]);

  return Game;
}();

exports.Game = Game;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootGameLoop = bootGameLoop;

var _gameObjectFactory = __webpack_require__(0);

var objFactory = new _gameObjectFactory.GameObjectFactory();
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
  objFactory.hierarchy.forEach(function (obj) {
    return obj.onUpdate(timestep);
  });
}
/**
 * Renders every visible GameObject to DOM every frame
 */


function onRender() {
  objFactory.hierarchy.forEach(function (obj) {
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ball = void 0;

var _gameObject = __webpack_require__(6);

var _vector = _interopRequireDefault(__webpack_require__(1));

var _keyboard = _interopRequireDefault(__webpack_require__(7));

var _utility = __webpack_require__(12);

var _viewport = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      this._velocity = new _vector.default((0, _utility.random)(-4, 4), 4);
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(timestep) {
      this._velocity = _vector.default.origin;
      this.position = this.position.add(this._velocity);

      if (this.bounds.right >= _viewport.default.width || this.bounds.left <= 0) {
        this._velocity.x = -this._velocity.x;
      }

      if (this.bounds.bottom >= _viewport.default.height || this.bounds.top <= 0) {
        this._velocity.y = -this._velocity.y;
      }
    }
  }]);

  return Ball;
}(_gameObject.GameObject);

exports.Ball = Ball;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameObject = void 0;

var _vector = _interopRequireDefault(__webpack_require__(1));

var _boundingBox = _interopRequireDefault(__webpack_require__(9));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Represents an object in the scene
 * 
 * @param {string} id           Unique identifier
 * @param {Vector} dimensions   Size of the object in 2d space
 * @param {Vector} position     Starting position of the object
 */
var GameObject =
/*#__PURE__*/
function () {
  function GameObject(id, dimensions) {
    var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, GameObject);

    this._id = id;
    this._dimensions = dimensions;
    this._position = position || new _vector.default(0, 0);
    this._isVisible = true; // child GameObjects of this GameObject

    this._children = [];
    this._boundingBox = new _boundingBox.default(position, dimensions);
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

var instance = null;
/**
 * Handles interaction with the keyboard and retrieving
 * press values
 */

var Keyboard =
/*#__PURE__*/
function () {
  function Keyboard() {
    var _this = this;

    _classCallCheck(this, Keyboard);

    this._onKeyDown = function (event) {
      _this._keyPressValues.set(event.key, 1);
    };

    this._onKeyUp = function (event) {
      _this._keyPressValues.set(event.key, 0);
    };

    this.getKeyDown = function (key) {
      var value = _this._keyPressValues.get(key.toLowerCase());

      return value || 0;
    };

    if (instance) {
      return instance;
    }

    instance = this;
    this._keyPressValues = new Map();

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

exports.default = Keyboard;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bat = void 0;

var _gameObject = __webpack_require__(6);

var _vector = _interopRequireDefault(__webpack_require__(1));

var _keyboard = _interopRequireDefault(__webpack_require__(7));

var _viewport = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var keyboard = new _keyboard.default();
      var leftPress = keyboard.getKeyDown('a');
      var rightPress = keyboard.getKeyDown('d');
      var speed = 10;
      var velocity = new _vector.default(0, 0);

      if (leftPress > 0) {
        velocity = new _vector.default(-speed, 0);
      }

      if (rightPress > 0) {
        velocity = new _vector.default(speed, 0);
      }

      velocity = velocity.multiply(timestep);
      this.position = this.position.add(velocity);

      if (this.bounds.left < 0) {
        this.position.x = this.dimensions.x / 2;
      }

      if (this.bounds.right > _viewport.default.width) {
        this.position.x = _viewport.default.width - this.dimensions.x / 2;
      }
    }
  }]);

  return Bat;
}(_gameObject.GameObject);

exports.Bat = Bat;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vector = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      this._topLeft = new _vector.default(position.x - halfWidth, position.y - halfHeight);
      this._topRight = new _vector.default(position.x + halfWidth, position.y - halfHeight);
      this._botLeft = new _vector.default(position.x - halfWidth, position.y + halfHeight);
      this._botRight = new _vector.default(position.x + halfWidth, position.y + halfHeight);
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
exports.Block = void 0;

var _gameObject = __webpack_require__(6);

var _vector = _interopRequireDefault(__webpack_require__(1));

var _keyboard = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
}(_gameObject.GameObject);

exports.Block = Block;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _viewport = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var instance = null;

var Canvas =
/*#__PURE__*/
function () {
  function Canvas() {
    _classCallCheck(this, Canvas);

    if (instance) {
      return instance;
    }

    instance = this;
    var canvas = document.getElementById('canvas');
    canvas.width = _viewport.default.width;
    canvas.height = _viewport.default.height;
    var context = canvas.getContext('2d');
    this._context = context;
  }
  /**
   * Draws a line on the screen
   * 
   * @param {Vector} vector1 
   * @param {Vector} vector2 
   */


  _createClass(Canvas, [{
    key: "drawLine",
    value: function drawLine(vector1, vector2) {
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'green';
      var c = this._context;
      c.beginPath();
      c.moveTo(vector1.x, vector1.y);
      c.lineTo(vector2.x, vector2.y);
      c.strokeStyle = color;
      c.stroke();
    }
  }]);

  return Canvas;
}();

exports.default = Canvas;

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vector = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  _createClass(Viewport, null, [{
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
      return new _vector.default(this.width / 2, this.height / 2);
    }
  }]);

  return Viewport;
}();

exports.default = Viewport;

/***/ })
/******/ ]);