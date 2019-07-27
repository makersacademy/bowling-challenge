function Frame(number) {
  this._score = 0
  this._bonus = 0
  this._roll = 1
  this._number = number
  this._frameOver = false
};

Frame.prototype.addPoints = function(points) {
  this._score += points;
  if (points === 10) {
    this._frameOver = true;
  }
  this._roll += 1;
};

// Frame.prototype.calculateBonus = function()
