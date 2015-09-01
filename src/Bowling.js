var BowlingScore = function(){
  this.score = 0;
  this.currentFrame = [];
  this.framePinCount = 10;
  this.bowlingFrames = [];
  this.currentBall = 1;
  this.strikes = [];
  this.spares = [];
};

BowlingScore.prototype.recordRoll = function(pinsHit) {
  this.checkValidRoll(pinsHit);
  this.processRoll(pinsHit);
  this.currentBall++;
  this.ifFinalScoreProcess();
};

BowlingScore.prototype.processFinalScore = function() {
  if (this.spares[0] === 9) {
    this.score += (this.bowlingFrames[9][0] + this.currentFrame[0] + this.bowlingFrames[9][1]);
  };
};

BowlingScore.prototype.ifFinalScoreProcess = function() {
  if (this.bowlingFrames.length === 10 && this.currentBall === 2) {
    this.processFinalScore()
  };
};

BowlingScore.prototype.processRoll = function(pinsHit) {
  this.framePinCount = this.framePinCount - pinsHit;
  this.currentFrame.push(pinsHit);
  if (this.currentBall === 2 || pinsHit === 10) {
    this.bowlingFrames.push(this.currentFrame);
    this.resetFrame();
    this.calculateScore();
  };
  this.calculateBonusScore();
};


BowlingScore.prototype.resetFrame = function() {
  this.currentFrame = [];
  this.currentBall = 0;
  this.framePinCount = 10;
};


BowlingScore.prototype.isLastFrame = function() {
  return this.bowlingFrames.length === 9;
};

BowlingScore.prototype.checkValidRoll = function(pinsHit) {
  if (pinsHit > this.framePinCount) {
    throw new Error("only 10 pins per frame");
  };
};

BowlingScore.prototype.currentFrameNumber = function() {
  return this.bowlingFrames.length;
};

BowlingScore.prototype.calculateScore = function() {
  var frameScore = this.bowlingFrames[this.bowlingFrames.length -1].reduce(function(a, b) {
    return a + b;
  });
 (frameScore < 10) ? this.score += frameScore : this.recordBonus();
};

BowlingScore.prototype.recordBonus = function() {
    (this.bowlingFrames[this.bowlingFrames.length - 1][1] === undefined) ? this.recordStrike() : this.recordSpare();
    if (this.bowlingFrames.length === 10
      && this.bowlingFrames[this.bowlingFrames.length - 1][0] < 10
      && (this.bowlingFrames[this.bowlingFrames.length - 1][0] + this.bowlingFrames[this.bowlingFrames.length - 1][1] === 10) ) {
      this.recordSpare();
    }

};

BowlingScore.prototype.recordStrike = function() {
  this.strikes.push(this.bowlingFrames.length -1);
  if (this.isLastFrame()) { this.defaultGamelength++};
};

BowlingScore.prototype.recordSpare = function() {
  this.spares.push(this.bowlingFrames.length -1);
  if (this.isLastFrame()) { this.defaultGamelength++};
};

BowlingScore.prototype.calculateBonusScore = function(first_argument) {
  this.calculateStrikeScore();
  this.calculateSpareScore();
};

BowlingScore.prototype.calculateStrikeScore = function() {
  for (var i = 0; i < this.strikes.length; i++) {
    if (this.nextBallNonStrike(i)) {
        this.scoreNextBallNonStrike(i);
    };
    if (this.nextBallStrike(i)) {
        this.scoreNextBallStrike(i);
    };
  };
};

BowlingScore.prototype.scoreNextBallNonStrike = function(strike) {
  var score = this.addFrames(strike);
  this.updateBonusScore(score, this.strikes, strike);
};

BowlingScore.prototype.scoreNextBallStrike = function(strike) {
  var score = this.addStrikes(strike);
  this.updateBonusScore(score, this.strikes, strike);
};

BowlingScore.prototype.nextBallNonStrike = function(strike) {
  return this.bowlingFrames[this.strikes[strike] + 1] && this.bowlingFrames[this.strikes[strike] + 1].length === 2
};

BowlingScore.prototype.nextBallStrike = function(strike) {
  return this.bowlingFrames[this.strikes[strike] + 1]  && this.bowlingFrames[this.strikes[strike] + 2]
};

BowlingScore.prototype.addFrames = function(strike) {
  return this.bowlingFrames[this.strikes[strike] + 1].reduce(function(a, b)
    { return a + b; });
};

BowlingScore.prototype.addStrikes = function(strike) {
  return this.bowlingFrames[this.strikes[strike] + 1].concat(this.bowlingFrames[this.strikes[strike] + 2][0]).reduce(function(a, b) { return a + b; });;
};

BowlingScore.prototype.calculateSpareScore = function(first_argument) {
  for (var i = 0; i < this.spares.length; i++) {
      if (this.nextBallRolled(i)) {
        var score = this.addNextRoll(i);
        this.updateBonusScore(score, this.spares, i);
    };
  };
};

BowlingScore.prototype.addNextRoll = function(spare) {
  return this.bowlingFrames[this.spares[spare] + 1][0]
};

BowlingScore.prototype.nextBallRolled = function(spare) {
  return this.bowlingFrames[this.spares[spare] + 1] !== undefined;
};

BowlingScore.prototype.updateBonusScore = function(score, bonusArray, position) {
  this.score += (score + 10);
  bonusArray.splice(position, 1);
};

