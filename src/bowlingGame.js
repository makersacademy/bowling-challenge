function bowlingGame() {
  this.scores = [];
}

bowlingGame.prototype.roll = function(pins) {
  this.scores.push(pins);
};

bowlingGame.prototype.score = function() {
  var result = 0;
  var scoreIndex = 0;
  var game = this;
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {

    if (isStrike()) {
      result += strikeScore();
      scoreIndex += 1;
    } else {
      result += standardScore();
      if (isSpare()) {
          result += spareScore();
      }
      scoreIndex += 2;
    }
  }
  return result;

  function isStrike() {
    return game.scores[scoreIndex] === 10;
  }

  function strikeScore() {
    return (game.scores[scoreIndex] + game.scores[scoreIndex + 1] + game.scores[scoreIndex + 2]);
  }

  function isSpare() {
    return (game.scores[scoreIndex] + game.scores[scoreIndex + 1] === 10);
  }

  function spareScore () {
    return game.scores[scoreIndex + 2];
  }

  function standardScore() {
    return (game.scores[scoreIndex] + game.scores[scoreIndex + 1]);
  }
};
