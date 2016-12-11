function Scoreboard (){
  this.currentScore = [];
};

  Scoreboard.prototype.firstRoll = function(scoreOne){
    this.currentScore.push(scoreOne);
    return this.currentScore;
  };

  Scoreboard.prototype.secondRoll = function(scoreTwo){
    this.currentScore.push(scoreTwo);
    return this.currentScore;
  }
