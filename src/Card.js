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

