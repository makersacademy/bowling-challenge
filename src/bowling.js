function Bowling(){
  this.score;
  this.scores = [];
  this.bonus_count = 0;
  this.bonus;

  this.scoresFrame = [];
}

Bowling.prototype.pinsHit = function(arg) {

  if(arg===10){
    this.bonus_count++ //increment the bonus count

    this.scores.push(arg);
    this.scores.push(0);

    index = this.scores.length - 1; //current location of the array
  } else {
    this.scores.push(arg);
  }

  this._bonusChecker();
  this._calculateScore();
  this._frameScores();
}

Bowling.prototype._bonusChecker = function(){

  if(this.bonus_count && this.scores[index+2]){
    this.bonus = this.scores[index+1] + this.scores[index+2];
    this.bonus_count = 0;
    }
}

Bowling.prototype._calculateScore = function(){
  this.score = this.scores.reduce(function(prev_score, curr_score){
    return prev_score + curr_score;
  });

  if(this.bonus){
    return this.score += this.bonus;
  } else {
    return this.score;
  }
}

Bowling.prototype._frameScores = function(){

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

