function Game() {
  this.score = START_SCORE;
  this.frame = START_FRAME_NUMBER;
  this.roll = START_ROLL_COUNT
  this.framesScores = [];
  this.currentFrameScore = [];
  this.bonus = START_BONUS;
  };

  const START_SCORE = 0
  const START_FRAME_NUMBER = 1
  const START_ROLL_COUNT = 0
  const START_BONUS = 0

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
  } else if (this.isStrike(rollScore)) {
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
  if(this.bonusFrame() && this.finalFrame()) {
      // Bonus type: if spare, 1 more roll; if strike, 2 more rolls.
    this.strikeOrSpare();
  } else {
      this.framesScores.push(this.currentFrameScore);
      this.nextFrame();
  }
};

Game.prototype.nextFrame = function() {
    this.frame += 1;
    this.currentFrameScore = [];
};

Game.prototype.bonusPoints = function() {
  return this.bonus
};

Game.prototype.isStrike = function(rollScore) {
  return rollScore === 10
};

Game.prototype.bonusFrame = function() {
  return this.currentFrameScore[0] === 10 || (this.currentFrameScore[0] + this.currentFrameScore[1]) === 10
};

Game.prototype.previousFrameBonus = function() {
  return this.framesScores.slice(-1)[0][0] === 10 || this.framesScores.slice(-1)[0][0] + this.framesScores.slice(-1)[0][1] === 10
};

Game.prototype.finalFrame = function() {
  return this.frame == 10
};

Game.prototype.strikeOrSpare = function() {
  if(this.currentFrameScore[0] === 10) {
    return 'Strike'
  } else {
    return 'Spare'
  }
};