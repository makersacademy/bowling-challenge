'use strict';

function Frame() {
  // this.frameScore = 0;
  this.DEFAULT_PIN_COUNT = 10;
  this.pinCount = this.DEFAULT_PIN_COUNT;
  this.bonusScore = 0;
  this.rolls = [];
  this.rollCount = 0
};

// Frame.prototype.getFrameScore = function() {
//   return this.frameScore;
// };

// Frame.prototype.getRollCounter = function() {
//   this.rollCounter = this.rolls.length;
//   return this.rollCounter;
// };

Frame.prototype.getRollCount = function() {
  return this.rollCount;
};

Frame.prototype.getPinCount = function() {
  return this.pinCount;
};

Frame.prototype.getBonusScore = function() {
  return this.bonusScore;
};

Frame.prototype.getRolls = function() {
  return this.rolls;
};

Frame.prototype.addRollScore = function() {
  this.rolls.push(this.rollScore);
};

Frame.prototype.isStrike = function() {
  if ((this.getRollCount() === 1) && (this.getPinCount() === 0)) {
    return true;
  } else {
    return false;
  };
};

Frame.prototype.isSpare = function() {
  if ((this.getRollCount() === 2) && (this.getPinCount() === 0)) {
    return true;
  } else {
    return false;
  };
};

// Frame.prototype.getFrameScore = function() {
//   var total = this.rolls.reduce(add, 0);
//     function add(a, b) {
//       return a + b;
//     };
//   this.frameScore = total;
//   return this.frameScore;
// };

Frame.prototype.isComplete = function() {
  if (this.isStrike() === true || (this.getRollCount() === 2)) {
    return true;
  } else {
    return false;
  };
};

Frame.prototype.reset = function() {
  this.rolls = [];
  this.rollCount = 0;
  this.pinCount = this.DEFAULT_PIN_COUNT;
};

Frame.prototype.addFrameToGame = function(game) {
  //this.getFrameScore();
  game.addFrame(this);
};

Frame.prototype.addBonus = function() {
  this.bonusScore += this.rollScore;
};

Frame.prototype.addBonusToGame = function(game) {
  this.getBonusScore();
  game.addBonusPrevious(this);
  this.bonusScore = 0
};

Frame.prototype.roll = function(numberOfPins) {
  if (this.isComplete === true) {
    throw new Error("This frame is finished");
  };
  if (numberOfPins > this.getPinCount()) {
    throw new Error("Cannot bowl more than number of pins left standing");
  };

  this.rollCount += 1;
  this.pinCount -= numberOfPins;

  if (this.isStrike() === true) {
    this.rollScore = 10;
    this.addRollScore();
    this.rollScore = "X";
    } else {
    if (this.isSpare() === true) {
      this.rollScore = "/";
      } else {
      this.rollScore = numberOfPins;
    };
  };
  this.addRollScore();
  this.ifComplete();
};

Frame.prototype.ifComplete = function() {
  if (this.isComplete() === true) {
    // console.log("is Complete");
    this.addFrameToGame(game);
    this.reset();
  };
};
