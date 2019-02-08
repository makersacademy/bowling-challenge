function Scorecard(){
  this._scorecard = new Array();
}

Scorecard.prototype.record = function(score){
  if(this._scorecard.length === 0){
    console.log("undef was called")
    this._scorecard.push([score])
    console.log(this._scorecard[0]);
    console.log(this._scorecard[this._scorecard.length-1])
    return this._scorecard
  };
  if(this._scorecard[this._scorecard.length-1].length === 2){
    console.log("length 2 was called")
    this._scorecard.push([score])
    return this._scorecard
  };
  if(this._scorecard[this._scorecard.length-1].length === 1){
    console.log("i was called")
    console.log(this._scorecard.last);
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
    score_array.push([firstRoll+secondRoll]);
  })
  return score_array;
}
