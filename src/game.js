function Game(playerName, frameFunc) {
  this._frameFunc = frameFunc || Frame;
  this._framesPlayed = 0;
  this.player = playerName;
  this.frames = [];
  this.currentFrame = new this._frameFunc();
  this.score = 0;
}

Game.prototype._lastFrame = function () {
  return this.frames.slice(-1)[0];
};

Game.prototype._secondLastFrame = function () {
  return this.frames.slice(-2)[0];
};

Game.prototype._calculateScore = function () {
  var scores = this.frames.map(function(i){return i.score;})
  this.score = scores.reduce(function(prev, curr){return prev + curr;});
};

Game.prototype._adjustScores = function () {
  if(this._lastFrame().isSpare){
    this._lastFrame().score += this.currentFrame._throwArray[0];
  }
  if(this._lastFrame().isStrike){
    // magic
    if(this._secondLastFrame().isStrike){
      // magic
    }
  }
};

Game.prototype.nextFrame = function () {
  if(!this.currentFrame.isComplete()){
    throw new Error('Finish frame first');
  }
  if(this.gameOver()){
    throw new Error('Game over');
  }
  if(this.frames[0]){
    this._adjustScores();
    this._calculateScore();
  }
  this.score += this.currentFrame.score;
  this._framesPlayed += 1;
  this.frames.push(this.currentFrame);
  this.currentFrame = new this._frameFunc();
};

Game.prototype.gameOver = function () {
  if(this._framesPlayed >= 10){return true;}
  return false;
};
