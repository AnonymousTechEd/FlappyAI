var canvas;
var c;
var body;
var loaded = false
function createCanvas(h = 200,w = 200) {
  for (var i = 0; i < 10; i++) {
    array[i]
  }
  canvas = document.createElement("canvas")
  canvas.h = h
  canvas.w = w
  document.body.appendChild(canvas);
  c = canvas.getContext("2d");
}

document.addEventListener('DOMContentLoaded', function () {
  loaded = true
});

function Square( x, y, w, h, color) {
  c.fillStyle = color;
  c.fillRect(x, y, w, h);
}
