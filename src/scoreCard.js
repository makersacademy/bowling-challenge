function ScoreCard () {
  f1 = new Frame();
  f2 = new Frame();
  f3 = new Frame();
  f4 = new Frame();
  f5 = new Frame();
  f6 = new Frame();
  f7 = new Frame();
  f8 = new Frame();
  f9 = new Frame();
  f10 = new Frame();
  this.frames = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]
  this.currentFrame = 0
}

ScoreCard.prototype.frameRolls = function (roll1, roll2) {
  this.frames[this.currentFrame].rolls(roll1, roll2);
  this.currentFrame += 1;
};
