function AuthenticateRoll(score, roll) {
  this.score = score;
  this.roll = roll;
}

AuthenticateRoll.prototype.checkScore = function() {
  if ( this.score <= 10 && this.score > 0 ) { return true }
  return false;
}
