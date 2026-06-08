function drawOP4() {
  background(50, 0, 255);

  // Title
  fill(255);
  textAlign(CENTER);
  textSize(52);
  text("Wavelength, Shannon Edition!", width / 2, 140);

  // Subtitle
  fill(0);
  textSize(16);
  text(
    "Oh okay, you may not be familiar w/ Caribbean music then, or maybe you just\n didn't catch the reference. That's not a crime!\n\n New question: Do you like pinapple on pizza?",
    width / 2,
    185
  );

  drawButton(end3);
  drawButton(end4);
}
