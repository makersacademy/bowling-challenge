function ScoreCard() {
  this.defaultRollValue = 0
  this.rollOne = 0
  this.rollTwo = 0
  this.frameScore = []
}

ScoreCard.prototype.frameOne = function() {
   this.rollOne += 1
   this.frameScore.push(this.rollOne);
   this.rollTwo += 1
   this.frameScore.push(this.rollTwo);
  };
