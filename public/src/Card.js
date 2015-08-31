function Card () {
  this.numberOfIndividualRolls = 20;
  this.scoreArray=[];
}
 
Card.prototype.isGameOver = function() {
  return (this.scoreArray.length === this.numberOfIndividualRolls)
  };


Card.prototype.updateScoreArray = function(smashedPins) {
  if ((smashedPins === 10) && (((this.scoreArray.length+1)%2) > 0)) {
    this.scoreArray.push(smashedPins);
    this.scoreArray.push('X');
  } else {
    this.scoreArray.push(smashedPins);
  };
};

Card.prototype.getScoreArray = function(roll) {
  return this.scoreArray[roll];
};

Card.prototype.setNumberOfIndividualRolls = function() {
  
  if (this.getScoreArray(18) === 10){
    this.numberOfIndividualRolls = 21;
  } else if 
    (this.getScoreArray(18)+this.getScoreArray(19) === 10) {
      this.numberOfIndividualRolls = 20;
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
    if (this.numberOfIndividualRolls > 20 && counter >= 20){ break; }
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
          console.log(strikeBonuses);
          counter++;
          if (counter >= 2) { break; }
        }
      }
    }
    counter2 ++;
    if (this.numberOfIndividualRolls > 20 && counter2 >= 20){ break; }
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
  // console.log(this.getBasicScore(array));
  // console.log(this.getSpareBonuses(array));
  // console.log(this.getStrikeBonuses(array));

  var totalScore = this.getBasicScore(array)+this.getSpareBonuses(array)+this.getStrikeBonuses(array);
  return totalScore;
};

Card.prototype.currentFrame = function(array) {
  return Math.floor(array.length/2)+1;
};

Card.prototype.currentRoll = function(array) {
  return (array.length%2) > 0 ? 2 : 1
};

Card.prototype.pinsStanding = function(array) {
  return array.length%2 === 0? 10 : 10 - array[array.length-1];
};






