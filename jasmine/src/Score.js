function Score() {

};

Score.prototype.calculate = function(frames, currentFrame) {
  var score = 0;
  for (i=1; i <= (currentFrame - 1); i++) {
    score = score + this.frameTotal(frames[i]);
  };
  return score;
};

Score.prototype.frameTotal = function(frame) {
  return (frame[0] + frame[1]);
};

Score.prototype.isStrike = function(frame) {
  return (frame[0] === 10);
};

Score.prototype.isSpare = function(frame) {
  return (this.frameTotal(frame) === 10);
};
