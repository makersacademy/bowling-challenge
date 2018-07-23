var Frame = function(){
  this._score = 0;
  this._bonusRollsLeft = 0;
  this._rollNumber = 1;
  this._pinsDown = 0;
  this._isActive = true;
  this._isComplete = false;
};

Frame.prototype.Score = function(){
  return this._score;
};

Frame.prototype.knockDown = function(pins) {
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
  } else {
    this._isComplete = true;
  }
  this._isActive = false;
};

Frame.prototype.manageBonus = function(pins) {
  if(this._bonusRollsLeft > 0){
    this._score += pins;
    this._bonusRollsLeft--;
  }
  if(this._bonusRollsLeft == 0){
    this._isComplete = true;
  }
};

Frame.prototype.isComplete = function(){
  return this._isComplete;
};
