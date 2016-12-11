function Scoreboard (){
  this.currentScore = [];
  this.frameCount = 0;
};

  Scoreboard.prototype.firstRoll = function(scoreOne){
    this.currentScore.push(scoreOne);
    return this.currentScore;
  };

  Scoreboard.prototype.secondRoll = function(scoreTwo){
    this.currentScore.push(scoreTwo);
    return this.currentScore;
  };

  Scoreboard.prototype.currentFrame = function() {
    this.frameCount = this.currentScore.length;
    return this.frameCount
  };
