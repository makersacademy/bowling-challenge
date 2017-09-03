
var FrameType = {
    PENDING : 0,
    GUTTER : 1,
    OPEN : 2,
    SPARE : 3,
    STRIKE : 4
};

var Frame = function () {
  this.scores = [];
  this.bonus = 0;
  this.frameType = FrameType.PENDING;
};

Frame.prototype.total = function () {
  if (this.scores.length === 0) {
    return 0;
  }
  score = this.scores.reduce(function(a, b){return a+b;});
  if (score > 10) {
    score = 10;
  }
  return score + this.bonus;
};

Frame.prototype.setBonus = function (score) {
  this.bonus = score;
}

Frame.prototype.getFrameType = function () {
  var frameTotal = this.total()
  var balls = this.scores.length

  if (balls === 1 && frameTotal === 10) {
    return FrameType.STRIKE;
  }
  else if (balls === 2 && frameTotal === 10) {
    return FrameType.SPARE;
  }
  else if (balls === 2 && frameTotal === 0) {
    return FrameType.GUTTER;
  }
  else if (balls === 2 && frameTotal > 0) {
    return FrameType.OPEN;
  }
  else {
    return FrameType.PENDING;
  }
};

Frame.prototype.addScore = function (score) {
  currentTotal = this.total();
  this.scores.push(score);
  this.frameType = this.getFrameType();
};
