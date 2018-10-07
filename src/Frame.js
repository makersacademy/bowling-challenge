function Frame (){

  this._rollsLeft = 2;
  this.frameScore = 0;
  this._bonusCounter = 0;
  this.isStrike = false;
};

  Frame.prototype.calculate = function(user_input){
    this._decreaseRoll()
    if (user_input === 10){
    this.frameScore += user_input;
    this.isStrike = true
    this._decreaseRoll();

    } else {
      this.frameScore += user_input
    }
  };

  Frame.prototype._decreaseRoll = function(){
    this._rollsLeft -= 1
  };
