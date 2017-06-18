function Frame(firstBowl, secondBowl = 0){

  if (firstBowl + secondBowl > 10) {
    throw new Error("Illegal Score: Can't be greater than 10")
  };

  this.bowls = new Object();
  this.bowls.firstBowl = firstBowl;
  this.bowls.secondBowl = secondBowl;
  this.bowls.bonusBowl = "undefined"

  this.score = this.bowls.firstBowl + this.bowls.secondBowl;
  this.bonusScore = 0
  this.totalScore = 0

  Frame.prototype.getScore = function(){
    this.calculateScore();
    return this.totalScore
  };

  Frame.prototype.getStatus = function(){
    if(this.bowls.firstBowl === 10) {
      return "strike";
    }else if(this.bowls.firstBowl != 10 && this.score === 10) {
      return "spare";
    }else if(this.getScore() === 0) {
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
