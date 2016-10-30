function sum(arr) {
  return arr.reduce(function(memo, elem) {
    return memo + elem;
  }, 0);
}

function Bowling() {
  this._frames = [];
  this._currentFrame = [];
}

Bowling.prototype.knockDown = function(knockedPins) {
  if (this.isCurrentFrameFinished()) {
    throw new Error('Current frame is finished')
  }
  if (this.getCurrentFrame() + knockedPins > 10) {
    throw new Error('Invalid number of pins')
  }
  this._currentFrame.push(knockedPins);
};

Bowling.prototype.nextFrame = function() {
  if (!this.isCurrentFrameFinished()) {
    throw new Error('Current frame is not finished')
  }
  this._frames.push(this._currentFrame);
  this._currentFrame = [];
}

Bowling.prototype.getCurrentFrame = function() {
  return sum(this._currentFrame);
};

Bowling.prototype.isCurrentFrameFinished = function() {
  return (this._currentFrame[0] === 10 || this._currentFrame.length === 2);
};

Bowling.prototype.frameScore = function(i) {
  var score = sum(this._frames[i]);
  if (this._frames[i][0] === 10) {
    // Strike!
    score += this._frames[i + 1][0] + this._frames[i + 1][1];
  } else if (score === 10) {
    // Spare!
    score += this._frames[i + 1][0];
  }
  return score;
};

Bowling.prototype.totalScore = function() {
  return this._frames.reduce(function(memo, frame, i) {
    return memo + this.frameScore(i);
  }.bind(this), 0);
};
