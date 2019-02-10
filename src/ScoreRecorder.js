function ScoreRecorder(scorecard){
  this._scorecard = scorecard;
}


ScoreRecorder.prototype.lastFrame = function(){
  if (this._scorecard.length > 0){
    return this._scorecard[this._scorecard.length - 1]
  }else{
    return []
  }
}

ScoreRecorder.prototype.roll = function(roll){
  if(this.lastFrame().length === 1){
    this.lastFrame().push(roll);
  }else{
    this._scorecard.push([roll]);
  }
};
