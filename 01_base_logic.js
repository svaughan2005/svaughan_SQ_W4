// put preload, draw, allat in here

function setup() {
  createCanvas(1000, 450);
  textFont("monospace");
  let testButton = createButton("lol");
  testButton.position(100, 350);
}

function draw() {
  // drawBackground() is defined in scenes.js
  // drawBackground();
  background(200, 200, 3);
  drawStartScreen();
}
