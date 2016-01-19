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
    this._setBonus();
    this._pinReset();
  }

  FinalFrame.prototype._pinReset = function(){
    if(this.getBonus() > 0){this.pins = 10}
  }

  FinalFrame.prototype._setBonus = function(){
    if(this.pins === 0)
      {this.bonus = 1}
  }

  FinalFrame.prototype.isComplete = function(){
    if(this.currentRoll === 3 && this.bonus === 0 ||
      this.currentRoll === 4 && this.bonus > 0)
      {return true}
    else
      {return false}
  }
