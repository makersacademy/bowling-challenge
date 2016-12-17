function KnockDownPin() {
  this.rolls = 0;
  this.firstRoll = true;
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.frame = new FrameManager()
}

KnockDownPin.prototype.rollBall = function() {
  if (this.rolls === 1) {
    this.resetRolls();
    secondAttempt = this.getRandomIntForSecondAttempt(this.firstScore);
    if (secondAttempt + this.firstRollScore == 10) {
      game.spare_scored();
    } else {
      game.calculateScore();
    }
    game.calculateScore();
  } else {
    this.nextRoll();
    var fallenPins = this.getRandomInt();
    this.firstRollScore = fallenPins;
    if (fallenPins === 10) {
      game.strike_scored()
      frame.moveToNextFrame();
      this.resetRolls();
    }
    return fallenPins;
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
  var max = Math.floor(max);
  return Math.floor(Math.random()*max)
}
