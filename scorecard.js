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


  total_score() {
    let total = 0;
    for (let i = 0; i < this.scores.length; i++) {
      if(i == 9 && this.scores[i][0] == 10) {
        total += this.frame_total(this.scores[i]);
      } else if(this.scores[i][0] == 10) {
        total += this.frame_total(this.scores[i + 1]) + 10;
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