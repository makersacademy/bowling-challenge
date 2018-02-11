function Match(frameClass) {
  this._frameClass = frameClass
  this._frames = [new frameClass]
  this._NOOFFRAMES = 10
  this._framesComplete = 0
  this._currentFrame = 0
  this._matchComplete = false
};

Match.prototype.matchComplete = function() {
  return this._matchComplete;
}

Match.prototype.pinsRemaining = function() {
  return this._frames[this._currentFrame].pinsRemaining();
}

Match.prototype._lastFrame = function() {
  return (this._currentFrame+1 >= this._NOOFFRAMES ? true : false );
}

Match.prototype._newFrame = function() {
  if (this._frames[this._currentFrame].isComplete()) {
    this._currentFrame = this._frames.length;
    this._frames.push(new this._frameClass(this._lastFrame()));
  }
}

Match.prototype._validate = function() {
  if (this._matchComplete){
    throw new Error('Invalid play - this match is complete');
  }
}
Match.prototype._setMatchComplete = function() {
  this._matchComplete = ( this._frames[this._currentFrame].isComplete()
                        && this._lastFrame());
}
Match.prototype.score = function() {
  score = 0
  for (i in this._frames){
    score += this._frames[i].score();
  }
  return score;
}

Match.prototype._addBonus = function(pins) {
  if (this._currentFrame > 0) {
    this._frames[this._currentFrame-1].addBonus(pins);
  }
  if (this._currentFrame > 1) {
    this._frames[this._currentFrame-2].addBonus(pins);
  }
}

Match.prototype.currentFrame = function(relativeFrame=0) {
  if (this._currentFrame + relativeFrame >= 0 ) {
    x =  this._frames[this._currentFrame+relativeFrame];
    return this._frames[this._currentFrame+relativeFrame];
  }
}

Match.prototype.currentFrameNumber = function() {
  return this._currentFrame + 1;
}

Match.prototype.thirdBall = function() {
  return this._frames[this._currentFrame].thirdBall()
}

Match.prototype.play = function(pins) {
  this._validate();
  this._newFrame();
  currentBall = this._frames[this._currentFrame].play(pins);
  this._addBonus(currentBall);
  this._setMatchComplete()
}
