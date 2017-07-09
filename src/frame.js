function Frame() {
  this.firstRoll = 0;
  this.secondRoll = 0;
  this.spare = false;
  this.strike = false;
  this.rollsMade = 0;
}

Frame.prototype.roll = function(numberOfPins) {
  if (this.rollsMade === 0) {
    this.firstRoll += numberOfPins;
    this.checks();
  }
  else {
    this.secondRoll += numberOfPins;
    this.checks();
  }
}

Frame.prototype.spareOrStrike = function () {
  if (this.firstRoll === 10) {
    this.strike = true;
  } else if((this.firstRoll + this.secondRoll) === 10 ) {
    this.spare = true;
  }
}

Frame.prototype.rollNumber = function () {
  if (this.rollsMade < 2) {
    this.rollsMade += 1;
  } else {
    throw "Only two rolls allowed per frame";
  }
}

Frame.prototype.tooManyPins = function () {
  if ((this.firstRoll + this.secondRoll) > 10) {
    throw "Too many pins, please start a new frame"
  }
}

Frame.prototype.checks = function () {
  this.rollNumber();
  this.spareOrStrike();
  this.tooManyPins();
}
