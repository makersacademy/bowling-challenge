function PlayGame () {
  bowlChecks = new BowlChecks;
  scoreCard = new ScoreCard;
}

PlayGame.prototype.enterBowl = function (knockedPins) {
  console.log(`Current Frame: ${bowlChecks.frame}`);
  this._checkFramesAndScore(knockedPins);
  console.log(`Latest Bowl: ${bowlChecks.display}`);
  console.log(`Score: ${scoreCard.score}`);
  this._gameOver();
};

PlayGame.prototype._checkFramesAndScore = function (knockedPins) {
  if (bowlChecks.frameChecks(knockedPins) === 'knocked down pins number not valid') {
    console.log('Please re-enter knocked down pins')
  } else {
      scoreCard.bowl(knockedPins); // place the knocked pins into the array & calculate score
  };
};

PlayGame.prototype._gameOver = function () {
  if (bowlChecks.isGameOver === true) {
    bowlChecks = new BowlChecks;
    scoreCard = new ScoreCard;
    console.log('Game Over, resetting variables');
  };
};
