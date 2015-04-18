var Bowling = function(){
  this.rolls = [];
};

Bowling.prototype.roll = function(rollScore){
  var self = this;
  self.rolls.push(rollScore);
};

Bowling.prototype.cumulativeScore = function(){
  var self = this;
  var score = 0;
  var frameStart = 0;

  function isStrike () {
    return self.rolls[frameStart] === 10;
  };

  function isSpare () {
    return self.rolls[frameStart] + self.rolls[frameStart + 1] === 10;
  };

  function frameTotal () {
    return self.rolls[frameStart] + parseInt(self.rolls[frameStart + 1]) || 0;
  };

  function strikeBonus () {
    return self.rolls[frameStart + 1] + self.rolls[frameStart + 2];
  };

  function spareBonus () {
    return self.rolls[frameStart + 2] || 0;
  };

  for (var i = 0; i < 10; i ++) {
    if(isStrike()) {
      score += 10 + strikeBonus();
      frameStart ++;
    } else if (isSpare()) {
      score += 10 + spareBonus();
      frameStart += 2;
    } else {
      score += frameTotal();
      frameStart += 2;
    };
  };
  return score;
};
