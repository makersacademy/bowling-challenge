// The game class has frames and keeps score

'use strict';

function Game() {
  // this.frames = []
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

// Game.prototype.previousIsSpare = function() {
//   if(this.scoresheet[this.turn-1][0][0] + this.scoresheet[this.turn-1][0][1] == 10){
//     return true
//   } else {
//     return false
//   }
// };

Game.prototype.updateScore = function() {
  var frameSum = this.scoresheet[this.turn][0][0]+ this.scoresheet[this.turn][0][1];
  var firstBowl = this.scoresheet[this.turn][0][0]
  if(this.turn === 0) {
    this.scoresheet[this.turn].push(frameSum);}
  // else if(this.previousIsSpare()) {
  //   this.scoresheet[this.turn].push(frameSum);
  //   this.scoresheet[this.turn-1][1] = this.scoresheet[this.turn-1][1] + firstBowl;
  // }
  else if(this.turn >= 2 && this.previousTwoAreStrikes) {
    this.scoresheet[this.turn].push(frameSum);
    this.scoresheet[this.turn-1][1] = this.scoresheet[this.turn-1][1] + frameSum;
    this.scoresheet[this.turn-2][1] = this.scoresheet[this.turn-2][1] + frameSum;}
  else if(this.previousIsStrike()) {
    this.scoresheet[this.turn].push(frameSum);
    this.scoresheet[this.turn-1][1] = this.scoresheet[this.turn-1][1] + frameSum;
    } else {
      this.scoresheet[this.turn].push(frameSum);
  };
};

Game.prototype.nextTurn = function() {
  this.turn += 1;
};


// Game.prototype.currentPlayingFrame = function() {
//   this.frames[this.frames.length-1];
// };

// Game.prototype.currentTurn = function() {
//   return(this.frames[this.frames.length-1]);
// };
//
// Game.prototype.currentPlayingFrame = function() {
//   return(this.frames[this.frames.length-1][0]);
// };
//
// Game.prototype.currentActualFrame = function() {
//   return(this.frames[this.frames.length-1][0][0]);
// };
//
//
// Game.prototype.currentFirstBonus = function() {
//   return(this.frames[this.frames.length-1][1]);
// };
//
// Game.prototype.currentSecondBonus = function() {
//   return(this.frames[this.frames.length-1][2]);
// };



// Game.prototype.updateScore = function() {
//   for (var i = 0; i<this.frames.length; i++) {
//     this.score = this.score + (this.frames[i].currentFrame[0] + this.frames[i].currentFrame[1]);
//   };
// };
//
// Game.prototype._strike = function() {
//   if(this.frames[0].currentFrame[0] === 10){
//     return true;
//   } else {return false;}
// };
