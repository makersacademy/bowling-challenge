function Scorecard(){
  this._scorecard = new Array();
  this.record = new ScoreRecorder(this._scorecard);
  this.evaluateScore = new EvaluateScore(this._scorecard)
}

Scorecard.prototype.lastFrame = function(){
  return this._scorecard[this._scorecard.length-1]
}

Scorecard.prototype.see = function(){
  return this._scorecard
}

Scorecard.prototype.score = function(){
  return this.evaluateScore.go();
}
