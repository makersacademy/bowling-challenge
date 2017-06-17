function Frame(firstBowl, secondBowl = 0){

  this.firstBowl = firstBowl
  this.secondBowl = secondBowl

  this.init = function(){
    if (this.firstBowl + this.secondBowl > 10) {
      throw new Error("Illegal Score: Can't be greater than 10")
    };
  };

  this.init();

  Frame.prototype.getScore = function(){
    return this.firstBowl + this.secondBowl
  };

  Frame.prototype.getStatus = function(){
    if(this.firstBowl === 10) {
      return "strike";
    }else if(this.firstBowl != 10 && this.getScore() === 10) {
      return "spare";
    }else if(this.getScore() === 0) {
      return "gutter";
    };
    return;
  }
};
