var Bowling = function() {
  this._pinsLeft = 10;
  this._frames = [];
  this._currentFrameId = -1;
};
Bowling.prototype.pinsLeft = function() { return this._pinsLeft; };
Bowling.prototype.throwBall = function(pinsHit) {
  if ((!this.isFinalFrame()) &&
      (this._currentFrameId === -1 ||
       this.getCurrentFrame().isOver())) {
    this.newFrame();
    this._pinsLeft -= pinsHit;
    this.getCurrentFrame().score(pinsHit);
    this.resetPins();
  } else if (this.isFinalFrame() && !this.isFinalFrameOver()) {
    this._pinsLeft -= pinsHit;
    this.getCurrentFrame().score(pinsHit);
    this.resetPins();
  } else if (this.isGameOver()) {
    throw new Error('Game over bud, go home.');
  } else {
    this._pinsLeft -= pinsHit;
    this.getCurrentFrame().score(pinsHit);
    this.resetPins();
  }
};
Bowling.prototype.isFinalFrame = function() { return (this._frames.length === 10); };
Bowling.prototype.isFinalFrameOver = function() {
  return (this.isFinalFrame() &&
         (this.getCurrentFrame().getThirdScore() ||
         (!this.getCurrentFrame().isStrike() &&
         !this.getCurrentFrame().isSpare() &&
         this.getCurrentFrame().isOver())));
};
Bowling.prototype.resetPins = function() {
  if (this.getCurrentFrame().isOver()) { this._pinsLeft = 10; }
};
Bowling.prototype.isGameOver = function() {
  return this.isFinalFrame() && this.isFinalFrameOver();
};
Bowling.prototype.newFrame = function() {
  if (this.isGameOver()) { throw new Error('Game over bud, go home.'); }
  this._currentFrameId += 1;
  this._frames.push(new Frame());
};
Bowling.prototype.getFrames = function() { return this._frames; };
Bowling.prototype.getCurrentFrame = function() {
  return this._frames[this._currentFrameId];
};
Bowling.prototype.totalScore = function() {
  var totalScore = 0;
  this._frames.forEach(function(frame) {
    totalScore += frame.getFrameScore();
  });
  for (var index = 0; index < this._frames.length; ++index) {
    if (this._frames[index].isSpare()) {
      totalScore += this._frames[index+1].getFirstScore();
    } else if (this._frames[index].isStrike()) {
      totalScore += this._frames[index+1].getFrameScore();
      if (this._frames[index+1].isStrike()) {
        totalScore += this._frames[index+2].getFirstScore();
      }
    }
  }
  return totalScore;
};
