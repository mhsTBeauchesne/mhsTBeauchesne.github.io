function setup() {
  // Sets the screen to be 640 pixels wide and 480 pixels high
createCanvas(640,480);
}


function draw() {
  //Create the ground
  rect(0,350,450,50);

//create the snowman body
ellipse(200,300,150,150);
ellipse(200,200,100,100);
ellipse(200,120,75,75);

//create the arms
line(160,200,100,100);
line(240,200,300,100);
}
