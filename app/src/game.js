function Game(frame) {
  this._currentScore = 0;
  this._currentFrame = frame || new Frame();
  this._frameLog = [];
}

Game.prototype.logRoll = function(roll) {
  this._currentFrame.addRoll(roll);
  this._addBonuses(roll);
  if (this._currentFrame.isComplete()) {
    this._logFrame();
  }
};

Game.prototype.getScore = function() {
  return this._currentScore;
};

Game.prototype.getFrame = function(frame) {
  return this._frameLog[frame - 1];
};

Game.prototype._logFrame = function() {
  var frame = this._currentFrame.getFrameData();
  this._frameLog.push(frame);
  this._currentScore += frame.total;
  this._currentFrame = new Frame();
};

Game.prototype._addBonuses = function(roll) {
  var totalBonus = 0;
  this._frameLog.forEach(function(frame) {
    if (frame.bonus > 0) {
      frame.total += roll;
      totalBonus += roll;
      frame.bonus -= 1;
    }
  });
  this._currentScore += totalBonus;
};
