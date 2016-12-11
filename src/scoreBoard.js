function Scoreboard (){
  this.currentScore = [];
};

  Scoreboard.prototype.firstRoll = function(scoreOne){
    this.currentScore.push(scoreOne);
    return this.currentScore;
  };
