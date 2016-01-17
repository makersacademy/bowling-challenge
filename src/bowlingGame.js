var BowlingGame = function() {
  this.gameScores = [];
  this.frameCounter = 0;
};

BowlingGame.prototype.scoreInput = function(pins) {
  this.gameScores.push(pins);
};

BowlingGame.prototype.score = function() {
  var result = 0;
  for( var i = 0; i < 20; i++) {
    result += this.gameScores[i];
  }
  return result
}
