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

var _vector2d = __webpack_require__(7);

var _vector2d2 = _interopRequireDefault(_vector2d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = function (_Vector2D) {
  _inherits(GamePiece, _Vector2D);

  function GamePiece(xOffset, yOffset, canvas, context) {
    _classCallCheck(this, GamePiece);

    var _this = _possibleConstructorReturn(this, (GamePiece.__proto__ || Object.getPrototypeOf(GamePiece)).call(this, xOffset, yOffset));

    _this.canvas = canvas;
    _this.context = context;
    return _this;
  }

  return GamePiece;
}(_vector2d2.default);

exports.default = GamePiece;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NVector = function () {
  function NVector() {
    var _this = this;

    _classCallCheck(this, NVector);

    [].concat(Array.prototype.slice.call(arguments)).forEach(function (value, index) {
      _this[index] = value;
    });
  }

  _createClass(NVector, [{
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(v) {
      this[0] = v;
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(v) {
      this[1] = v;
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(v) {
      this[2] = v;
    }
  }]);

  return NVector;
}();

exports.default = NVector;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(3);

var _game2 = _interopRequireDefault(_game);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.getElementById('gameport');
var board = new _game2.default(canvas);
var keybinder = new _keys2.default();

var keydownRegisterNumber = keybinder.registerKeydown(board.keydown.bind(board));
var keyupRegisterNumber = keybinder.registerKeyup(board.keyup.bind(board));
window.addEventListener('keydown', keybinder.keydownTrigger.bind(keybinder));
window.addEventListener('keyup', keybinder.keyupTrigger.bind(keybinder));

board.loadPieces();
board.draw();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _matrix = __webpack_require__(4);

var _matrix2 = _interopRequireDefault(_matrix);

var _twowaymap = __webpack_require__(5);

var _twowaymap2 = _interopRequireDefault(_twowaymap);

var _background = __webpack_require__(6);

var _background2 = _interopRequireDefault(_background);

var _asteroid = __webpack_require__(8);

var _asteroid2 = _interopRequireDefault(_asteroid);

var _ship = __webpack_require__(9);

var _ship2 = _interopRequireDefault(_ship);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(canvas) {
    _classCallCheck(this, Game);

    this.pieces = [];

    this.canvas = canvas;
    this.context = canvas.getContext('2d');

    this.pressed = {};

    this.keys = new _twowaymap2.default();
    this.keys.set('w', 87);
    this.keys.set('a', 65);
    this.keys.set('s', 83);
    this.keys.set('d', 68);
  }

  _createClass(Game, [{
    key: 'addPieces',
    value: function addPieces() {
      var _this = this;

      [].concat(Array.prototype.slice.call(arguments)).forEach(function (piece) {
        return _this.pieces.push(piece);
      });
    }
  }, {
    key: 'loadPieces',
    value: function loadPieces() {
      this.player = new _ship2.default(20, 30, this.canvas, this.context);
      this.addPieces(new _background2.default(this.canvas, this.context), new _asteroid2.default(20, 30, this.canvas, this.context), this.player);
    }
  }, {
    key: 'draw',
    value: function draw(t) {

      this.last = t;
      this.move(t);
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.pieces.forEach(function (piece) {
        return piece.draw();
      });
      requestAnimationFrame(this.draw.bind(this));
    }
  }, {
    key: 'move',
    value: function move(t) {
      if (this.pressed.w) {
        this.player.y -= 1;
      }
      if (this.pressed.a) {
        this.player.x -= 1;
      }
      if (this.pressed.s) {
        this.player.y += 1;
      }
      if (this.pressed.d) {
        this.player.x += 1;
      }
    }
  }, {
    key: 'newPlayer',
    value: function newPlayer(player) {
      this.player = player;
    }

    /// Define controls for the game, as well as handlers

  }, {
    key: 'keydown',
    value: function keydown(key, repeat, event) {
      var code = this.keys.get(key);
      if (code) {
        this.pressed[code] = true;
      }
    }
  }, {
    key: 'keyup',
    value: function keyup(key, event) {
      this.pressed[this.keys.get(key)] = false;
    }
  }]);

  return Game;
}();

//module.exports = Game


exports.default = Game;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nvector = __webpack_require__(1);

var _nvector2 = _interopRequireDefault(_nvector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  Matrix[x][y]
  new Matris ([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
  ])
  new Matris ([
    [ (0,3), (1,3), (2,3), (3,3) ],
    [ (0,2), (1,2), (2,2), (3,2) ],
    [ (0,1), (1,1), (2,1), (3,1) ],
    [ (0,0), (1,0), (2,0), (3,0) ]
  ])
*/

var Matrix = function (_NVector) {
  _inherits(Matrix, _NVector);

  function Matrix(arr) {
    var _ref;

    _classCallCheck(this, Matrix);

    var tempArray = [[], [], [], []];
    arr.reverse().forEach(function (v1, i1) {
      v1.forEach(function (v2, i2) {
        tempArray[i2][i1] = v2;
      });
    });
    return _possibleConstructorReturn(this, (_ref = Matrix.__proto__ || Object.getPrototypeOf(Matrix)).call.apply(_ref, [this].concat(_toConsumableArray(tempArray.map(function (value) {
      return new (Function.prototype.bind.apply(_nvector2.default, [null].concat(_toConsumableArray(value))))();
    })))));
  }

  return Matrix;
}(_nvector2.default);

exports.default = Matrix;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TwoWayMap = function () {
  function TwoWayMap() {
    _classCallCheck(this, TwoWayMap);

    this.valueKey = new Map();
    this.keyValue = new Map();

    this.set = function (k, v) {
      if (this.keyValue.get(k) === v) {
        return;
      } else if (this.valueKey.get(v) !== undefined) {
        return new Error('`set` attempt would break 1:1 requirement of TwoWayMap');
      } else if (this.keyValue.get(k) !== undefined) {
        var orig = this.keyValue.get(k);
        this.valueKey.delete(orig);
        this.keyValue.delete(k);
        this.keyValue.set(k, v);
        this.valueKey.set(v, k);
        return;
      } else {
        this.keyValue.set(k, v);
        this.valueKey.set(v, k);
        return;
      }
    };
    this.get = function (key) {
      return this.keyValue.get(key) !== undefined && this.keyValue.get(key) || this.valueKey.get(key);
    };
  }

  _createClass(TwoWayMap, [{
    key: 'delete',
    value: function _delete(k) {
      if (this.keyValue.get(k)) {
        var other = this.keyValue.get(k);
        this.keyValue.delete(k);
        this.valueKey.delete(other);
      } else if (this.valueKey.get(k)) {
        var _other = this.valueKey.get(k);
        this.valueKey.delete(k);
        this.keyValue.delete(_other);
      }
      return undefined;
    }
  }, {
    key: 'forEach',
    value: function forEach() {
      return this.keyValue.forEach();
    }
  }, {
    key: 'has',
    value: function has(key) {
      return this.keyValue.has(key) || this.valueKey.has(key);
    }
  }, {
    key: 'keys',
    value: function keys() {
      return this.keyValue.keys();
    }
  }, {
    key: 'values',
    value: function values() {
      return this.valueKey.values();
    }
  }, {
    key: 'entries',
    value: function entries() {
      return this.keyValue.entries();
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.keyValue.clear();
      this.valueKey.clear();
      return true;
    }
  }]);

  return TwoWayMap;
}();

exports.default = TwoWayMap;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gamepiece = __webpack_require__(0);

var _gamepiece2 = _interopRequireDefault(_gamepiece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Background = function (_GamePiece) {
  _inherits(Background, _GamePiece);

  function Background(canvas, context) {
    _classCallCheck(this, Background);

    return _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).call(this, 0, 0, canvas, context));
  }

  _createClass(Background, [{
    key: 'draw',
    value: function draw(xOffset, yOffset) {
      var ctx = this.context;
      ctx.fillStyle = 'rgb(255, 255, 255, 1)';
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }]);

  return Background;
}(_gamepiece2.default);

exports.default = Background;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nvector = __webpack_require__(1);

var _nvector2 = _interopRequireDefault(_nvector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vector2D = function (_NVector) {
  _inherits(Vector2D, _NVector);

  function Vector2D(x, y) {
    _classCallCheck(this, Vector2D);

    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Attempt to construct Vector2D with non-number arguments');
    }
    return _possibleConstructorReturn(this, (Vector2D.__proto__ || Object.getPrototypeOf(Vector2D)).call(this, x, y));
  }

  return Vector2D;
}(_nvector2.default);

exports.default = Vector2D;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gamepiece = __webpack_require__(0);

var _gamepiece2 = _interopRequireDefault(_gamepiece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Asteroid = function (_GamePiece) {
  _inherits(Asteroid, _GamePiece);

  function Asteroid(x, y, canvas, context) {
    _classCallCheck(this, Asteroid);

    return _possibleConstructorReturn(this, (Asteroid.__proto__ || Object.getPrototypeOf(Asteroid)).call(this, x, y, canvas, context));
  }

  _createClass(Asteroid, [{
    key: 'draw',
    value: function draw(xOffset, yOffset) {
      var ctx = this.context;
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
      ctx.fill();
    }
  }]);

  return Asteroid;
}(_gamepiece2.default);

exports.default = Asteroid;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gamepiece = __webpack_require__(0);

var _gamepiece2 = _interopRequireDefault(_gamepiece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Asteroid = function (_GamePiece) {
  _inherits(Asteroid, _GamePiece);

  function Asteroid(x, y, canvas, context) {
    _classCallCheck(this, Asteroid);

    return _possibleConstructorReturn(this, (Asteroid.__proto__ || Object.getPrototypeOf(Asteroid)).call(this, x, y, canvas, context));
  }

  _createClass(Asteroid, [{
    key: 'draw',
    value: function draw(xOffset, yOffset) {
      var ctx = this.context;
      ctx.fillStyle = 'rgba(0, 0, 255, 1)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
      ctx.fill();
    }
  }]);

  return Asteroid;
}(_gamepiece2.default);

exports.default = Asteroid;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Keys = function () {
  function Keys() {
    _classCallCheck(this, Keys);

    this.down = {};
    this.downFuncs = new Map(); // Functions to call on keydown
    this.upFuncs = new Map(); // Functions to call on keyup
  }

  _createClass(Keys, [{
    key: "keydownTrigger",
    value: function keydownTrigger(event) {
      var _this = this;

      this.downFuncs.forEach(function (func) {
        func(event.keyCode, _this.down[event.keyCode] || false, event);
      });
      this.down[event.keyCode] = true;
    }
  }, {
    key: "keyupTrigger",
    value: function keyupTrigger(event) {
      console.log(event.keyCode);
      this.upFuncs.forEach(function (func) {
        func(event.keyCode, event);
      });
      this.down[event.keyCode] = false;
    }
  }, {
    key: "registerKeydown",
    value: function registerKeydown(callback) {
      var s = this.downFuncs.size;
      this.downFuncs.set(s, callback);
      return s;
    }
  }, {
    key: "registerKeyup",
    value: function registerKeyup(callback) {
      var s = this.upFuncs.size;
      this.upFuncs.set(s, callback);
      return s;
    }
  }, {
    key: "deleteKeydown",
    value: function deleteKeydown(num) {
      return this.downFuncs.delete(num);
    }
  }, {
    key: "deleteKeyup",
    value: function deleteKeyup(num) {
      return this.upFuncs.delete(num);
    }
  }]);

  return Keys;
}();

exports.default = Keys;

/***/ })
/******/ ]);