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
  this.maxFrames = 11.5;
}

Frame.prototype.turnScore = function() {
    if(this.strike === false && this.spare === false && this.wasStrike === false && this.wasSpare === false) {
      this.turnTotalScore = (this.firstBowlScore + this.secondBowlScore);
      this.endTurn();
  } else if (this.strike === true && this.wasStrike === true){
      this.turnTotalScore = 30;
      this.wasStrike = true;
  } else if (this.strike === true){
      this.turnTotalScore = 10;
      this.wasStrike = true;
      this.endTurn();
  } else if (this.spare === true){
      this.turnTotalScore = 10;
      this.wasSpare = true;
      this.endTurn();
  }
};

Frame.prototype.firstBowl = function(score) {
  this.firstBowlScore = score;
  this.strikeBonus();
  this.spareBonus();
  this.frameNumber += 0.5;
  if (score === 10){
  this.strike = true;
  console.log("Strike!");
  this.turnScore();
  } else {
    this.strike = false;
  }
};

Frame.prototype.secondBowl = function(score) {
  this.secondBowlScore = score;
  this.spareBonus();
  if (this.firstBowlScore + this.secondBowlScore === 10 && this.strike === false) {
    this.spare = true;
    console.log("Spare!");
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
    this.frameNumber+= 0.5;
  } else if(this.frameNumber >= 10 && this.frame < this.maxFrames) {
    this.tensFrame();
  }
  this.strike = false;
  this.spare = false;
};

Frame.prototype.strikeBonus = function () {
  if (this._wasStrike()) {
    this.turnTotalScore = (this.turnTotalScore * 2);
} else if(this._wasStrike() && this.strike === true) {
    this.turnTotalScore = 30;
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
