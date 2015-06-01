function Bowling(){
  this.score;
  this.scores = [];
  this.spike_count = 0;
  this.bonus = 0;

  this.scoresFrame = [];
}

Bowling.prototype.pinsHit = function(arg) {

  if(arg===10){
    this.spike_count++ //increment the bonus count

    this.scores.push(arg);
    this.scores.push(0);

    index = this.scores.length - 1; //current location of the array
  } else {
    this.scores.push(arg);
  }

}

Bowling.prototype._bonusChecker = function(){

  for(var i = 0; i < this.scoresFrame.length; i++){

    if(array_total(this.scoresFrame[i]) == 10 && this.scoresFrame[i][0] != 10 && this.scoresFrame[i+1]) {
      this.bonus += this.scoresFrame[i+1][0];
    } //checks for spares

  }

  if(this.spike_count && this.scores[index+2]){
    this.bonus = this.scores[index+1] + this.scores[index+2];
    this.spike_count = 0;
    } //checks for spikes
}

Bowling.prototype._calculateScore = function(){
  this.score = array_total(this.scores)

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

Bowling.prototype.scoreGame = function(){

  this._frameScores();
  this._bonusChecker();
  this._calculateScore();

}

function array_total(arr){
  return arr.reduce(function(prev_score, curr_score){
    return prev_score + curr_score;
  });
}

