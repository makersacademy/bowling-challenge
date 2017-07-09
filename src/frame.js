function Frame() {
  this.MIN_SCORE = 0;
  this.MAX_SCORE = 10;
  this.firstRoll = null;
  this.secondRoll = null;
}

Frame.prototype.recordRoll = function (num) {
  if (num > this.MAX_SCORE) throw new Error('Cannot knock down more than 10 pins');
  if (this.firstRoll === null) {
      this.firstRoll = num;
  } else if (this.secondRoll === null) {
    this.secondRoll = num;
  }
};

Frame.prototype.getScore = function () {
  if (this.firstRoll + this.secondRoll > this.MAX_SCORE) {
    throw new Error('The sum cannot be bigger than 10')
  }
  return this.firstRoll + this.secondRoll;
};

Frame.prototype.isStrike = function () {
  return this.firstRoll === 10;
};

Frame.prototype.isSpare = function () {
  return this.firstRoll + this.secondRoll ===10;
};
