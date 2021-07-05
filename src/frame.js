function Frame() {
  this.scores = [];

  Frame.prototype.roll = function(score) {
    if (this.isInvalidRoll(score)) {
      throw new Error('Invalid roll');
    }
    this.scores.push(score);
  }

  Frame.prototype.isInvalidRoll = function(score) {
    if (
      this.isFirstRoll() && score > 10 ||
      this.isSecondRoll() && score + this.scores[0] > 10)
    { return true; }
  }

  Frame.prototype.isFirstRoll = function() {
    return this.scores.length === 0;
  }

  Frame.prototype.isSecondRoll = function() {
    return !(this.isFirstRoll());
  }
}
