function Scoresheet() {

  this.rollArray = [];
  this.scoreArray = [];
  this.rollCounter = 0;
  this.frameCounter = 1;
  this.scoreAfterFrame = 0;
}


Scoresheet.prototype.pinsDropped = function (numberOfPins) {

  this.rollCounter += 1;
  this.rollArray.push(numberOfPins);
  this.scoreArray[this.rollCounter - 1] = numberOfPins;
  this.scoreCalculated(numberOfPins);
};

Scoresheet.prototype.scoreCalculated = function (numberOfPins) {
  this.scoreAfterFrame += numberOfPins;
};


Scoresheet.prototype.isStrike = function () {
  if (this.rollCounter === 1 && this.rollArray[0] === 10) {
    this.scoreArray.push([10,'X']);
    this.rollArray = [];
    this.rollCounter = 0;
    return true;
  }
  return false;
};


Scoresheet.prototype.isSpare = function () {
  if (this.rollCounter === 2 && (this.rollArray[0] + this.rollArray[1]) === 10) {
    this.scoreArray.push([this.rollArray[0],'/']);
    this.rollArray = [];
    this.rollCounter = 0;
    return true;
  }
  return false;
};



// Scoresheet.prototype.farme = function (roll1, roll2) {
//
// };
