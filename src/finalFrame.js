function FinalFrame(){
  Frame.call(this);
}

  FinalFrame.prototype = Object.create(Frame.prototype);
  FinalFrame.prototype.constructor = FinalFrame;

  FinalFrame.prototype.roll = function(score){
    if(this.pins - score < 0){throw ('Frame score may not exceed 10')}
    this.pins -= score;
    this.results.push(score);
    this._addRoll();
  }

  FinalFrame.prototype.checkComplete = function(){
    if(this.currentRoll === 3 && this.pins > 0)
      {return true}
    if(this.currentRoll === 2 || this.currentRoll === 3 && this.results.reduce === 10)
      {return false}
  }
