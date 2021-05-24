var database;
var form;
var game;
var player;

var gameState = 0;
var playerCount;
var allPlayers

var car1, car2, car3, car4
var cars 


function setup() {
  database = firebase.database();
  createCanvas(displayWidth-20, displayHeight-30);

  game = new Game()
  game.start()
  game.readState()

}

function draw() {
  background("white");

  if (playerCount === 4) {
    game.updateState(1)
  }
  if (gameState === 1) {
    clear()
    game.play()
  }

  

}


