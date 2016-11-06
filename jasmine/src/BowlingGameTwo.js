var BowlingGameTwo = function() {
  this.rolls = [];
};

BowlingGameTwo.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

BowlingGameTwo.prototype.score = function() {
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for (var frameIndex=0; frameIndex<10; frameIndex++) {
    if (isStrike()) {
      result += strikeScore();
      rollIndex++;
    } else if (isSpare()) {
      result += spareScore();
      rollIndex += 2;
    } else {
      result += gameScore();
      rollIndex += 2;
    }
  }
  return result;

  function isStrike() {
    return game.rolls[rollIndex] == 10;
  }

  function strikeScore(){
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10
  }

  function spareScore(){
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function gameScore(){
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }

};
