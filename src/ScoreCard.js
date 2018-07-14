function ScoreCard (){
  this.frame = []
};



ScoreCard.prototype.roll_1 = function(num) {
  this.frame.push(num)
};

ScoreCard.prototype.getCurrentFrame = function() {
  return this.frame[0]
};
