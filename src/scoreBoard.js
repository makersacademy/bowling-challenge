function Scoreboard (){
  this.currentScore = [];
  this.frameCount = 0;
  this.scores = [];
  this.maxScore = 10;
};

  Scoreboard.prototype.firstRoll = function(scoreOne){
    this.currentScore = [];
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

  Scoreboard.prototype.bonusPoints = function() {
    if (this.scores[this.frameCount-2] === 'Strike') {
      return this.aStrike();
    } else if (this.scores[this.frameCount-2] === 10) {
      return this.spare();
    } else {
      return this.scores;
    };
  };

  Scoreboard.prototype.aStrike = function(){
    var strike = this.scores.indexOf('Strike');
      if (~strike) {
        this.scores[strike] = this.maxScore + this.scores.slice(-1)[0];
        return this.scores;
      }
    };

  Scoreboard.prototype.spare = function() {
        var spare = this.scores.indexOf(10);
        if (~spare) {
         this.scores[spare] = this.maxScore + this.currentScore.slice(-2)[0];
         return this.scores;
       }
  };
