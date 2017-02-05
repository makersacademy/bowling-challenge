'use strict';

function Player(name="Player"){
  this.name = name;
  this.scoreCard = [[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null,null]]
  this.score = [null,null,null,null,null,null,null,null,null,null]
  // this.specialScore = [null,null,null,null,null,null,null,null,null,null]
  this.roll = 0
}

Player.prototype.scoreWith = function(frame, knockedPin){
  // Adds pin to score card
  this.scoreCard[frame][this.roll] = knockedPin;
}

Player.prototype.setNextRoll = function(){
  // Sets the players next roll number
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
  console.log(this.score)

  console.log("SPECIAL")
  console.log(this.specialScore)
}
