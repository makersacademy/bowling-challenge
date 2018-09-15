function PlayGame () {
  bowlChecks = new BowlChecks;
  scoreCard = new ScoreCard;
}

PlayGame.prototype.enterBowl = function (knockedPins) {
  bowlChecks.checks(knockedPins);
  scoreCard.bowl(knockedPins); // place the knocked pins into the array
  console.log(bowlChecks._frame)
  console.log(bowlChecks._display)
  console.log(scoreCard._score);
}
