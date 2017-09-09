function Bowling(frame = new Frame(), authRoll = new AuthenticateRoll()) {
  this.score = 0;
  this.bonus = 0;
  this.frameCounter = 0;
  this.frame = frame;
  this.authRoll = authRoll;
  this.possibleScore = 10;
}

Bowling.prototype.startGame = function() {
  this.frame = new Frame();
}

Bowling.prototype.gameController = function(score) { gameController:{
  if ( this.frame.finishedFrame() == true ) { this.frame = new Frame() }
  console.log(this.frame.finishedFrame());
  this.frame.takeAGo(score);

  if ( this.frame.finishedFrame() == false
    && this.authRoll.maxScore(score) ==  false ) {
      this.possibleScore = this.authRoll.possibleScore(score);
      break gameController;
  }

  console.log(this.frame.rollArray);
  //set bonus
}}

Bowling.prototype.setBonus = function(frame) {
  if ( frame[0] == 10) { return 2 }
  if ( frame[0] + frame [1] == 10 ) { return 1 }
  return 0;
}
