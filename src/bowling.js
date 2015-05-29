function Bowling(){
  this.score;
  this.scores = [];
}

Bowling.prototype.pinsHit = function(arg) {
  this.scores.push(arg);
};

Bowling.prototype.calculateScore = function(){
  this.score = this.scores.reduce(function(prev_score, curr_score){
    return prev_score + curr_score;
  });
}

