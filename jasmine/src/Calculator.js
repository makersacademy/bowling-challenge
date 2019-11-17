Calculator = function(frames) {
  this._frames = frames
};

Calculator.prototype.classify = function() {
  totalScore = 0
  for(i = 0; i < (this._frames.length - 1); i++) {
    if (this._frames[i][0] === 10) {
      // STRIKE
      totalScore += this.strikeScore(this._frames[i], this._frames[i+1], this._frames[i+2]);
    } else if (this._frames[i][0] + this._frames[i][1] === 10) {
      // SPARE
      totalScore += this.spareScore(this._frames[i], this._frames[i+1]);
    } else {
      // NORMAL ROLL
      totalScore += this.normalScore(this._frames[i]);
    };
  };
  totalScore += this.normalScore(this._frames[9]);
  return totalScore;
};

Calculator.prototype.normalScore = function(frame) {
  return frame.reduce(function (accumulator, roll) {
    return accumulator + roll;
  }, 0);
};

Calculator.prototype.spareScore = function(frame1, frame2) {
  return frame1[0] + frame1[1] + frame2[0];
};

Calculator.prototype.strikeScore = function(frame1, frame2, frame3) {
  if (frame2[0] === 10) {
    return frame1[0] + frame2[0] + frame3[0];
  } else {
    return frame1[0] + frame2[0] + frame2[1];
  };
};
