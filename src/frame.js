function Frame() {
  this.results = [];
  this.pins = 10;
  this.currentRoll = 1;
  this.bonus = 0;
}

  Frame.prototype.getResults = function(){
    return this.results;
  }

  Frame.prototype.getBonus = function(){
    return this.bonus;
  }

  Frame.prototype.roll = function(score){
    if(this.currentRoll > 2) {throw ('Only two bowls per frame');}
    if(this.pins - score < 0){throw ('Frame score may not exceed 10');}
    this.pins -= score;
    this.results.push(score);
    this._isStrike();
    this._addRoll();
    this._isSpare();
  }

  Frame.prototype.isComplete = function(){
  if(this.currentRoll >= 3 || this.pins === 0)
    {return true;}
  else
    {return false;}
  }

  Frame.prototype._addRoll = function(){
    this.currentRoll++;
  }

  Frame.prototype._isStrike = function(){
    if(this.currentRoll === 1 && this.results[0] === 10)
      {this.bonus = 2 && this.results.push(0)}
    else {
      {return false}
    }
 }

  Frame.prototype._isSpare = function(){
    if(this.results[0] + this.results[1] === 10 && this.currentRoll > 2)
      {this.bonus = 1}
    else
      {return false}
  }
