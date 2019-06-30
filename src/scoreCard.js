function ScoreCard(frame = new Frame) {
  this.frames = [frame];
  this.tenthFrameBonusRoll = 0;
};

ScoreCard.prototype.isFirstRoll = function () {
  return this.currentFrame()['firstRoll'];
};

ScoreCard.prototype.addScore = function (roll, frame = new Frame) {
  if (this.isTenthFrame() && this.tenthFrameBonusRoll === 0) {
    this.currentFrame().addScore(roll)
    this.tenthFrameBonusRoll ++
  } else if (this.isTenthFrame()) {
    if (this.frames[9].strike || this.frames[9].spare) {
      this.tenthFrameBonus(this.currentFrame(), roll);
    } else {
      return "game over"
    };
  } else {
    this.strikeBonus(roll);
    this.spareBonus(roll);
    if (this.currentFrame().addScore(roll)) {
      this.addFrame(frame);
    };
  };
};

ScoreCard.prototype.currentFrame = function () {
  return this.frames[this.frames.length - 1];
};

ScoreCard.prototype.secondLastFrame = function () {
  return this.frames[this.frames.length - 2];
};

ScoreCard.prototype.thirdLastFrame = function () {
  return this.frames[this.frames.length - 3];
};

ScoreCard.prototype.strikeBonus = function (roll) {
  if (this.frames.length > 2 && this.secondLastFrame().strike && this.thirdLastFrame().strike) {
    this.secondLastFrame().bonus += roll
    this.thirdLastFrame().bonus += roll
  } else if (this.frames.length > 1 && this.secondLastFrame().strike) {
    this.secondLastFrame().bonus += roll
  }
};

ScoreCard.prototype.spareBonus = function (roll) {
  if (this.frames.length > 1 && this.secondLastFrame().spare) {
    this.secondLastFrame().bonus += roll
  }
};

ScoreCard.prototype.addFrame = function (frame) {
  this.frames.push(frame)
};

ScoreCard.prototype.isTenthFrame = function () {
  return this.frames.length === 10;
};

ScoreCard.prototype.tenthFrameBonus = function (frame, roll) {
  console.log('inside tenth frame bonus')
  if (frame.strike && this.tenthFrameBonusRoll < 3) {
    frame.bonus += roll;
    this.tenthFrameBonusRoll ++;
  } else if (frame.spare && this.tenthFrameBonusRoll < 2) {
    frame.bonus += roll;
    this.tenthFrameBonusRoll ++;
  } else {
    return "game over";
  }
};
