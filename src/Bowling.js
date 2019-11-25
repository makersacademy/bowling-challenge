function Bowling(){
  this._score = 0;
  this._strike = 10;
}

Bowling.prototype.increaseScore = function () {
  if (this._score === this._strike) throw ("Strike: Maximum frame score attained");
      this._score += 1;
};

Bowling.prototype.decreaseScore = function () {
  this._score -= 1;
};

Bowling.prototype.frameSubTotal = function (r1, r2) {
  this._score += r1 + r2;
};
