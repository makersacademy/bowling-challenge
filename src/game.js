function Game() {
  this.bowlings = [];
}

Game.prototype.bowl = function (pinsHit) {
  this.bowlings.push(pinsHit);
};

Game.prototype.calculateScore = function () {
  var totalBowlings = this.bowlings;
  var total = 0;
  for (var i = 0; i < totalBowlings.length; i++) {
    total += totalBowlings[i];
  }
  return total;
};
