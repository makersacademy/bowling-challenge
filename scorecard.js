class Scorecard {
  constructor(scores) {
    this.scores = scores;
  }

  total_score() {
    let total = 0;

    for (let i = 0; i < this.scores.length; i++) {
      
      if(this.scores[i][0] == 10) {
        this.scores[i + 1].forEach(roll => {
          total += roll;
        });
        total += 10;
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