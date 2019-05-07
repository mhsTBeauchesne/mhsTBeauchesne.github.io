
let song;
let bg;

function preload() {
  song = loadSound('EXPLOSION SOUND EFFECT.mp3');
  bg = loadImage('530916-red-dead-redemption-2-for-playstation-4.png')

}

function setup() {
  createCanvas(1300,1000);
  song.loop(); // song is ready to play during setup() because it was loaded during preload
  background(bg);

}
function draw(){
image(bg,0,0)
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
