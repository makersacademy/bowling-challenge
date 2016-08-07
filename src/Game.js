function Game() {
  this.rolls = [];
}

Game.prototype.throw = function(pins) {
  this.rolls.push(pins);
}

Game.prototype.score = function() {
  var game = this;

  var result = 0;
  var rollTally = 0;

  for (var frame = 0; frame < 10; frame++) {
    if (isStrike()) {
      result += getStrikeScore();
      rollTally += 1;
    } else if (isSpare()) {
      result += getSpareScore();
      rollTally += 2
    } else {
      result += getNormalScore();
      rollTally += 2;
    }
  }
  return result;

  function isSpare() {
    return (game.rolls[rollTally] + game.rolls[rollTally + 1] == 10);
  }

  function isStrike() {
    return (game.rolls[rollTally] == 10);
  }

  function getSpareScore() {
    return game.rolls[rollTally] + game.rolls[rollTally + 1] + game.rolls[rollTally + 2];
  }

  function getStrikeScore() {
    return game.rolls[rollTally] + game.rolls[rollTally + 1] + game.rolls[rollTally + 2];
  }

  function getNormalScore() {
    return game.rolls[rollTally] + game.rolls[rollTally + 1]
  }
}
