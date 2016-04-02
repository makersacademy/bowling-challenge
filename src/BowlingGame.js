function BowlingGame(){
  this.totalScore = 0;
  this.scoreBoard = [[],[],[],[],[],
                     [],[],[],[],[]];
  this.currentRound = 0;
}

BowlingGame.prototype.addScores = function(score){
  this.roundScore().push(score);
}

BowlingGame.prototype.isRoundComplete = function(){
  if(this.isStrike()) {
    this.currentRound += 1;
    return true;
  }
  else if(this.roundScore().length === 2){
    return true;
  }
  else {
    return false;
  }
}

BowlingGame.prototype.roundScore = function(){
  return this.scoreBoard[this.currentRound];
}

BowlingGame.prototype.isStrike = function(){
  if((this.roundScore().length === 1) && (this.roundScore()[0] === 10)){
    return true
  }
  else {
    return false
  }
}
