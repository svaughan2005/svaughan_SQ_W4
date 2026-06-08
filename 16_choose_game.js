function drawGameSelect() {
  background("orange");
  // Title
  fill(255);
  textAlign(CENTER);
  textSize(52);
  text("Hey there!\n What game do you want to play?", width / 2, 140);

  // Subtitle
  fill(0);
  textSize(16);
  text(
    "Wavelength: I'm gonna ask you some questions to see if we're on the same wavelength!",
    width / 2,
    245
  );
  text(
    "Trivia: I'm going to ask you some questions about my home - Barbados. Let's see how much you know!",
    width / 2,
    270
  );

  drawButton(waveL);
  drawButton(triv);
}
