var BowlingScorecard = function() {
  this.score = 0
  this.frame = 0
  this.framerolls = [[],[],[],[],[],[],[],[],[],[]]

};

BowlingScorecard.prototype.roll = function (numberOfPinsHit) {
  this.score += numberOfPinsHit
  if (this.framerolls[this.frame].length >= 2) {
    this.frame ++
  }
  this.framerolls[this.frame].push(numberOfPinsHit)
};
