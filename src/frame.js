function Frame(previous = "open", twoPrevious = "open") {
  this.roll1 = 0;
  this.roll2 = 0;
  this.score = 0;
  this.previous = previous;
  this.twoPrevious = twoPrevious;
  this.bonus = "open"




this.firstRoll = function(ballOneScore){
  this.roll1 = ballOneScore;
  this.checkBonus();
};

this.secondRoll = function(ballTwoScore){
  this.roll2 = ballTwoScore;
  this.checkBonus();
};

}

Frame.prototype.setScore = function(score){
  this.score = score;
};

Frame.prototype.checkBonus= function(score){
  if(this.roll1 === 10){
    this.bonus = "strike";
  }
  else if(this.roll1 + this.roll2 === 10){
    this.bonus = "spare";
  }
  else {
    this.bonus = "open";
  }
};

// module.exports = Frame;
