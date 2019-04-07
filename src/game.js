function Game() {
  this.currentScore = 0;
  this.frames = [new Frame];
  this.isInPlay = true;
}

Game.prototype.roll = function (pins) {
  var frameIndex = this.frames.length
  if(this.isInPlay){
    this.currentFrame().addRoll(pins, frameIndex);
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
  if(this.frames.length === 10 && this.isInPlay === true) {
    this.manageFinalFrame();
  }
    else if(this.isGameOver()){
    this.isInPlay = false;
  } else if(this.isFrameOver()) {
    this.currentFrame().calcBonus();
    this.addBonus();
    this.addChainStrikeBonus();
    this.frames.push(new Frame)
  };
};

Game.prototype.manageFinalFrame = function() {
  var rollCount = this.currentFrame().rolls().length;
  var rollSum = this.currentFrame().score();
  switch(rollCount) {
    case 1:
      this.addBonus();
      this.addChainStrikeBonus();
      break;
    case 2:
      this.addFinalBonus();
      if(rollSum < 10) { this.isInPlay = false }
      break;
    default:
      this.isInPlay = false
  }
};

Game.prototype.isFrameOver = function() {
  if(this.currentFrame().score() == 10) {
    return true;
  } else if(this.currentFrame().rolls().length >= 2) {
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
Game.prototype.addFinalBonus = function() {
  var lastFrame = this.lastFrame();
  if(lastFrame.bonus() === 'strike') {
    lastFrame.addToScore(this.currentFrame().rolls()[0]);
  }
};
Game.prototype.addChainStrikeBonus = function() {
  var oneFrameAgo = this.lastFrame();
  var twoFramesAgo = this.frames[this.frames.length - 3];
  if(typeof(twoFramesAgo) !== 'undefined'){
    if(twoFramesAgo.bonus() === 'strike' && oneFrameAgo.bonus() === 'strike') {
      twoFramesAgo.addToScore(this.currentFrame().rolls()[0]);
    }
  }
};
