//GV
let x=100;
let y=100;
let xSpeed=15;
let ySpeed=15;
let size = 100;

function setup() {
  // Setup the canvas
  createCanvas(1000,800);

}


function draw() {
  //put drawing code here
  //change the background
  background(10,10,10);

  //Draw the rectangle
  fill(41,92,227);
  rect(x,y,size,size);

  //Move the rectangle
  x+=xSpeed;
  y = y+ySpeed;

  if (y+size>=height){
    ySpeed=ySpeed*(-1);
  }

  if (x+size>=width){
    xSpeed=xSpeed*(-1);
  }

  else if (y<=0){
    ySpeed=ySpeed*(-1);
  }

  else if (x<=0){
    xSpeed=xSpeed*(-1);
  }


}
