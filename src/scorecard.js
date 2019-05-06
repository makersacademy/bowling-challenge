function ScoreCard() {
  this._frames = [];
  this._totalScore = 0;
  this._rolls = 0;
};

ScoreCard.prototype.frames = function () {
  return this._frames;
};

ScoreCard.prototype.roll = function (pins) {
  this._frames.push(pins);
};

ScoreCard.prototype.score = function () {
  for (var frame = 0; frame < 10; frame++) {
    if (this._frames[this._rolls] + this._frames[this._rolls + 1] === 10) {
      this._totalScore += this._frames[this._rolls] + this._frames[this._rolls + 1] + this._frames[this._rolls + 2];
    } else {
      this._totalScore += this._frames[this._rolls] + this._frames[this._rolls + 1];
    }
    this._rolls += 2;
  }
  return this._totalScore;
};
