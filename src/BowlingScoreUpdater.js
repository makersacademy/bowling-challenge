function BowlingScoreUpdater() {
  this.currentFrameNumber = 1;
  this.prevFrameNumber = 0;
  this.currentFrameTotal = 0;
  this.currentFrameBonusRounds = 0;
  this.prevFrameTotal = 0;
  this.prevFrameBonusRounds = 0;
  this.prevPrevFrameTotal = 0;
  this.prevPrevFrameBonusRounds = 0;
  this.frameRoundsLeft = 2;
  // this.GameTotal = 0;
  // this.roundNumber = 0;
};

BowlingScoreUpdater.prototype.shiftFrames = function() {
  this.prevPrevFrameTotal = this.prevFrameTotal;
  this.prevPrevFrameBonusRounds = this.prevFrameBonusRounds;
  this.prevFrameTotal = this.currentFrameTotal;
  this.prevFrameBonusRounds = this.currentFrameBonusRounds;
  this.prevFrameNumber = this.currentFrameNumber;
  this.currentFrameNumber += 1;
  this.currentFrameTotal = 0;
  this.currentFrameBonusRounds = 0;
  this.frameRoundsLeft = 2;
};

BowlingScoreUpdater.prototype.updateBonus = function(score) {
  if (this.prevPrevFrameBonusRounds === 1) {
    // this.GameTotal += score;
    this.prevPrevFrameTotal += score;
    this.prevPrevFrameBonusRounds -= 1;
  };
  if (this.prevFrameBonusRounds > 0) {
    // this.GameTotal += score;
    this.prevFrameTotal += score;
    this.prevFrameBonusRounds -= 1;
  };
};

BowlingScoreUpdater.prototype.newRound = function(score) {
  // this.GameTotal += score;
  if (this.frameRoundsLeft === 0) {
    this.shiftFrames();
  };
  if (score === 10){
    // this.roundNumber += 1;
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
  // this.roundNumber += 1;
  this.updateBonus(score);
};



//must had one round of frame 10 already for frame number to be 10
// if (this.currentFrameNumber === 10){
//   if(this.currentFrameTotal === 10 && this.frameRoundsLeft === 0){
//     this.frameTenBonusRounds == 1;
//     this.frameTenBonusOne = score;
//   };
//
//
// };
