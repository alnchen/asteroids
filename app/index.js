const Asteroid = require("./asteroid.js");
const MovingObject = require("./moving_object.js");

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
