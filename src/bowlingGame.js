var BowlingGame = function() {
  this.gameScores = [];
  this.frameCounter = 0;
};

BowlingGame.prototype.scoreInput = function(pins) {
  this.scoreInput.push(pins);
};
