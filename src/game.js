function Game() {
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.pins = new Pins(this);
  this.gameOver = false;
  this.frame = new Frame();
  this.score = new Score(this);
  this.rolls = 0;
}

Game.prototype.playBall = function() {
  if (this.rolls === 1) {
    this.secondRollScore = this.pins.secondRoll(this.firstRollScore);
    this.awardBonusForStrike(this.firstRollScore,this.secondRollScore);
    this.didSpareOccur(); 
    this.makeGameOverIfFinalFrame();
    this.resetRolls();
    return this.secondRollScore;
  } else {
    this.checkIfGameOver();
    this.nextRoll();
    this.firstRollScore = this.pins.firstRoll();
    this.awardBonusForSpare(this.firstRollScore);
    this.didStrikeOccur();
    return this.firstRollScore;
  }
}

Game.prototype.resetRolls = function() {
  this.rolls = 0;
  this.frame.moveToNextFrame()
}

Game.prototype.didStrikeOccur = function() {
  if (this.firstRollScore === totalNumberOfPins) {
    this.score.strike = true;
    this.score.strikes++
    this.resetRolls();
  }
}

Game.prototype.awardBonusForSpare = function(firstScore) {
  this.score.bonusForSpare(firstScore);
}

Game.prototype.awardBonusForStrike = function(firstScore, secondScore) {
  this.score.bonusForStrike(firstScore,secondScore)
}

Game.prototype.didSpareOccur = function() {
  if (this.secondRollScore + this.firstRollScore == totalNumberOfPins) {
    this.score.spare = true;
  } else {
     this.score.calculateScore(this.firstRollScore,this.secondRollScore);
  }
}

Game.prototype.checkIfGameOver = function() {
  if (this.gameOver === true) {
    throw new Error("Maximum number of frames reached!");
  }
}

Game.prototype.nextRoll = function() {
  this.rolls++;
}


Game.prototype.startAgain = function() {
  this.frame.resetFrame();
}

Game.prototype.getCurrentFrame = function() {
  return this.frame.currentFrame;
}

Game.prototype.getCurrentScore = function() {
  return this.score.currentScore;
}

Game.prototype.makeGameOverIfFinalFrame = function() {
  if (this.getCurrentFrame() >= this.frame.maxFrames ) {
     this.gameOver = true;
  }
}
