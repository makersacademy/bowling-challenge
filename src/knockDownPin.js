function KnockDownPin() {
  this.attempts = 0;
}

KnockDownPin.prototype.attemptBall = function() {
  this.nextAttempt();
  if (this.attempts > 2) {
    throw new Error("Maximum attempts reached")
  } else {
    return 3;
  }
}

KnockDownPin.prototype.nextAttempt = function() {
  this.attempts++;
}

KnockDownPin.prototype.resetAttempts = function() {
  this.attempts = 0;
}
