function drawEnding7() {
  background(20, 100, 25);

  // Title
  fill(255);
  textAlign(CENTER);
  textSize(52);
  text("Correct!", width / 2, 100);

  textSize(30);
  text("Rihanna was born and raised in Bridgetown, Barbados!", width / 2, 140);

  // Subtitle
  fill(0);
  textSize(16);
  text("You got 1 out of 2 questions! Thanks for playing!", width / 2, 185);

  //drawButton(end5);
  // drawButton(end6);
  drawButton(goAgain);
}
