var selections = ["rock", "paper","scissors"]

function setup() {
  // Setup the canvas
createCanvas(1200,1600)
}


function draw() {
  //Create the ground
  //Get user choice
  var userChoice= prompt('Do you choose rock, paper or scissors?')
  var computerChoice = random(selections)

  print("User Choice",userChoice)
  print("Computer Choice",computerChoice)

  if (userChoice === computerChoice) {
    background(10,10,10)
    print("TIE")
  }

  else if (userChoice==="rock" && computerChoice ==="paper") {
    background(255,0,0)
    print("YOU LOSE")
  }

  else if (userChoice==="paper" && computerChoice ===" scissors") {
    background(255,0,0)
    print("YOU LOSE")
  }

  else if (userChoice==="scissors" && computerChoice ==="rock") {
    background(255,0,0)
    print("YOU LOSE")
  }

  else if (userChoice==="rock" && computerChoice ==="scissors") {
    background(0,255,0)
    print("YOU WON")
  }

  else if (userChoice==="scissors" && computerChoice ==="paper") {
    background(0,255,0)
    print("YOU WON")
  }

  else if (userChoice==="paper" && computerChoice ==="rock") {
    background(0,255,0)
    print("YOU WON")
  }
}
