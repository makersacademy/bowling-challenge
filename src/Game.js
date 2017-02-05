function Game(frame = new Frame(), scorecard = new Scorecard()) {
  this.frame = frame
  this.scorecard = scorecard
}

Game.prototype.bowl = function(){
    this.scorecard.addToScore(this.frame.bowl())
  }
