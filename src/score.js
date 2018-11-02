function Score() {

}

Score.prototype.calculateFrameScore = function (frames) {
  if (frames.length === 1) {
    return frames[0].roll1 + frames[0].roll2;
  } else if (frames.length === 2) {
    return frames[0].roll1 + frames[0].roll2 + frames[1].roll1;
  }
};
