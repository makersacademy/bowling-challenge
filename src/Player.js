'use strict';

function Player(name="Player"){
  this.name = name;
  this.scoreCard = [[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null,null],[null]]
  this.score = [null,null,null,null,null,null,null,null,null,null]
  this.roll = 0
}

Player.prototype.scoreWith = function(frame, knockedPin){
  // Adds pin to score card
  this.scoreCard[frame][this.roll] = knockedPin;
}

Player.prototype.setNextRoll = function(frame){
  // Sets the players next roll number
  if (frame === 9){return this.roll ++}
  this.roll = Math.abs(-1 + this.roll);
}

Player.prototype.displayScoreCard = function(){
  // Displays Score Card
  console.log("SCORE CARD")
  console.log(this.scoreCard)
}

Player.prototype.displayScore = function(){
  // Displays Score
  console.log("SCORE")
  var scoreBoard = []
  scoreBoard.push(this.score[0]);
  for (var i=1; i<=9;i++){
    scoreBoard.push(scoreBoard[i-1]+this.score[i])
  }
  console.log(scoreBoard)

}
