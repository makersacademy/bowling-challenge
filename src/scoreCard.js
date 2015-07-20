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
