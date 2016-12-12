function KnockDownPin() {
  this.attempts = 0;
  this.firstAttempt = true
  this.firstAttemptScore = 0
  this.frame = new FrameManager()
}

KnockDownPin.prototype.attemptBall = function() {
  if (this.attempts === 1) {
    this.resetAttempts()
    return this.getRandomIntForSecondAttempt(this.firstScore)
  } else {
    this.nextAttempt();
    var score = this.getRandomInt();
    this.firstAttemptScore = score;
    if (score === 10) {
      this.resetAttempts()
    }
    return score;
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
