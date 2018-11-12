function FrameScore() {
};

FrameScore.prototype._isMoreThanTen = function(a, b) {
  return ( a + b > 10);
}

FrameScore.prototype._isAStrike = function(a, b) {
  return (a === 10);
}

FrameScore.prototype._isASpare = function(a, b) {
  return ( a + b === 10);
}

FrameScore.prototype.frame = function(a, b) {
  if (this._isMoreThanTen(a,b)) {
    throw 'Incorrect score entered.';
  }
  else if (this._isAStrike(a,b)) {
    return 'Strike';
  }
  else if (this._isASpare(a,b)) {
    return 'Spare';
  } else {
    return (a + b) ;
  }
}
