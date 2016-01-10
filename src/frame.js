function Frame() {

  this.currentScore = [];
  this.pins = 10;
  this.currentRoll = 1;
}

  Frame.prototype.getPins = function(){
    return this.pins;
  };

  Frame.prototype.roll = function(num){
    if(this.pins - num < 0){throw ('Frame score may not exceed 10')}
    this.pins = this.pins - num;
    if(this.currentRoll === 1 && num === 10)
      {this.strike();}
    else {
    this._addRoll();
    this.currentScore.push(num);}
    if(this._checkComplete()){ this.completeFrame();}
  }

  Frame.prototype.strike = function(){
    this.currentScore.push(10, 0);
    this.completeFrame();
  }

  Frame.prototype._checkComplete = function(){
  if(this.currentRoll > 2)
    {return true;}
  else
    {return false;}
  }

  Frame.prototype._addRoll = function(){
    this.currentRoll++;
  }

  Frame.prototype.completeFrame = function(){
    // send this.currentScore to game;
  }
