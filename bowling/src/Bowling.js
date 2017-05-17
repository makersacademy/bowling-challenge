function Bowling() {
  this.score = 0;
}

Bowling.prototype.takeAGo = function(score = (new RandomScore()).createScore()) {
  if ( score == 10 ) { return 'STRIKE' };
  if ( score == 0 ) { return 'GUTTER BALL' };
}
