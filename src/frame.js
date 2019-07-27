function Frame(number) {
  this._score = 0
  this._bonus = 0
  this._roll = 1
  this._number = number
};

Frame.prototype.addPoints = function(points) {
  this._score += points;
  this._roll += 1;
}
