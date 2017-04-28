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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/***/ (function(module, exports) {

function MovingObject(options){
  this.pos = options['pos'];
  this.vel = options['vel'];
  this.radius = options['radius'];
  this.color = options['color'];
}


MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};


MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};





// mo.draw();

module.exports = MovingObject;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(3);
const MovingObject = __webpack_require__(0);

function Asteroid(options) {
  MovingObject.call(this, options);
  this.color = 'green';
  this.radius = 200;
}

Util.inherits(Asteroid, MovingObject);
// Surrogate.prototype = MovingObject.prototype;
// Asteroid.prototype = new Surrogate();

// Return a randomly oriented vector with the given length.
function randomVec (length) {
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
}
// Scale the length of a vector by the given amount.
function scale (vec, m) {
  return [vec[0] * m, vec[1] * m];
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(1);
const MovingObject = __webpack_require__(0);

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = 800;
  canvasEl.height = 800;
  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 500, 500);

  const mo = new MovingObject(
    { pos: [30, 30], vel: [10, 10], radius: 50, color: "red"}
  );

  const mo2 = new Asteroid(
    { pos: [70, 200], vel: [10, 10], radius: 90, color: "green"}
  );

  mo.draw(ctx);
  mo2.draw(ctx);
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(0);

const Util = {
  inherits (childClass, parentClass){
    function Surrogate () {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = Surrogate.prototype;
    childClass.prototype.constructor = childClass;
  }
};



module.exports = Util;


/***/ })
/******/ ]);