var Game = function() {
  this.rolls = [];
  this.currentRoll = 0;
  // this.completedFrames = [];
};

Game.prototype.roll = function(pinsKnockedDown) {

  this.rolls[this.currentRoll] = pinsKnockedDown;
  this.currentRoll++;
};

Game.prototype.score = function() {
  var total = 0;
  var i = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (this.rolls[i] + this.rolls[i + 1] == 10) {
      total += 10 + this.rolls[i + 2];
      i += 2;
    }
    else {
    total += this.rolls[i] + this.rolls[i + 1];
    i += 2;
    }
  }
  return total;
};


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
