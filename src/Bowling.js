function Bowling() {
  this.frameStatus = "Play"
  this.gameTries = []
  this.currentFrame = []
  this.gameScore = 0
  this.firstTryOfFrame = true
}

Bowling.prototype.addFrame = function() {
  var frameTry = [0,0]
  this.gameTries.push(frameTry);
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
  console.log(this.currentFrame[0]);
  this.updateTry(score)
};

Bowling.prototype.updateSecondTry = function(score) {
  this.currentFrame[1] = score
  console.log(this.currentFrame[1]);
  this.updateTry(score)
  this.gameTries.push(this.currentFrame);
  this.currentFrame = []
};

Bowling.prototype.updateTry = function(score) {
  this.gameScore += score
  this.checkStatus();
  this.firstTryOfFrame = !this.firstTryOfFrame
};

Bowling.prototype.checkStatus = function() {
  // debugger
  if (this.firstTryOfFrame && this.currentFrame[0] == 10)
    {this.frameStatus = "Strike"}
  else if ((this.currentFrame[0] + this.currentFrame[1]) == 10)
    {this.frameStatus = "Spare"}
  else
    {this.frameStatus = "Play"}
};

// Bowling.prototype.playAFrame = function() {
//   this.addFrame.();
//   this.addScore.();
//
// };
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
