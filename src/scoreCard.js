function ScoreCard(frame = new Frame) {
  this.frames = [frame];
};

ScoreCard.prototype.isFirstRoll = function () {
  return this.currentFrame()['firstRoll'];
};

ScoreCard.prototype.addScore = function (roll, frame = new Frame) {
  this.strikeBonus(roll);
  this.spareBonus(roll);
  if (this.currentFrame().addScore(roll)) {
    this.addFrame(frame);
  } else {
    return;
  }
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
