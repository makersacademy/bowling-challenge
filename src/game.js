function Game() {
  this.currentScore = 0;
  this.frames = [new Frame];
  this.isInPlay = true;
}

Game.prototype.roll = function (pins) {
  if(this.isInPlay){
    this.currentFrame().addRoll(pins);
    this.manageFrame();
  }
};

Game.prototype.totalScore = function () {
  var score = 0;
  this.frames.forEach(function(frame) {
    score += frame.score();
  });
  return score;
};

Game.prototype.manageFrame = function() {
  if(this.isGameOver()){
    this.isInPlay = false;
  } else if(this.isFrameOver()) {
    this.currentFrame().calcBonus();
    this.addBonus();
    this.frames.push(new Frame)
  };
};

Game.prototype.isFrameOver = function() {
  if(this.currentFrame().score() == 10) {
    return true;
  } else if(this.currentFrame().rolls().length === 2) {
    return true
  } else {
    return false
  }
};

Game.prototype.isGameOver = function() {
  return this.frames.length === 10 && this.isFrameOver();
};

Game.prototype.currentFrame = function() {
  return this.frames[this.frames.length - 1];
};

Game.prototype.lastFrame = function() {
  return this.frames[this.frames.length - 2];
};

Game.prototype.addBonus = function() {
  var lastFrame = this.lastFrame();
  if(typeof(lastFrame) !== 'undefined') {
    switch (lastFrame.bonus()) {
      case 'spare':
        lastFrame.addToScore(this.currentFrame().rolls()[0]);
        break;
      case 'strike':
        lastFrame.addToScore(this.currentFrame().score());
        break;
      default:
    }
  }
};
