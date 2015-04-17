var Bowling = function(){
  this._score = 0;
  this._frame = 1;
  this._rollsThisFrame = 0;
};

Bowling.prototype.roll = function(rollScore){
  if (rollScore <= 10){
    this._score += rollScore;
    this._rollsThisFrame ++;
    this.rollRegistered();
  } else {
    throw 'Illegal score';
  };
};

Bowling.prototype.score = function(){
  return this._score;
};

Bowling.prototype.frame = function(){
  return this._frame;
};

Bowling.prototype.rollRegistered = function(){
  if (this._rollsThisFrame < 2){
    this._rollsThisFrame ++;
  } else {
    this._frame ++;
  };
};
