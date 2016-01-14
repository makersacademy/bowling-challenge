function Frame() {
  this.results = [];
  this.pins = 10;
  this.currentRoll = 1;
}

  Frame.prototype.getResults = function(){
    return this.results;
  }

  Frame.prototype.roll = function(score){
    if(this.currentRoll > 2) {throw ('Only two bowls per frame');}
    if(this.pins - score < 0){throw ('Frame score may not exceed 10');}
    this.pins -= score;
    if(this.isStrike(score))
      {this.results.push(score, 0);}
    else {
    this._addRoll();
    this.results.push(score);}
  }

  Frame.prototype.checkComplete = function(){
  if(this.currentRoll >= 3 || this.pins === 0)
    {return true;}
  else
    {return false;}
  }

  Frame.prototype._addRoll = function(){
    this.currentRoll++;
  }

  Frame.prototype.isStrike = function(score){
    if(this.currentRoll === 1 && score === 10){return true}
 }

  Frame.prototype.isSpare = function(){
    if(this.results[0] + this.results[1] === 10)
      {return true}
    else
      {return false}
}
