function PlayGame () {
  bowlChecks = new BowlChecks;
  scoreCard = new ScoreCard;
}

PlayGame.prototype.enterBowl = function (knockedPins) {
  if (bowlChecks.frameChecks(knockedPins) != 'knocked down pins number not valid') {
    scoreCard.bowl(knockedPins); // place the knocked pins into the array
  } else {
    return 'Please re-enter knocked down pins'
  }
  console.log(bowlChecks._frame)
  console.log(bowlChecks._display)
  console.log(scoreCard._score);
}
