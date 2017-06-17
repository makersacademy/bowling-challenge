function Frame(firstBowl, secondBowl){

  this.firstBowl = firstBowl
  this.secondBowl = secondBowl

  this.init = function(){
    if (this.firstBowl + this.secondBowl > 10) {
      throw new Error("Illegal Score.")
    };
  };

  this.init();

  Frame.prototype.getScore = function(){
    return this.firstBowl + this.secondBowl
  };
};
