var ScoreCard = function () {
  this.results = [];
  this.total = 0;
  this.score = 0;
};

ScoreCard.prototype.calculateScore = function(ball1, ball2, hasSpare, hasStrike) {
  if (hasSpare === false && hasStrike === false) {
    this.score = ball1 + ball2;
  }else if (hasSpare === true){
    this.score = (ball1 * 2) + ball2;
  }else{
    this.score = (ball1 + ball2)*2;
  };
};

ScoreCard.prototype.recordScore = function(score){
  this.results.push(score);
};

ScoreCard.prototype.calcTotal = function(){
  console.log('hello');
  console.log(this.total);
  for (var scoreIndex =0; scoreIndex < this.results.length; scoreIndex++){
    this.total += this.results[scoreIndex];
  };
};
