function Game(){
this.currentFrame = [];
this.scoreBoard = [];
this.totalScore = 0;
this.frameIndex = 0;
}

Game.prototype.updateScore = function(score){
  this.currentFrame.push(score);
  if(this.frameComplete()){this.scoreBoard.push(this.currentFrame) && this.nextFrame();}
}

Game.prototype.frameComplete = function(){
  if(this.currentFrame.length >= 2 || this.isAStrike === true){return true;}
  else {return false;}
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
  if(this.currentFrame[0] === 10) {return true;}
  else {return false;}
}

Game.prototype.isASpare = function(){
  if(this.currentFrame.length === 2 && this.currentFrame[0] + this.currentFrame[1] === 10){return true;}
  else {return false;}
}

Game.prototype.isFinalFrame = function(){
  if(this.frameIndex === 9){return true;}
    else {return false;}
}
