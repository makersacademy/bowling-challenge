var Game = function() {

  this.rolls = [];

};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.score = function() {
  
  var total = 0;
  var i = 0;
  var game = this;

  for (f = 0; f < 10; f++) {
    if (Strike()) {
      bonusScore();
      i += 1;
    } else if (Spare()) {
      bonusScore();
      i += 2;
    } else {
      normalScore();
      i += 2;
    }
    
  }

  return total;

  function Strike() {
    return game.rolls[i] == 10;
  };

  function Spare() {
    return game.rolls[i] + game.rolls[i + 1] == 10;
  };

  function normalScore() {
    return total += game.rolls[i] += game.rolls[i + 1];
  };

  function bonusScore() {
    return total += game.rolls[i] += game.rolls[i + 1] + game.rolls[i + 2];
  };

};
