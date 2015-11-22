function Game() {
  this.frames = [];
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame());
  }
  this.frames[this.frames.length - 1].isLastFrame = true;
  this.rolls = [];
  this.bonusIndexes = [];
}

Game.prototype.roll = function(number) {
  // var pinsKnockedDown = Math.floor(Math.random() * (this.currentFrame().standingPins));
  var currentFrame = this.currentFrame();
  currentFrame.updateFrame(number);
  this.rolls.push(number);
  if (!currentFrame.isLastFrame) {
    this.applyBonus(currentFrame);
  }
};

Game.prototype.currentFrame = function() {
  return this.frames.filter(function(frame) {
    return !frame.isOver()
  })[0];
}

Game.prototype.applyBonus = function(frame) {
  if (frame.isStrike()) {
    this.bonusIndexes.push(this.rolls.length);
    this.bonusIndexes.push(this.rolls.length + 1);
  }
  if (frame.isSpare()) {
    this.bonusIndexes.push(this.rolls.length);
  }
};
