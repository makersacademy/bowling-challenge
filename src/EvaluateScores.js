function EvaluateScore(scorecard){
  this._scorecard=scorecard;
  this._values = { 'X':10,  }
}

EvaluateScore.prototype.go = function(){
  score_array = []
  for(var i = 0; i < this._scorecard.length; ++i){
    var frame = this._scorecard[i];
    var lastTotal = i === 0 ? 0 :  score_array[i-1]
    if(frame.includes("/")){
      score_array.push(this._handleSpare(i)+lastTotal);
    }else{
      score_array.push(this._handleNumbers(i)+lastTotal);
    }
  }
  return score_array;
}
EvaluateScore.prototype._handleNumbers = function(frameindex){
  var firstRoll = parseInt(this._scorecard[frameindex][0]);
  var secondRoll = parseInt(this._scorecard[frameindex][1]);
  return firstRoll + secondRoll;
}

EvaluateScore.prototype._handleSpare = function(frameindex){
  if(this._scorecard[frameindex+1][0] === "X"){
    return 20;
  }else{ return 10 + parseInt(this._scorecard[frameindex+1][0])};
}

EvaluateScore.prototype._handleStrike = function(frameindex){
//switch(frameindex)
//case 9:
//case 10:
//default:

//index === 9?
//  contains X?
//  contains /?
  //lookup has {'x';10,'/':10}
  //nex[0-1]contains a / or x => handle here
  //case / => +20 //has to be 2 ahead
  //case X => if
  //else simple sum
  //switch(this._scorecard(frameindex+1)[0])
}

///frame 9
/// frame 10
///regular
