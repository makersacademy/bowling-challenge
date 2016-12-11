function Scoreboard (){
  this.currentScore = [];
  this.frameCount = 0;
  this.scores = [];
};

  Scoreboard.prototype.firstRoll = function(scoreOne){
    if (scoreOne === 'Strike') {
      this.scores.push(scoreOne);
      return this.scores;
    } else {
    this.currentScore.push(scoreOne);
    return this.currentScore;
    };
  };

  Scoreboard.prototype.secondRoll = function(scoreTwo){
    this.currentScore.push(scoreTwo);
    return this.currentScore;
  };

  Scoreboard.prototype.calculateScore = function() {
    this.scores.push(this.currentScore.reduce(function(a,b){return a + b },0));
    return this.scores;
  };

  Scoreboard.prototype.currentFrame = function() {
      this.frameCount = this.scores.length;
      return this.frameCount
  };
