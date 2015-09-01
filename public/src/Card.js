function Card () {
  this.totalRolls = 20;
  this.scoreArray=[];
}
 
Card.prototype.isGameOver = function() {
  this.calculatetotalRolls();
  return (this.scoreArray.length === this.totalRolls)
  };


Card.prototype.updateScoreArray = function(smashedPins) {
  if ((smashedPins === 10) && (((this.scoreArray.length+1)%2) > 0) && (this.scoreArray.length <=19)) {
    this.scoreArray.push(smashedPins);
    this.scoreArray.push('X');
  } else {
    this.scoreArray.push(smashedPins);
  };
};

Card.prototype.getScoreArray = function(roll) {
  return this.scoreArray[roll];
};

Card.prototype.calculatetotalRolls = function() {
  
  if (this.getScoreArray(18) === 10){
    this.totalRolls = 22;
  } else if 
    (this.getScoreArray(18)+this.getScoreArray(19) === 10) {
      this.totalRolls = 21;
  }
};


Card.prototype.getBasicScore = function(rolls) {
  var basicScore = 0;
  var counter = 0;
  for (i = 0; i < rolls.length; i++) {
    if (typeof rolls[i] === 'number'){
    basicScore += rolls[i];
    }
    counter ++;
    if (this.totalRolls > 20 && counter >= 20){ break; }
  }
  return basicScore;
};

Card.prototype.getStrikeBonuses = function(array) {
  var strikeBonuses = 0;
  var size = array.length;
  var counter2 =0;

  for (i=0; i < 20; i+=2){
    if (array[i] === 10){
        var counter = 0; 
      for(j=(i+1); j < 23; j++){ 
        if(typeof array[j] === 'number'){
          strikeBonuses += array[j];
          counter++;
          if (counter >= 2) { break; }
        }
      }
    }
    counter2 ++;
    if (this.totalRolls > 20 && counter2 >= 20){ break; }
  }    
  return strikeBonuses;
};


Card.prototype.getSpareBonuses = function(array) {
  var spareBonuses = 0

  for (i=0; i < 20; i+=2){
    if ((array[i] + array[i+1]) === 10 && !(isNaN(array[i+2]))){
      spareBonuses += array[i+2];
    } 
  }
  return spareBonuses;
};

Card.prototype.getTotalScore = function(array) {
  return this.getBasicScore(array)+this.getSpareBonuses(array)+this.getStrikeBonuses(array);
};

Card.prototype.currentFrame = function(array) {
  return Math.floor(array.length/2)+1;
};

Card.prototype.currentRoll = function(array) {
  return (array.length%2) > 0 ? 2 : 1
};

Card.prototype.pinsStanding = function(array) {
  if (array.length < 21) {
    return array.length%2 === 0? 10 : 10 - array[array.length-1];
  } else if(array[20] === 10) {
    return 10;
  }
    return 10 - array[array.length-1];
};






