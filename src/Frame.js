'use strict';

function Frame(number) {
  this.frameNumber = number
  this.frameScore = 0;
  this.DEFAULT_PIN_COUNT = 10;
  this.pinCount = this.DEFAULT_PIN_COUNT;
  this.bonusScore = 0;
  this.rolls = [];
};

Frame.prototype.getFrameScore = function() {
  return this.frameScore;
};

Frame.prototype.getRollCounter = function() {
  this.rollCounter = this.rolls.length;
  return this.rollCounter;
};

Frame.prototype.getPinCount = function() {
  return this.pinCount;
};

Frame.prototype.getBonusScore = function() {
  return this.bonusScore;
};

Frame.prototype.roll = function(numberOfPins) {
  this.rollScore = numberOfPins;
  this.pinCount -= numberOfPins;
  this.addRollScore();
  // if (game.spareBonus === true) {
  //   this.bonusScore = this.rollScore;
  // };
};

Frame.prototype.addRollScore = function() {
  this.rolls.push(this.rollScore);
  // if (this.isComplete() === true) {
  //   console.log("isComplete is true!");
  //   this.addFrameToGame(game);
  // };
  // if (game.spareBonus === true) {
  //   console.log("spareBonus is true");
  //
  // };
};

Frame.prototype.isStrike = function() {
  if ((this.getRollCounter() === 1) && (this.getPinCount() === 0)) {
    return true;
  };
};

Frame.prototype.isSpare = function() {
  if ((this.getRollCounter() === 2) && (this.getPinCount() === 0)) {
    return true;
  };
};

Frame.prototype.getFrameScore = function() {
  var total = this.rolls.reduce(add, 0);
    function add(a, b) {
      return a + b;
    };
  this.frameScore = total;
  return this.frameScore;
};

Frame.prototype.isComplete = function() {
  if (this.isStrike() === true || (this.getRollCounter() === 2)) {
    return true;
  };
};

Frame.prototype.addFrameToGame = function(game) {
  this.getFrameScore();
  game.addFrame(this);
};

Frame.prototype.addBonus = function() {
  this.bonusScore += this.rollScore;
};

Frame.prototype.addSpareBonusToGame = function(game) {
  this.getBonusScore();
  game.addSpareBonus(this);
};

// Frame.prototype.addStrikeBonus = function() {
//   this.bonusScore += this.rollScore;
// };
