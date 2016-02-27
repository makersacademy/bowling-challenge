function BowlingGame() {
  this.score = 0; 
  this.frame = 1;
  this.frameIndex = 0;
};


BowlingGame.prototype.letsBowl = function(){
  this.score += this.playBall();
  if (this.frameIndex == 1) {
    this.frameIndex = 0
    this.frame++  
  }
  else { this.frameIndex++};
};

BowlingGame.prototype.currentFrame = function(){
 return this.frame;
};

BowlingGame.prototype.playBall = function(){
  return Math.floor(Math.random()*11);
};

BowlingGame.prototype.getScore = function(){
  return this.score;
};

