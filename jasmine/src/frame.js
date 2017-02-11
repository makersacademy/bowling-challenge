Frame = function() {
  this._roll1 = 0;
  this._roll2 = 0;
  this._score = 0;
  this._strikeType = "";
};

Frame.prototype.roll1 = function() {
  // var x = [];
  // x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // this._roll1 = x[Math.floor(Math.random() * x.length)];
  this._roll1 = this._roll1 + 10;
  this._score = this._score + this._roll1;
  return this._roll1;
};

Frame.prototype.roll2 = function() {
  var y = [];
  // y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // this._roll2 = y[Math.floor(Math.random() * y.length)];
  this._roll1 = this._roll1 + 0;
  this._score = this._score + this._roll2;
  return this._roll2;
};

Frame.prototype.getFrameScore = function() {
  return this._score;
};

Frame.prototype.getStrikeType = function() {
  if ( this._roll1 === 10 || this._roll2 === 10 ) {
    this._strikeType = this._strikeType + "X"; //strike
    x = this._strikeType;
    return this._strikeType;
  } else if (this._roll1 + this._roll2 === 10) {
      this._strikeType = this._strikeType + "/"; //half strike
      return this._strikeType;
  } else {
      return "BLAH!";//this._strikeType; //no bonus is ""
  }
};
