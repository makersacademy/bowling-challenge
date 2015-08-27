Bowling = function() {
  this.frame = 1
  this.pinCount = 10
  this.score = 0
  this.holdingScore = 0
  this.frameRoll = 1
  this.gameInPlay = true
  this.bonusRounds = 0
};

Bowling.prototype.roll = function(num) {
  this.gameStatus();
  this.bonusChecker();
  this.score += num
  if(this.holdingScore === 10 && this.frameRoll === 1) {
    this.bonus = 2
  } else if(this.holdingScore === 10 && this.frameRoll === 2) {
    this.bonus = 1
  };
  this.updateGameStatus();
}

Bowling.prototype.bonusCalculator = function(num) {
  this.bonusNumber();
  if(this.bonusRounds > 0){
    var bonusScore += num
  }
};

Bowling.prototype.bonusNumber = function(num) {
  if(bonusChecker(num) && this.frameRoll === 1) {
    this.bonusRounds = 2
  } else if(bonusChecker(num) && this.frameRoll === 2) {
    this.bonusRounds = 1
  } else {
    this.bonusRounds = 0
  };
};
Bowling.prototype.bonusChecker = function(num) {
  if(this.frameRoll === 1) {
    this.holdingScore = 0
  }
  this.holdingScore += num
  this.holdingScore === 10 ? return true : return false
};

Bowling.prototype.updateFrame = function() {
  if (this.frameRoll < 2 && num < 10) {
    this.frameRoll++
  }
  else
  {
    this.frame++
    this.frameRoll = 1
  }
};

Bowling.prototype.gameStatus = function() {
  if(this.gameStatus === false) {
    return "Game is over!"
  };
};

Bowling.prototype.updateGameStatus = function() {
  if(this.frame > 10) {
    this.gameInPlay = false
  }
};