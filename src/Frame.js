function Frame (){

  this._rollsLeft = 2;
  this._frameScore = 0;
  this._bonusCounter = 0;

};

  Frame.prototype.calculate = function(user_input){
    this.decreaseRoll();
    this._frameScore += user_input;
  };

  Frame.prototype.decreaseRoll = function(){
    this._rollsLeft -= 1
  };
