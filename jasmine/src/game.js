Game = function() {
  this._f1Score = 0; this._f1Roll1 = 0; this._f1Roll2 = 0; this._f1StrikeType = "";

  this._f2Score = 0; this._f2Roll1 = 0; this._f2Roll2 = 0; this._f2StrikeType = "";

  this._f3Score = 0; this._f3Roll1 = 0; this._f3Roll2 = 0; this._f3StrikeType = "";

  this._f4Score = 0;
  this._f5Score = 0;
  this._f6Score = 0;
  this._f7Score = 0;
  this._f8Score = 0;
  this._f9Score = 0;
  this._f10Score = 0;

  this._totalScore = [];
  this._totalBonusScore = [];
};
Game.prototype.addBonus = function(strikeType, thisScore, lastScore) {
  if (strikeType === "X") {
    thisScore = thisScore + 10;
    this._totalBonusScore.push(thisScore);
    return thisScore;
  }
  else if (strikeType === "/") {
    thisScore = thisScore + lastScore;
    this._totalBonusScore.push(thisScore);
    return thisScore;
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
  if (this._f2Roll1 === 10){ //if player gets a strike on 1st roll
    this._f2StrikeType = frame2.getStrikeType();
    this._f2Score = frame2.getFrameScore();
    this._totalScore.push(this._f2Score);
    this._f1Score = this.addBonus(this._f2StrikeType, this._f2Score, this._f1Score); //add bonus to last frame for strike
    return this._f2Score;
  }
  else {
    this._f2Roll2 = frame2.roll2();
    this._f2StrikeType = frame2.getStrikeType();
    this._f2Score = frame2.getFrameScore();
    this._totalScore.push(this._f2Score);
    this._f1Score = this.addBonus(this._f2StrikeType, this._f2Score, this._f1Score); //add bonus to last frame for strike
    return this._f2Score;
  }

};


Game.prototype.frame3 = function() {
  var a;
  var b;
  frame3 = new Frame();
  this._f3Roll1 = frame3.roll1();
  if (this._f3Roll1 === 10){ //if player gets a strike on 1st roll
    this._f3StrikeType = frame3.getStrikeType();
    this._f3Score = frame3.getFrameScore();
    this._totalScore.push(this._f3Score);
    // a = this.addBonus(this._f3StrikeType, this._f3Score, this._f2Score);
    // this._f2Score = this._f2Score + a; //add bonus to last frame for strike
    // b = this._f1Score = this.addBonus(this._f3StrikeType, this._f3Score, this._f1Score);
    // this._f1Score = this._f1Score + b; //add bonus to previous, previous frame for strike
    this._f2Score = this.addBonus(this._f3StrikeType, this._f3Score, this._f2Score); //add bonus to last frame for strike
    this._f1Score = this._f1Score + this.addBonus(this._f3StrikeType, this._f3Score, this._f1Score); //add bonus to previous, previous frame for strike
    return this._f3Score;
  }
  else {
    this._f3Roll2 = frame3.roll2();
    this._f3StrikeType = frame3.getStrikeType();
    this._f3Score = frame3.getFrameScore();
    this._totalScore.push(this._f3Score);
    this._f2Score = this.addBonus(this._f3StrikeType, this._f3Score, this._f2Score); //add bonus to last frame for strike
    this._f1Score = this._f1Score + this.addBonus(this._f3StrikeType, this._f3Score, this._f1Score); //add bonus to previous, previous frame for strike
    return this._f3Score;
  }
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
