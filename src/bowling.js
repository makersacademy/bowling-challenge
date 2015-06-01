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
    index = this.scores.length - 1; //current location of the array
  } else {
    this.scores.push(arg);
  }

  this._bonusChecker();
  this._calculateScore();
  this._framer();
}

Bowling.prototype._bonusChecker = function(){

  if(this.bonus && this.scores[index+2]){
    var bonus = this.scores[index+1] + this.scores[index+2];
    this.scores.push(bonus); //this handles the bonus for a strike
    this.bonus = 0;
    }
}

Bowling.prototype._calculateScore = function(){
  this.score = this.scores.reduce(function(prev_score, curr_score){
    return prev_score + curr_score;
  });
}

Bowling.prototype._framer = function(){

  var i;
  var k;

  for (i = 0, k = -1; i < this.scores.length; i++) {
    if (i % 2 === 0) {
        k++;
        this.scoresFrame[k] = [];
    }

    this.scoresFrame[k].push(this.scores[i]);
  }

  return this.scoresFrame;
}

