function Frame(currentPosition) {
  this.pinCount = 10;
  this.totalOfRolls = 0;
  this.currentPosition = currentPosition;
  this.rollTally = [];
}

Frame.prototype.removePins = function(numberOfPins) {
  if (this.pinCount <= 0) {
    throw new Error('All the pins are down!');
  }

  if (this.totalOfRolls === 2) {
    throw new Error('Not allowed to throw again!');
  }

  this.pinCount -= numberOfPins;
  this.rollTally.push(numberOfPins);
  this.totalOfRolls++;
};

Frame.prototype.isStrike = function() {
  return this.totalOfRolls === 1 && this.score() === 10;
};

Frame.prototype.score = function() {
  return 10 - this.pinCount;
};

// firstRoll function
// secondRoll or totalRolls function
// spare function
// get each roll score, to work out the bonus points

  // Frame.prototype.bonusPoints = function() {
  //   if (this.isSpare()) {
  //     return {currentPosition + 1]}
  //   };
  // }
