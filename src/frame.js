function Frame() {
}

Frame.prototype.setFirstRollValue = function(numberOfPins) {
  this.firstRollValue = numberOfPins;
  if (this.firstRollValue === 10) {
    this.secondRollValue = 0;
    this.isStrike = true;
  }
};

Frame.prototype.setSecondRollValue = function(numberOfPins) {
  this.secondRollValue = numberOfPins;
  if ((this.firstRollValue + this.secondRollValue) === 10) {
    this.isSpare = true;
  } else {
    this.score = this.firstRollValue + this.secondRollValue;
  }
};

Frame.prototype.setScore = function(value) {
  this.score = value;
};
