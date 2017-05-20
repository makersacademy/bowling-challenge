function Bowling(frame = new Frame()) {
  this.score = 0;
  this.frameCounter = 0;
  this.frame = frame;
}

Bowling.prototype.startGame = function() {
  this.frame = new Frame();
}

Bowling.prototype.gameController = function(score) {
  if ( this.frame.finishedFrame() == true ) { var frame = new Frame() }
  console.log(score);
}





















Bowling.prototype.takeAGo = function(score = (new RandomScore()).createScore()) {
  if ( score == 10 ) { return 'STRIKE' };
  if ( score == 0 ) { return 'GUTTER BALL' };
  return score;
}
