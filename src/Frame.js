function Frame (){

  this._rollsLeft = 2;
  this.frameScore = 0;
  this._bonusCounter = 0;
  this.isStrike = false;
  this.isSpare = false;
};

  Frame.prototype.calculate = function(user_input){
    this._decreaseRoll()
    this._calculateIfStrike(user_input)
    this.frameScore += user_input
    //now call to spare prototype, as frameScore is complete
  };

  Frame.prototype._decreaseRoll = function(){
    this._rollsLeft -= 1
  };

  Frame.prototype._calculateIfStrike = function(user_input){
    if (user_input === 10){
      this.isStrike = true
      this._decreaseRoll();
    }
 };
