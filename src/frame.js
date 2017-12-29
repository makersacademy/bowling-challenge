function Frame(frameNumber) {
  this.frameNumber = frameNumber;
  this.score = []
};

Frame.prototype.bowl = function(firstBowl, secondBowl) {
  this.score = [firstBowl, secondBowl];
};

Frame.prototype.getScore = function() {
  return this.score;
}
