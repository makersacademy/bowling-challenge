function Frame(bonus = 0) {
  this.bonus = bonus;
  this.rollArray = [];
}

Frame.prototype.frameController = function() {
  this.takeAGo();
  if ( this.rollArray[0] == 10 ) { return [2, 10] };
}

Frame.prototype.takeAGo = function(score = 0, maxScore = 10) {
  this.rollArray.push(score);
}

Frame.prototype.finishedFrame = function() {
  if ( this.rollArray[1] != null ) { return true };
  return false;
}
