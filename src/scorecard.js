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
    if (this._isASpare()) {
      this._totalScore += this._spareScore();
      this._rolls += 2;
    } else if (this._isAStrike()) {
      this._totalScore += this._strikeScore();
      this._rolls ++;
    } else {
      this._totalScore += this._normalScore();
      this._rolls += 2;
    }
  }
  return this._totalScore;
};

ScoreCard.prototype._isASpare = function () {
  return this._frames[this._rolls] + this._frames[this._rolls + 1] === 10;
};

ScoreCard.prototype._spareScore = function () {
  return this._frames[this._rolls] + this._frames[this._rolls + 1] + this._frames[this._rolls + 2];
};

ScoreCard.prototype._isAStrike = function () {
  return this._frames[this._rolls] === 10;
};

ScoreCard.prototype._strikeScore = function () {
  return this._frames[this.rolls] + this._frames[this._rolls + 1] + this._frames[this._rolls + 2];
};

ScoreCard.prototype._normalScore = function () {
  return this._frames[this._rolls] + this._frames[this._rolls + 1];
};
