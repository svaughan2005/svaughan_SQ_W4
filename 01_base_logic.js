// all the constants are gonna go below here
// starting with the button stuff
const BTN_X = 500;
const BTN_W = 600;
const BTN_H = 52;
const BTN_Y = [340, 400];

let selNum = 0;
let gameOver = false;

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
    drawGameSelect();
  } else if (selNum === 1) {
    drawStartScreen();
  } else if (selNum === 3) {
    drawOP3();
  } else if (selNum === 2) {
    drawTrivStart();
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
  } else if (selNum === 5) {
    drawOP5();
  } else if (selNum === 105) {
    drawEnding5();
  } else if (selNum === 106) {
    drawEnding6();
  } else if (selNum === 6) {
    drawOP6();
  } else if (selNum === 107) {
    drawEnding7();
  } else if (selNum === 108) {
    drawEnding8();
  }
  // drawButton(test);
}

function mousePressed() {
  if (selNum === 1 && isMouseOver(op1.x, op1.y, BTN_W, BTN_H)) {
    selNum = 3; // screen for choice 3
  } else if (selNum === 3 && isMouseOver(end1.x, end1.y, BTN_W, BTN_H)) {
    selNum = 101; // ending 1
    gameOver = true;
  } else if (selNum === 3 && isMouseOver(end2.x, end2.y, BTN_W, BTN_H)) {
    selNum = 102; // ending 2
    gameOver = true;
  } else if (selNum === 1 && isMouseOver(op2.x, op2.y, BTN_W, BTN_H)) {
    selNum = 4;
  } else if (selNum === 4 && isMouseOver(end3.x, end3.y, BTN_W, BTN_H)) {
    selNum = 103;
    gameOver = true;
  } else if (selNum === 4 && isMouseOver(end4.x, end4.y, BTN_W, BTN_H)) {
    selNum = 104;
    gameOver = true;
  } else if (selNum === 0 && isMouseOver(waveL.x, waveL.y, BTN_W, BTN_H)) {
    selNum = 1;
  } else if (selNum === 0 && isMouseOver(triv.x, triv.y, BTN_W, BTN_H)) {
    selNum = 2;
  } else if (selNum === 2 && isMouseOver(op5.x, op5.y, BTN_W, BTN_H)) {
    selNum = 5;
  } else if (selNum === 5 && isMouseOver(end5.x, end5.y, BTN_W, BTN_H)) {
    selNum = 105;
    gameOver = true;
  } else if (selNum === 5 && isMouseOver(end6.x, end6.y, BTN_W, BTN_H)) {
    selNum = 106;
    gameOver = true;
  } else if (selNum === 2 && isMouseOver(op6.x, op6.y, BTN_W, BTN_H)) {
    selNum = 6;
  } else if (selNum === 6 && isMouseOver(end7.x, end7.y, BTN_W, BTN_H)) {
    selNum = 107;
    gameOver = true;
  } else if (selNum === 6 && isMouseOver(end8.x, end8.y, BTN_W, BTN_H)) {
    selNum = 108;
    gameOver = true;
  } else if (gameOver && isMouseOver(restart.x, restart.y, BTN_W, BTN_H)) {
    selNum = 0;
    gameOver = false;
  }
}
