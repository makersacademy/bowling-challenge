Game = function() {
  this._f1Score = 0;
  this._f2Score = 0;
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

Game.prototype.frame1 = function() {
  frame1 = new Frame();
  a = frame1.roll1();
  b = frame1.roll2();
  c = frame1.getFrameScore();
  this._f1Score = c;
  this._totalScore.push(this._f1Score);
  d = frame1.getStrikeType();
  return this._f1Score;
};

Game.prototype.frame2 = function() {
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
