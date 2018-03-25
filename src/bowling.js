function Bowling(){
  this.pointsPerRoll = []

}

Bowling.prototype.roll = function(knockedPins){
  this.pointsPerRoll.push(knockedPins);

};

Bowling.prototype.calculateScore = function(){
  var points = 0;
  var index = 0;

  for (var i = 0; i < 10; i = i + 1){
    if (this.pointsPerRoll[index] === 10) {
      points += this.strikeBonus();
      index ++;
    } else {
      points += this.scoreNoBonus();
      index += 2;
    }
  }
return points;



Bowling.prototype.scoreNoBonus = function(){
  return this.pointsPerRoll[index] + this.pointsPerRoll[index + 1];
}

Bowling.prototype.strikeBonus = function(){
  return this.pointsPerRoll[index] + this.pointsPerRoll[index + 1] + this.pointsPerRoll[index + 2];
}

};
