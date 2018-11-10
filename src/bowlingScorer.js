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

BowlingScorer.prototype.returnBowlScore = function(score) {
  return score
};

BowlingScorer.prototype.isSpare = function(frame) {
  return(this.scoreChart[frame-1] === 10 && this.roll === 1)
};

BowlingScorer.prototype.isStrike = function(frame) {
  return(this.scoreChart[frame-1] === 10 && this.roll === 2)
};

BowlingScorer.prototype.bowl = function(score) {
  if(this.roll === 1) return this.firstBowl(score, this.frame)
  else return this.secondBowl(score, this.frame)
};

BowlingScorer.prototype.firstBowl = function(score, frame) {
  this.frameScore = [,]
  this.frameTotal = 0
  this.frameScore[0] = score
  this.scoreChart[frame-1] = score
  if(this.isSpare(frame-1)) this.scoreChart[frame-2] += score
  this.roll++
};

BowlingScorer.prototype.secondBowl = function(score, frame) {
  // if(this.isStrike(frame-1)) this.frame++
  this.frameScore[1] = score
  this.scoreChart[frame-1] += score
  this.totalScore += this.scoreChart[frame-1]
  this.frameTotal = this.frameScore[0] + this.frameScore[1]
  this.roll = 1
  this.frame++
};

BowlingScorer.prototype.updateScoreChart = function() {
  this.scoreChart[this.frame-1] = this.frameScore
};

BowlingScorer.prototype.isLastFrame = function() {
  return this.frame === 10
};
