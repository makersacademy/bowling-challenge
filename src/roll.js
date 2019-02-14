function Roll() {}

Roll.prototype.enterRoll = function(score) {
  this.score = score;
  if (score === 10) {
    this.notes = "Strike";
  } else {
    if (score === 0) {
      this.notes = "Unlucky";
    }
  }
};

Roll.prototype.returnScore = function() {
  return this.score;
};
