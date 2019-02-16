function ScoreRecorder(scorecard){
  this._scorecard = scorecard;
  this.check = new CheckRoll(scorecard);
}

ScoreRecorder.prototype.lastFrame = function(){
  if (this._scorecard.length > 0){
    return this._scorecard[this._scorecard.length - 1]
  }else{
    return []
  }
}

ScoreRecorder.prototype.roll = function(roll){
  this.check.roll(roll)
  if(this._scorecard.length < 10){
    if(this.lastFrame().length === 1){
      switch(this.lastFrame()[0]){
        case 10:
          this._scorecard.push([roll]);
          break;
        default:
          this.lastFrame().push(roll);
      }
    }else{
      this._scorecard.push([roll]);
    }
  }else{
    this.check.tenthFrameRoll check
    this._scorecard[9].push(roll);
  }
};
