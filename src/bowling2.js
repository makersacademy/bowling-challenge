var Frame = function(){
    this.roll1 = null
    this.roll2 = null
    this.bonus_roll = null   // Used for 10th frame
    this.roll_count = 0   // Number of rolls taken

    this.bonus_score = null  // Points earned from following frames
}

Frame.prototype.is_strike = function() {
    return this.roll1 == 10 && this.bonus_roll == null
}

Frame.prototype.is_spare = function() {
    return !this.is_strike() && (this.roll1 + this.roll2 == 10) && this.bonus_roll == null
}

Frame.prototype.score = function() {
    return this.roll1 + this.roll2 + this.bonus_roll + this.bonus_score;
}

Frame.prototype.to_string = function() {
    return "Frame: Roll1=>" + this.roll1 + ", Roll2=>" + this.roll2 + ", Roll3=>" + this.bonus_roll + ", Bonus Score=>" + this.bonus_score
}


var ScoreCard = function() {
    this.frames = [new Frame(), new Frame(), new Frame(), new Frame(), new Frame(),
                   new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), ]
    this.currentFrame = 0
}

ScoreCard.prototype.roll = function(pins) {

    if (this.currentFrame === 9 && pins === 10 && this.frames[this.currentFrame].roll_count == 0) {
      this.frames[this.currentFrame].roll1 = pins
      this.frames[this.currentFrame].roll_count += 1
      return
    }

    if ( this.frames[this.currentFrame].roll_count == 0 ) {
        this.frames[this.currentFrame].roll1 = pins
        this.frames[this.currentFrame].roll_count = 1
        if (pins == 10) {
            this.currentFrame += 1
        }
    } else if (this.frames[this.currentFrame].roll_count == 1) {
        this.frames[this.currentFrame].roll2 = pins
        if (this.currentFrame == 9 && (this.frames[this.currentFrame].is_spare() || this.frames[this.currentFrame].is_strike()) ) {
            // We are allowed another roll on the last frame
            this.frames[this.currentFrame].roll_count += 1
        } else if (this.currentFrame == 9) {
          /// We don't want to move to another frame
          return
        }else {
            this.currentFrame += 1
        }
    } else if (this.frames[this.currentFrame].roll_count == 2 ) {
        // Bonus roll, this must be the last
        this.frames[this.currentFrame].bonus_roll = pins

    }
}

ScoreCard.prototype.rolling_scores = function() {
  for (var i = 0; i < this.frames.length; i++ ) {
      if ( this.frames[i+1]  ) {
          if ( this.frames[i].is_spare()) {
              // If this frame is a spare, then our bonus is the first roll on
              // the next frame.
              this.frames[i].bonus_score = this.frames[i+1].roll1
          } else if (this.frames[i].is_strike()) {
              // If this current frame is a strike then our score should include the next
              // frames roll1 and roll2 (but not the next frame's bonus)
              if (!this.frames[i+1].roll2 && !this.frames[i+1].roll1 && !this.frames[i+2].roll1) {
                this.frames[i].bonus_score = null
              } else if (!this.frames[i+1].roll2 && this.frames[i+2]) {
                this.frames[i].bonus_score = (this.frames[i+1].roll1 + this.frames[i+2].roll1)
              } else {
                this.frames[i].bonus_score = (this.frames[i+1].roll1 + this.frames[i+1].roll2)
              }
          }
      }
  }
}

ScoreCard.prototype.api = function() {
  this.rolling_scores()

  var total = 0
  var api = []
  for (var i = 0; i < this.currentFrame + 1; i++ ) {
      total += this.frames[i].score()
      var info
      // console.log((i+1) + ":" + this.frames[i].to_string() + " === " + total)
      /// Strike not on last frame
      if (this.frames[i].is_strike() && i!== 9) {
        info = {frame: i+1,
                rollNum: 1,
                roll: this.frames[i].roll1,
                bonus: this.frames[i].bonus_score,
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
                  roll: this.frames[i].bonus_roll,
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
                  roll: this.frames[i].bonus_roll,
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
      } else if (this.frames[i].is_spare()){
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
                bonus: this.frames[i].bonus_score,
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
