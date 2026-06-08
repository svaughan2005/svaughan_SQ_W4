function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}

function myButton(ypos, label) {
  return {
    x: BTN_X,
    y: ypos,
    label: label,
    selected: false,
  };
}

function drawButton(button) {
  push();
  rectMode(CENTER); // x, y are the centre of the rectangle

  let isHovered = isMouseOver(button.x, button.y, BTN_W, BTN_H);
  // Button background — lighter colour when hovered
  fill(isHovered ? color(90, 80, 10) : color(0, 40, 60));
  stroke(isHovered ? color(180, 180, 220) : color(80, 80, 100));
  strokeWeight(2);
  rect(button.x, button.y, BTN_W, BTN_H, 8); // rounded corners

  // Button label — centred inside the button
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(18);
  text(button.label, button.x, button.y);

  pop();
}

// screen 1 wavelength
let op1;
let op2;

// screen op 3
let end1;
let end2;

// screen op 4
let end3;
let end4;

// screen game select
let waveL;
let triv;

// triv screen 1
let op5;
let op6;

let end5;
let end6;

let end7;
let end8;

let restart;

function iButtionPos() {
  op1 = myButton(BTN_Y[0], "ONE GYAL EVERY DAYYYYYYYYYYYY");

  end1 = myButton(BTN_Y[0], "1-5");
  end2 = myButton(BTN_Y[1], "6-10");

  op2 = myButton(BTN_Y[1], "Im not sure, ig it depends on the context?");

  end3 = myButton(BTN_Y[0], "Ew no, pineapple does NOT belong on pizza");
  end4 = myButton(BTN_Y[1], "Are you crazy? Pineapple on pizza is awesome!");

  waveL = myButton(BTN_Y[0], "Wavelength!");
  triv = myButton(BTN_Y[1], "Barbados Trivia!");

  op5 = myButton(BTN_Y[0], "Bridgetown");

  end5 = myButton(BTN_Y[0], "November 30th, 1966");
  end6 = myButton(BTN_Y[1], "March, 21st, 1980");

  op6 = myButton(BTN_Y[1], "Speightstown");

  end7 = myButton(BTN_Y[0], "Rihanna");
  end8 = myButton(BTN_Y[1], "CaridB");

  goAgain = myButton(370, "Restart");
}
