// all the constants are gonna go below here
// starting with the button stuff
const BTN_X = 500;
const BTN_W = 600;
const BTN_H = 52;
const BTN_Y = [340, 400];

let selNum = 0;

// put preload, draw, allat in here

function setup() {
  createCanvas(1000, 500);
  textFont("monospace");
  iButtionPos();
}

function draw() {
  // drawBackground() is defined in scenes.js
  // drawBackground();

  if (selNum === 0) {
    drawStartScreen();
  } else if (selNum === 3) {
    drawOP3();
  } else if (selNum === 2) {
    background(255);
  } else if (selNum === 101) {
    drawEnding1();
  } else if (selNum === 102) {
    drawEnding2();
  } else if (selNum === 4) {
    drawOP4();
  } else if (selNum === 103) {
    drawEnding3();
  } else if (selNum === 104) {
    drawEnding4();
  }
  // drawButton(test);
}

function mousePressed() {
  if (selNum === 0 && isMouseOver(op1.x, op1.y, BTN_W, BTN_H)) {
    selNum = 3; // screen for choice 3
  } else if (selNum === 3 && isMouseOver(end1.x, end1.y, BTN_W, BTN_H)) {
    selNum = 101; // ending 1
  } else if (selNum === 3 && isMouseOver(end2.x, end2.y, BTN_W, BTN_H)) {
    selNum = 102; // ending 2
  }

  if (selNum === 0 && isMouseOver(op2.x, op2.y, BTN_W, BTN_H)) {
    selNum = 4;
  } else if (selNum === 4 && isMouseOver(end3.x, end3.y, BTN_W, BTN_H)) {
    selNum = 103;
  } else if (selNum === 4 && isMouseOver(end4.x, end4.y, BTN_W, BTN_H)) {
    selNum = 104;
  }
}
