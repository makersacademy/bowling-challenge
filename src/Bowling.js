var Bowling = function(){
  this.rolls = [];
  this.scoreTally = [];
  this.rollCounter = 0;
};

Bowling.prototype.roll = function(rollScore){

  if (rollScore > 10) throw 'Illegal score';
  this.rolls.push(rollScore);

  if (rollScore === 10){
    this.rollCounter += 2;
  } else {
    this.rollCounter ++;
  };

  if (this.rollCounter % 2 === 0){
    this.cumulativeScore();
  };
};

Bowling.prototype.cumulativeScore = function(){
  var self = this;
  var score = 0;
  var frameStart = 0;

  function isStrike (){
    return self.rolls[frameStart] === 10;
  };

  function isSpare (){
    return self.rolls[frameStart] + self.rolls[frameStart + 1] === 10;
  };

  function frameTotal (){
    return self.rolls[frameStart] + self.rolls[frameStart + 1] || 0;
  };

  function strikeBonus (){
    return self.rolls[frameStart + 1] + self.rolls[frameStart + 2];
  };

  function spareBonus (){
    return self.rolls[frameStart + 2] || 0;
  };

  for (var i = 0; i < 10; i ++){
    if(isStrike()){
      score += 10 + strikeBonus();
      self.scoreTally.push(10);
      self.scoreTally.push('X');
      frameStart ++;
    } else if (isSpare()){
      score += 10 + spareBonus();
      self.scoreTally.push(self.rolls[frameStart]);
      self.scoreTally.push('/');
      frameStart += 2;
    } else {
      score += frameTotal();
      self.scoreTally.push(self.rolls[frameStart]);
      self.scoreTally.push(self.rolls[frameStart + 1]);
      frameStart += 2;
    };
  };
  console.log(self.scoreTally);
  return score;
};

// Bowling.prototype.scoreTally = function(){
//   // var self = this;
//
//   return this.scoreTally;
// };
