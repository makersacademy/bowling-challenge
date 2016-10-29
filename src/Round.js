function Round() {
  this.secondRoundPins = null;
  this.firstRoll = null;
  this.secondRoll = null;
  this.strike = false;
  this.spare = false;
  this.bowlNumber = 1;
}

var STARTING_PINS = 10;

Round.prototype.createFirstRoll = function () {
  roll = new Roll(STARTING_PINS);
  this.firstRoll = roll;
  this.bowlNumber += 1;

  if(roll.finishingPins === 0) {
    this.strike = true;
  }
};

Round.prototype.createSecondRoll = function () {
  if (this.strike) {
    throw "There should be no second roll if the first roll was a strike";
  }

  roll = new Roll(this.firstRoll.finishingPins);
  this.secondRoll = roll;
  this.bowlNumber += 1;

  if(roll.finishingPins === 0) {
    this.spare = true;
  }
};
