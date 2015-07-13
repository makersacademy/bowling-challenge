var BowlingScorecard = function() {
  this.score = 0
  this.frame = 0
  this.framerolls = [[],[],[],[],[],[],[],[],[],[]]
  this.framescore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

};

var strikeBonus

BowlingScorecard.prototype.roll = function(numberOfPinsHit) {
  if ( numberOfPinsHit > 10 ) {
     throw new Error("Illegal throw!")
  }

  this.score += numberOfPinsHit

  this.framescore[this.frame] += numberOfPinsHit

if (this.frame > 0 && this.framerolls[(this.frame - 1)][0] == 10) {
  this.addBonus(numberOfPinsHit)
}


  this.framerolls[this.frame].push(numberOfPinsHit)

  if (numberOfPinsHit == 10 && this.framerolls[this.frame].length < 2) {
    this.framerolls[this.frame].push(0)
  }

  if (this.framerolls[this.frame].length >= 2) {
    this.frame ++
  }
};

BowlingScorecard.prototype.addBonus = function (numberOfPinsHit) {
    this.framescore[(this.frame - 1)] += numberOfPinsHit
    this.score += numberOfPinsHit
};
