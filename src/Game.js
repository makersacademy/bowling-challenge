function Game() {
  this.score = START_SCORE;
  this.frame = START_FRAME_NUMBER;
  this.roll = START_ROLL_COUNT
  this.framesScores = [];
  this.currentFrameScore = [];
  };

  const START_SCORE = 0
  const START_FRAME_NUMBER = 1
  const START_ROLL_COUNT = 0

Game.prototype.getScore = function() {
  return this.score;
};

Game.prototype.frameNumber = function() {
  return this.frame
};

Game.prototype.rollCount = function() {
  return this.roll;
};

Game.prototype.totalFrameScore = function() {
  return this.framesScores
};

Game.prototype.oneRoll = function(rollScore){
  this.addRoll();
  this.currentFrameScore.push(rollScore); 
  if(this.rollNo() === 2) {
    this.oneFrame();
  }
};

Game.prototype.addRoll = function() {
  this.roll += 1;
};

Game.prototype.rollNo = function() {
  if (this.roll % 2 === 1) {
    return 1;
  } else {
    return 2;
  }
};

Game.prototype.oneFrame = function() {
  this.framesScores.push(this.currentFrameScore);
  this.nextFrame();
};

Game.prototype.nextFrame = function() {
    this.frame += 1;
    this.currentFrameScore = [];
};

