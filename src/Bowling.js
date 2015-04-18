var Bowling = function(){
  this._rolls = [];
  this._cumulativeScore = 0;
};

Bowling.prototype.roll = function(rollScore){
  if (rollScore > 10) throw 'Illegal score';
  this._rolls.push(rollScore);
  console.log(this._rolls);
};

Bowling.prototype.cumulativeScore = function(){
  var frameStart = 0;

  function frameTotal(){
    return this._rolls[frameStart] + this._rolls[frameStart + 1];
  };

  function spareBonus() {
    return this._rolls[frameStart + 2];
  }

  function strikeBonus() {
    return this._rolls[frameStart + 1] + this._rolls[frameStart + 2];
  }

  for (var i = 0; i < 10; i ++){
    if (this._rolls[frameStart] === 10){
      this._cumulativeScore += 10 + strikeBonus();
      frameStart ++;
    } else if (this._rolls[frameStart] + this._rolls[frameStart + 1] === 10){
      this._cumulativeScore += 10 + spareBonus();
      frameStart ++;
    } else {
      this._cumulativeScore += frameTotal();
      frameStart += 2;
    };
    console.log(this._cumulativeScore);
  };

  return this._cumulativeScore;
};
