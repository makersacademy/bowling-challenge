var Game = function(frameKlass) {
  this.Frame = frameKlass;
  this._frames = [new this.Frame()];
  this.MAXFRAMES = 9;
};

Game.prototype.roll = function(score) {
  var frame = this._frames.pop();
  frame.roll(score);
  if (frame.isFinished()) {
    if (!frame.isSpecial()) {
      this._addBonusToFrames(frame._rolls);
    }
    this._frames.push(frame);
    if (this.currentFrame() < this.MAXFRAMES) {
      frame = new this.Frame();
    }
    if (this.currentFrame() === this.MAXFRAMES ) {
      if (frame.isSpare() === true) {
        return 'This was a spare, roll once again only!'
      } else if (frame.isStrike() === true) {
        return 'This was a strike in frame 10, you have two more rolls!'
      }
    }
  }
  if (this.isGameCompleted() === true) {
    return this.finalSum();
    return 'Game has finished';
  } else {
    this._frames.push(frame);
  }
};


Game.prototype.finalSum = function() {
  return this._frames.reduce(function(sum, frame) {
    return sum + frame.finalScore();
  }, 0);
};

Game.prototype.currentFrame = function() {
  return this._frames.length;
};

Game.prototype.completedFrames = function() {
  return this._frames.length - 1;
};

Game.prototype._addBonusToFrames = function(bonusRolls) {
  this._frames = this._frames.map(function(frame) {
    if (frame.isSpecial()) {
      frame.bonus(bonusRolls);
    }
    return frame;
  });
};

Game.prototype.isGameCompleted = function() {
  return this._frames.length === 10;
};
