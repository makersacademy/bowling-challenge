function Game() {
  this.executedBowl = 0;
  this.successfullBowls = [];
}

Game.prototype.bowl = function (pinsDown) {
  this.successfullBowls.push(pinsDown);
};

Game.prototype.calculateScore = function () {
  var totalBowls = this.successfullBowls;
  var attempt = this.executedBowl;
  var score = 0;

  for (var frame = 0; frame < 10; frame++) {
    // calculate score for a spare
    if ((totalBowls[attempt] + totalBowls[attempt + 1]) === 10) {
      score = score + totalBowls[attempt] + totalBowls[attempt + 1] + totalBowls[attempt + 2];
    }
    // calculate score for a 'one pin at a time'
    else {
      score += totalBowls[attempt] + totalBowls[attempt + 1];
    }
    attempt += 2;
  }
  return score;
};
