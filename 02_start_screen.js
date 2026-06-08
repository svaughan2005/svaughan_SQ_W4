function drawStartScreen() {
  background(100, 200, 210);
  // Title
  fill(255);
  textAlign(CENTER);
  textSize(52);
  text("Wavelength, Shannon Edition!", width / 2, 140);

  // Subtitle
  fill(0);
  textSize(16);
  text(
    "I'm gonna ask you some questions, let's see if we're on the same wavelength!",
    width / 2,
    185
  );
  text(
    "Question 1: If I were to say the word “balance” how would you respond?",
    width / 2,
    210
  );

  drawS1btns();
}

function drawS1btns() {
  /*
  fill(0);
  textSize(16);
  text("i just wanna see if this is working yk", width / 2, 300);
  */

  drawButton(op1);
  drawButton(op2);
  /*
  drawButton(
    BTN_X,
    BTN_Y[0],
    BTN_W,
    BTN_H,
    "ONE GYAL EVERY DAYYYYYYYYYYYY",
    isMouseOver(BTN_X, BTN_Y[0], BTN_W, BTN_H)
  );

  drawButton(
    BTN_X,
    BTN_Y[1],
    BTN_W,
    BTN_H,
    "Im not sure, ig it depends on the context?",
    isMouseOver(BTN_X, BTN_Y[1], BTN_W, BTN_H)
  );
  */
}
