function Score() {
  this.bonus = 0;
};

Score.prototype.calculate = function(frames, currentFrame) {
  var score = 0;
  for (i=1; i <= (currentFrame - 1); i++) {
    if (this.isStrike(frames[i])) {
      this.bonus = this.bonus + 2;
    }else if (this.isSpare(frames[i])) {
      this.bonus = this.bonus + 1;
    }else {
      score = score + this.frameTotal(frames[i]);
      if (this.bonus >= 2) {
        score = score + this.frameTotal(frames[i]) + 10;
        this.bonus = this.bonus - 2;
      }
      if (this.bonus === 1) {
        score = score + frames[i][0] + 10;
        this.bonus = this.bonus - 1;
      }
    }
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
