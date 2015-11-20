function Game() {
  this.frames = [];
  this.gameRolls = [];
}

Game.prototype.roll = function(roll) {
  this.currentFrame().addRoll(roll);
  this.gameRolls.push(roll);
}

Game.prototype.score = function() {
  return this.rollsTotal() + this.calculateBonus();
}

// PRIVATE METHODS
Game.prototype.currentFrame = function() {
  if(this.isLastFrameFinished()) {
    this.addFrame();
  }
  return this.lastFrame();
}

Game.prototype.addFrame = function() {
  this.frames.push(new Frame());
}

Game.prototype.lastFrame = function() {
  if(this.frames.length === 0) {
    this.addFrame();
  }
  return this.frames[this.frames.length - 1];
}

Game.prototype.isLastFrameFinished = function() {
  var lastFrame = this.lastFrame();
  return lastFrame.isFinished();
}

Game.prototype.rollsTotal = function() {
  return this.gameRolls.reduce(function(a, b) { return a + b; }, 0);
}

Game.prototype.getBonuses = function() {
  return this.frames.filter(function(frame) {
    if(frame.bonus()) {return frame.bonus() }
  }).map(function(frame) {
    return frame.bonus();
  });
}

Game.prototype.calculateBonus = function() {
  var bonusTotal = 0;
  var rolls = this.gameRolls;

  var bonusIndexes = this.getBonuses().reduce(function(a, b) {
    return a.concat(b);
  }, []);

  bonusIndexes.forEach(function(i) { bonusTotal += rolls[i]; });

  return bonusTotal;
}
