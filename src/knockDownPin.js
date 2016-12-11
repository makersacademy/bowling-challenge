function KnockDownPin() {
  this.attempts = 0;
  this.firstScore = 0;
}

KnockDownPin.prototype.attemptBall = function() {
  if (this.attempts === 1) {
    this.resetAttempts()
    return this.getRandomIntForSecondAttempt(this.firstScore)
  } else {
    this.nextAttempt();
    var score = this.getRandomInt();
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
  this.firstScore = 0;
}

KnockDownPin.prototype.getRandomInt = function() {
  var max = Math.floor(11);
  return Math.floor(Math.random()*max)
}

KnockDownPin.prototype.getRandomIntForSecondAttempt = function(max) {
  var max = Math.floor(max);
  return Math.floor(Math.random()*max)
}
