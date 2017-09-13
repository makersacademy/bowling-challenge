function BowlingGame(){
  this.totalScore = 0;
  this.allFrames = [];
}

BowlingGame.prototype.updateTotalScore = function() {
  for (i = 0; i < this.allFrames.length; i++) {
    frame = this.allFrames[i];
    this.totalScore += frame.score;
  }
};

BowlingGame.prototype.updateScore = function(){
  for (i = 0; i < this.allFrames.length; i++) {
    frame = this.allFrames[i];
    if(frame.isStrike()) {
      frame.score += this.allFrames[i+1].score;
    } else if(frame.isSpare()) {
      frame.score += this.allFrames[i+1].firstTurn;
    }
  }
  this.updateTotalScore();
};

BowlingGame.prototype.previousFrame = function() {
  return this.allFrames[(this.allFrames).length-2];
};

BowlingGame.prototype.addFrame = function(frame){
 (this.allFrames).push(frame);
 if((frame === this.allFrames[0]) && (frame.isStrike() === false)){
   this.updateScore();
 } else if(frame !== this.allFrames[0]){
   this.updateScore();
 }
};

BowlingGame.prototype.currentFrame = function() {
  return this.allFrames[(this.allFrames).length-1];
};
