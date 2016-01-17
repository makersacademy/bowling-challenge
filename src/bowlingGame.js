var BowlingGame = function() {
  this.gameScores = [];
};

BowlingGame.prototype.scoreInput = function(pins) {
  this.gameScores.push(pins);
};

BowlingGame.prototype.score = function() {
  var result = 0;
  var frameIndex = 0;
  var self = this;

  function _frameScore() {
    return self.gameScores[frameIndex] + self.gameScores[frameIndex + 1];
  }

  function _isSpare() {
    return self.gameScores[frameIndex] + self.gameScores[frameIndex + 1] === 10;
  }

  function _spareBonus() {
    return self.gameScores[frameIndex + 2];
  }

  function _isStrike() {
    return self.gameScores[frameIndex] === 10;
  }

  function _strikeBonus() {
    return self.gameScores[frameIndex + 1] + self.gameScores[frameIndex + 2];
  }

  for( var i = 0; i < 10; i++) {
    if (_isStrike()) {
      result += 10 + _strikeBonus();
      frameIndex ++;
    } else if (_isSpare()) {
      result += _frameScore() + _spareBonus();
      frameIndex += 2;
    } else {
      result += _frameScore();
      frameIndex += 2;
    }
  }
  return result
}
