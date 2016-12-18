function KnockDownPin(game) {
  this.game = game
  this.rolls = 0;
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.frame = new FrameManager()
}

KnockDownPin.prototype.rollBall = function() {
  if (this.rolls === 1) {
    this.secondRollScore = this.getRandomIntForSecondAttempt(this.firstRollScore);
    this.didSpareOccur();
    this.makeGameOverIfFinalFrame();
    this.resetRolls();
    return this.secondRollScore;
  } else {
    this.checkIfGameOver();
    this.nextRoll();
    this.firstRollScore = this.getRandomInt();
    this.didStrikeOccur();
    return this.firstRollScore;
  }
}

KnockDownPin.prototype.nextRoll = function() {
  this.rolls++;
}

KnockDownPin.prototype.resetRolls = function() {
  this.rolls = 0;
  this.firstRoll = true;
  this.frame.moveToNextFrame()
}

KnockDownPin.prototype.didStrikeOccur = function() {
  if (this.firstRollScore === 10) {
    this.game.strike_scored();
    this.resetRolls();
  }
}

KnockDownPin.prototype.didSpareOccur = function() {
  if (this.secondRollScore + this.firstRollScore == 10) {
    this.game.spare_scored();
  } else {
     this.game.calculateScore();
  }
}

KnockDownPin.prototype.checkIfGameOver = function() {
  if (this.game.gameOver === true) {
    throw new Error("Maximum number of frames reached!");
  }
}

KnockDownPin.prototype.makeGameOverIfFinalFrame = function() {
  if (this.getCurrentFrame() == 10 ) {
     this.game.gameOver = true;
  }
}

KnockDownPin.prototype.getRandomInt = function() {
  var max = Math.floor(11);
  return Math.floor(Math.random()*max)
}

KnockDownPin.prototype.getRandomIntForSecondAttempt = function(max) {
  var max = Math.floor(10-max);
  return Math.floor(Math.random()*max)
}

KnockDownPin.prototype.getCurrentFrame = function() {
  return this.frame.currentFrame;
}
