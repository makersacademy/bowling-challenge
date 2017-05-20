function Bowling() {
  this.score = 0;
  this.frameCounter = 0;
  this.test;
  var frame = new Frame;
}

Bowling.prototype.gameController = function(score) {
  //if ( frame.rollArray[1] != null ) { frame = new Frame }


}





















Bowling.prototype.takeAGo = function(score = (new RandomScore()).createScore()) {
  if ( score == 10 ) { return 'STRIKE' };
  if ( score == 0 ) { return 'GUTTER BALL' };
  return score;
}
