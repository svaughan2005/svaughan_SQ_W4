function drawEnding1() {
  background(0, 255, 0);

  // Title
  fill(255);
  textAlign(CENTER);
  textSize(52);
  text("Wavelength, Shannon Edition!", width / 2, 140);

  // Subtitle
  fill(0);
  textSize(16);
  text(
    "Oh dang okay. Maybe we’re on the same wavelength in other aspects in our life,",
    width / 2,
    185
  );
  text("but no way you’re dissing Caribbean music.", width / 2, 210);

  drawButton(restart);
}
