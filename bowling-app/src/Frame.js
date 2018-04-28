function Frame() {

}

Frame.prototype.score = function() {
  return this.rollOne + this.rollTwo;
}

Frame.prototype.setRoll = function(num, score) {
  var roll = num === 1 ?  'rollOne' : 'rollTwo';
  this[roll] = score;
}

Frame.prototype.checkStrike = function(score) {
  if (score === 10) this.bonus = 2;
}

Frame.prototype.checkSpare = function(score) {
  if (this.firstRoll + score === 10) this.bonus = 1;
}