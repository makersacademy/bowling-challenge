function Frame() {
  this.bonus = 0;
  this.points = 0;
}

Frame.prototype.setFirstRollValue = function(numberOfPins) {
  this.firstRollValue = numberOfPins;
  this.points += numberOfPins;
  if (this.firstRollValue === 10) {
    this.setStrike();
  }
};

Frame.prototype.setSecondRollValue = function(numberOfPins) {
  this.secondRollValue = numberOfPins;
  this.points += numberOfPins;
  if ((this.firstRollValue + this.secondRollValue) === 10) {
    this.setSpare();
  } else {
    this.calculateFrameScore();
  }
};

Frame.prototype.setScore = function(numberOfPins) {
  this.score = numberOfPins;
};

Frame.prototype.setStrike = function() {
  this.secondRollValue = 0;
  this.isStrike = true;
}

Frame.prototype.setSpare = function() {
  this.isSpare = true;
}

Frame.prototype.addBonus = function(numberOfPins) {
  this.bonus += numberOfPins;
  this.score += this.bonus;
}

Frame.prototype.calculateFrameScore = function() {
  this.score = this.points + this.bonus;
}
