function Frame(firstBowl, secondBowl){

  this.firstBowl = firstBowl
  this.secondBowl = secondBowl

  Frame.prototype.getScore = function(){
    return this.firstBowl + this.secondBowl
  };
};
