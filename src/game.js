function Game(){
this.currentFrame = [];
this.scoreBoard = [];
this.totalScore = 0;
this.frameIndex = 0;
this.bowlIndex = 0;
}

Game.prototype.updateScore = function(score){
  this.currentFrame.push(score);
  if(this.frameComplete()){this.scoreBoard.push(this.currentFrame) && this.nextFrame();}
}

Game.prototype.frameComplete = function(){
  return(this.currentFrame.length >= 2 || this.isAStrike());
}

Game.prototype.nextFrame = function(){
  (this.frameIndex ++ ) && (this.currentFrame = []);
}

Game.prototype.calculateFrameScore = function(){
  return this.currentFrame.reduce((a,b) => a + b, 0);
}

Game.prototype.calculateTotalScore = function(){
  this.totalScore = this.scoreBoard.reduce((a,b) => a + b, 0);
}

Game.prototype.isAStrike = function(){
  return this.currentFrame[0] === 10;
}

Game.prototype.isASpare = function(){
  return (this.currentFrame.length === 2 && this.currentFrame[0] + this.currentFrame[1] === 10);
}

Game.prototype.isFinalFrame = function(){
  return (this.frameIndex === 9)
}

Game.
