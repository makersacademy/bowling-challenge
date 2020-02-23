function Scorecard() {

  this.scoreArray = [];
  this.frameScore = {};

};

Scorecard.prototype.addScore = function(number) {

  // stores score in dictionary as throw_1 with argument as value
  this.frameScore.throw_1 = number

}