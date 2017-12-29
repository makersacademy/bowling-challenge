function Frame(frameNumber) {
  this.frameNumber = frameNumber;
  this.score = []
};

Frame.prototype.bowl = function(firstBowl, secondBowl) {
  this.score = [firstBowl, secondBowl];
};

Frame.prototype.isAStrike = function() {
  return this.score[0] === 10;
};

Frame.prototype.isASpare = function() {
  return this.score[0] + this.score[1] == 10;
};

Frame.prototype.isAGutterBall = function() {
  return this.score[0] == 0 && this.score[1] == 0;
};
