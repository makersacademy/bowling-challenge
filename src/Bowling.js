function Frame(){
  this.firstScore = 0
  this.secondScore = 0
  this.frameStatus = 'Open'
}
Frame.prototype.setStatus = function()
{
  if (this.firstScore == 10)
    {this.frameStatus = 'Strike'}
  else if (this.firstScore+this.secondScore == 10)
    {this.frameStatus = 'Spare'}
}

function Bowling() {
  this.gameFrames = []
  this.currentFrame = new Frame()
  this.gameScore = 0
  this.bonusCount = 0
  this.firstTryOfFrame = true
  this.gameOver = false
  this.bonusTime = false
}

Bowling.prototype.addScore = function(score) {
  // debugger
  if (score < 0)
  { throw new Error('score entered must be greater than 0');}
  else if (score > 10)
    {throw new Error('score entered can not be greater than 10');}
  else if (this.gameOver && !this.bonusTime)
    {throw new Error('Game has ended');}
  else if (this.gameOver && this.bonusTime)
    {this.updateBonusScore(score) }
  else if (this.firstTryOfFrame)
    {this.updateFirstScore(score);}
  else if ((score + this.currentFrame.firstScore) > 10)
    {throw new Error('total frame score can not be greater than 10');}
  else
    {this.updateSecondScore(score);}
};

// Update functions
Bowling.prototype.updateFirstScore = function(score) {
  this.currentFrame.firstScore = score
  this.currentFrame.setStatus();
  if (this.currentFrame.frameStatus == "Strike")
    {this.nextFrame()}
  else
    {this.firstTryOfFrame = false}
};

Bowling.prototype.updateSecondScore = function(score) {
  this.currentFrame.secondScore = score
  this.currentFrame.setStatus();
  this.nextFrame()
  // KM Need to calculate the score
};
// KM Bowling.prototype.updateBonusScore = function(score) {
//   this.currentFrame.firstScore = score
//   this.updateTry(score)
// //   this.nextFrame()
// };
// Bowling.prototype.updateTry = function(score) {
//   // KM this.updateScore(score);
//   this.currentFrame.setStatus();
//   if (this.currentFrame.frameStatus != "Strike")
//   {
//     this.firstTryOfFrame = !this.firstTryOfFrame
//   }
// };
Bowling.prototype.nextFrame = function() {
  this.gameFrames.push(this.currentFrame);
  if (!this.gameOver)
  {this.checkGameOverStatus()}
  this.currentFrame = new Frame()
  this.firstTryOfFrame = true
  this.updateScore()
};

Bowling.prototype.updateScore = function(score) {
  // debugger
  // console.log('Game so far ',this.gameScore);
  // this.gameScore += score
  // console.log('Adding ',score);
  // if (this.bonusCount > 0)
  // {
  //   console.log(this.currentFrame.frameStatus," ",score);
  //   if (!this.gameOver)
  //   {
  //       this.gameScore += score
  //   }
  //
  //   this.bonusCount -= 1
  // }
  // console.log('Score now ',this.gameScore);
  var frames = this.gameFrames.length
  var i;
  this.gameScore = 0
  multiplier = 1
  for (i = 0; i < frames; i++) {
    this.gameScore += multiplier*(this.gameFrames[i].firstScore);
    this.gameScore += multiplier*(this.gameFrames[i].secondScore);
    if (this.gameFrames[i].frameStatus == 'Strike')
      {multiplier++}
    else if (multiplier > 1)
      {multiplier--}
  }
};


Bowling.prototype.checkGameOverStatus = function(){
  // debugger
  if (this.gameFrames.length == 10 )
  {
    this.gameOver = true;
    if (this.currentFrame.frameStatus == "Strike" ||
        this.currentFrame.frameStatus == "Spare")
    {
      this.bonusTime = true
      this.bonusCount = 1
    }
  }    // debugger
  console.log(this.currentFrame.frameStatus);
  // console.log(this.gameTries);
};
