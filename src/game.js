function Game() {
  this.executedBowl = 0;
  this.successfullBowls = [];
}

Game.prototype.bowl = function (pinsHit) {
  this.successfullBowls.push(pinsHit);
  //this.executedBowls++;
};

Game.prototype.calculateScore = function () {
  var totalBowlings = this.successfullBowls;
  var attempt = this.executedBowl;
  var score = 0;

  for (var frame = 0; frame < 10; frame++) {
    // if (totalBowlings[attempt] + totalBowlings[attempt + 1]) === 10 {
    //   score = score + totalBowlings[attempt] + totalBowlings[attempt + 1] + totalBowlings[attempt + 2];
    //   attempt += 2;
    // }
    // else {
      score = score + totalBowlings[attempt] + totalBowlings[attempt + 1]
      attempt += 2;
    // }
  }
  return score;
};
