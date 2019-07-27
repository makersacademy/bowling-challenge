function Frame(frameNumber, previousFrame) {
  this._score = 0
  this._bonus = 0
  this._roll = 1
  this._frameNumber = frameNumber
  this._frameOver = false
};

Frame.prototype.score = function() {
  return this._score;
};

Frame.prototype.addPoints = function(points) {
  this._score += points;
  if ((points === 10) && (this._frameNumber !== 10)) {
    this._frameOver = true;
  }
  else if ((this._roll === 2) && (this._frameNumber !== 10)) {
    this._frameOver = true}
  else {
    this._roll += 1;
  }
};

Frame.prototype.calculateBonus = function(previousFrame) {
  if (previousFrame === null) {
    null
  }
  else {
    previousFrame._bonus += this._score;
  }
};

Frame.prototype.status = function() {
  return this._frameOver;
};
