var API = function(scoreCard) {
  this.bowlingScoreCard = scoreCard;
}
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
        info = {frame: i+1,
                rollNum: 1,
                roll: this.bowlingScoreCard.frames[i].roll1,
                bonus: this.bowlingScoreCard.frames[i].bonusScore,
                score: total,
                comments: "Strike!"}
        api.push(info)

        /// Bonus round
      } else if (i === 9) {
        this.bounsRoundLogic(i, api, total)
        /// Hits a spare not on last frame
      } else if (this.bowlingScoreCard.frames[i].isSpare()){
        this.regularRoll1(i, api, total)
        info = {frame: i+1,
                rollNum: 2,
                roll: this.bowlingScoreCard.frames[i].roll2,
                bonus: this.bowlingScoreCard.frames[i].bonusScore,
                score: total,
                comments: "Spare!"}
        api.push(info)
      /// Regular frame
      } else {
        this.regularRoll1(i, api, total)
        this.regularRoll2(i, api, total)
      }

  }
  return api
};

API.prototype.regularRoll1 = function (i, api, total) {
  info = {frame: i+1,
          rollNum: 1,
          roll: this.bowlingScoreCard.frames[i].roll1,
          bonus: "",
          score: "",
          comments: ""}
  api.push(info)
};

API.prototype.regularRoll2 = function (i, api, total) {
  info = {frame: i+1,
          rollNum: 2,
          roll: this.bowlingScoreCard.frames[i].roll2,
          bonus: "",
          score: total,
          comments: ""}
  api.push(info)
};

API.prototype.bounsRoundLogic = function (i, api, total) {
  /// Hit a strike
  if (this.bowlingScoreCard.frames[i].roll1 === 10){
    info = {frame: i+1,
            rollNum: 1,
            roll: this.bowlingScoreCard.frames[i].roll1,
            bonus: "",
            score: "",
            comments: "Strike! Two bonus rolls"}
    api.push(info)
    info = {frame: i+1,
            rollNum: 2,
            roll: this.bowlingScoreCard.frames[i].roll2,
            bonus: "",
            score: "",
            comments: ""}
    api.push(info)
    info = {frame: i+1,
            rollNum: 3,
            roll: this.bowlingScoreCard.frames[i].bonusRoll,
            bonus: "",
            score: total,
            comments: ""}
    api.push(info)
  /// Hits a spare
} else if (this.bowlingScoreCard.frames[i].roll1 + this.bowlingScoreCard.frames[i].roll2 === 10){
    this.regularRoll1(i, api, total)
    info = {frame: i+1,
            rollNum: 2,
            roll: this.bowlingScoreCard.frames[i].roll2,
            bonus: "",
            score: "",
            comments: "Spare! One bonus roll"}
    api.push(info)
    info = {frame: i+1,
            rollNum: 3,
            roll: this.bowlingScoreCard.frames[i].bonusRoll,
            bonus: "",
            score: total,
            comments: ""}
    api.push(info)
  /// Nothing special
  } else {
    this.regularRoll1(i, api, total)
    this.regularRoll2(i, api, total)
  }
};
