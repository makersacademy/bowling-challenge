var Bowling = function() {
  this.games = [new Game()];
};

  var Game = function() {
    this.framez = [
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
    ];
    this.totalScore = null;
  };

    var Frame = function() {
      this.rolls = [
        new Roll(),
        new Roll()
      ];
      this.totalRollScore = null;
      this.bonus = null;
      this.frameScore = null;
    };

    Frame.prototype.tallyRolls = function() {
      for (var i = 0; i < this.rolls.length; i++) {
        this.totalRollScore += this.rolls[i].rollScore
      };
    };

    Frame.prototype.isBonus = function() {
      return this.totalRollScore === 10
    };

    Frame.prototype.isStrike = function() {
      if (this.isBonus()) {
        return this.rolls[0].rollScore === 10
      };
    };

    Frame.prototype.isSpare = function() {
      return (this.isBonus() && !this.isStrike())
    };

    Frame.prototype.addBonus = function(bonus) {
      this.bonus = bonus;
    };

    Frame.prototype.tallyAll = function() {
      this.frameScore = this.totalRollScore + this.bonus
    }

      var Roll = function() {
        this.rollScore = null;
      };

      Roll.prototype.knockedDown = function(numberOfPins) {
        this.rollScore = numberOfPins
      };