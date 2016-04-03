function Game() {
  this.rolls = [];
}

Game.prototype.throw = function(pins) {
  if (pins === 10) {
    this.rolls.push(pins);
    this.rolls.push(0);
  } else {
    this.rolls.push(pins);
  };
}

Game.prototype.score = function() {
  var game = this;

  var result = 0;
  var rollTally = 0;

  for (var frame = 0; frame < 10; frame++) {
    if (isStrike()) {
      result += getStrikeScore();
    } else if (isSpare()) {
      result += getSpareScore();
    } else {
      result += getNormalScore();
    }
    rollTally += 2;
  }
  return result;

  function isSpare() {
    return game.rolls[rollTally] + game.rolls[rollTally + 1] == 10
  }

  function isStrike() {
    return (game.rolls[rollTally] == 10) && (game.rolls[rollTally + 1] == 0)
  }

  function getSpareScore() {
    return game.rolls[rollTally] + game.rolls[rollTally + 1] + game.rolls[rollTally + 2];
  }

  function getStrikeScore() {
    return game.rolls[rollTally] + game.rolls[rollTally + 1] + game.rolls[rollTally + 2] + game.rolls[rollTally + 3];
  }

  function getNormalScore() {
    return game.rolls[rollTally] + game.rolls[rollTally + 1]
  }
}
