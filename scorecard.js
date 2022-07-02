class Scorecard {
  constructor(scores) {
    this.scores = scores;
  }

  total_score() {
    let total = 0;
    this.scores.map((frame) => {
      frame.forEach(roll => {
        total += roll;
      });
    })
    return total;
  }


}


module.exports = Scorecard;