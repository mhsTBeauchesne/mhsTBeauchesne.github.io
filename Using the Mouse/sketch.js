function setup() {
  var firstCanvas = createCanvas(600, 600);  // create a square window for drawing

}

function draw() {
  // This function does nothing, but it must exist.
}

function mouseMoved() {
  // This function is called whenever the mouse is moved
  triangle(mouseX, mouseY, 20,20,30,30); // Draw a circle
}

function mouseClicked() {
  // This function is called whenever the mouse is clicked
  // (but the mouse must not be moving at the same time)
  // and will change the fill colour randomly
  function draw() {
  ellipse(mouseX, mouseY, 20, 20); // Draw a circle
  if (mouseIsPressed) {
    // When the mouse button is pressed
    // change the colour randomly
    fill(random(255), random(255), random(255));
  }
}
  fill(random(255), random(255), random(255));

}
