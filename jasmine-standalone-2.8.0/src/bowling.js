function Bowling(){
  this.DEFAULT_SCORE = 0;
  this.score = this.DEFAULT_SCORE;
  this.frameScore = {"f1.1" : "-","f1.2" : "-"};
};


  Bowling.prototype.currentScore = function(){
    return this.score;
  };

  Bowling.prototype.roll = function(number) {
    this.score += number;
  };

  
