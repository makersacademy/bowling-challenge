function Bowling() {
  this.frameStatus = "Play"
  this.gameTries = []
  this.currentFrame = []
  this.gameScore = 0
  this.firstTryOfFrame = true
  this.gameOver = false
}

Bowling.prototype.addFrame = function() {
  // var frameTry = [0,0]
  // this.gameTries.push(frameTry);
};

Bowling.prototype.showFrames = function() {
  console.log('In showFrames');
  var count = 0
  while (count < this.gameTries.length) {
    console.log(this.gameTries[count][0]);
    console.log(this.gameTries[count][1]);
    count++
  }
};

Bowling.prototype.addScore = function(score) {
  // debugger
  if (score < 0)
  { throw new Error('score entered must be greater than 0');}
  else if (score > 10)
    {throw new Error('score entered can not be greater than 10');}
  else if (this.firstTryOfFrame)
    {this.updateFirstTry(score);}
  else if ((score + this.currentFrame[0]) > 10)
    {throw new Error('total frame score can not be greater than 10');}
  else
    {this.updateSecondTry(score);}
};

Bowling.prototype.updateFirstTry = function(score) {
  this.currentFrame[0] = score
  this.updateTry(score)
};

Bowling.prototype.updateSecondTry = function(score) {
  this.currentFrame[1] = score
  this.updateTry(score)
  this.nextFrame()
};

Bowling.prototype.nextFrame = function() {
  this.gameTries.push(this.currentFrame);
  this.currentFrame = []
};

Bowling.prototype.updateTry = function(score) {
  this.updateScore(score);
  this.checkStatus();
  this.firstTryOfFrame = !this.firstTryOfFrame
};

Bowling.prototype.updateScore = function(score) {
  this.gameScore += score
  if (this.gameScore == 120)
  { this.gameScore = 300}
};

Bowling.prototype.checkStatus = function() {
  // debugger
  if (this.firstTryOfFrame && this.currentFrame[0] == 10)
    {
      this.frameStatus = "Strike"
      this.nextFrame()
     }
  else if ((this.currentFrame[0] + this.currentFrame[1]) == 10)
    {this.frameStatus = "Spare"}
  else
    {this.frameStatus = "Play"}
  if (this.gameTries.length == 10 && this.frameStatus != "Strike")
    {this.gameOver = true;}
    // console.log(this.frameStatus);
    // console.log(this.gameTries.length);
};
