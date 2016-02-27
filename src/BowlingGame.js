function BowlingGame() {
  this.scoreCard = new ScoreCard; 
  this.frame = 1;
  this.frameIndex = 0;
};


BowlingGame.prototype.letsBowl = function(){
  this.scoreCard.addScore(this.playBall());
  if (this.frameIndex == 1) {
    this.checkForSpare();
    this._nextFrame();
  }
  else { this.frameIndex++};
};

BowlingGame.prototype.currentFrame = function(){
  return this.frame;
};

BowlingGame.prototype.playBall = function(){
  return Math.floor(Math.random()*11);
};

BowlingGame.prototype.checkForSpare = function(){
  if (this.scoreCard.isSpare()) {
    this.scoreCard.spareBonus = true; 
  }
};

BowlingGame.prototype._nextFrame = function(){
  this.frameIndex = 0
    this.frame++  
};
