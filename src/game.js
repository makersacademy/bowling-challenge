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
    this.frames.push(new Frame)
  };
};

Game.prototype.isFrameOver = function() {
  return this.currentFrame().rolls().length === 2;
};

Game.prototype.isGameOver = function() {
  return this.frames.length === 10 && this.isFrameOver();
};

Game.prototype.currentFrame = function() {
  return this.frames[this.frames.length - 1];
};
