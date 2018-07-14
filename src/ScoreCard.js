function ScoreCard (){
  this.frame = [];
  }


ScoreCard.prototype.roll_1 = function(value) {
  this.frame.push(value);
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

ScoreCard.prototype.checkForStrick = function(){
  if(this.getRoll_1() === 10) {
      return true;
  };

};
