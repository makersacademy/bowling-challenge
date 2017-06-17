'use strict';

var Game;

Game = function() {
  this.stored_pins = [];
};

Game.prototype.rolls = function(pins) {
  if (this.stored_pins.length == 21) {
    this.endGameMessage();
    return;
  }
  if (pins == 10) {
    this.strikeMessage();
    return this.stored_pins.push(pins, 0);
  } else {
    return this.stored_pins.push(pins);
  }
};

Game.prototype.score = function() {
  return this.normalScore();
};

Game.prototype.normalScore = function() {
  var pins = this.stored_pins;
  var score = 0;

  for(var index = 0; index < pins.length; index+=1) {
    score +=pins[index];
  }
  return score;
};

Game.prototype.strikeBonus = function(pins) {
  return pins[0] + pins[1];
};


Game.prototype.isStrike = function(pin) {
  return pin === 10;
};

// TODO add in a display object for console log messages
Game.prototype.strikeMessage = function() {
  return "Congratulations you got a strike! Move on to the next frame";
};

Game.prototype.endGameMessage = function() {
  return "Congratulations you have finished the game!";
};
