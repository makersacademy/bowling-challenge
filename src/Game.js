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
  if(this.scoresheet[this.turn-1][0] === [10,0]){
    return true
  } else {
    return false
  }
};

Game.prototype.previousTwoAreStrikes = function() {
  if(this.previousIsStrike && this.scoresheet[this.turn-2][0] === [10,0]){
    return true
  } else {
    return false
  }
};

Game.prototype.updateScore = function() {
  var frameSum = this.scoresheet[this.turn][0][0]+ this.scoresheet[this.turn][0][1];
  if(this.turn === 0) {
    this.scoresheet[this.turn].push(frameSum);}
  else if(this.turn >= 2 && this.previousTwoAreStrikes) {
    this.scoresheet[this.turn].push(frameSum);
    this.scoresheet[this.turn-1][1] = this.scoresheet[this.turn-1][1] + frameSum;
    this.scoresheet[this.turn-2][1] = this.scoresheet[this.turn-2][1] + frameSum;}
  else if(this.previousIsStrike) {
      this.scoresheet[this.turn].push(frameSum);
      this.scoresheet[this.turn-1][1] = this.scoresheet[this.turn-1][1] + frameSum;
    } else {
      this.scoresheet[this.turn].push(frameSum);
  };
};

// Game.prototype.updateScore = function(turnNumber) {
//     if(this.turn === 0){
//       var frameSum = this.viewFrame(turnNumber)[0] + this.viewFrame(turnNumber)[1];
//       console.log("lalala");
//       this.scoresheet[turnNumber-1].push(frameSum);}
//     else if(
//       this.scoresheet[turnNumber-2][0] === [10,0]) {
//       console.log("bluebirds")
//         var frameSum = this.viewFrame(turnNumber)[0] + this.viewFrame(turnNumber)[1];
//         this.scoresheet[turnNumber-1].push(frameSum);
//         this.scoresheet[turnNumber-2][1] = this.scoresheet[turnNumber-2][1] + sum;
//   } else {
//     this.scoresheet[turnNumber-1].push(frameSum);
//   };
// };
// Game.prototype.updateScore = function(previousFrame, frame) {
//   if(previousFrame === [10,0]) {
//     var sum = frame[0] + frame[1];
//     this.scoresheet[this.turn].push(sum);
//     this.scoresheet[this.turn - 1] = this.scoresheet[this.turn - 1] + sum;
//   } else {
//     var sum = frame[0] + frame[1];
//     this.scoresheet[this.turn].push(sum);
//   }
// };

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
