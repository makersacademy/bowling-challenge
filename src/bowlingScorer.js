var BowlingScorer = function() {
  this.totalScore = 0
  this.frameScore = [,]
  this.frameTotal = 0
  this.frame = 1
  this.roll = 1
  this.scoreChart = [ , , , , , , , , , ]
};

BowlingScorer.prototype.returnScore = function() {
  return this.totalScore
};

BowlingScorer.prototype.returnFrame = function() {
  return this.frame
};

BowlingScorer.prototype.returnFrameScore = function(frame) {
  return this.scoreChart[frame-1]
};

BowlingScorer.prototype.isSpare = function(frame) {
  return(this.scoreChart[frame-1] === 10 && this.roll === 1)
};

BowlingScorer.prototype.isStrike = function(frame) {
  return(this.scoreChart[frame-1] === 10 && this.roll === 2)
};

BowlingScorer.prototype.bowl = function(score) {
  if(this.roll === 1) return this.firstBowl(score, this.frame) // performs .firstBowl function if first roll
  else return this.secondBowl(score, this.frame) // performs .secondBowl function if second roll
};

BowlingScorer.prototype.firstBowl = function(score, frame) {
  this.frameScore = [,] // resets frame, after pushing to chart
  this.frameTotal = 0 // resets frame total, after pushing to chart
  this.frameScore[0] = score // puts score of firstBowl into index 0 of frameScore array
  this.scoreChart[frame-1] = score // puts score of firstBowl into 0th index of scoreChart array
  this.roll++ // moves to second roll of the frame
  // if(this.isStrike()) this.frame++;
};

BowlingScorer.prototype.secondBowl = function(score, frame) {
  this.frameScore[1] = score // puts score of secondBowl into index 1 of frameScore array
  this.scoreChart[frame-1] += score // adds score to the score already placed in 0th index of scoreChart
  this.totalScore += this.scoreChart[frame-1] // adds total of both bowls to totalScore
  this.frameTotal = this.frameScore[0] + this.frameScore[1] // assigns total of both bowls to frameTotal
  this.roll = 1 // reassigns roll to value 1
  this.frame++ // moves to next frame
};

BowlingScorer.prototype.updateScoreChart = function() {
  this.scoreChart[this.frame-1] = this.frameScore
};

BowlingScorer.prototype.isLastFrame = function() {
  return this.frame === 10
};
