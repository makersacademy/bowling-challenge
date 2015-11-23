function Game() {
  this.bowls = [];
};

Game.prototype.bowl = function(pins) {
  this.bowls.push(pins);
};

Game.prototype.score = function() {
  var result = 0;
  var bowlNum = 0;
  var game = this;

  for(var frameNum = 0; frameNum < 10; frameNum++ ) {
    if (isStrike()) {
      result += calcStrike();
      bowlNum += 1
    } else if (isSpare()) {
      result += calcSpare();
      bowlNum += 2;
    } else {
      result += calcOpen();
      bowlNum += 2;
    }
  };
  return result;

  function isSpare() {
    return game.bowls[bowlNum] + game.bowls[bowlNum+1] === 10
  };

  function calcSpare() {
    return game.bowls[bowlNum] + game.bowls[bowlNum+1] + game.bowls[bowlNum+2];
  };

  function calcOpen() {
    return game.bowls[bowlNum] + game.bowls[bowlNum+1];
  };

  function isStrike() {
    return game.bowls[bowlNum] == 10;
  };

  function calcStrike() {
    return game.bowls[bowlNum] + game.bowls[bowlNum+1] + game.bowls[bowlNum+2];
  };
};