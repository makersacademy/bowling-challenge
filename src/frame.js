Frame = function() {
  this._roll1 = 0;
  this._roll2 = 0;
  this._roll3 = 0;
  this._frameScore = 0;
  this._strikeType = "";
};

Frame.prototype.playRandomRoll1 = function() {
  var x = [];
  x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this._roll1 = x[Math.floor(Math.random() * x.length)];
  this._frameScore = this._frameScore + this._roll1;
  this.getStrikeType();
  return this._roll1;
}

Frame.prototype.playRandomRoll2 = function() {
  var y = [];
  y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this._roll2 = y[Math.floor(Math.random() * y.length)];
  this._frameScore = this._frameScore + this._roll2;
  this.getStrikeType();
  return this._roll2;
}

Frame.prototype.setRoll1 = function(roll_value) {
  this._roll1 = this._roll1 + roll_value;
  this._frameScore = this._frameScore + this._roll1;
  this.getStrikeType();
  //if a strike
};

Frame.prototype.setRoll2 = function(roll_value) {
  this._roll2 = this._roll2 + roll_value;
  this._frameScore += this._roll2;
  this.getStrikeType();
};

Frame.prototype.getExtraRoll = function() {
  // var y = [];
  // y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // this._roll3 = y[Math.floor(Math.random() * y.length)];
  this._roll3 = 10;
  this.addBonus(this._roll3);
  return this._roll3;
};

Frame.prototype.getRoll1Score = function() {
  return this._roll1;
};

Frame.prototype.getRoll2Score = function() {
  return this._roll2;
};

Frame.prototype.getFrameScore = function() {
  return this._frameScore;
};

Frame.prototype.addBonus = function(bonus) {
  this._frameScore += bonus;
};

Frame.prototype.getStrikeType = function() {
  if ( this._roll1 === 10 ) {
    // this._strikeType = this._strikeType + "X"; //strike
    this._strikeType = "X"; //strike
    return this._strikeType;

  } else if ( this._roll1 + this._roll2 === 10) {
      // this._strikeType = this._strikeType + "/"; //half strike
      this._strikeType = "/";
      return this._strikeType;

  } else {
      return "BLAH!";//this._strikeType; //no bonus is ""
  }
};
