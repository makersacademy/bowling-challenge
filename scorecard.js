class Scorecard {
  constructor(scores) {
    this.scores = scores;
  }

  frame_total(frame) {
    let total = 0;
    frame.forEach(roll => {
      total += roll;
    });
    return total;
  }

  is_strike(roll) {
    if(roll == 10) {
      return true;
    }
  }

  is_spare(frame) {
    if(frame == 10) {
      return true;
    }
  }


  total_score() {
    let total = 0;
    for (let i = 0; i < this.scores.length; i++) {
      let roll1 = 0;
      let roll2 = 1;
      let currentFrame = this.scores[i];
      let nextFrame = this.scores[i + 1];
      let twoFramesAfter = this.scores[i + 2];

      if(i == 9 && this.is_strike(currentFrame[roll1])) {
        total += this.frame_total(currentFrame);
      } else if(i == 8 && this.is_strike(currentFrame[roll1])) {
        total += this.frame_total(currentFrame) + nextFrame[roll1] + nextFrame[roll2]
      } else if(this.is_strike(currentFrame[roll1]) && this.is_strike(nextFrame[roll1])) {
        total += this.frame_total(currentFrame) + this.frame_total(nextFrame) + twoFramesAfter[roll1];
      } else if(this.is_strike(currentFrame[roll1])) {
        total += this.frame_total(nextFrame) + this.frame_total(currentFrame);
      } else if(this.is_spare(this.frame_total(currentFrame))) {
       
        total += this.frame_total(currentFrame) + nextFrame[roll1];
      } else {
        total += this.frame_total(currentFrame);
      }
    }
   
    return total;
  }
}


module.exports = Scorecard;