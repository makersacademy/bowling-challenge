function Frame() {
  this.totPins = 10;
  // this.maxRolls = 2;
  this.roll = new Roll();
}

// Frame.prototype.rollsCounter = function() {
//   this.maxRolls--
// };

Frame.prototype.countPins = function(number) {
  // this.rollsCounter();
  if (number < 0 || number > this.totPins) {
    throw new Error("Please enter a number between 0 and " + this.totPins);
  }
  this.roll.rollScore(number)
  console.log(number);
  this.totPins -= number;
  number;
};

Frame.prototype.isStrike = function() {
  this.totPins === 0;
};
