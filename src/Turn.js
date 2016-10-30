function Turn () {
  this._throws = []
  this.LENGTH_NORMAL = 2
  this.LENGTH_SPECIAL  = 3
  this.isOver = this.isTurnOver()
}

Turn.prototype.isAStrike = function () {
  return this._throws[0] === 10
};

Turn.prototype.isASpare = function () {
  return this._throws[0]+this._throws[1] === 10
};

Turn.prototype.totalScore = function () {
  return this._throws.calculate()
};

Turn.prototype.turnType = function () {

};

Turn.prototype.logThrow = function (pins) {
  this._throws.push(pins)
};

Turn.prototype.isTurnOver = function () {
  return this._throws.length === this.requiredThrows()
};

Turn.prototype.requiredThrows = function () {
  if (this.isAStrike() || this.isASpare()){
    return this.LENGTH_SPECIAL
  };
  return this.LENGTH_NORMAL
}

Turn.prototype.displayValue = function () {
  if (this.isAStrike() === true){
    return "X"
  }
  if (this.isASpare() === true){
    return this._throws[0]+"/"
  }
  return this._throws[0]+', '+this._throws[1]
}
