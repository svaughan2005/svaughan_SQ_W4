function drawOP5() {
  background(50, 200, 255);

  // Title
  fill(255);
  textAlign(CENTER);
  textSize(52);
  text("Correct!", width / 2, 100);

  textSize(30);
  text("The capital of Barbados is Bridgetown.", width / 2, 140);

  // Subtitle
  fill(0);
  textSize(16);
  text(
    "Okay this next one is going to be a bit harder now.\nWhen did Barbados first gain its Independence?",
    width / 2,
    185
  );

  drawButton(end5);
  drawButton(end6);
}
