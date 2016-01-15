function Bonus(numberOfBowls) {
  this.numberOfBowls = numberOfBowls
  this.scoreCard = [];
}

Bonus.prototype.addPoints = function (numberOfPins) {
  if (this.scoreCard.length < this.numberOfBowls) {
    this.scoreCard.push(numberOfPins);
  }
};

Bonus.prototype.getTotal = function () {
  return this.scoreCard.reduce(function(a, b) { return a + b; }, 0);
};
