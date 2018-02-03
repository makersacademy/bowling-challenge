function Scoresheet() {

  this.rollArray = [];
  this.scoreArray = [];
  this.rollCounter = 0;
  this.frameCounter = 1;
  this.scoreAfterRolls = 0;
}


Scoresheet.prototype.pinsDropped = function (numberOfPins) {

  this.rollCounter += 1;

  this.scoreArray[this.rollCounter - 1] = numberOfPins;
  this.scoreCalculated(numberOfPins);
};

Scoresheet.prototype.scoreCalculated = function (numberOfPins) {
  this.scoreAfterRolls += numberOfPins;
  //this.scoreArray[this.rollCounter - 1];
};


Scoresheet.prototype.isStrike = function () {
  if (this.rollCounter % 2 != 0 && this.scoreArray[this.rollCounter-1] === 10) {
    return true;
  }
};


Scoresheet.prototype.isSpare = function () {
  if (this.rollCounter % 2 === 0 && this.scoreAfterRolls === 10) {
    this.scoreAfterRolls = 0;
    return true;
  }
};
