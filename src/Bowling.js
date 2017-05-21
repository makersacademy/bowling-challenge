var Bowling = function() {
  this._pinsLeft = 10;
  this._frames = [];
  this._currentFrameID = -1;
};
Bowling.prototype.isNewGame = function() { return this._currentFrameID === -1; };
Bowling.prototype.throwBall = function(pinsHit) {
  if (!this.isFinalFrame() &&
      (this.isNewGame() || this.getCurrentFrame().isOver())) {
    this.newFrame();
    this.hitPins(pinsHit);
  } else if (this.isFinalFrame() && !this.isFinalFrameOver()) {
    this.hitPins(pinsHit);
  } else if (this.isGameOver()) {
    throw new Error('Game over bud, go home.');
  } else {
    this.hitPins(pinsHit);
  }
};
Bowling.prototype.hitPins = function(pinsHit) {
  this._pinsLeft -= pinsHit;
  this.getCurrentFrame().score(pinsHit);
  this.resetPins();
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
  this._currentFrameID += 1;
  this._frames.push(new Frame());
};
Bowling.prototype.getCurrentFrame = function() {
  return this._frames[this._currentFrameID];
};
Bowling.prototype.totalFrameScore = function() {
  var totalFrameScore = 0;
  this._frames.forEach(function(frame) {
    totalFrameScore += frame.getFrameScore();
  });
  return totalFrameScore;
};
Bowling.prototype.totalBonus = function() {
  var totalBonus = 0;
  for (var index = 1; index < (this._frames.length); index++) {
    if (this._frames[index-1].isSpare()) {
      totalBonus += this._frames[index].getFirstScore();
    } else if (this._frames[index-1].isStrike()) {
      if (index !== 9) {
        if (!this._frames[index].isStrike()) {
          totalBonus += this._frames[index].getFrameScore();
        } else {
          totalBonus += this._frames[index].getFrameScore();
          totalBonus += this._frames[index+1].getFirstScore();
        }
      } else {
         totalBonus += this._frames[index].getSecondScore();
         totalBonus += this._frames[index].getThirdScore();
      }
    }
  }
  return totalBonus;
};
Bowling.prototype.totalScore = function() {
  return this.totalFrameScore() + this.totalBonus();
};
