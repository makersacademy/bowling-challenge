// 'use strict';
// 'use strict' is unnecessary inside of modules
// But needed for jQuery I believe...

function Frame() {
  // Maybe this should be in Game...
  this.pins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this.rollCounter = 0;
  this.rolls = [];
  this.strike = false;

  // Not sure if currentScore is part of Frame's responsibility...
  this.currentScore = 0;
  this.spare = false;
}

Frame.prototype.roll = function roll(pinsKnocked) {
  this.isRollLegit();
  this.isStrike(pinsKnocked);

  if (this.strike !== true) {
    this.rolls.push({ roll: parseInt(`${pinsKnocked}`, 10) });
    this.calculateScore(pinsKnocked);
    this.isSpare();
  }

  return pinsKnocked;
};

// PRIVATE METHODS

Frame.prototype.isRollLegit = function isRollLegit() {
  const newCounter = this.rollCounter + 1;

  if (this.strike === true) {
    throw new Error('You scored a strike. Start next frame!');
  } else if (newCounter >= 3) {
    throw new Error('You cannot roll again. Start next frame!');
  }

  this.rollCounter += 1;
};

Frame.prototype.isStrike = function isStrike(pinsKnocked) {
  if (pinsKnocked === 10) {
    this.strike = true;
    this.calculateScore(pinsKnocked);
    this.rolls.push({ roll: parseInt(`${pinsKnocked}`, 10) });
  }
};

Frame.prototype.calculateScore = function calculateScore(pinsKnocked) {
  this.currentScore += pinsKnocked;
};

Frame.prototype.isSpare = function isSpare() {
  if (this.currentScore === 10) {
    this.spare = true;
  }
};
