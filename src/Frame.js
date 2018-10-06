function Frame (){

  this._rollsLeft = 2;
  this._frameScore = 0;
  this._bonusCounter = 0;

};

  Frame.prototype.calculate = function(user_input){
    this._frameScore += user_input
  };
