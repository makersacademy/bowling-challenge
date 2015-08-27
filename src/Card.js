function Card () {
  this.totalRolls = 20;
  this.scoreArray=[];
}
 
Card.prototype.isGameOver = function() {
  return (this.getCurrentRoll() === this.totalRolls)
  };

  Card.prototype.getCurrentRoll = function() {
    return this.scoreArray.length;
  };

Card.prototype.updateScoreArray = function(smashedPins) {
  if (smashedPins === 10){
    this.scoreArray.push(smashedPins);
    this.scoreArray.push(0);
  } else {
    this.scoreArray.push(smashedPins);
  };
};

Card.prototype.getScoreArray = function(roll) {
  return this.scoreArray[roll];
};

Card.prototype.setTotalRolls = function() {
  if (this.getScoreArray(19) === 10){
    this.totalRolls = 22;
  } else if 
    (this.getScoreArray(19)+this.getScoreArray(20) === 10) {
      this.totalRolls = 21;
  }
};

Card.prototype.getBasicScore = function(array) {
  var basicScore = 0;
  for (i = 0; i < array.length; i++) {
    basicScore += array[i];
  }
  return basicScore;
};

Card.prototype.getStrikeBonuses = function(array) {
  var strikeBonuses = 0
  for (i=0; i < array.length; i+=2){
    if (array[i] === 10){
      strikeBonuses += (array[i+1]+array[i+2]);
      console.log(strikeBonuses);
    } 
  }
  return strikeBonuses;
};

Card.prototype.getSpareBonuses = function(array) {
  var spareBonuses = 0
  for (i=0; i < array.length; i+=2){
    if ((array[i] + array[i+1]) === 10){
      spareBonuses += array[i+2];
    } 
  }
  return spareBonuses;
};

Card.prototype.getTotalScore = function(array) {
  var totalScore = this.getBasicScore(array)+this.getSpareBonuses(array)+this.getStrikeBonuses(array);
  return totalScore;
};

