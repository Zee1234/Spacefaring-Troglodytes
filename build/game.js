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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var vector2d_1 = __webpack_require__(5);
var GamePiece = /** @class */ (function (_super) {
    __extends(GamePiece, _super);
    function GamePiece(xOffset, yOffset, canvas, context) {
        var _this = _super.call(this, xOffset, yOffset) || this;
        _this.canvas = canvas;
        _this.context = context;
        return _this;
    }
    return GamePiece;
}(vector2d_1["default"]));
exports["default"] = GamePiece;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var game_1 = __webpack_require__(2);
var keys_1 = __webpack_require__(9);
var canvas = document.getElementById('gameport');
var board = new game_1["default"](canvas);
var keybinder = new keys_1["default"]();
var keydownRegisterNumber = keybinder.registerKeydown(board.keydown.bind(board));
var keyupRegisterNumber = keybinder.registerKeyup(board.keyup.bind(board));
window.addEventListener('keydown', keybinder.keydownTrigger.bind(keybinder));
window.addEventListener('keyup', keybinder.keyupTrigger.bind(keybinder));
board.loadPieces();
board.draw();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var twowaymap_1 = __webpack_require__(3);
var background_1 = __webpack_require__(4);
var asteroid_1 = __webpack_require__(7);
var ship_1 = __webpack_require__(8);
var Game = /** @class */ (function () {
    function Game(canvas) {
        this.pieces = [];
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.pressed = {};
        this.keys = new twowaymap_1["default"]();
        this.keys.set('w', 87);
        this.keys.set('a', 65);
        this.keys.set('s', 83);
        this.keys.set('d', 68);
    }
    Game.prototype.addPieces = function () {
        var _this = this;
        arguments.slice().forEach(function (piece) { return _this.pieces.push(piece); });
    };
    Game.prototype.loadPieces = function () {
        this.player = new ship_1["default"](20, 30, this.canvas, this.context);
        this.addPieces(new background_1["default"](this.canvas, this.context), new asteroid_1["default"](20, 30, this.canvas, this.context), this.player);
    };
    Game.prototype.draw = function (t) {
        this.last = t;
        this.move(t);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.pieces.forEach(function (piece) { return piece.draw(); });
        requestAnimationFrame(this.draw.bind(this));
    };
    Game.prototype.move = function (t) {
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
    };
    Game.prototype.newPlayer = function (player) {
        this.player = player;
    };
    /// Define controls for the game, as well as handlers
    Game.prototype.keydown = function (key, repeat, event) {
        var code = this.keys.get(key);
        if (code) {
            this.pressed[code] = true;
        }
    };
    Game.prototype.keyup = function (key, event) {
        this.pressed[this.keys.get(key)] = false;
    };
    return Game;
}());
exports["default"] = Game;
//module.exports = Game 


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var TwoWayMap = /** @class */ (function () {
    function TwoWayMap() {
        this.valueKey = new Map();
        this.keyValue = new Map();
        this.set = function (k, v) {
            if (this.keyValue.get(k) === v) {
                return;
            }
            else if (this.valueKey.get(v) !== undefined) {
                return new Error('`set` attempt would break 1:1 requirement of TwoWayMap');
            }
            else if (this.keyValue.get(k) !== undefined) {
                var orig = this.keyValue.get(k);
                this.valueKey["delete"](orig);
                this.keyValue["delete"](k);
                this.keyValue.set(k, v);
                this.valueKey.set(v, k);
                return;
            }
            else {
                this.keyValue.set(k, v);
                this.valueKey.set(v, k);
                return;
            }
        };
        this.get = function (key) {
            return this.keyValue.get(key) !== undefined &&
                this.keyValue.get(key) ||
                this.valueKey.get(key);
        };
    }
    TwoWayMap.prototype["delete"] = function (k) {
        if (this.keyValue.get(k)) {
            var other = this.keyValue.get(k);
            this.keyValue["delete"](k);
            this.valueKey["delete"](other);
        }
        else if (this.valueKey.get(k)) {
            var other = this.valueKey.get(k);
            this.valueKey["delete"](k);
            this.keyValue["delete"](other);
        }
        return undefined;
    };
    TwoWayMap.prototype.forEach = function () {
        return this.keyValue.forEach();
    };
    TwoWayMap.prototype.has = function (key) {
        return this.keyValue.has(key) || this.valueKey.has(key);
    };
    TwoWayMap.prototype.keys = function () {
        return this.keyValue.keys();
    };
    TwoWayMap.prototype.values = function () {
        return this.valueKey.values();
    };
    TwoWayMap.prototype.entries = function () {
        return this.keyValue.entries();
    };
    TwoWayMap.prototype.clear = function () {
        this.keyValue.clear();
        this.valueKey.clear();
        return true;
    };
    return TwoWayMap;
}());
exports["default"] = TwoWayMap;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var gamepiece_1 = __webpack_require__(0);
var Background = /** @class */ (function (_super) {
    __extends(Background, _super);
    function Background(canvas, context) {
        return _super.call(this, 0, 0, canvas, context) || this;
    }
    Background.prototype.draw = function (xOffset, yOffset) {
        var ctx = this.context;
        ctx.fillStyle = 'rgb(255, 255, 255, 1)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return Background;
}(gamepiece_1["default"]));
exports["default"] = Background;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var nvector_1 = __webpack_require__(6);
var Vector2D = /** @class */ (function (_super) {
    __extends(Vector2D, _super);
    function Vector2D(x, y) {
        var _this = this;
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw new Error('Attempt to construct Vector2D with non-number arguments');
        }
        _this = _super.call(this, x, y) || this;
        return _this;
    }
    return Vector2D;
}(nvector_1["default"]));
exports["default"] = Vector2D;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var NVector = /** @class */ (function () {
    function NVector() {
        var _this = this;
        arguments.slice().forEach(function (value, index) {
            _this[index] = value;
        });
    }
    Object.defineProperty(NVector.prototype, "x", {
        get: function () {
            return this[0];
        },
        set: function (v) {
            this[0] = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NVector.prototype, "y", {
        get: function () {
            return this[1];
        },
        set: function (v) {
            this[1] = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NVector.prototype, "z", {
        get: function () {
            return this[2];
        },
        set: function (v) {
            this[2] = v;
        },
        enumerable: true,
        configurable: true
    });
    return NVector;
}());
exports["default"] = NVector;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var gamepiece_1 = __webpack_require__(0);
var Asteroid = /** @class */ (function (_super) {
    __extends(Asteroid, _super);
    function Asteroid(x, y, canvas, context) {
        return _super.call(this, x, y, canvas, context) || this;
    }
    Asteroid.prototype.draw = function (xOffset, yOffset) {
        var ctx = this.context;
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        ctx.fill();
    };
    return Asteroid;
}(gamepiece_1["default"]));
exports["default"] = Asteroid;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var gamepiece_1 = __webpack_require__(0);
var Asteroid = /** @class */ (function (_super) {
    __extends(Asteroid, _super);
    function Asteroid(x, y, canvas, context) {
        return _super.call(this, x, y, canvas, context) || this;
    }
    Asteroid.prototype.draw = function (xOffset, yOffset) {
        var ctx = this.context;
        ctx.fillStyle = 'rgba(0, 0, 255, 1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        ctx.fill();
    };
    return Asteroid;
}(gamepiece_1["default"]));
exports["default"] = Asteroid;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Keys = /** @class */ (function () {
    function Keys() {
        this.down = {};
        this.downFuncs = new Map(); // Functions to call on keydown
        this.upFuncs = new Map(); // Functions to call on keyup
    }
    Keys.prototype.keydownTrigger = function (event) {
        var _this = this;
        this.downFuncs.forEach(function (func) {
            func(event.keyCode, _this.down[event.keyCode] || false, event);
        });
        this.down[event.keyCode] = true;
    };
    Keys.prototype.keyupTrigger = function (event) {
        console.log(event.keyCode);
        this.upFuncs.forEach(function (func) {
            func(event.keyCode, event);
        });
        this.down[event.keyCode] = false;
    };
    Keys.prototype.registerKeydown = function (callback) {
        var s = this.downFuncs.size;
        this.downFuncs.set(s, callback);
        return s;
    };
    Keys.prototype.registerKeyup = function (callback) {
        var s = this.upFuncs.size;
        this.upFuncs.set(s, callback);
        return s;
    };
    Keys.prototype.deleteKeydown = function (num) {
        return this.downFuncs["delete"](num);
    };
    Keys.prototype.deleteKeyup = function (num) {
        return this.upFuncs["delete"](num);
    };
    return Keys;
}());
exports["default"] = Keys;


/***/ })
/******/ ]);
//# sourceMappingURL=game.js.map