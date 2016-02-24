function Score() {
  this.strikeCount = 0;
  this.spareCount = 0;
  this.score = 0;
  this.spareBonus = 0;
  this.strikeBonus = 0;
};

Score.prototype.calculate = function(frames, currentFrame) {
  for (i=1; i <= (currentFrame - 1); i++) {
    this.spareBonus = this.spareBonus + this.spareBonusCalculate(frames[i]);
    this.calculationLoop(frames[i]);
  };
  return this.score;
};

Score.prototype.calculationLoop = function(frame) {
  if (this.isStrike(frame)) {
    this.strikeCount = this.strikeCount + 1;
  }else if (this.isSpare(frame)) {
    this.strikeBonus = this.strikeBonus + this.strikeBonusCalculate(frame);
    this.spareCount = 1;
  }else {
    this.score = this.score + this.frameTotal(frame) + this.strikeBonus + this.spareBonus + this.strikeBonusCalculate(frame);
    this.bonusReset();
  }
};

Score.prototype.bonusReset = function(frame) {
  this.spareBonus = 0;
  this.strikeBonus = 0;
};

Score.prototype.frameTotal = function(frame) {
  return (frame[0] + frame[1]);
};

Score.prototype.isStrike = function(frame) {
  return (frame[0] === 10);
};

Score.prototype.isSpare = function(frame) {
  return (this.frameTotal(frame) === 10 && !(this.isStrike(frame)));
};

Score.prototype.strikeBonusCalculate = function(frame) {
  var bonusScore = 0
  if (this.strikeCount > 0) {
    while (this.strikeCount > 0) {
      bonusScore = bonusScore + this.strikeStreak(frame);
      this.strikeCount --;
    }
    return bonusScore;
  } else {return 0;}
};

Score.prototype.strikeStreak = function(frame) {
  if (this.strikeCount === 1) {
      return (this.frameTotal(frame) + 10);
  } else if (this.strikeCount === 2) {
      return (20 + frame[0]);
  } else {
      return 30;
  }
};


Score.prototype.spareBonusCalculate = function(frame) {
  if (this.spareCount === 1) {
    this.spareCount = 0
    return (frame[0] + 10);
  } else {return 0;}
};
