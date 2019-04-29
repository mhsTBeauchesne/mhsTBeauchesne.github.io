var mySound; // Creates a variable to hold the sound
let x1 = 0;
let x2 = 100;
let size = 150;
let y = 100;
//assume object has not collided
let hit = false;
// Position and size variables for the blackboard
var posX = 200;
var posY = 200;
var bbWidth = 200;

// Position variables for letters
var letterX;
var letterY;

// Array to hold the letters
var letters=['T', 'y','l','e','r'];



function preload() {
  soundFormats='mp3'
loadSound= 'Curb Your Enthasiasm Theme.mp3';  // Loads the sound file into the variable
}

function setup() {
  createCanvas(640, 480);
  // Notice that you have to put the variable name in front of the functions
  setVolume(0.1);
play();
}

let xSpeed = 5;
let ySpeed = 5;
function setup() {
  createCanvas(1050,1080);
  background(10,10,10);

}


function draw() {
//check for collusion
hit = collideRectRect(x1,y,size,size,x2,y,size,size);
//output a statement to console
print(hit);
if (hit===true){
background(255,0,0);
}
else{
background(0);
fill(123,532,143);
}

fill(255,50,143);
rect(x1,y,size,size);

fill(25,12,14);
rect(x2,y,size,size);

x1+=xSpeed;
x2+=xSpeed;
y = y+ySpeed;

if(x1+size>=width || x1<=0){
  xSpeed = xSpeed*(-2);
}
if(x2+size>=width || x2<=0){
  xSpeed = xSpeed*(-2);
}
if(y>=height || y>=0){
ySpeed = ySpeed*(-1);
}

function setup() {
createCanvas(640, 480);

  // draw a blackboard for writing on
  stroke(186, 145, 20);
  strokeWeight(15);
  fill(0,0,0);
  rect(posX, posY, bbWidth, bbWidth/2);

  // write white characters on the blackboard
  for (var i=0; i < letters.length; i++) {
	  noStroke();
	  fill(255);
	  letterX = (i*15) % (bbWidth - 40) + posX + 20;
	  letterY = posY + 20 + 15 * floor((i*15) / (bbWidth - 40));
	  text(letters[i], letterX , letterY);
  }

  function keyTyped() {
  if (key === 'a') {
  posX -=4;
  }

  else if (key === 'd') {
    posX += 4;
  }

  else if (key === 'w') {
    posY -=4;
  }

  else if (key === 's') {
    posY +=4;
  }
}
