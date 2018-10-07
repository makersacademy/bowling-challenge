function Frame() {
  this.rolls = [];
  this.spare = false;
  this.strike = false;
}

Frame.prototype.roll = function roll(score) {
  if (this.over === true) {
    throw new Error('The frame is already over.');
  } else if (score > 10) {
    throw new Error('The score on one roll cannot be over 10.');
  } else if (this.rolls.length === 1 && this.rolls[0] + score > 10) {
    throw new Error('The overall pins knocked down cannot be over 10');
  }
  this.scoreRoll(score);
};

Frame.prototype.scoreRoll = function scoreRoll(score) {
  this.rolls.push(score);
  if (this.rolls.length === 2) {
    this.frameOver();
  } else if (this.rolls[0] === 10) {
    this.scoreStrike();
  }
};

Frame.prototype.frameOver = function frameOver() {
  this.over = true;
  if (this.rolls.length === 2 && this.rolls[0] + this.rolls[1] === 10) {
    this.spare = true;
  }
};

Frame.prototype.scoreStrike = function scoreStrike() {
  this.over = true;
  this.strike = true;
};

// Export node module.
if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = Frame;
}
