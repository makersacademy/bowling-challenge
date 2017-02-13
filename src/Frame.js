function Frame() {
  this.totPins = 10;
  this.rollsNum = 2;
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
  this.rollsNum -= 1;
  this.totPins -= number;
  this.score += number;
};

Frame.prototype.isStrike = function() {
  return this.totPins == 0;
};

Frame.prototype.isSpare = function() {
  return this.rollsNum == 0 && this.isStrike();
};

Frame.prototype.tenthFrame = function() {
  if (this.isSpare()){
    this.rollsNum += 1;
  }
  else if (this.isStrike()) {
    this.rollsNum += 1;
  }
};
