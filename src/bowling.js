function Bowling(){
  this._total = 0;
  this._maxScore = 300;
}

Bowling.prototype.total = function(){
    return this._total;
};

Bowling.prototype.maxScore = function(){
  return this._maxScore;
}

Bowling.prototype.addScore = function(score){
  return this._total += score;
}
