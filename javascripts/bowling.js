var Bowling = function() {
  this.games = [new Game()];
}

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
    this.holdingBonus = [];
    this.frameNumber = 0
    this.currentFrame = this.framez[this.frameNumber];
  }

  Game.prototype.frameController = function() {
    if (this.currentFrame.isStrike()) {
      this.currentFrame.rolls[1].rollScore = ""
      this.frameNumber ++
      this.currentFrame = this.framez[this.frameNumber];
    } else if ((this.currentFrame.rolls[0] != null) && (this.currentFrame.rolls[1] != null)) {
      this.frameNumber ++
      this.currentFrame = this.framez[this.frameNumber];
    };
  }

  Game.prototype.bonusController = function() {
    if (this.framez[this.frameNumber-1].isStrike()) {
      this.framez[this.frameNumber-1].addBonus(this.currentFrame.rolls[0].rollScore + this.currentFrame.rolls[1].rollScore);
    } else if (this.framez[this.frameNumber-1].isSpare()) {
      this.framez[this.frameNumber-1].addBonus(this.currentFrame.rolls[0].rollScore);
    };
  };

    var Frame = function() {
      this.rolls = [
        new Roll(),
        new Roll()
      ];
      this.totalRollScore = this.rolls[0].rollScore + this.rolls[1].rollScore;
      this.bonus = null;
      this.frameScore = null;
    }

    Frame.prototype.tallyRolls = function() {
      this.totalRollScore = this.rolls[0].rollScore + this.rolls[1].rollScore
    }

    Frame.prototype.isBonus = function() {
      return this.totalRollScore === 10
    }

    Frame.prototype.isStrike = function() {
      if (this.isBonus()) {
        return this.rolls[0].rollScore === 10
      }
    }

    Frame.prototype.isSpare = function() {
      return (this.isBonus() && !this.isStrike())
    }

    Frame.prototype.addBonus = function(bonus) {
      this.bonus = bonus;
    }

    Frame.prototype.tallyAll = function() {
      this.frameScore = this.totalRollScore + this.bonus
    }

      var Roll = function() {
        this.rollScore = null;
      }

      Roll.prototype.knockedDown = function(numberOfPins) {
        this.rollScore = numberOfPins
      }