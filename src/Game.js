var Game = function() {
  this.frameScores = [];
  this.currentRoll = 0;
  this.totalScore = 0;
}

Game.prototype.roll = function(pins) {
  this.frameScores[this.currentRoll++] = pins;
};

Game.prototype.totalScore = function() {
  this.frameScores.reduce(function(sum, el) {
    return sum + el
  }, 0)
};
