function Scorecard(){
  this._scorecard = new Array()
  this.record = new ScoreRecorder(this._scorecard)
}

Scorecard.prototype.display = function(){
  return this._scorecard;
}
