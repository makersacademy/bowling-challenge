function Frame() {
  this.totPins = 10;
  this.rolls = [];
}


Frame.prototype.countPins = function(number) {
  if (number < 0 || number > this.totPins) {
    throw new Error("Please enter a number between 0 and " + this.totPins);
  }
  this.roll = new Roll(number);
  console.log(number);
  this.rolls.push(this.roll);
  this.totPins -= number;
};

Frame.prototype.isStrike = function() {
  return this.totPins === 0;
};
