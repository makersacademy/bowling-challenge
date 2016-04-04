function Game(currentFrame){
  this.totalScore = 0;
  this.completedFrames = [];
  this.currentFrame = currentFrame;
  this.frameCount = 0;
}

Game.prototype.updateCompletedFrames = function(){
  if (this.currentFrame.isComplete()) {
    this.completedFrames.push(this.currentFrame);
    this.frameCount = this.completedFrames.length;
    this.currentFrame = null;
  }
}

Game.prototype.createFrame = function(nextFrame){
  this.currentFrame = nextFrame;
}

Game.prototype.calcTotalScore = function() {
  var frameTotals = 0;
  for(var i=0; i<=this.frameCount-1; i++){
    console.log(i);
    console.log(frameTotals);
    if (i === this.frameCount-1){
      frameTotals += this.completedFrames[i].getScore();
    }
    else if (this.completedFrames[i].isSpare()){
      frameTotals += this.completedFrames[i].getScore() + this.completedFrames[i+1].getBalls()[0];
    }
    else if (this.completedFrames[i].isStrike()){
      if (i === 8){
        frameTotals += this.completedFrames[i].getScore() + this.completedFrames[i+1].getBalls()[0] + this.completedFrames[i+1].getBalls()[1];
      }
      else if (i === 9){
        frameTotals += this.completedFrames[i].getScore()
      }
      else if (this.completedFrames[i+1].isStrike()) {
        frameTotals += this.completedFrames[i].getScore() + this.completedFrames[i+1].getScore() + this.completedFrames[i+2].getBalls()[0];
      }
      else {
        frameTotals += this.completedFrames[i].getScore() + this.completedFrames[i+1].getScore();
      }
    }
    else {
      frameTotals += this.completedFrames[i].getScore();
    }
  }
  this.totalScore = frameTotals;
}
