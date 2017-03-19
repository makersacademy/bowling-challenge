function Game () {
  this.totalScore = 0;
  this.frame = 1;
  // this.scorecard = {};
  this.log = [];
};

Game.prototype.nextFrame = function() {
  if (this.isFinished()) {
    return
  } else {
    this.frame ++;
  };
};

// Game.prototype.addPoints = function(points) {
//   this.scorecard[this.frame] = points
//   this.totalScore += points;
//   this.nextFrame();
// };

Game.prototype.sumPoints = function() {
  total = 0;
  this.log.forEach(function(frame) {
    total += frame.totalScore;
  });
  this.totalScore = total;
};

Game.prototype.addStrikeBonus = function() {
  var index = this._getPreviousFrameIndex()
  if (this._previousFrameIsStrike()) {
    return this.log[index].totalScore += this.log[index + 1].totalScore;
  };
};

Game.prototype.addSpareBonus = function() {
  var index = this._getPreviousFrameIndex()
  if (this._previousFrameIsSpare()) {
    return this.log[index].totalScore += this.log[index + 1].score[0];
  };
};

Game.prototype._getPreviousFrameIndex = function () {
  return (this.log.length - 2)
};

Game.prototype._previousFrameIsStrike = function() {
  var index = this._getPreviousFrameIndex()
  return this.log[index].strike === true
};

Game.prototype._previousFrameIsSpare = function() {
  var index = this._getPreviousFrameIndex()
  return this.log[index].spare === true
};

Game.prototype.saveFrame = function(frame) {
  this.log.push(frame);
};

Game.prototype.isFinished = function() {
  return this.frame === 10;
};
