function ScoreCard() {
  this._frames = [];
  this._totalScore = 0;
} ;

ScoreCard.prototype.frames = function () {
  return this._frames;
};

ScoreCard.prototype.roll = function (pins) {
  this._frames.push(pins);
};

ScoreCard.prototype.score = function () {
  for (var i = 0; i < 20; i++) {
    this._totalScore += this._frames[i];
  }
  return this._totalScore;
};
