var BowlingGame = function () {
  this.frames = [];
  this.totalScore = 0;
  this._gameSetup();
};

BowlingGame.prototype._gameSetup = function () {
  this._createFrames();
  this._frameNumber();
  this._setupLastFrame();
};

BowlingGame.prototype._createFrames = function () {
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame(this))
  };
};

BowlingGame.prototype._frameNumber = function () {
  for (var n = 0; n < 10; n++) {
    this.frames[n].number = n + 1
  };
};

BowlingGame.prototype._setupLastFrame = function () {
  this.frames[9].thirdRoll = 0
};

BowlingGame.prototype.frameScoreBonuses = function () {
  for (var i = 0; i < this.frames.length - 2; i++) {
    var currentFrame = this.frames[i];
    currentFrame.bonusScore;
  };
  this.frames[8].finalFrameBonus();
};
