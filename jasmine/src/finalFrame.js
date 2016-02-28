function FinalFrame () {
  this._rollOne = null
  this._rollTwo = null
  this._rollThree = null

  this._complete = false
}

FinalFrame.prototype.roll = function(pins){
  if (typeof this._rollOne !== 'number'){
    this._rollOne = pins;
  } else if (typeof this._rollTwo !== 'number') {
    this._rollTwo = pins;
    this._complete = ((this._rollTwo + this._rollOne) > 9) ? false : true;
  } else {
    this._rollThree = pins;
    this._complete = true;
  }
};

FinalFrame.prototype.isComplete = function(){
  return this._complete;
}

FinalFrame.prototype.score = function(){
  return (this._rollOne + this._rollTwo + this._rollThree);
}

FinalFrame.prototype.isStrike = function(){
   return (this._rollOne === 10) ? true : false;
}

FinalFrame.prototype.isSpare = function(){
  return ( (this.score() === 10) && (this._rollOne !== 10) ) ? true : false;
}
