function makeButton(x, y, label, colour) {
  let button = {
    x: x,
    y: y,
    label: label,
    selected: false,
    colour: colour,
    highscore: 0,
  };
  return button;
}

function drawButton(b) {
  rectMode(CENTER);

  if (b.selected) {
    fill("green");
  } else {
    fill(b.colour);
  }

  if (buttonHitTest(b)) {
    stroke(0);
    strokeWeight(10);
  } else {
    stroke(0);
    strokeWeight(1);
  }

  rect(b.x, b.y, buttonWidth, buttonHeight, 10);
  fill(0);
  noStroke();
  textSize(15);
  textAlign(CENTER, CENTER);
  text(b.label, b.x, b.y);
}

let choice1;
function iButtonPosition() {
  choice1 = makeButton(width / 2, height / 2, "Choice 1", "rgb(227,72,246)");

  /*
    difficulty.easy =  makeButton(width / 2 - 120, height / 2 + 70, "Easy", "rgb(125,212,217)");
	difficulty.medium = makeButton(width / 2, height / 2 + 70, "Medium", "rgb(223,158,49)");
	difficulty.hard = makeButton(width / 2 + 120, height / 2 + 70, "Hard", "rgb(227,0,0)");
	start = makeButton(width / 2, height / 2 + 140, "Start", "rgb(167,95,193)");
	tutorial = makeButton(width - 90, height - 250, "Tutorial", "rgb(231,199,127)");
    */
}

function buttonHitTest(button) {
  return (
    mouseX <= button.x + buttonWidth / 2 &&
    mouseX >= button.x - buttonWidth / 2 &&
    mouseY <= button.y + buttonHeight / 2 &&
    mouseY >= button.y - buttonHeight / 2
  );
}
