var Bowling = function() {
  this.score1 = 0;
  this.score2 = 0;
  this.totalScore = 0;


};

Bowling.prototype.firstBowl = function(pins) {
  this.score1 += pins;
  console.log(this.score1);
  this.score2 = 0;
  this.calculateScore();


};

Bowling.prototype.secondBowl = function(pins) {
  this.score2 += pins;
  this.calculateScore();

};


Bowling.prototype.calculateScore = function(num1,num2) {
  this.totalScore = (this.score1 + this.score2);

};
