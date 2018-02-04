function Match(frameClass) {
  this._frameClass = frameClass
  this._frames = [new frameClass]
  this._NOOFFRAMES = 10
  this._framesComplete = 0
  this.currentFrame = 0
  this._matchComplete = false
};

Match.prototype._lastFrame = function() {
  return (this.currentFrame+1 >= this._NOOFFRAMES ? true : false );
}

Match.prototype._newFrame = function() {
  if (this._frames[this.currentFrame].isComplete()) {
    this.currentFrame = this._frames.length;
    this._frames.push(new this._frameClass(this._lastFrame()));
  }
}

Match.prototype._validate = function() {
  if (this._matchComplete){
    throw new Error('Invalid play - this match is complete');
  }
}
Match.prototype._setMatchComplete = function() {
  this._matchComplete = ( this._frames[this.currentFrame].isComplete()
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
  if (this.currentFrame > 0) {
    this._frames[this.currentFrame-1].addBonus(pins);
  }
  if (this.currentFrame > 1) {
    this._frames[this.currentFrame-2].addBonus(pins);
  }
}

Match.prototype.play = function(pins) {
  this._validate();
  this._newFrame();
  currentBall = this._frames[this.currentFrame].play(pins);
  this._addBonus(currentBall);
  this._setMatchComplete()
}
