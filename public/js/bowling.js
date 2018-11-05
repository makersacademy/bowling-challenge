function Bowling() {
  this.frameScore = 0;
  this.numberOfBowls = 0;
  this.totalScore = 0;
  this.totalFrames = 0;
}

Bowling.prototype.bowl = function (number) {

  if (this.numberOfBowls === 2) {
    this.frameScore = 0;
    this.numberOfBowls = 0;
  }

  this.frameScore += number;

  if (this.frameScore > 10) {
    this.frameScore -= number;
    throw new Error("A score above 10 in a frame is not possible");
  }

  this.numberOfBowls ++;

  if (this.numberOfBowls === 2) {
    this.totalScore += this.frameScore;
    this.totalFrames ++;
  }

};

Bowling.prototype.getFrameScore = function (number) {
  return this.frameScore;
};

Bowling.prototype.getTotalScore = function () {
  return this.totalScore;
};

Bowling.prototype.getTotalFrames = function () {
  return this.totalFrames;
};
