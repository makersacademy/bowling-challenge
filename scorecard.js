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

  strike_score(next_frame) {
    return this.frame_total(next_frame) + 10;
  }

  total_score() {
    let total = 0;
    for (let i = 0; i < this.scores.length; i++) {
      if(i == 9 && this.scores[i][0] == 10) {
        total += this.frame_total(this.scores[i]);
      } else if(this.scores[i][0] == 10) {
        total += this.strike_score(this.scores[i + 1]);
      } else if(this.frame_total(this.scores[i]) == 10) {
        total += this.frame_total(this.scores[i]) + this.scores[i + 1][0];
      } else {
        total += this.frame_total(this.scores[i]);
      }
      
    }
    return total;
  }


}


module.exports = Scorecard;