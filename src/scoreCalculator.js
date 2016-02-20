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
  return (twoRolls[0]===10 && twoRolls[1]===0);
}

scoreCalculator.prototype.spareBonus = function(rolls){
  return rolls[0];
}

scoreCalculator.prototype.strikeBonus = function(rolls){
  if(rolls[0]===10){
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
  var incremental = [0];
  for(var i = 0; i<fullRoll.length; i += 2){
    var bonus = this.calculateBonus(fullRoll.slice(i,fullRoll.length));
    var add = incremental.slice(-1)[0] + bonus + fullRoll[i] + fullRoll[i+1];
    incremental.push(add);
  };
  incremental.shift();
  return incremental;
};
