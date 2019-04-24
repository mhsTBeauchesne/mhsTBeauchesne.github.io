/*
house assignment
created by tyler
march 20th,2019
*/
function setup() {
  // create the canvas
  createCanvas(800,600)

}


function draw() {
let houseWidth=300
//body of house
rect(width/2, height/2, houseWidth, houseWidth/2);
// roof of house
line(width/2,height/2,width/2 + houseWidth/2,height/2-houseWidth/2);
line(width/2 + houseWidth/2,height/2-houseWidth/2 ,width/2 + houseWidth,height/2);
let minihousewidth= houseWidth/2;
//smaller house
rect(width/2, height/2, minihousewidth/2, minihousewidth/4);
//roof of smaller house
line(475,300,440,260);
//window of house
rect(450,350,100,50)
line(450,375,550,375)
line(500,350,500,400)
//door
rect(575,350,65,100)
//handle
ellipse(625,400,10,10)
}
