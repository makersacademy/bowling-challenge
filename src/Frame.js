function Frame(){
  this._rollCount = 1;
  this._over = false;
  this.isStrike = false;
};

Frame.prototype.roll = function(pins){
  if (this._rollCount === 1) {
    if (pins === 10){
      this._over = true;
      this.isStrike = true;
    } else {
      this._rollCount = 2;
    };
  } else {
    this._over = true;
  };
};

Frame.prototype.isOver = function(){
  return this._over;
};
