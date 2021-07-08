var BowlingGame = function(){
  this.frameRolls = [];
};

BowlingGame.prototype.roll = function (pins) {
  this.frameRolls.push(pins);
};

BowlingGame.prototype.score = function () {
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for(var frame = 0; frame < 10; frame++) {
    if (isStrike()) {
      result += strikeScore();
      rollIndex++
    } else if (isSpare()) {
      result += spareScore();
      rollIndex += 2
    } else {
      result += getScore();
      rollIndex += 2
    }
  }
  return result;

  function isSpare() {
    return (game.frameRolls[rollIndex] + game.frameRolls[rollIndex + 1] === 10);
  }

  function spareScore() {
    return game.frameRolls[rollIndex] + game.frameRolls[rollIndex +1] + game.frameRolls[rollIndex + 2];
  }

  function getScore() {
    return game.frameRolls[rollIndex] + game.frameRolls[rollIndex +1]
  }

  function isStrike() {
    return game.frameRolls[rollIndex] === 10;
  }

  function strikeScore() {
    return game.frameRolls[rollIndex] + game.frameRolls[rollIndex + 1] + game.frameRolls[rollIndex + 2];
  }

};
