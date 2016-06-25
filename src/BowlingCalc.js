function BowlingCalc() {
  this._score = 0;
}

BowlingCalc.prototype = {

  getScore: function() {
    return this._score;
  }
}
