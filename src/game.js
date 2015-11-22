function Game() {
  this.bowls = [];
};

Game.prototype.bowl = function(pins) {
  this.bowls.push(pins);
};

Game.prototype.score = function() {
  var result = 0;
  var bowlIndex = 0;
  var game = this;

  for(var frameIndex = 0; frameIndex < 10; frameIndex++ ) {
    if (isStrike()) {
      result += getStrikeScore();
      bowlIndex += 1
    } else if (isSpare()) {
      result += getSpareScore();
      bowlIndex += 2;
    } else {
      result += getNormalScore();
      bowlIndex += 2;
    }
  };
  return result;

  function isSpare() {
    return game.bowls[bowlIndex] + game.bowls[bowlIndex+1] === 10
  };

  function getSpareScore() {
    return game.bowls[bowlIndex] + game.bowls[bowlIndex+1] + game.bowls[bowlIndex+2];
  };

  function getNormalScore() {
    return game.bowls[bowlIndex] + game.bowls[bowlIndex+1];
  };

  function isStrike() {
    return game.bowls[bowlIndex] == 10;
  };

  function getStrikeScore() {
    return game.bowls[bowlIndex] + game.bowls[bowlIndex+1] + game.bowls[bowlIndex+2];
  };
};