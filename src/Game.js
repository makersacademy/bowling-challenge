var Game = function() {
  this.score = 0;
  this.rolls = [];
  this.currentRoll = 0;
  // this.completedFrames = [];
};

Game.prototype.roll = function(pinsKnockedDown) {
  this.score += pinsKnockedDown;
  this.rolls[this.currentRoll] = pinsKnockedDown;
};

Game.prototype.score = function() {
  for (i = 0; i < rolls.length; i++) {
    this.score += this.rolls[i];
  }
  return this.score;
}

// Game.prototype.newFrame = function(pinsKnockedDown) {
//   if (this.currentFrame.length == 0) {
//     this.currentFrame[0] = pinsKnockedDown;
//   }
//   else {
//     this.currentFrame[1] = pinsKnockedDown;
//     (this.completedFrames).push(this.currentFrame);
//     this.currentFrame = [];
//   };
// };
//
// Game.prototype.score = function() {
//   var total = 0;
//   for (var i = 0; i < this.completedFrames.length; i++) {
//     var frame = this.completedFrames[i];
//     for (var j = 0; j < frame.length; j++) {
//       total += frame[j];
//     }
//   }
//   return total;
// };
