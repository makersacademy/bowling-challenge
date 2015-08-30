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
  this.checkifGameOver();
  this.checkValidRoll(pinsHit);
  this.framePinCount = this.framePinCount - pinsHit;
  this.currentFrame.push(pinsHit);
  //put check here at some point for 10th frame.
  //move the below method into it's own for normal frame and have one for 10th frame
  if (this.currentBall === 2 || pinsHit === 10) {
    this.bowlingFrames.push(this.currentFrame);
    this.resetFrame();
    this.calculateScore();
  };
  this.currentBall++;
  this.calculateBonusScore();
};

BowlingScore.prototype.checkValidRoll = function(pinsHit) {
  if (pinsHit > this.framePinCount) {
    throw new Error("only 10 pins per frame");
  };
};

BowlingScore.prototype.checkifGameOver = function() {
  if (this.currentFrameNumber() >= 10) {
    throw new Error("game over 10 frames bowled");
  };
};

BowlingScore.prototype.currentFrameNumber = function() {
  return this.bowlingFrames.length;
};

BowlingScore.prototype.resetFrame = function() {
  this.currentFrame = [];
  this.currentBall = 0;
  this.framePinCount = 10;
};

BowlingScore.prototype.calculateScore = function() {
  var frameScore = this.bowlingFrames[this.bowlingFrames.length -1].reduce(function(a, b) {
    return a + b;
  });
 (frameScore < 10) ? this.score += frameScore : this.recordBonus();
};

BowlingScore.prototype.recordBonus = function() {
  (this.bowlingFrames[this.bowlingFrames.length - 1][1] === undefined) ? this.recordStrike() : this.recordSpare();
};

BowlingScore.prototype.recordStrike = function() {
  this.strikes.push(this.bowlingFrames.length -1);
};

BowlingScore.prototype.recordSpare = function() {
  this.spares.push(this.bowlingFrames.length -1);
};

BowlingScore.prototype.calculateBonusScore = function(first_argument) {
  this.calculateStrikeScore();
  this.calculateSpareScore();
};

BowlingScore.prototype.calculateStrikeScore = function() {
  for (var i = 0; i < this.strikes.length; i++) {
      if (this.bowlingFrames[this.strikes[i] + 1] && this.bowlingFrames[this.strikes[i] + 1].length === 2 ) {
        var score = this.bowlingFrames[this.strikes[i] + 1].reduce(function(a, b) { return a + b; });
        this.updateBonusScore(score, this.strikes, i);
    };
      if (this.bowlingFrames[this.strikes[i] + 1]  && this.bowlingFrames[this.strikes[i] + 2]) {
        var frameScores = this.bowlingFrames[this.strikes[i] + 1].concat(this.bowlingFrames[this.strikes[i] + 2][0]);
        var score = frameScores.reduce(function(a, b) { return a + b; });
        this.updateBonusScore(score, this.strikes, i);
     };
  };
};

BowlingScore.prototype.calculateSpareScore = function(first_argument) {
  for (var i = 0; i < this.spares.length; i++) {
      if (this.bowlingFrames[this.spares[i] + 1] !== undefined) {
        var score = (this.bowlingFrames[this.spares[i] + 1][0]);
        this.updateBonusScore(score, this.spares, i);
    };
  };
};

BowlingScore.prototype.updateBonusScore = function(score, bonusArray, position) {
        this.score += (score + 10);
        bonusArray.splice(position, 1);
};

//to implement
//when 2 balls rolled we move onto next
//maybe have a running score array that is checked every roll and calced if required
//flatten an array var flat_arr = [].concat.apply([],arr);