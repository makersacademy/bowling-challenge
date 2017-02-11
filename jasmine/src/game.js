Game = function() {
  this._f1Score = 0;
  this._f1Roll1 = 0;
  this._f1Roll2 = 0;
  this._f1StrikeType = "";

  this._f2Score = 0;
  this._f2Roll1 = 0;
  this._f2Roll2 = 0;
  this._f2StrikeType = "";


  this._f3Score = 0;
  this._f4Score = 0;
  this._f5Score = 0;
  this._f6Score = 0;
  this._f7Score = 0;
  this._f8Score = 0;
  this._f9Score = 0;
  this._f10Score = 0;

  this._totalScore = [];
};
Game.prototype.addBonus = function(strikeType, thisScore, lastScore) {
  if (strikeType === "X") {
    return thisScore = thisScore + 10;
  }
  else if (strikeType === "/") {
    return thisScore = thisScore + lastScore;
  } else {
    return thisScore = thisScore; //remains the same if no bonus
  }
};

Game.prototype.frame1 = function() {
  frame1 = new Frame();
  this._f1Roll1 = frame1.roll1();
  if (this._f1Roll1 === 10){ //if player gets a strike on 1st roll
    this._f1StrikeType = frame1.getStrikeType();
    this._f1Score = frame1.getFrameScore();
    this._totalScore.push(this._f1Score);
    return this._f1Score;
  }
  else {
    this._f1Roll2 = frame1.roll2();
    this._f1StrikeType = frame1.getStrikeType();
    this._f1Score = frame1.getFrameScore();
    this._totalScore.push(this._f1Score);
    return this._f1Score;
  }
};

Game.prototype.frame2 = function() {
  frame2 = new Frame();
  this._f2Roll1 = frame2.roll1();
  this._f2Roll2 = frame2.roll2();
  this._f2Score = frame2.getFrameScore();
  this._f2StrikeType = frame2.getStrikeType();
  this._totalScore.push(this._f2Score);
  this._f1Score = this.addBonus(this._f2StrikeType, this._f2Score, this._f1Score);
  return this._f2Score;
};




Game.prototype.frame3 = function() {
};

Game.prototype.frame4 = function() {
};

Game.prototype.frame5 = function() {
};

Game.prototype.frame6 = function() {
};

Game.prototype.frame7 = function() {
};

Game.prototype.frame8 = function() {
};

Game.prototype.frame9 = function() {
};

Game.prototype.frame10 = function() {
};
