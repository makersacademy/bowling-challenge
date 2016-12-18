function KnockDownPin(game) {
  this.game = game
  this.rolls = 0;
  this.firstRoll = true;
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.frame = new FrameManager()
}

KnockDownPin.prototype.rollBall = function() {
  if (this.rolls === 1) {
    this.resetRolls();
    this.secondRollScore = this.getRandomIntForSecondAttempt(this.firstRollScore);
    if (this.secondRollScore + this.firstRollScore == 10) {
      this.game.spare_scored();
    } else {
      return this.game.calculateScore();
    }
    this.game.calculateScore();
    return this.secondRollScore;
  } else {
    this.nextRoll();
    this.firstRollScore = this.getRandomInt();
      return this.firstRollScore;
    if (this.firstRollScore === 10) {
      this.game.strike_scored()
      this.frame.moveToNextFrame();
      this.resetRolls();
    }
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

KnockDownPin.prototype.getRandomInt = function() {
  var max = Math.floor(11);
  return Math.floor(Math.random()*max)
}

KnockDownPin.prototype.getRandomIntForSecondAttempt = function(max) {
  var max = Math.floor(10-max);
  return Math.floor(Math.random()*max)
}
