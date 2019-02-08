function Scorecard(){
  this._scorecard = new Array();
  console.log(this);
}

Scorecard.prototype.lastFrame = function(){
  return this._scorecard[this._scorecard.length-1]
}

Scorecard.prototype.record = function(score){
  if(this._scorecard.length === 0){
    this._scorecard.push([score]);
    return this._scorecard
  }else if(this.lastFrame().length === 2){
    this._scorecard.push([score])
    return this._scorecard
  }else if(this.lastFrame().length === 1){
    this._scorecard[this._scorecard.length-1].push(score);
    return this._scorecard;
  };
}

Scorecard.prototype.see = function(){
  return this._scorecard
}

Scorecard.prototype.score = function(){
  score_array = []
  this._scorecard.forEach(function(frame,i){
    var firstRoll = parseInt(frame[0]);
    var secondRoll = parseInt(frame[1]);
    var lastTotal = i === 0 ? 0 :  score_array[i-1]
    score_array.push(firstRoll+secondRoll+lastTotal);
  })
  return score_array;
}
