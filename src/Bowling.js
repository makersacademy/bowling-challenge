var Bowling = function(){
  this.rollsArray = [];
  this.scoresArray = [];
  this.rollCounter = 0;
};

Bowling.prototype.roll = function(rollScore){

  if (rollScore > 10) throw 'Illegal score';
  this.rollsArray.push(rollScore);
  this.registerRoll(rollScore);
};

Bowling.prototype.registerRoll = function(rollScore){
  var self = this;
  var frameStart = 0;

  if (rollScore === 10){
    self.scoresArray.push(rollScore);
    self.scoresArray.push('X');
  } else if ((rollScore + self.rollsArray[self.rollCounter - 1] || 0) === 10){
    console.log(rollScore + self.rollsArray[self.rollCounter - 1] || 0);
    console.log(rollScore + self.rollsArray[self.rollCounter]);
    console.log(rollScore);
    console.log(self.rollsArray[self.rollCounter]);
    self.scoresArray.push(self.rollsArray[self.rollCounter - 1]);
    self.scoresArray.push('/');
  } else {
    self.scoresArray.push(rollScore);
  };

  self.rollCounter ++;
  console.log(self.scoresArray);
};

Bowling.prototype.cumulativeScore = function(){
  var self = this;
  var score = 0;
  var frameStart = 0;

  function isStrike (){
    return self.rollsArray[frameStart] === 10;
  };

  function isSpare (){
    return self.rollsArray[frameStart] + self.rollsArray[frameStart + 1] === 10;
  };

  function frameTotal (){
    return self.rollsArray[frameStart] + self.rollsArray[frameStart + 1] || 0;
  };

  function strikeBonus (){
    return self.rollsArray[frameStart + 1] + self.rollsArray[frameStart + 2];
  };

  function spareBonus (){
    return self.rollsArray[frameStart + 2] || 0;
  };

  for (var i = 0; i < 10; i ++){
    if(isStrike()){
      score += 10 + strikeBonus();
      frameStart ++;
    } else if (isSpare()){
      score += 10 + spareBonus();
      frameStart += 2;
    } else {
      score += frameTotal();
      frameStart += 2;
    };
  };
  return score;
};
