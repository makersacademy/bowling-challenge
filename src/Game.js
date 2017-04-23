// The game class has frames and keeps score

'use strict';

function Game() {
  this.turn = 0
  this.scoresheet = [[],[],[],[],[],[],[],[],[],[],[]]
}

Game.prototype.viewScoresheet = function() {
  return this.scoresheet;
};

Game.prototype.viewFrame = function(turnNumber) {
  return this.scoresheet[turnNumber-1][0];
};

Game.prototype.viewScore = function(turnNumber) {
  return this.scoresheet[turnNumber-1][1]
}

Game.prototype.addFrames = function(frame) {
  this.scoresheet[this.turn].push(frame);
};

Game.prototype.previousIsStrike = function() {
  if(this.scoresheet[this.turn-1][0][0] == 10 && this.scoresheet[this.turn-1][0][1]== 0){
    return true
  } else {
    return false
  }
};

Game.prototype.previousTwoAreStrikes = function() {
  if(this.previousIsStrike && this.scoresheet[this.turn-2][0][0] == 10 && this.scoresheet[this.turn-2][0][1]== 0){
    return true
  } else {
    return false
  }
};

Game.prototype.previousIsSpare = function() {
  var score1 = this.scoresheet[this.turn-1][0][0];
  var score2 = this.scoresheet[this.turn-1][0][1];
  if((score1 + score2 == 10) && (score1 != 10) && (score2 != 0)){
    return true
  } else {
    return false
  }
};

Game.prototype.updateScore = function() {
  var frameSum = this.scoresheet[this.turn][0][0]+ this.scoresheet[this.turn][0][1];
  var firstBowl = this.scoresheet[this.turn][0][0]
  if(this.turn === 0) {
    this.scoresheet[this.turn].push(frameSum);}
  else if(this.previousIsSpare()) {
    console.log('is spare');
    this.scoresheet[this.turn].push(frameSum);
    this.scoresheet[this.turn-1][1] = this.scoresheet[this.turn-1][1] + firstBowl;
  }
  else if(this.turn >= 2 && this.previousTwoAreStrikes) {
    console.log('two strikes');
    this.scoresheet[this.turn].push(frameSum);
    this.scoresheet[this.turn-1][1] = this.scoresheet[this.turn-1][1] + frameSum;
    this.scoresheet[this.turn-2][1] = this.scoresheet[this.turn-2][1] + frameSum;}
  else if(this.previousIsStrike()) {
    console.log('one strike');
    this.scoresheet[this.turn].push(frameSum);
    this.scoresheet[this.turn-1][1] = this.scoresheet[this.turn-1][1] + frameSum;
    } else {
      this.scoresheet[this.turn].push(frameSum);
  };
};

Game.prototype.nextTurn = function() {
  this.turn += 1;
};
