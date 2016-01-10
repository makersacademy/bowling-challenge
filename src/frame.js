function Frame() {
  this.results = [];
  this.pins = 10;
  this.currentRoll = 1;
  this.score = 0;
}

  Frame.prototype.getScore = function(){
    return this.score;
  };

  Frame.prototype.roll = function(score){
    if(this.pins - score < 0){throw ('Frame score may not exceed 10')}
    this.pins -= score;
    if(this.currentRoll === 1 && score === 10)
      {this.results.push(score, 0);}
    else {
    this._addRoll();
    this.results.push(score);}
    if(this.checkComplete) { this.calculateScore()}
  }

  Frame.prototype.strike = function(){
    this.results.push(10, 0);
    this.calculateScore();
  }

  Frame.prototype.calculateScore = function(){
    this.score = (this.results[0] + this.results[1]);
  }

  Frame.prototype.checkComplete = function(){
  if(this.currentRoll === 3 || this.pins === 0)
    {return true;}
  else
    {return false;}
  }

  Frame.prototype._addRoll = function(){
    this.currentRoll++;
  }

  Frame.prototype.rerack = function(){
    this.results = [];
    this.pins = 10;
    this.currentRoll = 1;
    this.score = 0;
  }
