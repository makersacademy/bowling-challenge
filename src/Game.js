Game = function(){
  this.frameNumber = 1;
  this.currentPins = [];
  this.multiplier = "none";
  this.totalScore = 0;
};

Game.prototype.getFrameNumber = function () {
  return this.frameNumber;
};

Game.prototype.getCurrentPins = function () {
  return this.currentPins;
};

Game.prototype.getMultiplier = function () {
  return this.multiplier;
};

Game.prototype.getTotalScore = function () {
  return this.totalScore;
};

Game.prototype.addScore = function (score) {
  this.totalScore += score;
};

Game.prototype.bowlFrame = function () {
  // Slim this right down:
  // How about frame 10?
  var frame = new Frame();
  result = frame.playFrame();
  this.currentPins = result;
  var score = new Score(this.multiplier, result);
  points = score.calculateFrameScore();
  this.addScore(points)
  this.multiplier = this.calculateMultiplier(result);
};


Game.prototype.calculateMultiplier = function (currentPins) {
  if (currentPins[0] === 10) {
    return "strike";
  } else if (currentPins[0] + currentPins[1] === 10) {
     return "spare";
  } else {
     return "none";
  };
};
