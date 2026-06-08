function drawTrivStart() {
  background(50, 240, 210);
  // Title
  fill(255);
  textAlign(CENTER);
  textSize(52);
  text("Barbados Trivia!", width / 2, 140);

  // Subtitle
  fill(0);
  textSize(16);
  text(
    "I'm gonna ask you some questions, let's see what you know about my island Barbados",
    width / 2,
    185
  );
  text("Question 1: What is the capital of Barbados? ", width / 2, 210);

  drawButton(op5);
  drawButton(op6);
}
