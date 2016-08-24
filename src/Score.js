function Score() {

  this.total = 0;
  this.frameScores = [];

}

Score.prototype.getFrameScores = function(number) {
  return this.frameScores[number - 1];
}

Score.prototype.getFrameTotal = function(number) {
  var frameScore = this.getFrameScores(number);
  // returns just that hash
  return (frameScore.first + frameScore.second)
}

Score.prototype.getGameTotal = function() {
  return this.total
}
