function Game() {
  this.frameList = [];
  this.frameScore = [];
  this.score = null;
}

Game.prototype.addFrame = function (frame) {
  this.frameList.push(frame);
  this.frameScore.push(null);
  this._calculateScores(this.frameList.length - 1);
};

Game.prototype._calculateScores = function (index) {
  var frame = this.frameList[index],
    previous = this.frameList[index - 1],
    twoPrev = this.frameList[index - 2];
  if (!frame.isSpare() && !frame.isStrike()) {
    this.frameScore[index] = frame.first + frame.second;
  }
  if (previous && previous.isSpare()) {
    this.frameScore[index - 1] = 10 + frame.first;
  }
  if (previous && previous.isStrike() && !frame.isStrike()) {
    this.frameScore[index - 1] = 10 + frame.first + frame.second;
  }
  if (twoPrev && previous && twoPrev.isStrike() && previous.isStrike()) {
    this.frameScore[index - 2] = 20 + frame.first;
  }
  this._updateGameScore();
};

Game.prototype._updateGameScore = function () {
  var index = 0, total = 0;
  while (this.frameScore[index] && index < 10) {
    total += this.frameScore[index];
    index++;
  }
  if (index === 10) { this.score = total; }
};
