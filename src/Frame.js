function Frame() {
  this.pinCount = 10;
  this.score = 0;
  this.totalOfRolls = [];
}

Frame.prototype.removePins = function(numberOfPins) {
  if (this.pinCount <= 0) {
    throw new Error('All the pins are down!');
  }

  if (this.totalOfRolls.length == 2) {
    throw new Error('Not allowed to throw again!');
  }

  this.pinCount -= numberOfPins;
  this.score += numberOfPins;
  this.totalOfRolls.push(numberOfPins);
};
