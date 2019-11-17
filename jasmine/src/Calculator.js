Calculator = function(frames) {
  this._frames = frames
};

Calculator.prototype.classify = function() {
  for(i = 0; i < this._frames.length; i++) {
    if (this._frames[i][0] === 10) {
      // STRIKE
      console.log("STRIKE")
    } else if (this._frames[i][0] + this._frames[i][1] === 10) {
      // SPARE
      console.log("SPARE")
    } else {
      // NORMAL ROLL
      console.log("NORMAL ROLL")
      // score = this.normalScore(this._frames[i]);
    };
  };
};

Calculator.prototype.normalScore = function(frame) {
  return frame[0] + frame[1];
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
