function Game() {

  ALLPINS = 10;

  RESET = 0;

  this.score = 0;

  this.pins = ALLPINS;

  this.frame = 1;

  this.bonus = 0;

  this.isSpare = false;

  this.isStrike = false;

  this.isOver = false;

  this.players = [];

}

Game.prototype.addPlayer = function(name) {
    player = new Player(name);
    this.players.push(player);
};

Game.prototype._calculateRoll = function() {
    return Math.floor((Math.random() * 11));
};

Game.prototype.bankBonus = function(score) {
    this.bonus += score;
};

Game.prototype.reset = function() {
    this.bonus = RESET;
    this.isSpare = false;
    this.isStrike = false;
};

Game.prototype.addBonus = function() {
    this.score += this.bonus;
    this.reset();
};

Game.prototype.addScore = function(roll) {
    this.score += ((ALLPINS - this.pins) + roll);
};

Game.prototype.firstRollOpen = function(roll) {
    if (this.isStrike && this.isSpare) {
        this.bankBonus(roll);
        this.addBonus();
    } else
    if (this.isStrike) {
        this.bankBonus(roll);
    } else
    if(this.isSpare) {
        this.bankBonus(roll);
        this.addBonus();
        if(this.frame === 11) {
          this.addScore(roll);
          this.endGame();
        }
    }
    this.pins -= roll;
    this.isSecondRoll = true;
};

Game.prototype.scoredSpare = function(remainingPins) {
        if(this.isStrike) {
          this.bankBonus(remainingPins);
          this.bankBonus(ALLPINS);
        } else {
          this.bankBonus(ALLPINS);
        }
          this.isSpare = true;
          this.newFrame();
};

Game.prototype.scoredStrike = function() {
      if(this.isSpare) {
          this.bankBonus(ALLPINS);
          this.addBonus();
      }
      if(this.isStrike) {
        this.bankBonus(ALLPINS + this.bonus);
        this.addBonus();
      }
      this.bankBonus(ALLPINS);
      this.isStrike = true;
      this.newFrame();
};

Game.prototype.scoredOpen = function(roll) {
        if(this.isSpare) {
            this.bankBonus(roll);
            this.addBonus();
        } else
        if(this.isStrike) {
            this.bankBonus(roll);
            this.addBonus();
        }
        this.addScore(roll);
        if(this.frame === 10) {
          this.endGame();
          return
        } else
        this.newFrame();
};

Game.prototype.roll = function() {
    if(this.isOver) {
        throw new Error("Game is over!");
    }
    var roll = this._calculateRoll();
    console.log(roll);
    console.log(this);
    if(this.frame === 11 ) {
      this.score += roll;
      if(this.isSpare) {
        this.addBonus();
        this.endGame();
      } else
      this.addBonus();
      this.newFrame();
      return;
    }
    if(this.frame === 12) {
      this.score += roll;
      this.addBonus();
      this.endGame();
      return;
    }
    if(this.isSecondRoll) {
      if(roll >= this.pins) {
        this.scoredSpare(this.pins);
      } else
        this.scoredOpen(roll);
    } else
      if(roll === ALLPINS) {
        this.scoredStrike();
    } else
      this.firstRollOpen(roll);
};

Game.prototype.newFrame = function() {
    this.isSecondRoll = false;
    this.frame += 1;
    this.pins = ALLPINS;
    console.log("score: " + this.score);
};


Game.prototype.endGame = function() {
    this.addBonus();
    this.isOver = true;
};
