var Game = function() {
    this.rolls = [];
};

Game.prototype.roll = function(pins) {
    this.rolls.push(pins);
};

Game.prototype.score = function() {
    var result = 0;
    var rollIndex = 0;
    var game = this;

    for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
      if(strike()) {
        result += strikeScore();
        rollIndex ++;
      } else if(spare()) {
          result += spareScore();
          rollIndex += 2;
      } else {
          result += normalScore();
          rollIndex += 2;
      }
    };

  return result;

    function strike() {
        return game.rolls[rollIndex] == 10;
    }

    function normalScore() {
        return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
    };

    function spare() {
        return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
    };

    function spareScore() {
        return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    };

    function strikeScore() {
        return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    };

};