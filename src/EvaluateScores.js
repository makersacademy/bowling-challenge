function EvaluateScore(scorecard){
  this._scorecard=scorecard;
}

EvaluateScore.prototype.go = function(){
  score_array = []
  this._scorecard.forEach(function(frame,i){
    var firstRoll = parseInt(frame[0]);
    var secondRoll = parseInt(frame[1]);
    var lastTotal = i === 0 ? 0 :  score_array[i-1]
    score_array.push(firstRoll+secondRoll+lastTotal);
  })
  return score_array;
}
