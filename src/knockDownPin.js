function KnockDownPin() {
  this.attempts = 0;
  this.firstAttempt = true
  this.firstAttemptScore = 0
  this.frame = new FrameManager()
}

KnockDownPin.prototype.attemptBall = function() {
  if (this.attempts === 1) {
    this.resetAttempts();
    secondAttempt = this.getRandomIntForSecondAttempt(this.firstScore);
    game.calculateScore();
  } else {
    this.nextAttempt();
    var fallenPins = this.getRandomInt();
    this.firstAttemptScore = fallenPins;
    if (fallenPins === 10) {
      game.strike_scored()
      frame.moveToNextFrame();
      this.resetAttempts();

    }
    return fallenPins;
  }
}

KnockDownPin.prototype.nextAttempt = function() {
  this.attempts++;
}

KnockDownPin.prototype.resetAttempts = function() {
  this.attempts = 0;
  this.firstAttempt = true;
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
