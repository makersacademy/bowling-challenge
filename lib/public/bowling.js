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
  return this.frameTotals.reduce(function(prev,current){
     if (current === '?') { current = 0 }
     if (prev === '?') { prev = 0 }
     return prev + current;
  });
};

Game.prototype.organiseFrameTotals = function () {
  this.frameTotals = [];
  for (var i = this.frameScore.length-1; i >= 0; i--) {
    if (this.isStrike(this.frameScore[i])) {
      if (i == this.frameScore.length-1)
        { this.frameTotals.push('?'); }
      else if (i == this.frameScore.length-2 && this.nextFrameIsStrikeOrSpare())
        { this.frameTotals.push('?'); }
      else if (i == this.frameScore.length-3 && this.nextFrameIsStrikeOrSpare()){
        this.frameTotals.push(30);
      }
      else {
        this.frameTotals.push(10 + parseInt(this.frameTotals[this.frameTotals.length-1]));
      }
    }
    else if (this.isSpare(this.frameScore[i])) {
      if (i == this.frameScore.length-1) {
        this.frameTotals.push('?');
      }
      else {
        this.frameTotals.push(10 + parseInt(this.frameScore[i+1][0]));
      }
    }
    else {
      this.frameTotals.push(this.frameScore[i][0] + this.frameScore[i][1]);
    }
  };
  for (var i = 0; i < this.frameTotals.length; i++) {
    if (this.frameTotals[i] > 30) { this.frameTotals[i] = 30; }
  }
};

Game.prototype.isSpare = function (frame) {
  if (!this.isStrike(frame)) {
    return (frame[0] + frame[1]) == 10;
  }
  return false;
};

Game.prototype.isStrike = function (frame) {
  return frame[0] == 10;
};

Game.prototype.nextFrameIsStrikeOrSpare = function () {
  return (this.isStrike(this.frameScore[this.frameScore.length-1]) || this.isSpare(this.frameScore[this.frameScore.length-1]))
};

Game.prototype.isStrikeorSpare = function (frame) {
  return (this.isStrike(frame) || this.isSpare(frame));
};

Game.prototype.isGameFinished = function () {
  if (this.frameTotals.length == 10 && !this.isStrikeorSpare(this.frameScore[9])){

    return true;
  }
  else if (this.frameTotals.length == 11 && !this.isStrike(this.frameScore[10])) {
   return true;
  }
  else if (this.frameTotals.length == 12){
    return true;
  }
  else {
    return false;
  }
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
