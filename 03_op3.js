function drawOP3() {
  background(200, 100, 10);
  // Title
  fill(255);
  textAlign(CENTER);
  textSize(52);
  text("Wavelength, Shannon Edition!", width / 2, 140);

  // Subtitle
  fill(0);
  textSize(16);
  text(
    "Oh so you know ball! What would you rate Caribbean music on a scale of 1-10 then?",
    width / 2,
    185
  );
  text("(Specifically  soca, basement soca and dancehall) ", width / 2, 210);

  text(
    "(1-5 being tolerable / don’t listen to it. 6-10 being I love it) ",
    width / 2,
    235
  );

  drawButton(end1);
  drawButton(end2);
}
