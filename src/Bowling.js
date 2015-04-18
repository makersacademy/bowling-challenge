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
  return this._cumulativeScore;
};

Bowling.prototype.frame = function(){
  return this._scores.length + 1;
};

Bowling.prototype.rollRegistered = function(rollScore){
  console.log(this._rolls[this._rolls.length - 1]);
  /* not strike */
  if (rollScore < 10){

  /* spare */
  } else if (rollScore + this._rolls[this._rolls.length] === 10){
    this._scores.push(rollScore);
  /* strike */
  } else {
    this._scores.push(rollScore);
  };
};
