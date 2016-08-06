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

Game.prototype.playGame = function () {
  // Combine the next two lines??
  frame = new Frame();
  this.currentPins = frame.playFrame();
  this.multiplier = calculateMultiplier(this.currentPins);
  // Combine the next two lines??
  score = new Score(this.getMultiplier(), this.getCurrentPins());
  this.addScore(score);
};

Game.prototype.calculateMultiplier = function (currentPins) {
  if (currentPins[0] === 10) {
    this.multiplier = "strike";
  } else if (currentPins[0] + currentPins[1] === 10) {
     this.multiplier = "spare";
  } else {
     this.multiplier = "none";
  };
};
