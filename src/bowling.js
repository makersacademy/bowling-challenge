function Bowling(){
  this._total = 0;
  this._maxScore = 300;
  this._counter = 0;
  // this._currentScore = 0;
}

Bowling.prototype.total = function(){
    return this._total;
};

Bowling.prototype.maxScore = function(){
  return this._maxScore;
}

Bowling.prototype.addScore = function(score){
  if(score > 10){
    return 'Cannot add more than 10';
  }
  return this._total += score;
}

Bowling.prototype.frame = function(){
  if (this._counter < 2){
//     // addScore(score)
//     score += this._currentScore
    this._counter += 1;
  } else {
    this._counter = 0;
  }
//   this._total += this._currentScore
//   this._currentScore = 0
// }
//
// if this._counter==0 && score == 10{
//   this._total += score
//   this.counter = 0;
// } else if {this._counter==1{
//     if(this._currentScore + score == 10){
//       SPARE
//       counter = 0
//     }
}


// }
