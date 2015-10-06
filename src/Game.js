function Game() {
  this.frameCount = 0;
  this.totalGameScore = 0;
}

Game.prototype.score = function(num1, num2) {
  frame = new Frame;
  frame.firstRoll(num1);
  frame.secondRoll(num2);
  this.totalGameScore = frame.TotalScore;
  this.frameCount += 1;
};
