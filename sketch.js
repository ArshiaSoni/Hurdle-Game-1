var database;
var gameState, playerCount;
var game, player, form;

function setup(){
  createCanvas(displayWidth - 30, displayHeight - 100);

  database = firebase.database();
  console.log(database);

  game = new Game();
  game.getGameState();
}

function draw(){
  background('lightblue');

  if(playerCount == 2){
    gameState = 1;
    game.updateGameState(1);
  }
}