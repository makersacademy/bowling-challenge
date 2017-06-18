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
  if (pins === 10) {
    this.strikeMessage();
  }
    return this.stored_pins.push(pins);
};

Game.prototype.totalScore = function() {
   var normal = this.normalScore();
  var strike = this.strikeBonus();
  var bonus = this.spareBonus();
  var tenth = this.tenthFrameBonus();
  return normal + strike + bonus + tenth;
};

Game.prototype.normalScore = function() {
  var pins = this.stored_pins;
  var score = 0;

  for(var index = 0; index < pins.length; index+=1) {
    score +=pins[index];
  }
  return score;
};

Game.prototype.strikeBonus = function() {
  var pins = this.stored_pins;
  var bonus = 0;

  for(var index = 0; index < pins.length; index+=1) {
    if(pins[index] === 10) {
      bonus += (pins[index + 1] + pins[index + 2]);
    }
  }
  return bonus;
};

Game.prototype.spareBonus = function() {
  var pins = this.stored_pins;
  var bonus = 0;

  for(var index = 0; index < pins.length; index+=2) {
    if(pins[index] + pins[index + 1] == 10) {
      bonus += pins[index + 2];
    }
  }
  return bonus;
};

Game.prototype.tenthFrameBonus = function() {
  var pins = this.stored_pins;
  var bonus = 0;
  var finalFrame = pins.slice(pins.length - 3,pins.length);

  for(var index = 0; index <finalFrame.length; index+=2) {
    if(finalFrame[index] === 10 && finalFrame[index + 1] === 10 && finalFrame[index +2] === 10) {
      bonus += (finalFrame[index + 1] + finalFrame[index + 2]);
    } else if(finalFrame[index] + finalFrame[index + 1] === 10) {
      bonus += (finalFrame[index + 2]);
    }
  }
  return bonus;
};

// TODO add in a display object for console log messages
Game.prototype.strikeMessage = function() {
  return "Congratulations you got a strike! Move on to the next frame";
};

Game.prototype.endGameMessage = function() {
  return "Congratulations you have finished the game!";
};
