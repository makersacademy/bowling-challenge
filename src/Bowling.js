var Bowling = function () {
  this.rolls = [];
}

  Bowling.prototype.roll = function(pins) {
    this.rolls.push(pins);
  };

  Bowling.prototype.score = function() {
    var result = 0;
    var rollIndex = 0;
    var game = this;

    for (var frameIndex = 0; frameIndex < 10;  frameIndex++) {
      if(isStrike()) {
        result += getStrikeScore();
        rollIndex++;
      } else if(isSpare()) {
        result += getSpareScore();
        rollIndex += 2;
      } else {
        result += getRegularScore();
        rollIndex += 2;
      }
    }
    return result;

    function isStrike () {
      return game.rolls[rollIndex] == 10;
    }

    function isSpare () {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
    }

    function getStrikeScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    }

    function getSpareScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    }

    function getRegularScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
    }
  };
