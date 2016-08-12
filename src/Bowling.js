function Bowling(){
this.availablePins = 10;
this.rollsStorage = [];
this.score = 0;
this.rollIndex = 0;

};

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
  var pins = this.availablePins - roll
}

Bowling.prototype.addScore = function() {

  index = 0;
  for (var i = 0; i < 10; i++ ){

      if (this.rollsStorage[index] + this.rollsStorage[index + 1] == 10) {
      this.score += this.rollsStorage[index] + this.rollsStorage[index + 1] + this.rollsStorage[index + 2];
      } else {
      this.score += this.rollsStorage[index] + this.rollsStorage[index + 1];
      }
      index += 2;

  }
  return this.score;
};
