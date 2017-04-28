const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

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
