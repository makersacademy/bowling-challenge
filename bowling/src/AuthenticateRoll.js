function AuthenticateRoll(score) {
  this.score = score;
}

AuthenticateRoll.prototype.checkScore = function() {
  if ( this.score <= 10 && this.score > 0 ) { return true }
  return false;
}
