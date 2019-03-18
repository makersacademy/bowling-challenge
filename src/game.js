function BowlingGame() {
  this.rolls = [];
};

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};
BowlingGame.prototype.score =function() {
  var sum = 0
  var rollsIndex = 0;
  for(var frameIndex=0; frameIndex<10; frameIndex++) {
     if (this.rolls[rollsIndex] == 10) {
       sum += 10 + this.rolls[rollsIndex + 1] + this.rolls[rollsIndex + 2]
       rollsIndex += 1
       }
      else if((this.rolls[rollsIndex] + this.rolls[rollsIndex + 1]) == 10) {
        sum += 10 + this.rolls[rollsIndex + 2]
        rollsIndex += 2
       }
       else{
        sum += this.rolls[rollsIndex] + this.rolls[rollsIndex + 1]
        rollsIndex += 2
       }
      }
       return sum
   }
}
};
