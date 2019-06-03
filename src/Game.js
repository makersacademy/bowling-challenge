function Game() {
  this.score = START_SCORE;
  this.frame = START_FRAME_NUMBER;
  this.roll = START_ROLL_COUNT
  this.framesScores = [];
  this.currentFrameScore = [];
  this.rollsScores = [];
  this.oneFrameScores = [];
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

Game.prototype.bonusPoints = function() {
  return this.bonus
};

Game.prototype.addRoll = function(rollScore) {
  if(rollScore !== 10 || this.frame === 10) {
    this.roll += 1
  } else {
    this.roll += 2;
  }
};

Game.prototype.rollNo = function() {
 if (this.roll === 21) {
    return 3;
  } else if (this.roll % 2 === 1) {
    return 1;
  } else {
    return 2;
  }
};

Game.prototype.oneRoll = function(rollScore) {
  this.gameOver();
  this.addRoll(rollScore);
  this.rollsScores.push(rollScore);
  this.currentFrameScore.push(rollScore); 
  if (this.bonusFrame() && this.finalFrame()) {
    if (this.rollNo() === 3){
      this.oneFrame();
    }
  } else if (this.rollNo() === 2) {
    if (this.frame > 1){
      if (this.lastFrameWithStrike()){
        this.bonus += this.totalScoreResult()
      }
    }
    this.oneFrame();
  } else {
    if(this.frame > 1) {
      if(this.lastFrameWithSpare()) {
        this.updateScoreWithSpare();
      }
    }
    if (this.frame > 2) {
      if(this.lastFrameWithStrike() && this.frameBeforeStrike()) {
        this.bonus += this.currentFrameScore[0]
        this.score += this.bonus
        this.bonus = START_BONUS
      }
    }
    if (this.isStrike(rollScore)) {
     this.oneFrame();
   }
  }
};

Game.prototype.updateScoreWithSpare = function() {
  this.bonus += this.currentFrameScore[0]
  this.score += this.bonus
  this.bonus = START_BONUS
};

Game.prototype.oneFrame = function() {
  this.framesScores.push(this.currentFrameScore);
  this.shouldUpdateScore();
  this.nextFrame();
};

Game.prototype.lastFrameWithStrike = function() {
  return this.framesScores.slice(-1)[0][0] === 10
};

Game.prototype.lastFrameWithSpare = function() {
  return this.framesScores.slice(-1)[0][0] + this.framesScores.slice(-1)[0][1] === 10
};

Game.prototype.frameBeforeStrike = function() {
  return this.framesScores.slice(-2)[0][0] === 10
};

Game.prototype.frameBeforeThatHasStrike = function() {
  return this.framesScores.slice(-3)[0][0] === 10
};

Game.prototype.nextFrame = function() {
  this.frame += 1;
  this.currentFrameScore = [];
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

Game.prototype.totalScoreResult = function() {
  if(this.currentFrameScore[0] === 10) {
    return 10
  } else {
    if (this.frame > 3 && this.lastFrameWithStrike() && this.frameBeforeStrike() && this.frameBeforeThatHasStrike()) {
      return this.currentFrameScore[0] + this.currentFrameScore[1] + 10
}
return this.currentFrameScore[0] + this.currentFrameScore[1]
  }
};

Game.prototype.updateScore = function() {
  this.score += (this.totalScoreResult() + this.bonus)
  this.oneFrameScores.push(this.score)
  this.bonus = START_BONUS
};

Game.prototype.updateBonus = function() {
  this.bonus += 10
};

Game.prototype.shouldUpdateScore = function() {
  if (this.bonus === 20) {
    this.updateScore()
  } else if (this.totalScoreResult() < 10) {
    this.updateScore()
  } else {
    this.updateBonus()
  }
};

Game.prototype.gameOver = function() {
  if(this.frameNumber() === 11) {
    throw new Error('Game Over');
  }
};

Game.prototype.reset = function() {
  this.score = START_SCORE;
  this.frame = START_FRAME_NUMBER;
  this.roll = START_ROLL_COUNT
  this.framesScores = [];
  this.currentFrameScore = [];
  this.rollsScores = [];
  this.oneFrameScores = [];
  this.bonus = START_BONUS;
};