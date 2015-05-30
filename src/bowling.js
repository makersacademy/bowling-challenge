function Bowling(){
  this.score;
  this.scores = [];
  this.bonus = 0;
}

Bowling.prototype.pinsHit = function(arg) {
  if(arg==10){
    this.bonus++ //increment the bonus count
    this.scores.push(arg);
    index = this.scores.indexOf(arg);
  } else {
    this.scores.push(arg);
  }

  console.log(this.bonus);

  if(this.bonus && this.scores[index+2]){
    var bonus = this.scores[index+1] + this.scores[index+2];
    this.scores.push(bonus);
    }
}

Bowling.prototype.calculateScore = function(){
  this.score = this.scores.reduce(function(prev_score, curr_score){
    return prev_score + curr_score;
  });
}

