function Scorecard(FrameContainer){
  this.frames = [];
  for(var i = 0; i < 12; i++){
    this.frames.push(new FrameContainer());
  }
  this.currentFrame = 0;
  this.gameOver = false;
}

Scorecard.prototype.newThrow = function(score){
  var frames = [this.frames[this.currentFrame],
                this.frames[this.currentFrame-1],
                this.frames[this.currentFrame-2]];

  this.pushScore(score, frames);
  this.frames[0].setExtra();
  this.checkEnd();
  this.advanceGame();
}

Scorecard.prototype.pushScore = function(score, frames){
  frames[0].pushNormal(score);
  frames[1].pushExtra(score);
  frames[2].pushExtra(score);
}

Scorecard.prototype.calculateTotalScore = function(){
  var totalScore = 0;
  for(var j = 0; j < 10; j++){
    totalScore += this.frames[j].calculateScore();
  }
  return totalScore;
}

Scorecard.prototype.checkGameOver = function(){
  if(Math.max(this.frames[8].addExtra , this.frames[9].addExtra) === 0){
    this.gameOver = true;
    }
}

Scorecard.prototype.checkEnd = function(){
  if(this.currentFrame > 8 && this.frames[this.currentFrame].isTurnCompleted()){
    this.checkGameOver();
  }
}

Scorecard.prototype.advanceGame = function(){
  this.frames[this.currentFrame].throwNumber += 1;
  if(this.frames[this.currentFrame].isTurnCompleted()) {
    this.currentFrame++;
  }
}
