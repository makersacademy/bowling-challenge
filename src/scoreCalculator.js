function scoreCalculator(){
}

scoreCalculator.prototype.type = function(rolls){
  if(this.isStrike(rolls.slice(0,2))){
    return 'strike'
  }else if(this.isSpare(rolls.slice(0,2))){
    return 'spare'
  }else{
    return 'normal'
  }
};

scoreCalculator.prototype.isSpare = function(twoRolls){
  return (twoRolls[0]+twoRolls[1]===10 && twoRolls[0] !== 10);
}

scoreCalculator.prototype.isStrike = function(twoRolls){
  return (twoRolls[0]===10);
}

scoreCalculator.prototype.spareBonus = function(rolls){
  return rolls[0];
}

scoreCalculator.prototype.strikeBonus = function(rolls){
  if(rolls[0]===10 ){
    return rolls[0]+rolls[2];
  }
  else {
    return rolls[0]+rolls[1];
  }
}

scoreCalculator.prototype.calculateBonus = function(fullRoll){
  if(this.type(fullRoll.slice(0,2)) === 'strike'){
    return this.strikeBonus(fullRoll.slice(2,fullRoll.length));
  } else if (this.type(fullRoll.slice(0,2)) === 'spare'){
    return this.spareBonus(fullRoll.slice(2,fullRoll.length));
  } else{
    return 0;
  }
};

scoreCalculator.prototype.incrementalScore = function(fullRoll){
  if(fullRoll.length === 1){return fullRoll};
  var incrementalOverview = []
  var incrementalValue = 0;
  for(var i = 0; i<fullRoll.length; i += 2){
    var bonus = this.calculateBonus(fullRoll.slice(i,fullRoll.length));
    incrementalValue += bonus + fullRoll[i] + fullRoll[i+1];
    incrementalOverview.push(incrementalValue);
  };
  return incrementalOverview;
};

scoreCalculator.prototype.tenFrameCalc = function(tenthFrame){
  if(this.type(tenthFrame) === 'strike'){
    return 10 + tenthFrame[1]+tenthFrame[2];
  } else{
    return this.calculateBonus(tenthFrame)+tenthFrame[0]+tenthFrame[1];
  }
}

scoreCalculator.prototype.finalCalc = function(fullRoll){
  if (fullRoll.length<18){
    return this.incrementalScore(fullRoll);
  }
  var result = this.incrementalScore(fullRoll.slice(0,18));
  var tenFrame = result[result.length-1]+this.tenFrameCalc(fullRoll.slice(18,fullRoll.length));
  result.push(tenFrame);
  return result;
}
