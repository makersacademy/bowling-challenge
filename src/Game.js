// The game class has frames and keeps score

'use strict';

function Game() {
  this.turn = 0;
  this.scoresheet = [[],[],[],[],[],[],[],[],[],[]];
  this.totalScore = 0;
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

Game.prototype.finalScore = function() {
  for(var i = 0; i < this.scoresheet.length; i++) {
  this.totalScore += this.scoresheet[i][1];}
  return this.totalScore;
};

// Game.prototype.addBonusFrame = function(frame) {
//   if(this._bonus
// }

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

Game.prototype._bonus = function() {
  if(this.previousIsStrike() === false && this.previousIsSpare() === false){
    console.log("Game Over")
    this.finalScore();}
    // return "Game Over";}
  else {
    console.log("Bonus Frame");
    // return "Bonus Frame";
  }
};

Game.prototype.addBonusFrame = function(frame) {
  this.scoresheet.push([]);
  this.addFrames(frame)
};

Game.prototype.updateScore = function() {
  var frameSum = this.scoresheet[this.turn][0][0]+ this.scoresheet[this.turn][0][1];
  var firstBowl = this.scoresheet[this.turn][0][0]
  if(this.turn === 0) {
    this.scoresheet[this.turn].push(frameSum);}
  else if(this.turn === 10) {
    this.scoresheet[this.turn-1][1] += frameSum;
    this.scoresheet[this.turn-2][1] += this.scoresheet[this.turn][0][0]}
  else if(this.previousIsSpare()) {
    console.log('is spare');
    this.scoresheet[this.turn].push(frameSum);
    this.scoresheet[this.turn-1][1] = this.scoresheet[this.turn-1][1] + firstBowl;
  }
  else if(this.turn === 9 && this.previousTwoAreStrikes()){
    console.log('final bowl is spare');
    this.scoresheet[this.turn].push(frameSum);
    this.scoresheet[this.turn-1][1] = this.scoresheet[this.turn-1][1] + frameSum;
    this.scoresheet[this.turn-2][1] = this.scoresheet[this.turn-2][1] + this.scoresheet[this.turn][0][0];}
  else if(this.turn >= 2 && this.previousTwoAreStrikes()) {
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
  if(this.turn < 9) {
    this.turn += 1;
  } else {
    this.turn += 1;
    this._bonus()
  }
};
