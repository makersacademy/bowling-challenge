function FinalFrame(firstBowl, secondBowl, bonusBowl = 0){

  if(firstBowl + secondBowl < 10 && bonusBowl != 0){
    throw new Error("Illegal Score: Bonus bowl is only scored for a strike or spare.")
  };

  this.bowls = new Object()
  this.bowls.firstBowl = firstBowl;
  this.bowls.secondBowl = secondBowl;
  this.bowls.bonusBowl = bonusBowl;
  this.score = this.bowls.firstBowl + this.bowls.secondBowl + this.bowls.bonusBowl;

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
