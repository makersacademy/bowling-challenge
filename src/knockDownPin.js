function KnockDownPin() {
  this.attempts = 0;
  this.firstScore = 0;
}

KnockDownPin.prototype.attemptBall = function() {
  this.nextAttempt();
  if (this.attempts > 2) {
    throw new Error("Maximum attempts reached")
  } else {
    var score = 10 - this.firstScore;
    return this.firstScore = score;
  }
}

KnockDownPin.prototype.nextAttempt = function() {
  this.attempts++;
}

KnockDownPin.prototype.resetAttempts = function() {
  this.attempts = 0;
}
