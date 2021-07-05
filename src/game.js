function Game(){
  this.frames = [];
  this.totalScore = 0;
}

Game.prototype.addFrame = function (firstroll, secondroll) {
  if (this.frames.length < 9 ) {
    frame = new Frame();
    frame.update(firstroll, secondroll);
    this.frames.push(frame);
  }
};

Game.prototype.addFinalFrame = function (firstroll, secondroll, thirdroll) {
  finalFrame = new Frame();
  finalFrame.update(firstroll, secondroll);
  if (finalFrame._isStrike || finalFrame._isSpare) {
    finalFrame.rolls.push(thirdroll);
  }
  this.frames.push(finalFrame);
};

Game.prototype.calcTotalScore = function (frames) {
  for (var i=0; i < (this.frames.length); i++) {
    this.totalScore += this.frames[i].calcScore(this.frames[(i + 1)],
    this.frames[(i + 2)]);
  }
  return this.totalScore;
};
