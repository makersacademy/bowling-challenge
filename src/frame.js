function Frame () {
  this._rollOne = null
  this._rollTwo = null
  this._complete = false
}

Frame.prototype.roll = function(pins){
  if (pins === 10) {
    this._rollOne = pins;
    this._complete = true;
  } else if (typeof this._rollOne !== 'number'){
    this._rollOne = pins;
  } else {
    this._rollTwo = pins;
    this._complete = true;
  }
};

Frame.prototype.isComplete = function(){
  return this._complete;
}

Frame.prototype.isStrike = function(){
   return (this._rollOne === 10) ? true : false;
}

Frame.prototype.isSpare = function(){
  return ( (this.score() === 10) && (this._rollOne !== 10) ) ? true : false;
}

Frame.prototype.score = function(){
  return (this._rollOne + this._rollTwo);
}
