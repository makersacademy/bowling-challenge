var Bowling = function(){
  this.rollsArray = [];
  this.scoresArray = [];
  this.rollCounter = 0;
  this.frameCounter = 1;
};

Bowling.prototype.roll = function(rollScore){

  if (rollScore > 10) throw 'Illegal score';
  this.rollsArray.push(rollScore);
  this.registerRoll(rollScore);
};

Bowling.prototype.registerRoll = function(rollScore){

  var self = this;

  function tenthFrame (){
    return (self.frameCounter > 18);
  };

  if (tenthFrame()){
    self.scoresArray.push(rollScore);

  } else if (rollScore === 10){
    this.scoresArray.push(rollScore);
    this.scoresArray.push('X');
    this.frameCounter += 2;

  } else if ((rollScore + (this.rollsArray[this.rollCounter - 1] || 0)) === 10){
    console.log('AA ' + (rollScore + self.rollsArray[this.rollCounter - 1] || 0));
    console.log('BB ' + (rollScore + self.rollsArray[this.rollCounter - 1]));
    console.log('CC ' + (this.scoresArray[this.rollCounter - 1]));
    console.log('DD ' + (rollScore));
    console.log('EE ' + (this.rollsArray[this.rollCounter - 1]));
    this.scoresArray.push('/');
    this.frameCounter ++;

  } else {
    this.scoresArray.push(rollScore);
    this.frameCounter ++;
  };

  this.rollCounter ++;

  // console.log('FF ' + self.scoresArray);
  // console.log(tenthFrame());
  // console.log(self.frameCounter);
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
