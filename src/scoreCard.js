var ScoreCard = function() {
    this.frames = [new Frame(), new Frame(), new Frame(), new Frame(), new Frame(),
                   new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), ]
    this.currentFrame = 0
}

ScoreCard.prototype.roll = function(pins) {

    if (this.currentFrame === 9 && pins === 10 && this.frames[this.currentFrame].rollCount === 0) {
      this.frames[this.currentFrame].roll1 = pins
      this.frames[this.currentFrame].rollCount += 1
      return
    }

    if ( this.frames[this.currentFrame].rollCount === 0 ) {
        this.frames[this.currentFrame].roll1 = pins
        this.frames[this.currentFrame].rollCount = 1
        if (pins === 10) {
            this.currentFrame += 1
        }
    } else if (this.frames[this.currentFrame].rollCount === 1) {
        this.frames[this.currentFrame].roll2 = pins
        if (this.currentFrame === 9 && (this.frames[this.currentFrame].isSpare() || this.frames[this.currentFrame].isStrike()) ) {
            // We are allowed another roll on the last frame
            this.frames[this.currentFrame].rollCount += 1
        } else if (this.currentFrame === 9) {
          /// We don't want to move to another frame
          return
        }else {
            this.currentFrame += 1
        }
    } else if (this.frames[this.currentFrame].rollCount === 2 ) {
        // Bonus roll, this must be the last
        this.frames[this.currentFrame].bonusRoll = pins

    }
}

ScoreCard.prototype.rollingScores = function() {
  for (var i = 0; i < this.frames.length; i++ ) {
      if ( this.frames[i+1]  ) {
          if ( this.frames[i].isSpare()) {
              // If this frame is a spare, then our bonus is the first roll on
              // the next frame.
              this.frames[i].bonusScore = this.frames[i+1].roll1
          } else if (this.frames[i].isStrike()) {
              // If this current frame is a strike then our score should include the next
              // frames roll1 and roll2 (but not the next frame's bonus)
              if (!this.frames[i+1].roll2 && !this.frames[i+1].roll1 && (!this.frames[i+2] || !this.frames[i+2].roll1)) {
                this.frames[i].bonusScore = null
              } else if (!this.frames[i+1].roll2 && this.frames[i+2]) {
                this.frames[i].bonusScore = (this.frames[i+1].roll1 + this.frames[i+2].roll1)
              } else {
                this.frames[i].bonusScore = (this.frames[i+1].roll1 + this.frames[i+1].roll2)
              }
          }
      }
  }
}

ScoreCard.prototype.api = function() {
  this.rollingScores()

  var total = 0
  var api = []
  for (var i = 0; i < this.currentFrame + 1; i++ ) {
      total += this.frames[i].score()
      var info
      // console.log((i+1) + ":" + this.frames[i]._toString() + " === " + total)
      /// Strike not on last frame
      if (this.frames[i].isStrike() && i!== 9) {
        info = {frame: i+1,
                rollNum: 1,
                roll: this.frames[i].roll1,
                bonus: this.frames[i].bonusScore,
                score: total,
                comments: "Strike!"}
        api.push(info)

        /// Bonus round
      } else if (i === 9) {
        /// Hit a strike
        if (this.frames[i].roll1 === 10){
          info = {frame: i+1,
                  rollNum: 1,
                  roll: this.frames[i].roll1,
                  bonus: "",
                  score: "",
                  comments: "Strike! Two bonus rolls"}
          api.push(info)
          info = {frame: i+1,
                  rollNum: 2,
                  roll: this.frames[i].roll2,
                  bonus: "",
                  score: "",
                  comments: ""}
          api.push(info)
          info = {frame: i+1,
                  rollNum: 3,
                  roll: this.frames[i].bonusRoll,
                  bonus: "",
                  score: total,
                  comments: ""}
          api.push(info)
        /// Hits a spare
        } else if (this.frames[i].roll1 + this.frames[i].roll2 === 10){
          info = {frame: i+1,
                  rollNum: 1,
                  roll: this.frames[i].roll1,
                  bonus: "",
                  score: "",
                  comments: ""}
          api.push(info)
          info = {frame: i+1,
                  rollNum: 2,
                  roll: this.frames[i].roll2,
                  bonus: "",
                  score: "",
                  comments: "Spare! One bonus roll"}
          api.push(info)
          info = {frame: i+1,
                  rollNum: 3,
                  roll: this.frames[i].bonusRoll,
                  bonus: "",
                  score: total,
                  comments: ""}
          api.push(info)
        /// Nothing special
        } else {
          info = {frame: i+1,
                  rollNum: 1,
                  roll: this.frames[i].roll1,
                  bonus: "",
                  score: "",
                  comments: ""}
          api.push(info)
          info = {frame: i+1,
                  rollNum: 2,
                  roll: this.frames[i].roll2,
                  bonus: "",
                  score: total,
                  comments: ""}
          api.push(info)
        }
        /// Hits a spare
      } else if (this.frames[i].isSpare()){
        info = {frame: i+1,
                rollNum: 1,
                roll: this.frames[i].roll1,
                bonus: "",
                score: "",
                comments: ""}
        api.push(info)
        info = {frame: i+1,
                rollNum: 2,
                roll: this.frames[i].roll2,
                bonus: this.frames[i].bonusScore,
                score: total,
                comments: "Spare!"}
        api.push(info)
      /// Regular frame
      } else {
        info = {frame: i+1,
                rollNum: 1,
                roll: this.frames[i].roll1,
                bonus: "",
                score: "",
                comments: ""}
        api.push(info)
        info = {frame: i+1,
                rollNum: 2,
                roll: this.frames[i].roll2,
                bonus: "",
                score: total,
                comments: ""}
        api.push(info)
      }

  }
  return api
}
