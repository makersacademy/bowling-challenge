function Scorecard() {

  this.scoreArray = [];
  this.frameScore = {};

};

Scorecard.prototype.addScore = function(number) {

  if (number === 10 && this.frameScore.throw_1 == undefined) {
    this.frameScore.throw_1 = number
    this.frameScore.throw_2 = 0
    this.frameScore.result = 'X'
  } else if (this.frameScore["throw_1"] !== undefined) {
    this.frameScore.throw_2 = number
    this.frameScore.result = this.frameScore.throw_1 + this.frameScore.throw_2
  } else {
    // stores score in dictionary as throw_1 with argument as value
    this.frameScore.throw_1 = number
  }

}