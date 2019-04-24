function setup() {
  // Setup the canvas
  createCanvas(640, 480);
}


function draw() {

  function preload() {
  mySound = loadSound('babyshark.mp3');  // Loads the sound file into the variable
}

function setup() {
  // Notice that you have to put the variable name in front of the functions
  mySound.setVolume(0.1);
  mySound.play();
}


}
