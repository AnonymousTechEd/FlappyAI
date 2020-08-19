function Setup() {
  createCanvas(400, 400);
}

function Loop() {
  Square(10,10,10,10,"blue")
}

Setup()
setInterval(Loop(), 3000)
