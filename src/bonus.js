function Bonus(type) {
  this._type = type;
  this._score = 0;
}

Bonus.prototype.type = function () {
  return this._type;
};

Bonus.prototype.calculate = function(frame) {
  if (this.type() == "strike") {
    this._score = frame.getScore();
  } else if (this.type() == "spare") {
    this._score = frame.getFirstRoll();
  }
};

Bonus.prototype.getScore = function () {
  return this._score;
};
