function Bowling(frame = new Frame(), authRoll = new AuthenticateRoll()) {
  this.score = 0;
  this.frameCounter = 0;
  this.frame = frame;
  this.authRoll = authRoll;
  this.possibleScore = 10;
}

Bowling.prototype.startGame = function() {
  this.frame = new Frame();
}

Bowling.prototype.gameController = function(score) {
  if ( this.frame.finishedFrame() == true ) { var frame = new Frame() }
  this.frame.takeAGo(score);

  if ( this.frame.finishedFrame() == false ) {
    if ( this.authRoll.maxScore(score) !=  true ) {
      this.possibleScore = this.authRoll.possibleScore(score);
      console.log(this.possibleScore)    
    }
  }
}





















Bowling.prototype.takeAGo = function(score = (new RandomScore()).createScore()) {
  if ( score == 10 ) { return 'STRIKE' };
  if ( score == 0 ) { return 'GUTTER BALL' };
  return score;
}
