function Game() {
  this.frameList = new Array;
  this.frameScore = new Array;
  this.score = null;
};

Game.prototype.addFrame = function(frame) {
  this.frameList.push(frame);
  this.frameScore.push(null);
  this._calculateScores(this.frameList.length - 1);
};

Game.prototype._calculateScores = function(index) {
  var frame = this.frameList[index];
  if (!frame.isSpare() && !frame.isStrike()) {
    this.frameScore[index] = frame.first + frame.second;
  };
};
