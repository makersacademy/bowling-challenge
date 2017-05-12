function Roll() {
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

Game.prototype._calculateRoll = function() {
    return Math.floor((Math.random() * 11));
};
