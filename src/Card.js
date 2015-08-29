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
    this.scoreArray.push('X');
  } else {
    this.scoreArray.push(smashedPins);
  };
};

Card.prototype.getScoreArray = function(roll) {
  return this.scoreArray[roll];
};

Card.prototype.setTotalRolls = function() {
  if (this.getScoreArray(18) === 10){
    this.totalRolls = 21;
  } else if 
    (this.getScoreArray(18)+this.getScoreArray(19) === 10) {
      this.totalRolls = 20;
  }
};


Card.prototype.getBasicScore = function(array) {
  var basicScore = 0;
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number'){
    basicScore += array[i];
    }
  }
  return basicScore;
};

Card.prototype.getStrikeBonuses = function(array) {
  var strikeBonuses = 0;
  var size = array.length;
  for (i=0; i < size; i+=2){
    if (array[i] === 10){
        var counter = 0; 
      for(j=(i+1); j < size; j++){ 
        if(typeof array[j] === 'number'){
          strikeBonuses += array[j];
          counter++;
        }
        if (counter >= 2 || j > size) { break; }
      }
    }
  }    
  return strikeBonuses;
};


Card.prototype.getSpareBonuses = function(array) {
  var spareBonuses = 0

  for (i=0; i < array.length; i+=2){
    if ((array[i] + array[i+1]) === 10 && !(isNaN(array[i+2]))){
      spareBonuses += array[i+2];
    } 
  }
  return spareBonuses;
};

Card.prototype.getTotalScore = function(array) {
  var totalScore = this.getBasicScore(array)+this.getSpareBonuses(array)+this.getStrikeBonuses(array);
  return totalScore;
};






