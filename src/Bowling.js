function Bowling(){
this.availablePins = 10;
this.rollsStorage = [];
this.score = 0

}

Bowling.prototype.getScore = function(){
  return this.score;
}

Bowling.prototype.getPins = function(){
  return this.availablePins;
}

Bowling.prototype.roll = function(){
  return Math.floor((Math.random() * this.availablePins) + 1);
}

Bowling.prototype.updateRolls = function(){
  var roll = this.roll();
  this.rollsStorage.push(roll);
}

Bowling.prototype.addScore = function(){
  for ( i=0; i<10; i++ ){
    this.score += this.rollsStorage[i]
  }
  return this.score;
}
