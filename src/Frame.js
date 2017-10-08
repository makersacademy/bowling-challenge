function Frame() {
  this.score = 0;
  this.firstBowlScore = 0;
  this.secondBowlScore = 0;
  this.turnTotalScore = 0;
  this.strike = false;
  this.spare = false;
  this.scoreCard = [];
  this.wasStrike = false;
  this.wasSpare = false;
  this.frameNumber = 1;
}

Frame.prototype.turnScore = function() {
    if(this.strike === false && this.spare === false && this.wasStrike === false && this.wasSpare === false) {
      this.turnTotalScore = (this.firstBowlScore + this.secondBowlScore);
      this.endTurn();
  } else if (this.strike === true){
      this.turnTotalScore = 10;
      this.wasStrike = true;
  } else if (this.spare === true){
      this.turnTotalScore = 10;
      this.wasSpare = true;
      this.endTurn();
  }
};

Frame.prototype.firstBowl = function(score) {
  this.strikeBonus();
  this.spareBonus();
  this.firstBowlScore = score;
  if (score === 10){
  this.strike = true;
  this.turnScore();
  } else {
    this.strike = false;
  }
};

Frame.prototype.secondBowl = function(score) {
  if (this.strike === true) {
    this.endTurn();
    throw new Error("You scored a strike on your first bowl!");
  }
  this.spareBonus();
  this.secondBowlScore = score;
  if (this.firstBowlScore + this.secondBowlScore === 10 && this.strike === false) {
    this.spare = true;
    this.turnScore();
  } else {}
  this.turnScore();
};

Frame.prototype._wasStrike = function () {
  if (this.strike === true) {
    this.wasStrike = true;
  }
};

Frame.prototype._wasSpare = function () {
  if (this.spare === true) {
    this.wasSpare = true;
  }
};

Frame.prototype.endTurn = function() {
  this.roundScore();
  this.scoreCard.push(this.turnTotalScore, [this.firstBowlScore, this.secondBowlScore]);
  if (this.frameNumber < 10) {
    this.frameNumber++;
  } else {
    this.tensFrame();
  }
  this.strike = false;
  this.spare = false;
};

Frame.prototype.strikeBonus = function () {
  if (this._wasStrike()) {
  this.turnTotalScore = (this.turnTotalScore * 2);
  }
};

Frame.prototype.spareBonus = function () {
  if (this._wasSpare()) {
this.firstBowlScore = (this.firstBowlScore * 2);
  }
};

Frame.prototype.roundScore = function () {
  this.score += this.turnTotalScore;
};

Frame.prototype.tensFrame = function () {
  if (this.frameNumber === 10 && this.strike === true) {
    this.frameNumber ++;
  } else if (this.frameNumber === 10 && this.spare === true) {
    this.frameNumber ++;
    this.secondBowl(0);
  } else if (this.frameNumber === 10 && this.strike === false && this.spare === false) {
    console.log('Game Over');
    console.log(this.scoreCard);
  }
};
