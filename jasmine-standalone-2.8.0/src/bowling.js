function Bowling(){
  this.DEFAULT_SCORE = 0;
  this.score = this.DEFAULT_SCORE;
  // var itemIds = {
  //   "item1" : 15,
  //   "item2" : 40
  //   ...
}


Bowling.prototype.currentScore = function(){
  return this.score;
};

Bowling.prototype.roll = function(number) {
  this.score += number;
  console.log(this.score);
};
