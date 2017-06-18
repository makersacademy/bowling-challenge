function Frame(firstBowl, secondBowl){

  this.MaxScore = 10;
  this.MinScore = 0;

  if (firstBowl + secondBowl > this.MaxScore) {
    throw new Error("Illegal Score: Can't be greater than 10")
  };


  this.bowls = new Object();
  this.bowls.firstBowl = firstBowl;
  this.bowls.secondBowl = secondBowl || this.MinScore;

  this.score = this.bowls.firstBowl + this.bowls.secondBowl;
  this.bonusScore = this.MinScore
  this.totalScore = this.MinScore

  Frame.prototype.getScore = function(){
    this.calculateScore();
    return this.totalScore
  };

  Frame.prototype.getStatus = function(){
    if(this.bowls.firstBowl === this.MaxScore) {
      return "strike";
    }else if(this.bowls.firstBowl != this.MaxScore && this.score === this.MaxScore) {
      return "spare";
    }else if(this.getScore() === this.MinScore) {
      return "gutter";
    };
    return;
  };

  Frame.prototype.getBowls = function(){
    return this.bowls;
  };

  Frame.prototype.calculateScore = function(){
    this.totalScore = this.score + this.bonusScore;
  };
};
