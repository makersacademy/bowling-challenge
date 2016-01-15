function Game(frame) {
  this._currentScore = 0;
  this._currentFrame = frame || new Frame();
  this._frameLog = [];
}

Game.prototype.logRoll = function(roll) {
  if (this._gameComplete()) {
    throw 'Game is complete, cannot log more!';
  }
  this._currentFrame.addRoll(roll);
  this._addBonuses(roll);
  if (this._currentFrame.isComplete()) {
    this._logFrame();
  }
};

Game.prototype.getScore = function() {
  return this._currentScore;
};

Game.prototype.getCurrentFrame = function(frame) {
  return this._currentFrame.getFrameData();
};

Game.prototype.getFrames = function() {
  return this._frameLog;
};

Game.prototype._logFrame = function() {
  var frame = this._currentFrame.getFrameData();
  this._frameLog.push(frame);
  this._currentScore += frame.total;
  if (this._frameLog.length === 9) {
    this._currentFrame = new FinalFrame();
  } else {
    this._currentFrame = new Frame();
  }
};

Game.prototype._addBonuses = function(roll) {
  var totalBonus = 0;
  this._frameLog.forEach(function(frame, index) {
    if (frame.bonus > 0) {
      frame.total += roll;
      totalBonus += roll;
      frame.bonus -= 1;
    }
  });
  this._currentScore += totalBonus;
};

Game.prototype._gameComplete = function() {
  return this._frameLog.length === 10;
};
