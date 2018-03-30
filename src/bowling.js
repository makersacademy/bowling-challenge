var Bowling = function(){
  this.pointsPerRoll = []

};

Bowling.prototype.roll = function(knockedPins){
  this.pointsPerRoll.push(knockedPins);

};

Bowling.prototype.calculateScore = function(){
  var total = 0;
  var arrIndex = 0;
  var thisGame = this;

  for (var i = 0; i < 10; i++){
    if (isSpare()) {
      total += this.pointsPerRoll[arrIndex] + this.pointsPerRoll[arrIndex + 1] + this.pointsPerRoll[arrIndex + 2];
      arrIndex += 2;
    } else {
    total += this.pointsPerRoll[arrIndex] + this.pointsPerRoll[arrIndex + 1];
    arrIndex += 2;
    }
  }
  return total;

function isSpare(){
  return thisGame.pointsPerRoll[arrIndex] + thisGame.pointsPerRoll[arrIndex + 1] == 10;
}

};
