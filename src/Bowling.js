var Bowling = function() {
  this.score1 = 0;
  this.score2 = 0;
  this.totalScore = [];


};

Bowling.prototype.firstBowl = function(pins) {
  pins = parseInt(pins);
  this.score1 = pins;
  if (pins === 10) {
    this.score2 = 0;
    this.calculateScore();
  }


};

Bowling.prototype.secondBowl = function(pins) {
  pins = parseInt(pins);
  this.score2 = pins;
  this.calculateScore();


};


Bowling.prototype.calculateScore = function() {
  var result = (this.score1 + this.score2);
  console.log("what is result: " + result);
  this.totalScore.push(result);
  this.score1 = 0;
  this.score2 = 0;
};
