function Frame() {
  this.firstBallScore = 0;
  this.secondBallScore = 0;
}

Frame.prototype.getFirstBallScore = function () {
  return this.firstBallScore
};

Frame.prototype.getSecondBallScore = function () {
  return this.secondBallScore
};
