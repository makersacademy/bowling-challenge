function Score() {

}

Score.prototype.calculateFrameScore = function ( frame ) {
  return frame.roll1 + frame.roll2;
};
