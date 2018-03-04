function Frame(frameNum) {
  // Maybe this should be in Game...
  // Need 0 somewhere in the rolls to show in the view...
  this.pins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  this.rollCounter = 0;
  this.rolls = [];

  this.strike = false;
  this.spare = false;

  this.currentScore = 0;
  this.frameNum = frameNum;
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

  if (this.strike === false && this.spare === false && this.frameNum === 10 && newCounter === 3) {
    throw new Error('The game is over!');
  } else if ((this.strike || this.spare) === true && this.frameNum === 10 && newCounter === 4) {
    throw new Error('The game is over!');
  } else if (this.strike === true && this.frameNum === undefined) {
    throw new Error('You scored a strike. Start next frame!');
  } else if (newCounter >= 3 && this.frameNum === undefined) {
    throw new Error('You cannot roll again. Start next frame!');
  }

  this.rollCounter += 1;
};

Frame.prototype.isStrike = function isStrike(pinsKnocked) {
  if (pinsKnocked === 10 && this.rollCounter === 1 && this.frameNum === undefined) {
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
