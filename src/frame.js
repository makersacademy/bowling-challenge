var Frame = function(){
  this._score = 0;
  this._bonusRollsLeft = 0;
  this._rollNumber = 1;
  this._pinsDown = 0;
  this._isActive = true;
  this._isComplete = false;
};

Frame.prototype.knockedDown = function(pins) {
  this._score += pins;
  this._pinsDown += pins;

  switch(this._rollNumber){
    case 1: this.firstRoll(); break;
    case 2: this.secondRoll(); break;
  }

  this._rollNumber++;
};

Frame.prototype.isActive = function(){
  return this._isActive;
};

Frame.prototype.rollNumber = function (){
  return this._rollNumber;
};

Frame.prototype.firstRoll = function(){
  if (this._pinsDown == 10){
    this._bonusRollsLeft = 2;
    this._isActive = false;
  }
};

Frame.prototype.secondRoll = function(){
  if (this._pinsDown == 10){
    this._bonusRollsLeft = 1;
  }
  this._isActive = false;
};
