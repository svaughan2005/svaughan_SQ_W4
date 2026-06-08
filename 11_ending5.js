function drawEnding5() {
  background(50, 200, 255);

  // Title
  fill(255);
  textAlign(CENTER);
  textSize(52);
  text("Correct!", width / 2, 100);

  textSize(30);
  text("Barbados became independent on Nov. 20th 1966!", width / 2, 140);

  // Subtitle
  fill(0);
  textSize(16);
  text("Thanks for playing!", width / 2, 185);

  //drawButton(end5);
  // drawButton(end6);

  drawButton(goAgain);
}
