function Frame (){

  this._rollsLeft = 2;
  this.frameScore = 0;
  this._bonusCounter = 0;
  this.isStrike = false;
  this.isSpare = false;
};

  Frame.prototype.calculate = function(user_input){
  // not sure it's possible to refactor this further
    this._decreaseRoll()
    this._calculateIfStrike(user_input)
    if (this._bonusCounter != 0) {
      this.frameScore += (user_input * 2)
      this._bonusCounter -= 1
    } else {
      this.frameScore += user_input
    }

    this._calculateIfSpare()
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

  Frame.prototype._calculateIfSpare = function() {
    if ((this._rollsLeft === 0) && (this.frameScore === 10)){
      this.isSpare = true;
    }
  };
