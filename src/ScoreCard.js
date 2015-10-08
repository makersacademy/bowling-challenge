function ScoreCard() {
  this.pins = 10;
  this.currentFrame = 1;
}

ScoreCard.prototype.nextFrame = function() {
  this.currentFrame += 1;
};
