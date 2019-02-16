function Scorecard(){
  this._scorecard = new Array()
  this.record = new ScoreRecorder(this._scorecard)
}

Scorecard.prototype.evaluate = function(){
  return (new EvaluateScore).scorecard(this._scorecard)
}

Scorecard.prototype.display = function(){
  return this._scorecard;
}

Scorecard.prototype.isGameOver = function() {
  if(this._scorecard.length >= 10){
    switch (this._scorecard[this._scorecard.length-1].length) {
      case 1:
        return false
        break;
      case 2:
        return arraySum(this._scorecard[this._scorecard.length-1]) >= 10 ? false : true;
        break;
      case 3:
        return true;
        break;
    }
  }
  return false
}
