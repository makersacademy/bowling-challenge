function Game() {
  this.frameCount = 0;
  this.totalGameScore = 0;
  this.previousFrameWasStrike = false
  this.previousFrameWasSpare= false
}

Game.prototype.score = function(num1, num2) {
  frame = new Frame;
  frame.firstRoll(num1);
  frame.secondRoll(num2);
  console.log(frame);
  this.totalGameScore = this.totalGameScore + frame.TotalScore;
  this.frameCount += 1;
  if (frame.strike === true ) {
    this._strike
  }
};

// Game.prototype._strike = function() {
//   this.previousFrameWasStrike = true
// };
