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
  this.firstTryOfFrame = true
  this.gameOver = false
  this.bonusTime = false
  this.lastStatus = 'Open'
  this.strikeCarryOver = false
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
};

Bowling.prototype.updateBonusScore = function(score) {
  if (this.lastStatus == 'Spare')
  {
    this.currentFrame.firstScore = score
    this.gameScore += this.currentFrame.firstScore
    this.bonusTime = false
  } else if (this.lastStatus == 'Strike')
  {
    this.lastStatus = 'Spare'
    this.currentFrame.secondScore = score
    this.gameScore += this.currentFrame.firstScore
  }
};
Bowling.prototype.nextFrame = function() {
  this.gameFrames.push(this.currentFrame);
  if (!this.gameOver)
  {
    this.checkGameOverStatus()}
    this.currentFrame = new Frame()
    this.firstTryOfFrame = true
    this.updateScore()
};

Bowling.prototype.updateScore = function() {
  var i = this.gameFrames.length - 1
  console.log(this.lastStatus,' ',this.gameScore);
  this.gameScore += this.gameFrames[i].firstScore;
  this.gameScore += this.gameFrames[i].secondScore;
  if (this.lastStatus == 'Strike' &&
      this.frameStatus != 'Strike')
  {
    this.gameScore += this.gameFrames[i].firstScore;
    this.gameScore += this.gameFrames[i].secondScore;
  }
  else if (this.lastStatus == 'Strike' &&
           this.frameStatus == 'Strike')
  {
    this.gameScore += this.gameFrames[i].firstScore;
    this.strikeCarryOver = true
  }
  else if (this.lastStatus == 'Spare' ||
          this.strikeCarryOver)
  {
    this.gameScore += this.gameFrames[i].firstScore;
    this.strikeCarryOver = false
  }
  console.log(this.lastStatus,' ',this.gameScore);
  this.lastStatus = this.gameFrames[i].frameStatus
};


Bowling.prototype.checkGameOverStatus = function(){
  if (this.gameFrames.length == 10 )
  {
    this.gameOver = true;
    if (this.currentFrame.frameStatus == "Strike" ||
        this.currentFrame.frameStatus == "Spare")
    {
      this.bonusTime = true
    }
  }
};
