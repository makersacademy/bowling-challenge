function Bonus(bonusType) {
  this.numberOfBowls = null;
  this.scores = [];
  this.score = null;
  this.isComplete = false;
  this.set(bonusType);
}

Bonus.prototype.addPoints = function (numberOfPins) {
  if (this.scores.length < this.numberOfBowls) {
    this.scores.push(numberOfPins);
    this._complete();
  }
};

Bonus.prototype.set = function (bonusType) {
  if(bonusType === "strike") {
    this.numberOfBowls = 2
  } else if (bonusType === "spare") {
    this.numberOfBowls = 1
  }
};

Bonus.prototype.getTotal = function () {
  this.score = this.scores.reduce(function(a, b) { return a + b; }, 0);
  return this.score;
};

Bonus.prototype._complete = function() {
  if (this.scores.length === this.numberOfBowls) {
    this.isComplete = true;
    this.getTotal();
  }
}
