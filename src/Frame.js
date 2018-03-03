function Frame() {
  // Maybe this should be in Game...
  // Need 0 somewhere in the rolls to show in the view...
  this.pins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this.rollCounter = 0;
  this.rolls = [];
  this.strike = false;

  // Not sure if currentScore is part of Frame's responsibility...
  this.currentScore = 0;
  this.spare = false;
}

Frame.prototype.roll = function roll(pinsKnocked, lastFrame) {
  this.isRollLegit(lastFrame);
  this.isStrike(pinsKnocked, lastFrame);

  if (this.strike !== true || lastFrame === true) {
    this.rolls.push({ roll: parseInt(`${pinsKnocked}`, 10) });
    this.calculateScore(pinsKnocked);
    this.isSpare();
  }

  return pinsKnocked;
};

// PRIVATE METHODS

Frame.prototype.isRollLegit = function isRollLegit(lastFrame) {
  const newCounter = this.rollCounter + 1;

  if (this.strike === false && this.spare === false && lastFrame === true && newCounter === 3) {
    throw new Error("You can't roll an additional ball. Click on 'Final Score' to see your points!");
  } else if ((this.strike || this.spare) === true && lastFrame === true && newCounter === 4) {
    throw new Error("You can't roll an additional ball. Click on 'Final Score' to see your points!");
  } else if (this.strike === true && lastFrame === undefined) {
    throw new Error('You scored a strike. Start next frame!');
  } else if (newCounter >= 3 && lastFrame === undefined) {
    throw new Error('You cannot roll again. Start next frame!');
  }

  this.rollCounter += 1;
};

Frame.prototype.isStrike = function isStrike(pinsKnocked, lastFrame) {
  if (pinsKnocked === 10 && this.rollCounter === 1 && lastFrame === undefined) {
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
