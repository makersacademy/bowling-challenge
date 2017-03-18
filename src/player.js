'use strict';

function Player(name="Player"){
  this.name = name;
  this.scoreCard = [[null,null],[null,null],[null,null],[null,null],[null,null],
  [null,null],[null,null],[null,null],[null,null],[null,null,null],[null]]
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
  return this.scoreCard
}

Player.prototype.displayScore = function(frame){
  var scoreBoard = []
  scoreBoard.push(this.score[0]);
  for (var i=1; i<=frame;i++){
    if (this.score[i]==="X" || this.score[i]==="/"){
      scoreBoard.push("-")
    } else {
      scoreBoard.push(scoreBoard[i-1]+this.score[i])
    }
  }
  return scoreBoard
}
