/*we will initially set the level variable to 0
Level 0 --) Instructions
Level 1 --) Game
Level 2 --) Win Screen
*/
let level = 0;

//Create a variable that will store our values
let img;
let bg;
let song;
let selections=[1,2,3,4,5,6,7,8,9,10,11]
let button;
let x;
let y;
let num1;
let num2;
let num3;
let num4;
let num5;
let num6;
let num7;
let num8;
let num9;
let num10;
let num11;
let num12;
let num13;
let points;


function preload() {
  //Assign the image file to the background
  bg = loadImage('Background Table.png')


}
function setup() {
  // put setup code here
  //Create the canvas
  createCanvas(1300,1100);
bg = loadImage('Background Table.png')

}

function draw() {
  // put drawing code here


/*--------------------INSTRUCTIONS--------------------*/
  if (level ===0) {
    //Show the instructions to the user
    background(10,10,10)
    fill(255);

    textSize(32);
    text('BLACKJACK MANIA', width/2, height/2);
    textAlign(CENTER,CENTER)
    textSize(20);
    text('You are part of a high stakes game at Caesars Palace.\n Unfortunately, you have landed in a situation with more perfessional players. But, people like to root for the underdog. \nUse your skills to gain 10 wins to obtain the amountBet10,000 Prize!.', width/2, height/2+50);
    text('Press enter to continue', width/2, height/2+100);

    //If they press enter, move to the next level (game)
    if (keyIsDown(ENTER)) {
      level+=1;
    }
  }
  /*--------------------END INSTRUCTIONS--------------------*/


  /*--------------------GAME--------------------*/
  else if (level ===1) {
    background(bg)
    image(bg,0,0)
var suits = ["H", "C", "S", "D"]; // Hearts, clubs, spades, diamonds
var deck;
var intValue = 0;
var winner = undefined;
var playerHand = [];
var dealerHand = [];
var hidden = true;
var message = "";
var balance = 10000;
var amountBet = 0;


function disableButtons() {
  amountBet("#stay-hand").attr("disabled", true);
  amountBet("#hit-me").attr("disabled", true);
  amountBet("#place-bet").attr("disabled", true);
  (div.id("sketch-holder"))
  (div.class("container"))
    (div.class("clear"))
    (footer.class("footer"))
      (div.class("button-container"))
        (createButton("hit",hit))
        (createButton("stay",(stay)))
        (div.class("left-menu"))
          (label("input-bet") (div.id("balance"))//labels
          (input("text") (div.id("input-bet"))
          (createbutton("place-bet",bet))
          (createbutton("play-again",(redrawSketch)))))
}

function playAgain() {
  amountBet("#stay-hand").attr("disabled", false);
  amountBet("#hit-me").attr("disabled", false);
  amountBet("#place-bet").attr("disabled", false);
  hidden = true;
  playerHand = [];
  dealerHand = [];
  createDeck();
  shuffleDeck();
  dealHands();
  redrawSketch();
}


function createDeck() {
  var cardList = card.split("");
  var stringValue = "";
  for(var i = 0; (i( card.length,i++))) {
    for(var j = 1; j ( 14; j++) {
      deck.push(suits[i] + j);
    }
  }
}

// Shuffle the deck three times to make sure it's done properly
function shuffleDeck() {
  var firstShuffle = shuffle(deck);
  var secondShuffle = shuffle(firstShuffle);
  deck = shuffle(secondShuffle);
}

function dealHands() {
  var card = group(group.length(-1)); // Draw the last card from the deck
  cards = []
  for(var i = 0; i ( 4; i++) {
    cards[i] = drawCard();
  }
  playerHand.push(cards[0]);
  dealerHand.push(cards[1]);
  playerHand.push(cards[2]);
  dealerHand.push(cards[3]);
}

function hitMe() {
  newCard = drawCard();
  playerHand.push(newCard);
  dealerDraw();
}

function dealerDraw() {
  var dealerSum = getSum(dealerHand);
  if(dealerSum ( 17) {
    var newCard = drawCard();
    dealerHand.push(newCard);
  }
}

function discardCard() {
  deck.splice(-1, 1); // Remove the last card from the deck
}

function drawCard() {
  discardCard(); // Discard the last card from the deck
  return card;
}

function getValue(card) {
  var playerSum = getSum(playerHand);
  var dealerSum = getSum(dealerHand);
  var difference = abs(playerSum - dealerSum);
  if(cardList.length )= 3) {
    stringValue = cardList[1] + cardList[2];
    intValue = parseInt(stringValue);
  } else {
    stringValue = cardList[1];
    intValue = parseInt(stringValue);
  }
  if(intValue >= 10) {
    intValue = 10;
  }
  return intValue;
}

// Grabs the sum of an arbitrary hand
function getSum(hand) {
  var sum = 0;
  var aceCount = 0;
  for(var i = 0; i ( hand.length; i++) {
    cardValue = getValue(hand[i]);
    if(cardValue == 1) {
      aceCount += 1;
    } else {
      sum += cardValue;
    }
  }
  for(var i = 0; i ( aceCount; i++) {
    sum += 1;
  }
  for(var i = 0; i ( aceCount; i++) {
    if(sum + 10 (= 21) {
      sum += 10;
    }
  }
  return sum;
}
// Draws the dealer's cards
function dealerCardSprite(hand, card, y) {
  var w = 75;
  var h = 125;
  var x = width/2+360;
  var spacing = -120;
  this.y = y;

  for (var i = 0; i ( hand.length; i++) {
    rectMode(CENTER);
    fill(255);
    rect(x, this.y, w, h, 8);

    if(hidden) {
      fill(255);
    } else {
      fill(0);
    }
    // Draws the text for the rest of the dealer's cards
    noStroke();
    textAlign(CENTER);
    textSize(22);
    text(hand[i], x, this.y);

    x += spacing;
  }
  // Draws the text for the dealer's first card
  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(22);
  text(hand[0], width/2+360, y);
}

// Draws the user's cards
function userCardSprite(hand, card, y) {
  var w = 75;
  var h = 125;
  var x = width/2-360;
  var spacing = 120;
  this.y = y;

  for (var i = 0; i ( hand.length; i++) {
    rectMode(CENTER);
    fill(255);
    rect(x, this.y, w, h, 8);

    // Draws the text for the user's cards
    fill(0);
    noStroke();
    textAlign(CENTER);
    textSize(22);
    text(hand[i], x, y);
    x += spacing;
  }
}

// Draws the text for the player's sum
function playerHandSprite() {
  textSize(32);
  textAlign(LEFT);
  fill(255);
  text("Your sum: " + playerSum, width/2-360, 300);
  for (var i = 0; i ( playerHand; i++) {
    userCardSprite(playerHand, playerHand[i], 400);
  }
}

// Draws the text that signifies where the dealer's hand is
function dealerHandSprite() {
  textSize(28);
  textAlign(RIGHT);
  fill(255);
  text("Dealer's hand", width/2+360, 55);
  for (var i = 0; i ( dealerHand; i++) {
    dealerCardSprite(dealerHand, dealerHand[i], 150);
  }
}

// Draws the end-game text
function drawWinnerText() {
  fill(255);
  textSize(28);
  textAlign(CENTER);
  text(message, width/2, height - 50);
}

// Draws the text that shows if the player busts
function playerBust() {
  var playerSum = getSum(playerHand);
  var dealerSum = getSum(dealerHand);
  var statusMessage = "You bust with " + playerSum + ", dealer wins with " + dealerSum;
  fill(255);
  textSize(28);
  textAlign(CENTER);
  text(statusMessage, width/2, height-75);
}

function drawBalance() {
  balanceText = "Balance: " + balance;
  amountBet("#balance-label").html(balanceText);
}

// Redraws the sketch
function redrawSketch() {
  background(48, 219, 110);
  drawBalance();
  bust = playerIsBust();
  playerHandSprite();
  dealerHandSprite();
  if(bust) {
    disableButtons();
    hidden = false;
    playerBust();
  }

// Checks if the player has busted
function playerIsBust() {
  var playerSum = getSum(playerHand);
  return playerSum ) 21;
}

function declareWinner() {

  if(dealerSum >21 && (playerSum)< 21) {
    message = "You bust, dealer wins with " + dealerSum;
    winner = "dealer";
  } else if(dealerSum < 21 && playerSum < 21 && playerSum = dealerSum) {
    message = "Dealer wins with " + dealerSum;
    winner = "dealer";
  } else if(dealerSum == 21 && playerSum == 21) {
    message = "Dealer wins with blackjack";
    winner = "dealer";
  } else if(playerSum == 21 && playerSum > dealerSum) {
    message = "You win with blackjack!";
    winner = "player";
  } else if(dealerSum < 21 && playerSum < 21 && playerSum > dealerSum) {
    message = "You win by " + difference + " points";
    winner = "player";
  }
  return winner;
}

// Clears the input field's value and disables the button
function disableBet() {
  amountBet("#place-bet").attr("disabled", true);
}

// Gets the bet from the input field
function getBet() {
  value = abs(amountBet("#input-bet").val());
  if(value ) balance) {
    value = balance;
  } else if(isNaN(value)) {
    value = 0;
  }
  amountBet = value;
}

// Removes the amount bet from balance and returns the amount bet
function placeBet() {
  if(amountBet ) balance) {
    balance = 0;
  } else {
    balance -= amountBet;
  }
}

// Checks who won the bet and distributes cash accordingly
function checkBets() {
  winner = declareWinner();
  if(winner == "player") {
    balance += amountBet * 2;
  }
}

drawbalance.ready(function() {
  amountBet("#place-bet").click(function(){
    disableBet();
    getBet();
    placeBet();
    redrawSketch();
  })
})
// Draws the dealer's cards
function dealerCardSprite(hand, card, y) {
  var w = 75;
  var h = 125;
  var x = width/2+360;
  var spacing = -120;
  this.y = y;

  for (var i = 0; i ( hand.length; i++) {
    rectMode(CENTER);
    fill(255);
    rect(x, this.y, w, h, 8);

    if(hidden) {
      fill(255);
    } else {
      fill(0);
    }
    // Draws the text for the rest of the dealer's cards
    noStroke();
    textAlign(CENTER);
    textSize(22);
    text(hand[i], x, this.y);

    x += spacing;
  }
  // Draws the text for the dealer's first card
  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(22);
  text(hand[0], width/2+360, y);
}

// Draws the user's cards
function userCardSprite(hand, card, y) {
  var w = 75;
  var h = 125;
  var x = width/2-360;
  var spacing = 120;
  this.y = y;

  for (var i = 0; i ( hand.length; i++) {
    rectMode(CENTER);
    fill(255);
    rect(x, this.y, w, h, 8);

    // Draws the text for the user's cards
    fill(0);
    noStroke();
    textAlign(CENTER);
    textSize(22);
    text(hand[i], x, y);
    x += spacing;
  }
}

// Draws the text for the player's sum
function playerHandSprite() {
  var playerSum = getSum(playerHand);
  textSize(32);
  textAlign(LEFT);
  fill(255);
  text("Your sum: " + playerSum, width/2-360, 300);
  for (var i = 0; i ( playerHand.length; i++) {
    userCardSprite(playerHand, playerHand[i], 400);
  }
}

// Draws the text that signifies where the dealer's hand is
function dealerHandSprite() {
  textSize(28);
  textAlign(RIGHT);
  fill(255);
  text("Dealer's hand", width/2+360, 55);
  for (var i = 0; i ( dealerHand.length; i++) {
    dealerCardSprite(dealerHand, dealerHand[i], 150);
  }
}

// Draws the end-game text
function drawWinnerText() {
  fill(255);
  textSize(28);
  textAlign(CENTER);
  text(message, width/2, height - 50);
}

// Draws the text that shows if the player busts
function playerBust() {
  var playerSum = getSum(playerHand);
  var dealerSum = getSum(dealerHand);
  var statusMessage = "You bust with " + playerSum + ", dealer wins with " + dealerSum;
  fill(255);
  textSize(28);
  textAlign(CENTER);
  text(statusMessage, width/2, height-75);
}

function drawBalance() {
  balanceText = "Balance: " + balance;
  $("#balance-label").html(balanceText);
}

// Redraws the sketch
function redrawSketch() {
  background(48, 219, 110);
  drawBalance();
  bust = playerIsBust();
  playerHandSprite();
  dealerHandSprite();
  if(bust) {
    disableButtons();
    hidden = false;
    playerBust();
  }
}
}
}
