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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scripts_structures_vector2d__ = __webpack_require__(5);

class GamePiece extends __WEBPACK_IMPORTED_MODULE_0_scripts_structures_vector2d__["a" /* default */] {
    constructor(xOffset, yOffset, game) {
        super(xOffset, yOffset);
        this.game = game;
        this.canvas = game.canvas;
        this.context = game.context;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GamePiece;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scripts_game_game__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scripts_support_keys__ = __webpack_require__(9);


const canvas = document.getElementById('gameport');
const board = new __WEBPACK_IMPORTED_MODULE_0_scripts_game_game__["a" /* default */](canvas);
const keybinder = new __WEBPACK_IMPORTED_MODULE_1_scripts_support_keys__["a" /* default */]();
let keydownRegisterNumber = keybinder.registerKeydown(board.keydown.bind(board));
let keyupRegisterNumber = keybinder.registerKeyup(board.keyup.bind(board));
window.addEventListener('keydown', keybinder.keydownTrigger.bind(keybinder));
window.addEventListener('keyup', keybinder.keyupTrigger.bind(keybinder));
board.loadPieces();
board.draw();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scripts_support_twowaymap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scripts_game_gameObjects_pieces_background__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scripts_game_gameObjects_pieces_asteroid__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scripts_game_gameObjects_pieces_ship__ = __webpack_require__(8);




class Game {
    constructor(canvas) {
        this.pieces = [];
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        // this.context.scale(1000, 1000)
        this.pressed = {};
        this.keys = new __WEBPACK_IMPORTED_MODULE_0_scripts_support_twowaymap__["a" /* default */]();
        this.keys.set('w', 87);
        this.keys.set('a', 65);
        this.keys.set('s', 83);
        this.keys.set('d', 68);
    }
    addPieces(...args) {
        args.forEach(piece => this.pieces.push(piece));
    }
    loadPieces() {
        this.player = new __WEBPACK_IMPORTED_MODULE_3_scripts_game_gameObjects_pieces_ship__["a" /* default */](20, 30, this);
        this.addPieces(new __WEBPACK_IMPORTED_MODULE_1_scripts_game_gameObjects_pieces_background__["a" /* default */](this), new __WEBPACK_IMPORTED_MODULE_2_scripts_game_gameObjects_pieces_asteroid__["a" /* default */](20, 30, this), this.player);
    }
    draw(t) {
        this.last = t;
        this.move(t);
        this.canvas.width = window.innerWidth;
        this.canvas.style.width = window.innerWidth.toString();
        this.canvas.height = window.innerHeight;
        this.canvas.style.height = window.innerHeight.toString();
        this.pieces.forEach(piece => piece.draw());
        requestAnimationFrame(this.draw.bind(this));
    }
    move(t) {
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
    newPlayer(player) {
        this.player = player;
    }
    /// Define controls for the game, as well as handlers
    keydown(key, repeat, event) {
        let code = this.keys.get(key);
        if (code) {
            this.pressed[code] = true;
        }
    }
    keyup(key, event) {
        this.pressed[this.keys.get(key)] = false;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;

//module.exports = Game 


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class TwoWayMap {
    constructor() {
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
                let orig = this.keyValue.get(k);
                this.valueKey.delete(orig);
                this.keyValue.delete(k);
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
    delete(k) {
        if (this.keyValue.get(k)) {
            let other = this.keyValue.get(k);
            this.keyValue.delete(k);
            this.valueKey.delete(other);
        }
        else if (this.valueKey.get(k)) {
            let other = this.valueKey.get(k);
            this.valueKey.delete(k);
            this.keyValue.delete(other);
        }
        return undefined;
    }
    forEach(cb, thisArg) {
        return this.keyValue.forEach(cb, thisArg);
    }
    has(key) {
        return this.keyValue.has(key) || this.valueKey.has(key);
    }
    keys() {
        return this.keyValue.keys();
    }
    values() {
        return this.valueKey.keys();
    }
    entries() {
        return this.keyValue.entries();
    }
    clear() {
        this.keyValue.clear();
        this.valueKey.clear();
        return true;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TwoWayMap;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scripts_game_gameObjects_gamepiece__ = __webpack_require__(0);

class Background extends __WEBPACK_IMPORTED_MODULE_0_scripts_game_gameObjects_gamepiece__["a" /* default */] {
    constructor(game) {
        super(0, 0, game);
        let width = this.canvas.width;
        let height = this.canvas.height;
        this.image = this.context.createImageData(width, height);
        let arr = [];
        for (let i = 0; i < width; i += 4) {
            let num = !!((i / 4) % 2) ? 0 : 255;
            this.image.data[i] = num;
            this.image.data[i + 1] = num;
            this.image.data[i + 2] = num;
            this.image.data[i + 4] = 255;
        }
    }
    draw() {
        let ctx = this.context;
        ctx.putImageData(this.image, this.canvas.width, this.canvas.height);
        // let doot = [...new Array(this.canvas.width)].forEach( (_, x) => {
        //   return [...new Array(this.canvas.height)].forEach( (_, y) => {
        //     let color = (1-Math.pow(-1, x+y)) ? '255, 0, 0' : '255, 255, 255'
        //     ctx.fillStyle = `rgba(${color}, 1)`
        //     ctx.fillRect(x, y, 1, 1)
        //   })
        // })
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Background;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scripts_structures_nvector__ = __webpack_require__(6);

class Vector2D extends __WEBPACK_IMPORTED_MODULE_0_scripts_structures_nvector__["a" /* default */] {
    constructor(x, y) {
        super(x, y);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Vector2D;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class NVector extends Array {
    constructor(...args) {
        super();
        args.forEach((value) => this.push(value));
    }
    get x() {
        return this[0];
    }
    set x(v) {
        this[0] = v;
    }
    get y() {
        return this[1];
    }
    set y(v) {
        this[1] = v;
    }
    get z() {
        return this[2];
    }
    set z(v) {
        this[2] = v;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NVector;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scripts_game_gameObjects_gamepiece__ = __webpack_require__(0);

class Asteroid extends __WEBPACK_IMPORTED_MODULE_0_scripts_game_gameObjects_gamepiece__["a" /* default */] {
    constructor(x, y, game) {
        super(x, y, game);
    }
    draw() {
        let ctx = this.context;
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        ctx.fill();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Asteroid;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scripts_game_gameObjects_gamepiece__ = __webpack_require__(0);

class Asteroid extends __WEBPACK_IMPORTED_MODULE_0_scripts_game_gameObjects_gamepiece__["a" /* default */] {
    constructor(x, y, game) {
        super(x, y, game);
    }
    draw() {
        let ctx = this.context;
        ctx.fillStyle = 'rgba(0, 0, 255, 1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        ctx.fill();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Asteroid;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Keys {
    constructor() {
        this.down = {};
        this.downFuncs = new Map(); // Functions to call on keydown
        this.upFuncs = new Map(); // Functions to call on keyup
    }
    keydownTrigger(event) {
        this.downFuncs.forEach(func => {
            func(event.keyCode, this.down[event.keyCode] || false, event);
        });
        this.down[event.keyCode] = true;
    }
    keyupTrigger(event) {
        console.log(event.keyCode);
        this.upFuncs.forEach(func => {
            func(event.keyCode, event);
        });
        this.down[event.keyCode] = false;
    }
    registerKeydown(callback) {
        let s = this.downFuncs.size;
        this.downFuncs.set(s, callback);
        return s;
    }
    registerKeyup(callback) {
        let s = this.upFuncs.size;
        this.upFuncs.set(s, callback);
        return s;
    }
    deleteKeydown(num) {
        return this.downFuncs.delete(num);
    }
    deleteKeyup(num) {
        return this.upFuncs.delete(num);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Keys;



/***/ })
/******/ ]);
//# sourceMappingURL=game.js.map