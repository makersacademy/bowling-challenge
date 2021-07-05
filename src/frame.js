

Frame = function () {
  this.framescoreTotal = 0;
  this.frameScoreOne = 0;
  this.frameScoreTwo = 0;
  this.frameScoreBonus = 0;
  this.strikeOrSpare;
};

Frame.prototype.totalUpFrameScore = function () {
  this.framescoreTotal = this.frameScoreOne + this.frameScoreTwo + this.frameScoreBonus;
  return this.framescoreTotal;
};

Frame.prototype.updateFrameScoreOne = function (score) {
  if (score == 10) {
    this.strikeOrSpare = "Strike!"
  };
  this.frameScoreOne = score;
  return this.frameScoreOne;
};

Frame.prototype.updateFrameScoreTwo = function (score) {
  if (score + this.frameScoreOne == 10) {
    this.strikeOrSpare = "Spare!"
  }
  this.frameScoreTwo = score;
  return this.frameScoreTwo;
};

Frame.prototype.bonusFrameScore = function (score) {
  this.frameScoreBonus = score;
  return this.frameScoreBonus;
};
