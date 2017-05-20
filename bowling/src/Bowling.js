function Bowling() {
  this.score = 0;
  this.frameCounter = 0;
  this.test;
}

Bowling.prototype.gameController = function() {
  
}





















Bowling.prototype.takeAGo = function(score = (new RandomScore()).createScore()) {
  if ( score == 10 ) { return 'STRIKE' };
  if ( score == 0 ) { return 'GUTTER BALL' };
  return score;
}
