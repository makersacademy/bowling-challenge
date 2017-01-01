var Game = function(frameKlass) {
  this.Frame = frameKlass;
  this._frames = [new this.Frame()];
};

Game.prototype.roll = function(score) {
  var frame = this._frames.pop();
  frame.roll(score);

  if (frame.isFinished()) {
    if (!frame.isSpecial()) {
      this._addBonusToFrames(frame._rolls);
    }
    this._frames.push(frame);
    if (this.currentFrame() === 9 ) {
      frame = new this.Frame(true);
    } else {
      frame = new this.Frame();
    }
  }
  this._frames.push(frame);
};

Game.prototype.finalSum = function() {
  return this._frames.reduce(function(sum, frame) {
    return sum + frame.finalScore();
  }, 0);
};

Game.prototype.currentFrame = function() {
  return this._frames.length;
};

Game.prototype._addBonusToFrames = function(bonusRolls) {
  this._frames = this._frames.map(function(frame) {
    if (frame.isSpecial()) {
      frame.bonus(bonusRolls);
    }
    return frame;
  });
};
