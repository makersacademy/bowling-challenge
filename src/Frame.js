function Frame() {
  this.totPins = 10;
  this.rolls = [];
  this.score = 0;
}


Frame.prototype.countPins = function(number) {
  if (number < 0 || number > this.totPins) {
    throw new Error("Please enter a number between 0 and " + this.totPins);
  }
  this.roll = new Roll(number);
  console.log(this.roll.score);
  this.rolls.push(this.roll);
  this.totPins -= number;
  this.score += number;
  console.log(this.score);
};

Frame.prototype.isStrike = function() {
  return this.totPins === 0;
};

Frame.prototype.isSpare = function() {
  return this.rolls.length == 2 && this.isStrike();
};
