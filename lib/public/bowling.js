function Game() {
  this.totalScore = 0;
  this.frameScore = [];
  this.currentFrame = [];
  this.frameTotals = [];

};

Game.prototype.pinsDown = function (pinsDown) {
  this.checkStart();
  this.currentFrame.push(parseInt(pinsDown));
  this.updateScore();
  this.checkEnd();
};

Game.prototype.updateScore = function () {
  if (!this.isFrameFinished()) {
  this.totalScore += this.currentFrame[0];
  }
};

Game.prototype.endFrame = function () {
  this.frameScore.push(this.currentFrame);
  this.addFrameToTotal();
  this.totalScore = this.addUpTotalScore();
};

Game.prototype.isFrameFinished = function ()
{
 return  (this.currentFrame.length == 2 || this.currentFrame[0] == 10)
}


Game.prototype.checkStart = function () {
  if (this.isFrameFinished()) { this.currentFrame = [] }
};

Game.prototype.checkEnd = function () {
  if (this.isFrameFinished()) { this.endFrame() }
};

Game.prototype.addFrameToTotal = function () {
  if (this.currentFrame[0] == 10) {
    this.frameTotals.push(10);
  }
  else {
  this.frameTotals.push(this.currentFrame[0] + this.currentFrame[1]);
  }
};

Game.prototype.addUpTotalScore = function () {
  this.organiseFrameTotals();
  this.frameTotals.reduce(function(prev,current){
     return prev + current;
  });
};

Game.prototype.organiseFrameTotals = function () {
  this.frameTotals = [];
  for (var i = 0; i < this.frameScore.length; i++) {
    if (this.isStrike(this.frameScore[i])) {
      this.frameTotals.push(this.frameScore[i][0]);
    }
    else {
      this.frameTotals.push(this.frameScore[i][0] + this.frameScore[i][1]);
    }
  };
};

Game.prototype.isStrike = function (frame) {
  if (frame[0] == 10) { return true; }
  else { return false; }
};


// function Game() {
//   this.score = 0;
//   this.frameCount = 0;
//   this.currentFrame = [];
//   this.lastFrame = [];
//   this.frameBeforeLast = [];
//   this.frameScorecard = [];
//   this.frameOver = false;
//   this.gameFinished = false;
// }
//
// Game.prototype.updateScore = function (pinsDown) {
//   this.frameOver = false;
//   this.score += pinsDown;
//   this.currentFrame.push(parseInt(pinsDown));
//
//   if (this.currentFrameFinished()) { this.frameEnd() };
//   return this.score;
// };
//
// Game.prototype.frameEnd = function () {
//   this.frameScorecard.push(this.currentFrame);
//   this.frameBeforeLast = this.lastFrame;
//   this.lastFrame = this.currentFrame;
//   this.currentFrame = [];
//   this.frameOver = true;
//   this.frameCount++;
//   this.score = 0;
//   for (var i = 1; i < this.frameCount; i++) {
//     this.score += this.frameAdder(i);
//   };
//   this.checkGameFinished();
// };
//
// Game.prototype.currentFrameFinished = function () {
//   if (this.currentFrame.length == 2) {return true;}
//   else if (this.currentFrame[0] == 10) {return true;}
//   else {
//     return false;
//   }
// };
//
// Game.prototype.checkGameFinished = function () {
//   if (this.frameCount == 10){
//     this.gameFinished = true;
//   }
// };
//
// Game.prototype.frameAdder = function (frameNumber) {
//   if (this.strikeTest(frameNumber)) {
//     if (frameNumber == this.frameCount){
//       return 0;
//     };
//     if ((this.frameCount - frameNumber) == 1) {
//       return (this.frameAdder(frameNumber+1) + 10)
//     }
//   }
//   return this.frameScorecard[frameNumber-1][0] + this.frameScorecard[frameNumber-1][1];
// };
//
// Game.prototype.strikeTest = function (frameNumber) {
//   return this.frameScorecard[frameNumber-1][0] == 10;
// };
//
// Game.prototype.spareTest = function (frameNumber) {
//   if (this.strikeTest()) {
//     return false;
//   }
//   else if (this.frameScorecard[frameNumber-1][0] + this.frameScorecard[frameNumber-1][1] == 10){
//     return true;
//   }
//   else {
//     return false;
//   }
// };
