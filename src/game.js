function Game(playerName, frameFunc) {
  this._frameFunc = frameFunc || Frame;
  this._framesPlayed = 0;
  this.player = playerName;
  this.frames = [];
  this.currentFrame = new this._frameFunc();
  this.score = 0;
}

Game.prototype._lastFrame = function () {
  return this.frames[this.frames.length - 1];
};

Game.prototype._secondLastFrame = function () {
  return this.frames[this.frames.length - 2];
};

Game.prototype._calculateScore = function () {
  var scores = this.frames.map(function(i){return i.score;})
  this.score = scores.reduce(function(prev, curr){return prev + curr;});
};

Game.prototype._adjustScores = function () {
  var last = this._lastFrame();
  var secondLast = this._secondLastFrame();

  if(last.isSpare){
    last.score += this.currentFrame.throwArray[0];
  }

  if(last.isStrike){

    if(secondLast && secondLast.isStrike){
      secondLast.score += this.currentFrame.throwArray[0];
    }

    if(!this.currentFrame.isFinal && this.currentFrame.isStrike) {
      last.score += this.currentFrame.throwArray[0];

    } else {
      var firstScore = this.currentFrame.throwArray[0];
      var secondScore = this.currentFrame.throwArray[1];
      var total = firstScore + secondScore;
      last.score += total;
    }
  }
};

Game.prototype.gameOver = function () {
  if(this._framesPlayed >= 10){return true;}
  return false;
};

Game.prototype.checkForGameOver = function () {
  if(this.gameOver()){
    throw new Error('Game over');
  }
};

Game.prototype.checkIfFrameIsCompleted = function () {
  if(!this.currentFrame.isComplete){
    throw new Error('Finish frame first');
  }
};

Game.prototype.checkPreviousFrames = function () {
  if(this.frames[0]){
    this._adjustScores();
    this._calculateScore();
  }
};

Game.prototype.nextFrame = function () {
  this.checkForGameOver();
  this.checkIfFrameIsCompleted();
  this.checkPreviousFrames();
  this.score += this.currentFrame.score;
  this._framesPlayed += 1;
  this.frames.push(this.currentFrame);
  if(this._framesPlayed === 9){
    this.currentFrame = new this._frameFunc(true);
  } else {
    this.currentFrame = new this._frameFunc();
  }
};
