'use strict';

function Player(name="Player"){
  this.name = name;
  this.scoreCard = [[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null,null],[null]]
  this.score = [null,null,null,null,null,null,null,null,null,null]
  this.roll = 0
}

Player.prototype.scoreWith = function(frame, knockedPin){
  this.scoreCard[frame][this.roll] = knockedPin;
}

Player.prototype.setNextRoll = function(frame){
  if (frame === 9){return this.roll ++}
  this.roll = Math.abs(-1 + this.roll);
}

Player.prototype.displayScoreCard = function(){
  console.log("SCORE CARD")
  console.log(this.scoreCard)
}

Player.prototype.displayScore = function(frame){
  console.log("SCORE")
  var scoreBoard = []
  scoreBoard.push(this.score[0]);
  for (var i=1; i<=frame;i++){
    scoreBoard.push(scoreBoard[i-1]+this.score[i])
  }
  console.log(scoreBoard)
}
