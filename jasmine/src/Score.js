function Score() {
  this.strikeCount = 0;
  this.spareCount = 0;
};

Score.prototype.calculate = function(frames, currentFrame) {
  var score = 0;
  for (i=1; i <= (currentFrame - 1); i++) {
    if (this.isStrike(frames[i])) {
      this.strikeCount = this.strikeCount + 1;
    }else if (this.isSpare(frames[i])) {
      this.spareCount = this.spareCount + 1;
    }else {
      score = score + this.frameTotal(frames[i]);
      score = score + this.strikeBonusCalculate(frames[i]);
      score = score + this.spareBonusCalculate(frames[i]);
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

Score.prototype.strikeBonusCalculate = function(frame) {
  var bonusScore = 0
  if (this.strikeCount > 0) {
    while (this.strikeCount > 0) {
      if (this.strikeCount === 1) {
        bonusScore = bonusScore + (this.frameTotal(frame) + 10);
      } else if (this.strikeCount === 2) {
        bonusScore = bonusScore + (20 + frame[0]);
      } else {
        bonusScore = bonusScore + 30;
      }
      this.strikeCount --;
    }
    return bonusScore;
  } else {return 0;}
};

Score.prototype.spareBonusCalculate = function(frame) {
  if (this.spareCount === 1) {
    this.spareCount = this.spareCount - 1;
    return (frame[0] + 10);
  } else {return 0;}
};
