function Game(){
this.roundScore = [];
this.scoreBoard = [];
this.totalScore = 0;
this.currentRound = 1;
// this.currentBowl = 1;
}

Game.prototype.updateScore = function(score){
  this.roundScore.push(score);
  this.scoreBoard.push(score);
}

Game.prototype.calculateTotalScore = function(){
  this.totalScore = this.scoreBoard.reduce((a,b) => a + b, 0);
}

Game.prototype.roundComplete = function(){
  if(this.roundScore.length >= 2){this.currentRound ++ ;}{this.roundScore = [];}
}