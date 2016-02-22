function ScoreCalculator(){
  this.incrementalOverview = []
  this.ALL_PINS_DOWN = 10;
  this.nineFrameRollsComplete = 18;
  this.nineFramesComplete = 9;
}

ScoreCalculator.prototype.isSpare = function(twoRolls){
  return (twoRolls[0] + twoRolls[1] === this.ALL_PINS_DOWN && twoRolls[0] !== this.ALL_PINS_DOWN);
}

ScoreCalculator.prototype.isStrike = function(twoRolls){
  return (twoRolls[0] === this.ALL_PINS_DOWN);
}

ScoreCalculator.prototype.spareBonus = function(rolls){
  return rolls[0];
}

ScoreCalculator.prototype.strikeBonus = function(rolls){
  if(rolls[0] === this.ALL_PINS_DOWN){
    return rolls[0] + rolls[2];
  }
  else {
    return rolls[0] + rolls[1];
  }
}

ScoreCalculator.prototype.calculateBonus = function(fullRoll){
  if(this.isStrike(fullRoll.slice(0,2))){
    return this.strikeBonus(fullRoll.slice(2,fullRoll.length));
  } else if (this.isSpare(fullRoll.slice(0,2))){
    return this.spareBonus(fullRoll.slice(2,fullRoll.length));
  } else{
    return 0;
  }
};

ScoreCalculator.prototype._incrementalScore = function(fullRoll){
  var incrementalValue = 0;
  for(var i = 0; i<(fullRoll.length); i += 2){
    var bonus = this.calculateBonus(fullRoll.slice(i,fullRoll.length));
    incrementalValue += bonus + fullRoll[i] + fullRoll[i+1];
    this.incrementalOverview.push(incrementalValue);
  };
  return this.incrementalOverview;
};

ScoreCalculator.prototype.tenFrameCalc = function(tenthFrame){
  if(this.isStrike(tenthFrame)){
    return this.ALL_PINS_DOWN + tenthFrame[1]+tenthFrame[2];
  } else{
    return this.calculateBonus(tenthFrame)+tenthFrame[0]+tenthFrame[1];
  }
}

ScoreCalculator.prototype.finalCalc = function(fullRoll){
  if (fullRoll.length<this.nineFrameRollsComplete){
    return this._incrementalScore(fullRoll);
  }
  var frameResults = this._incrementalScore(fullRoll).slice(0,this.nineFramesComplete);
  var tenthFrameRoll = fullRoll.slice(this.nineFrameRollsComplete,fullRoll.length)
  var tenFrameValue = frameResults[frameResults.length-1] + this.tenFrameCalc(tenthFrameRoll);
  frameResults.push(tenFrameValue);
  return frameResults;
}
