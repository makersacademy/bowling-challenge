function Frame() {
  this.totPins = 10;
  this.maxRolls = 2;
  // this._newRoll();
}

Frame.prototype.rollsCounter = function(number) {
  if(this.maxRolls-- > 0) {
    this.countPins(number);
  }
  else {
    return new Frame();
  }
};

Frame.prototype.countPins = function(number) {
  if (number < 0 || number > this.totPins) {
    throw new Error("Please enter a number between 0 and " + this.totPins);
  }
  console.log(number);
  this.totPins -= number;
  number;
};
