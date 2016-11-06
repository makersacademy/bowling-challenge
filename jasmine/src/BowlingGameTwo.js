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
    if (isSpare()) {
      result += spareScore();
    } else {
      result += gameScore();
    }
    rollIndex += 2;
  }
  return result;

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
