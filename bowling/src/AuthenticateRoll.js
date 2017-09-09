function AuthenticateRoll(score) {
  this.score = score;
}

AuthenticateRoll.prototype.checkScore = function() {
  if ( this.score <= 10 && this.score > 0 ) { return true }
  return false;
}

AuthenticateRoll.prototype.possibleScore = function(score) {
  return 10 - score;
}

AuthenticateRoll.prototype.roll2Check = function(score, possibleScore) {
  if ( score <= possibleScore ) { return true }
  return false;
}

AuthenticateRoll.prototype.maxScore = function(score) {
  if ( score == 10 ) { return true }
  return false
}
