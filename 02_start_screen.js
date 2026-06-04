function drawStartScreen() {
  // Title
  fill(255);
  textAlign(CENTER);
  textSize(52);
  text("Wavelength, Shannon Edition!", width / 2, 140);

  // Subtitle
  fill(160);
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

  // Start button
  drawButton(
    width / 2,
    390,
    200,
    52,
    "Start Game",
    isMouseOver(width / 2, 390, 200, 52)
  );

  /*
  drawButton(
    width / 2,
    390,
    200,
    52,
    "tester",
    isMouseOver(width - 100, 390, 200, 52)
  );
  */
}
