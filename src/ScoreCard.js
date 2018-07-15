function ScoreCard (){
  this.frame = [];
  this.total = 0
  }


  ScoreCard.prototype.roll_1 = function(value) {
    this.frame.push(value);
  };

  ScoreCard.prototype.checkForStrike = function(){
    if(this.getRoll_1() === 10) {
        return "strike";
  };
};

  ScoreCard.prototype.evaluateRoll_1_ForStrike = function(){
    if(this.checkForStrike()) { };
  };





  ScoreCard.prototype.getRoll_1 = function() {
    return this.frame[0];
  };

  ScoreCard.prototype.roll_2 = function(value) {
    this.frame.push(value);
  };

  ScoreCard.prototype.getRoll_2 = function() {
    return this.frame[1];
  };



  ScoreCard.prototype.checkForSpare = function(){
    if((this.frame[0] + this.frame[1]) === 10) {
        return "spare";
  };
};

ScoreCard.prototype.getTotalFrame = function(){
  return this.total += this.frame[0] + this.frame[1]

};
