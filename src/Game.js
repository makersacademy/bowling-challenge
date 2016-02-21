function Game() {
  this.startNewFrame();
  this.frames = [];
  this.totalScore = 0;
}

Game.prototype.bowl = function(){
  this.currentFrame.calculateScore(this.getFrameScore());
  this.totalScore += (this.getFrameScore());
  this.checkStrike();
  this.checkFrameOver();
};

Game.prototype.checkStrike = function(ballScore){
  if (ballScore === 10) {
    this.addFrame();
    this.startNewFrame();
  }
};

Game.prototype.checkFrameOver = function(){
  if (this.currentFrame.score.length > 2) {
    this.addFrame();
    this.startNewFrame();
  }
};

Game.prototype.startNewFrame = function(){
  this.currentFrame = new Frame();
};

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};

Game.prototype.getFrameScore = function(){
  var sum = this.currentFrame.score.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  return sum
};
