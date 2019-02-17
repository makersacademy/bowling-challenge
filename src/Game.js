function Game() {
  this._totalPoints = 0;
  this._frameCount = 1;
  this._ballNumber = 1;
  this._scorecard = [];
}

Game.prototype.showTotalPoints = function () {
  return this._totalPoints;
};

Game.prototype.showFrameCount = function () {
  return this._frameCount;
};

Game.prototype.showBallNumber = function () {
  return this._ballNumber;
};

Game.prototype.showScorecard= function () {
  return this._scorecard;
};

Game.prototype.inputBallValue= function (value, frame = new Frame()) {
  if (this.showFrameCount() > 10){
    throw new Error("You have completed ypur scorecard - start a new game.");
  }
  if (this.showBallNumber() == 1){
    this.inputFrameToScorecard(frame);
    this._scorecard[this.showFrameCount() - 1].updateBallOne(value);
    this._ballNumber ++;
  }
  else {
    this._scorecard[this.showFrameCount() - 1].updateBallTwo(value);
    this.bonusCheck();
    this._ballNumber --;
    this.calculateTotalPoints();
    this._frameCount ++;
  };
};

Game.prototype.inputFrameToScorecard = function (frame) {
  this._scorecard.push(frame);
};

Game.prototype.calculateTotalPoints = function () {
    this._totalPoints += this._scorecard[this.showFrameCount() - 1].showTotalPoints();
};

Game.prototype.bonusCheck = function () {
  if (this.showFrameCount() > 1){
    var currentFrame = (this.showFrameCount() - 1);
    if (( this._scorecard[currentFrame - 1].showBallOne() ) + ( this._scorecard[currentFrame - 1].showBallTwo() ) === 10 ) {
      this._scorecard[currentFrame - 1].addBonusScore(this._scorecard[currentFrame].showBallOne());
    };
  };
};
