function Game(){
  this.frames = [];
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
