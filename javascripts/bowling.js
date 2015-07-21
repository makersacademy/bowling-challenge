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
    this.frameNumber = 0;
    this.currentFrame = this.framez[this.frameNumber];
    this.previousFrame = this.framez[this.frameNumber-1];
    this.frameBeforePrevious = this.framez[this.frameNumber-2];
  }

  Game.prototype.frameController = function() {
    if (this.currentFrame.isStrike()) {
      this.frameNumber ++;
      this.currentFrame = this.framez[this.frameNumber];
      this.previousFrame = this.framez[this.frameNumber-1];
      this.frameBeforePrevious = this.framez[this.frameNumber-2];
    }
    else if ((this.currentFrame.rolls[0].rollScore != null) && (this.currentFrame.rolls[1].rollScore != null)) {
      this.frameNumber ++;
      this.currentFrame = this.framez[this.frameNumber];
      this.previousFrame = this.framez[this.frameNumber-1];
      this.frameBeforePrevious = this.framez[this.frameNumber-2];
    }
  }

  Game.prototype.bonusController = function() {
    if (this.frameNumber != 0) {
      if (this.previousFrame.isStrike()) {
        if (this.currentFrame.isStrike() && this.frameBeforePrevious != undefined) {
          this.previousFrame.addBonus(this.currentFrame.rolls[0].rollScore);
          this.frameBeforePrevious.addBonus(this.currentFrame.rolls[0].rollScore)
        }
        else {
          this.previousFrame.addBonus(this.currentFrame.rolls[0].rollScore + this.currentFrame.rolls[1].rollScore);
        }
      }
      else if (this.previousFrame.isSpare()) {
        this.previousFrame.addBonus(this.currentFrame.rolls[0].rollScore);
      }
      else if (this.previousFrame.rolls[1].rollScore != null) {
        this.previousFrame.addBonus(0);
      }
    }
  }

    var Frame = function() {
      this.rolls = [
        new Roll(),
        new Roll()
      ];
      this.totalRollScore = this.rolls[0].rollScore + this.rolls[1].rollScore;
      this.bonus = null;
      this.frameScore = null;
      this.rollNumber = 0;
      this.currentRoll = this.rolls[this.rollNumber]
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
      this.bonus += bonus;
    }

    Frame.prototype.tallyAll = function() {
      if (this.bonus != null || this.isBonus) {
        this.frameScore = this.totalRollScore + this.bonus
      }
    }

    Frame.prototype.rollController = function() {
      if (this.isStrike()) {
        this.rolls[1].rollScore = "";
      }
      if (this.rollNumber === 0 && this.rolls[0].rollScore != null) {
        this.rollNumber ++;
        this.currentRoll = this.rolls[this.rollNumber];
      }
    }

      var Roll = function() {
        this.rollScore = null;
      }

      Roll.prototype.knockedDown = function(numberOfPins) {
        this.rollScore = numberOfPins
      }