function Frame() {
  this.strike = false;
  this.spare = false;
  this.firstRoll = true;
  this.score = 0;
  this.bonus = 0;
};

Frame.prototype.addScore = function (score) {
  this.score += score;
};


function ScoreCard(frame = new Frame) {
  this.frames = [frame]
  this.currentFrame = this.frames[this.frames.length - 1]
};

ScoreCard.prototype.isFirstRoll = function () {
  return this.currentFrame['firstRoll'];
};

ScoreCard.prototype.addScore = function (roll) {
  this.currentFrame.addScore(roll)
};
