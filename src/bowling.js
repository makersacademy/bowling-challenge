function Bowling(){
  this.score;
  this.scores = [];
  this.bonus = 0;

  this.scoresFrame = [];
}

Bowling.prototype.pinsHit = function(arg) {

  if(arg==10){
    this.bonus++ //increment the bonus count
    this.scores.push(arg);
    index = this.scores.indexOf(arg);
  } else {
    this.scores.push(arg);
  }

  this._bonusChecker();
  this._calculateScore();
}

Bowling.prototype._bonusChecker = function(){

  if(this.bonus && this.scores[index+2]){
    var bonus = this.scores[index+1] + this.scores[index+2];
    this.scores.push(bonus); //this handles the bonus for a strike
    }
}

Bowling.prototype._calculateScore = function(){
  this.score = this.scores.reduce(function(prev_score, curr_score){
    return prev_score + curr_score;
  });
}

Bowling.prototype._framer = function(){

  for (e in this.scores){

    var next_space = this.scoresFrame.length-1;
    var next_score = this.scores[e];

    if(e == 0){
      this.scoresFrame.push([]);
      this.scoresFrame[0].push(next_score);
      console.log(next_space);
    } else if( e % 2 == 0) {
      this.scoresFrame.push([]);
      this.scoresFrame[this.scoresFrame.length-1].push(next_score);
      //for some reason next_space doesn't work here
    } else {
      this.scoresFrame[next_space].push(next_score);
    }
  }
}

