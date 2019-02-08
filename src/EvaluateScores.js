function EvaluateScore(scorecard){
  this._scorecard=scorecard;
}

EvaluateScore.prototype.go = function(){
  score_array = []

  for(var i = 0; i < this._scorecard.length; ++i){
    frame = this._scorecard[i];
    var lastTotal = i === 0 ? 0 :  score_array[i-1]
    if(frame.includes("/")){
      score_array.push(this._handleSpare(i)+lastTotal);
    }else{
    var firstRoll = parseInt(frame[0]);
    var secondRoll = parseInt(frame[1]);
    score_array.push(firstRoll+secondRoll+lastTotal);
  }
  }
  return score_array;
}

EvaluateScore.prototype._handleSpare = function(frameindex){
  if(this._scorecard[frameindex+1][0] === "X"){
    return 20;
  }else{ return 10 + parseInt(this._scorecard[frameindex+1][0])};
}
