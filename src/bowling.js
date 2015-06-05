function Bowling(){
  this.score;
  this.scores = [];
  this.scoresFrame = [];

  spike_count = 0;
  roll_count = 0;

  previous_roll = 0;
  bonus = 0;
}

Bowling.prototype.pinsHit = function(arg) {
  roll_count++

  if(roll_count % 2 != 0){
    previous_roll = arg;
  } else {
    var isMoreThanTen = previous_roll + arg;
  }

  if(roll_count >= 20){
    return "You have exceeded max number of rolls"
  } else if(isMoreThanTen > 10){
    //roll_count-- what is happening here o!
    return "invalid"
  }

  if(arg===10){
    roll_count++

    spike_count++ //increment the bonus count

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
      bonus += this.scoresFrame[i+1][0];
    } //checks for spares

  }

  if(spike_count && this.scores[index+2]){
    bonus = this.scores[index+1] + this.scores[index+2];
    spike_count = 0;
    } //checks for spikes
}

Bowling.prototype._isPerfectGame = function(){

  if(this.score == 100){
    bonus += 200
  }
}

Bowling.prototype._calculateScore = function(){
  this.score = array_total(this.scores)

  this._isPerfectGame();

  if(bonus){
    return this.score += bonus;
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