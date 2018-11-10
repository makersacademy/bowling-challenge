function ScoreLogic() {
};

ScoreLogic.prototype._isNoMoreThanTen = function(a, b) {
  return ( a + b <= 10);
}


ScoreLogic.prototype._isAStrike = function(a, b) {
  return (a === 10);
}

ScoreLogic.prototype._isASpare = function(a, b) {
  return ( a + b === 10);
}

ScoreLogic.prototype.frame = function(a, b) {
  if (!this._isNoMoreThanTen(a,b)) {
    throw 'Incorrect score entered.';
  }
  else if (this._isAStrike(a,b)) {
    return 'strike';
  }
  else if (this._isASpare(a,b)) {
    return 'spare';
  }
}
