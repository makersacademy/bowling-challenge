var Bowling = function(){
  this._rolls = [];
};

Bowling.prototype.roll = function(rollScore){
  var self = this;

  if (rollScore > 10) throw 'Illegal score';
  self._rolls.push(rollScore);
};

Bowling.prototype.cumulativeScore = function(){
  var self = this;
  var score = 0;
  var frameStart = 0;

  function frameTotal(){
    // console.log(self._rolls[frameStart] + self._rolls[frameStart + 1] || 0);
    return self._rolls[frameStart] + self._rolls[frameStart + 1] || 0;
  }

  function spareBonus() {
    return self._rolls[frameStart + 2];
  }

  function strikeBonus() {
    return self._rolls[frameStart + 1] + self._rolls[frameStart + 2];
  }

  function isStrike(){
    return self._rolls[frameStart] === 10;
  }

  function isSpare(){
    self._rolls[frameStart] + self._rolls[frameStart + 1] === 10;
  }

  for (var i = 0; i < 10; i ++){
    if (isStrike()){
      // console.log('strike');
      score += 10 + strikeBonus();
      frameStart ++;
    } else if (isSpare()){
      // console.log('spare');
      score += 10 + spareBonus();
      frameStart += 2;
    } else {
      // console.log(score);
      score += frameTotal();
      frameStart += 2;
    };
    // console.log('score ' + score);
    // console.log('framestart ' + frameStart);
  }

  return score;
};
