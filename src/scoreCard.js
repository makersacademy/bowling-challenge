'use strict';

var ScoreCard = function (){
this.results = [];
this.total = 0;
this.score = 0;
};

ScoreCard.prototype.recordScore = function (score) {
  this.results.push(score);
};

ScoreCard.prototype.calcTotal = function () {
  console.log(this.total);
  for(var scoreIndex =0; scoreIndex < this.results.length; scoreIndex++)
  this.total += this.results(scoreIndex);
};
