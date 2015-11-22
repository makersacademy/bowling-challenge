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

  Game.prototype.rollScore = function() {
    return this.rolls.reduce(function(roll, memo) {
      return roll + memo;
    }, 0);
  }

  Game.prototype.bonusScore = function() {
    var rolls = this.rolls;
    return this.bonusIndexes.map(function(index) {
      return rolls[index];
    }).reduce(function(roll, memo) {
      return roll + memo;
    })
  }
};
