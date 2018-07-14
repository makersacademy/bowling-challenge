function ScoreCard (){
  this.frame = [];
  }




ScoreCard.prototype.roll_1 = function(num) {
  this.frame.push(num);
};


ScoreCard.prototype.getRoll_1 = function() {
  return this.frame[0];
};


ScoreCard.prototype.roll_2 = function(num) {
  this.frame.push(num);
};

ScoreCard.prototype.getRoll_2 = function() {
  return this.frame[1];

};
