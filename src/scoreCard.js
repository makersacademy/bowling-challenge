var ScoreCard = function () {
  this.results = [];
  // this.total = 0;
  this.score = 0;
};

ScoreCard.prototype.calculateScore = function(ball, pins, hasSpare, hasStrike) {
  if (hasStrike === true) {
    this.score = pins * 2;
  }else if (hasSpare === true){
    if (ball === 1){
      this.score = pins * 2;
    }else{
      this.score = pins;
    };
  }else{
    this.score = pins;
  };
};

ScoreCard.prototype.recordScore = function(score){
  this.results.push(score);
};

ScoreCard.prototype.calcTotal = function(){
  this.total = 0;
  for (var scoreIndex =0; scoreIndex < this.results.length; scoreIndex++){
    this.total += this.results[scoreIndex];
  };
};
