function Frame(lastFrame) {
  this._ballsRemaining = 2
  this._lastFrame = lastFrame
  this._bonusBalls = 0
  this._score = 0
};

Frame.prototype.isComplete = function() {
  return ( this._ballsRemaining === 0 ? true : false ) ;
};

Frame.prototype.ballsRemaining = function() {
  return this._ballsRemaining;
};

Frame.prototype.isStrike = function(pins) {
  return ((pins === "X" || pins === 10)
          && this._ballsRemaining === 2
          ? true: false );
};

Frame.prototype.isSpare = function(pins) {
  return (this._score === 10
          && this._ballsRemaining === 1
          ? true: false );
};

Frame.prototype._decode = function(pins) {
  if (pins = "X") {
    return 10;
  } else if (pins = "/") {
    return 10 - this._score
  } else if (pins = "-") {
    return 0
  } else {
    return pins
  };
};

Frame.prototype.score = function(pins) {
  this._score = this._decode(pins);
};

Frame.prototype.play = function(pins = "-") {
  this.score(pins);
  if ( this.isStrike(pins) ){ this._bonusBalls = 2 };
  this._ballsRemaining -= 1;
};

Frame.prototype.bonusBalls = function() {
  return this._bonusBalls;
};

Frame.prototype.lastFrame = function() {
  return this._lastFrame;
};
