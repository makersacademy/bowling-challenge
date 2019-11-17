Calculator = function(frames) {
  this._frames = frames
};

Calculator.prototype.classify = function(frame) {
    if (frame[0] === 10) {
      // STRIKE
      console.log("STRIKE")
    } else if (frame[0] + frame[1] === 10) {
      // SPARE
      console.log("SPARE")
    } else {
      // NORMAL ROLL
      console.log("NORMAL ROLL")
      score = this.normalScore(this._frames[i]);
    };
};

Calculator.prototype.normalScore = function(frame) {
  return frame[0] + frame[1];
};


Calculator.prototype.spareScore = function(frame1, frame2) {
  return frame1[0] + frame1[1] + frame2[0];
};
