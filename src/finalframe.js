function FinalFrame(firstBowl, secondBowl, bonusBowl){

  this.MaxScore = 10;
  this.MinScore = 0;


  this.bowls = new Object()
  this.bowls.firstBowl = firstBowl;
  this.bowls.secondBowl = secondBowl;
  this.bowls.bonusBowl = bonusBowl || this.MinScore;
  this.score = this.bowls.firstBowl + this.bowls.secondBowl + this.bowls.bonusBowl;

  if(firstBowl + secondBowl < this.MaxScore && bonusBowl != this.MinScore){
    throw new Error("Illegal Score: Bonus bowl is only scored for a strike or spare.")
  };

  FinalFrame.prototype.getScore = function(){
    return this.score;
  };

  FinalFrame.prototype.getStatus = function(){

  };

  FinalFrame.prototype.getBowls = function(){
    return this.bowls;
  };

  FinalFrame.prototype.calculateTotalScore = function(){

  }

};
