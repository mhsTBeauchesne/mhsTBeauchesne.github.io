// Position and size variables for the blackboard
var posX = 200;
var posY = 200;
var bbWidth = 200;

// Position variables for letters
var letterX;
var letterY;

// Array to hold the letters
var letters=['T', 'y','l','e','r'];


function setup() {
createCanvas(640, 480);
}

function draw() {
  background(155);  // grey background

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

	// don't put arrow key symbols into the letters array
	else {letters.push(key);}
	return false;
}
