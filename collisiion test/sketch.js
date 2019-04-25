let x1 = 0;
let x2 = 100;
let size = 150;
let y = 100;
//assume object has not collided
let hit = false;

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

}
