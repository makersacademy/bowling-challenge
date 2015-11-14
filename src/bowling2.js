function Bowling(){

  this.rolls = [];
  this.result = 0;
}

    Bowling.prototype.roll = function(pins){
          this.rolls.push(pins);
    };

    Bowling.prototype.score = function() {
        var result = 0;
        var rollIndex = 0;

        for (var i  = 0; i < 10; i++) {
          if (this.rolls[i] === 10) {
          result += (this.rolls[rollIndex] + this.rolls[rollIndex + 1]) + this.rolls[rollIndex + 1];
        }  else {
          result += (this.rolls[rollIndex] + this.rolls[rollIndex + 1]);
        }
          rollIndex += 2;
        }
        return result;
    }

    Bowling.prototype.manyRolls = function(pins, rolls) {
      for (var i = 0; i < rolls; i++) {
        this.roll(pins);
      }
    }
