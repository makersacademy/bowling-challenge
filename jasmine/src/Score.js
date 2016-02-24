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
      score = score + this.strikeBonus(frames[i]);
      score = score + this.spareBonus(frames[i]);
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

Score.prototype.strikeBonus = function(frame) {
  if (this.bonus >= 2) {
    this.bonus = this.bonus - 2;
    return (this.frameTotal(frame) + 10);
  } else {return 0;}
};

Score.prototype.spareBonus = function(frame) {
  if (this.bonus === 1) {
    this.bonus = this.bonus - 1;
    return (frame[0] + 10);
  } else {return 0;}
};
