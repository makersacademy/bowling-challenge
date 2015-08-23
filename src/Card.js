function Card () {
  this.totalRolls = 20;
  this.scoreArray=[];
  this.currentRoll = 1; 

}

Card.prototype.isGameOver = function() {
  return (this.currentRoll === this.totalRolls)
  };

Card.prototype.updateScoreArray = function(smashedPins) {
  if (smashedPins === 10){
    this.scoreArray.push(smashedPins);
    this.scoreArray.push(0);
  } else {
    this.scoreArray.push(smashedPins);
  };
};

