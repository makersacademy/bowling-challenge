function Score() {

}

Score.prototype.calculateFrameScore = function (frames) {
  if (frames.length === 1) {
    frames[0].score = frames[0].roll1 + frames[0].roll2;
  } else if (frames[0].isSpare) {
    frames[0].score = frames[0].roll1 + frames[0].roll2 + frames[1].roll1;
  } else if (frames[0].isStrike) {
    frames[0].score = frames[0].roll1 + frames[1].roll1 + frames[1].roll2;
  }
};
