var Frame = function(){
    this.roll1 = 0
    this.roll2 = 0
    this.bonus_roll = 0   // Used for 10th frame
    this.roll_count = 0   // Number of rolls taken

    this.bonus_score = 0  // Points earned from following frames
}

Frame.prototype.is_strike = function() {
    return this.roll1 == 10
}

Frame.prototype.is_spare = function() {
    return !this.is_strike() && (this.roll1 + this.roll2 == 10) && this.bonus_roll == 0
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
        } else {
            this.currentFrame += 1
        }
    } else if (this.frames[this.currentFrame].roll_count == 2 ) {
        // Bonus roll, this must be the last
        this.frames[this.currentFrame].bonus_roll = pins
        this.currentFrame += 1
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
                this.frames[i].bonus_score = (this.frames[i+1].roll1 + this.frames[i+1].roll2)
            }
        }
    }

    var total = 0
    var api = []
    for (var i = 0; i < this.currentFrame; i++ ) {
        total += this.frames[i].score()
        console.log((i+1) + ":" + this.frames[i].to_string() + " === " + total)
        var commentary = ''
        if (this.frames[i].is_strike()) { commentary = "Strike!"}
        if (this.frames[i].is_spare()) { commentary = "Spare"}
        var info = {frame: i+1,
                    rolls: [this.frames[i].roll1, this.frames[i].roll2, this.frames[i].bonus_roll],
                    bonus: this.frames[i].bonus_score,
                    score: total,
                    comments: commentary}
        api.push(info)
    }
    return api
}



bowlingScoreCard = new ScoreCard();
// Frame 0 - 5
bowlingScoreCard.roll(1);
bowlingScoreCard.roll(4);

// Frame 1
bowlingScoreCard.roll(4);
bowlingScoreCard.roll(5);

// Frame 2
bowlingScoreCard.roll(6);
bowlingScoreCard.roll(4);

// Frame 3
bowlingScoreCard.roll(5);
bowlingScoreCard.roll(5);

// Frame 4
bowlingScoreCard.roll(10);

// Frame 5
bowlingScoreCard.roll(0);
bowlingScoreCard.roll(1);

// Frame 6
bowlingScoreCard.roll(7);
bowlingScoreCard.roll(3);

// Frame 7
bowlingScoreCard.roll(6);
bowlingScoreCard.roll(4);

// Frame 8
bowlingScoreCard.roll(10);

// Frame 9
bowlingScoreCard.roll(10);
bowlingScoreCard.roll(8);
bowlingScoreCard.roll(6);

bowlingScoreCard.rolling_scores()
