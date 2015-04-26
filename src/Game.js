var Game = function() {

  this.rolls = [];
  this.firstRoll = true;
  this.firstRollScore = 0;

};

Game.prototype.roll = function(pins) {
  var game = this;
  pinsError();
  this.rolls.push(pins);
  rollOrder();

  function rollOrder() {
    if (game.firstRoll == true && pins < 10) {
      game.firstRoll = false;
      game.firstRollScore = pins;
    } else {
      game.firstRoll = true;
      game.firstRollScore = 0;
    }    
  };

  function pinsError() {
    var a = "Max second roll score is between 0 and "
    var b = (10 - game.firstRollScore).toString();
    if (pins < 0) {
      throw new Error("Min roll score is 0")
    } else if (game.firstRoll == true && pins > 10) {
      throw new Error("Max first roll score is 10")
    } else if (game.firstRoll == false && pins > (10 - game.firstRollScore)) {
      throw new Error(a += b)
    }

  };

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
