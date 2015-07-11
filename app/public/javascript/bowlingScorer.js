var BowlingScorecard = function() {
  this.score = 0
  this.framerolls = [[],[],[],[],[],[],[],[],[],[]]
};

BowlingScorecard.prototype.roll = function (numberOfPinsHit) {
  this.score += numberOfPinsHit
  this.framerolls[0].push(numberOfPinsHit)
};
