function BowlingScoreUpdater() {
  // this.infoContainer = {currentFrameNumber: }


  this.currentFrameNumber = 1;
  this.currentFrameTotal = 0;
  this.currentFrameBonusRounds = 0;
  this.prevFrameTotal = 0;
  this.prevFrameBonusRounds = 0;
  this.prevPrevFrameTotal = 0;
  this.prevPrevFrameBonusRounds = 0;
  this.frameRoundsLeft = 2;
};

BowlingScoreUpdater.prototype.shiftFrames = function() {
  this.prevPrevFrameTotal = this.prevFrameTotal;
  this.prevPrevFrameBonusRounds = this.prevFrameBonusRounds;
  this.prevFrameTotal = this.currentFrameTotal;
  this.prevFrameBonusRounds = this.currentFrameBonusRounds;
  this.currentFrameNumber += 1;
  this.currentFrameTotal = 0;
  this.currentFrameBonusRounds = 0;
  this.frameRoundsLeft = 2;
};

BowlingScoreUpdater.prototype.updateBonus = function(score) {
  if (this.prevPrevFrameBonusRounds === 1) {
    this.prevPrevFrameTotal += score;
    this.prevPrevFrameBonusRounds -= 1;
  };
  if (this.prevFrameBonusRounds > 0) {
    this.prevFrameTotal += score;
    this.prevFrameBonusRounds -= 1;
  };
};

BowlingScoreUpdater.prototype.newRound = function(score) {
  if (this.frameRoundsLeft === 0) {
    this.shiftFrames();
  };
  if (score === 10 && this.frameRoundsLeft === 2){
    this.frameRoundsLeft = 0;
    this.currentFrameBonusRounds = 2;
    this.currentFrameTotal = 10;
  } else if (this.currentFrameTotal + score === 10){
    this.frameRoundsLeft = 0;
    this.currentFrameBonusRounds = 1;
    this.currentFrameTotal += score;
  } else if (this.currentFrameTotal + score < 10){
    this.frameRoundsLeft -= 1;
    this.currentFrameTotal += score;
  };
  this.updateBonus(score);
};

function testConstructor() {
  this.containerObject = {score:[4,'hello'], frameNumber:2, lastFrame:1,somethingElse: 'hi'}
};

test = new testConstructor();
