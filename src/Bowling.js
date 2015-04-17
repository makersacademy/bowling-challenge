var Bowling = function(){
  this._score = 0;
};

Bowling.prototype.roll = function(rollScore){
  if (rollScore <= 10){
    this._score += rollScore;
  } else {
    throw 'Illegal score';
  };
};

Bowling.prototype.score = function(){
  return this._score;
};
