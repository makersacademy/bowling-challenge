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
  var rolls = this._rolls;
  var score = this._cumulativeScore;

  function frameTotal(){
    return rolls[frameStart] + rolls[frameStart + 1] || 0;
  };

  function spareBonus() {
    return rolls[frameStart + 2] || 0;
  };

  function strikeBonus() {
    return rolls[frameStart + 1] + rolls[frameStart + 2] || 0;
  };

  for (var i = 0; i < 10; i ++){
    if (rolls[frameStart] === 10){
      score += 10 + strikeBonus();
      frameStart ++;
    } else if (rolls[frameStart] + rolls[frameStart + 1] === 10){
      score += 10 + spareBonus();
      frameStart ++;
    } else {
      score += frameTotal();
      frameStart += 2;
    };
  };
  console.log('---' + score);

  return score;
};
