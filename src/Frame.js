function Frame(){
  this._rollCount = 1;
  this._over = false;
};

Frame.prototype.roll = function(pins){
  if (this._rollCount === 1) {
    this._rollCount = 2;
  } else {
    this._over = true;
  };
};

Frame.prototype.isOver = function(){
  return this._over;
};
