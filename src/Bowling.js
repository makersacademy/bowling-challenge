var Bowling = function(){
  this._cumulativeScore = 0;

  this._rolls = [];
  this._scores = [];
};

Bowling.prototype.roll = function(rollScore){
  if (rollScore > 10) throw 'Illegal score';
  this._rolls.push(rollScore);
  this.rollRegistered(rollScore);
};

Bowling.prototype.cumulativeScore = function(){
  // for (var i = 0; i < this._scores.length; i++) {
  //   this._cumulativeScore += this._scores[i];
  // };
  // return this._cumulativeScore;
  var total = this._scores.reduce(function(a, b) {
    return a + b;
  });
  return total;
};

Bowling.prototype.frame = function(){
  return this._scores.length + 1;
};

Bowling.prototype.rollRegistered = function(rollScore){
  /* strike */
  if (rollScore === 10){
    this._scores.push(rollScore);
  /* spare */
  } else if (rollScore + this._scores[this._scores.length - 1] === 10){
      this._scores[this._scores.length - 1] = 10;
  /* not strike or spare */
  } else if (this._scores.length > 0){
      this._scores[this._scores.length - 1] += rollScore;
  } else {
      this._scores.push(rollScore);
  };
  console.log('rollScore ' + rollScore);
  console.log('rolls array ' + this._rolls);
  console.log('this._scores ' + this._scores);
  console.log('cumve ' + this.cumulativeScore());
  console.log('this._scores.length ' + this._scores.length);
  console.log('last score ' + this._scores[this._scores.length - 1]);
};
