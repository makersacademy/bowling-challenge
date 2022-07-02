class Scorecard {
  constructor(scores) {
    this.scores = scores;
  }

  strike_score(next_frame) {
    let total = 0;
    next_frame.forEach(roll => {
      total += roll;
    });
    total += 10;
    return total;
  }

  total_score() {
    let total = 0;

    for (let i = 0; i < this.scores.length; i++) {
      
      if(this.scores[i][0] == 10) {
        total += this.strike_score(this.scores[i + 1]);
      } else {
        this.scores[i].forEach(roll => {
          total += roll;
        });
      }
      
    }
    return total;
  }


}


module.exports = Scorecard;