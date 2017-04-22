// The game class has frames and keeps score

'use strict';

function Game() {
  // this.frames = []
  this.turn = 0
  this.scoresheet = [[]]
}

Game.prototype.viewScoresheet = function() {
  return this.scoresheet;
};

Game.prototype.addFrames = function(frame) {
  this.scoresheet[this.turn].push(frame);
};

Game.prototype.updateScore = function(frame) {
  var sum = frame[0] + frame[1];
  this.scoresheet[this.turn].push(sum);
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
