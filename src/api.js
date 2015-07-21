var API = function(scoreCard) {
  this.bowlingScoreCard = scoreCard;
}

API.prototype.info = function (frame, rollNum, roll, bonus, score, comments) {
  return {frame: frame,
          rollNum: rollNum,
          roll: roll,
          bonus: bonus,
          score: score,
          comments: comments}
};

API.prototype.call = function () {
  this.bowlingScoreCard.rollingScores()

  var total = 0
  var api = []
  for (var i = 0; i < this.bowlingScoreCard.currentFrame + 1; i++ ) {
      total += this.bowlingScoreCard.frames[i].score()
      var info
      // console.log((i+1) + ":" + this.frames[i]._toString() + " === " + total)
      /// Strike not on last frame
      if (this.bowlingScoreCard.frames[i].isStrike() && i!== 9) {
        api.push(this.info(i+1, 1, this.bowlingScoreCard.frames[i].roll1, this.bowlingScoreCard.frames[i].bonusScore, total, "Strike!"))

        /// Bonus round
      } else if (i === 9) {
        this.bounsRoundLogic(i, api, total)
        /// Hits a spare not on last frame
      } else if (this.bowlingScoreCard.frames[i].isSpare()){
        this.regularRoll1(i, api, total)
        api.push(this.info(i+1, 2, this.bowlingScoreCard.frames[i].roll2, this.bowlingScoreCard.frames[i].bonusScore, total, "Spare!"))
      /// Regular frame
      } else {
        this.regularRoll1(i, api, total)
        this.regularRoll2(i, api, total)
      }

  }
  return api
};

API.prototype.regularRoll1 = function (i, api) {
  api.push(this.info(i+1, 1, this.bowlingScoreCard.frames[i].roll1, '', '', ''))
};

API.prototype.regularRoll2 = function (i, api, total) {
  api.push(this.info(i+1, 2, this.bowlingScoreCard.frames[i].roll2, '', total, ''))
};

API.prototype.roll3 = function (i, api, total) {
  api.push(this.info(i+1, 3, this.bowlingScoreCard.frames[i].bonusRoll, '', total, ''))
};

API.prototype.bounsRoundLogic = function (i, api, total) {
  /// Hit a strike
  if (this.bowlingScoreCard.frames[i].roll1 === 10){
    api.push(this.info(i+1, 1, this.bowlingScoreCard.frames[i].roll1, '', '', "Strike! Two bonus rolls"))
    api.push(this.info(i+1, 2, this.bowlingScoreCard.frames[i].roll2, '', '', ''))
    this.roll3(i, api, total)
  /// Hits a spare
} else if (this.bowlingScoreCard.frames[i].roll1 + this.bowlingScoreCard.frames[i].roll2 === 10){
    this.regularRoll1(i, api)
    api.push(this.info(i+1, 2, this.bowlingScoreCard.frames[i].roll2, '', '', "Spare! One bonus roll"))
    this.roll3(i, api, total)
  /// Nothing special
  } else {
    this.regularRoll1(i, api)
    this.regularRoll2(i, api, total)
  }
};
