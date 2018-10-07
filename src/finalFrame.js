function FinalFrame() {
  this.rolls = [];
  this.strikes = [false, false];
  this.spare = false;
  this.remaining = 10;
}

FinalFrame.prototype.roll = function roll(score) {
  if (this.over === true) {
    throw new Error('The frame is already over.');
  } else if (score > 10) {
    throw new Error('The score on one roll cannot be over 10.');
  } else if (score > this.remaining) {
    throw new Error('You cannot knock down more pins than there are standing.');
  }
  this.scoreRoll(score);
};

FinalFrame.prototype.scoreRoll = function scoreRoll(score) {
  this.rolls.push(score);
  if (this.rolls.length === 3) {
    this.over = true;
  } else if (this.rolls.length === 2) {
    this.secondRoll();
  } else if (this.rolls.length === 1) {
    this.firstRoll();
  }
};

FinalFrame.prototype.firstRoll = function firstRoll() {
  if (this.rolls[0] === 10) {
    this.strikes[0] = true;
  } else {
    this.remaining -= this.rolls[0]
  }
};

FinalFrame.prototype.secondRoll = function secondRoll() {
  if (this.rolls[1] === 10) {
    this.strikes[1] = true;
  } else if (this.rolls[0] + this.rolls[1] < 10) {
    this.over = true;
  } else if (this.rolls[0] + this.rolls[1] === 10) {
    this.spare = true;
    this.remaining = 10;
  } else {
    this.remaining -= this.rolls[1]
  }
};

FinalFrame.prototype.calculateScore = function calculateScore() {
  if (this.strikes[0] === true) {
    if (this.strikes[1] === true) {
      return 20 + (this.rolls[2] || 0);
    } else {
      return 10 + (this.rolls[1] || 0) + (this.rolls[2] || 0);
    }
  } else if (this.spare == true) {
      return 10 + (this.rolls[2] || 0);
  } else {
    return (this.rolls[0] || 0) + (this.rolls[1] || 0);
  }
};

// Export node module.
if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = FinalFrame;
}
