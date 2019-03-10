function Bowling() {
  this.frameStatus = "Play"
  this.gameTries = []
  this.currentFrame = [0,0]
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
    {
      throw new Error('Game has ended');}
  else if (this.gameOver && this.bonusTime)
  {
    this.updateBonusTry(score)
  }
  else if (this.firstTryOfFrame)
    {this.updateFirstTry(score);}
  else if ((score + this.currentFrame[0]) > 10)
    {throw new Error('total frame score can not be greater than 10');}
  else
    {this.updateSecondTry(score);}
};

// Update functions
Bowling.prototype.updateFirstTry = function(score) {
  this.currentFrame[0] = score
  this.updateTry(score)
};

Bowling.prototype.updateSecondTry = function(score) {
  this.currentFrame[1] = score
  this.updateTry(score)
  this.nextFrame()
};
Bowling.prototype.updateBonusTry = function(score) {
  this.currentFrame[0] = score
  this.updateTry(score)
  this.nextFrame()
};
Bowling.prototype.updateTry = function(score) {
  this.updateScore(score);
  this.checkStatus();
  if (this.frameStatus != "Strike")
  {
    this.firstTryOfFrame = !this.firstTryOfFrame
  }
};
Bowling.prototype.nextFrame = function() {
  console.log('Pushing the last game on ',this.currentFrame);
  this.gameTries.push(this.currentFrame);
  this.currentFrame = [0,0]
  this.checkGameOverStatus()
};

Bowling.prototype.updateScore = function(score) {
  console.log('Game so far ',this.gameScore);
  this.gameScore += score
  console.log('Adding ',score);
  if (this.bonusCount > 0)
  {
    console.log(this.frameStatus," ",score);
    if (!this.gameOver)
    {
        this.gameScore += score
    }

    this.bonusCount -= 1
  }
  console.log('Score now ',this.gameScore);
};

//  Status functions
Bowling.prototype.checkStatus = function() {
  if (this.firstTryOfFrame && this.currentFrame[0] == 10)
  {
    this.setStrikeStatus()
  }
  else if ((this.currentFrame[0] + this.currentFrame[1]) == 10)
  {
    this.setSpareStatus()
  }
  else
  {
    this.frameStatus = "Play"
  }
}
Bowling.prototype.setStrikeStatus = function(){
  this.frameStatus = "Strike"
  this.bonusCount = 2
  this.nextFrame()
}
Bowling.prototype.setSpareStatus = function(){
  this.frameStatus = "Spare"
  this.bonusCount = 1
}
Bowling.prototype.checkGameOverStatus = function(){
  if (this.gameTries.length == 10 )
  {
    this.gameOver = true;
    if (this.frameStatus == "Strike" ||
        this.frameStatus == "Spare")
    {
      this.bonusTime = true
      this.bonusCount = 1
    }
  }    // debugger
  console.log(this.frameStatus);
  // console.log(this.gameTries);
};
