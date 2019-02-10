function ScoreRecorder(scorecard){
  this._scorecard = scorecard;
}

ScoreRecorder.prototype.roll = function(roll){
  this._scorecard.push(roll)
}
