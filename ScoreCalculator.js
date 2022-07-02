class ScoreCalculator {
  calculateTotal(scores) {
    this.total = 0;
    let bonusForSpares = [];

    scores.forEach((frame) => {
       if (frame[0] + frame[1] == 10) {
         bonusForSpares.push(scores.indexOf(frame) + 1);
     }});

    if (bonusForSpares.length > 0) {
      bonusForSpares.map((bonusIndex) => {
        this.total += scores[bonusIndex][0];
      })
    } 

    scores.map((frame) => { 
      this.total += frame.reduce((total, amount) => total += amount) 
    });
   
    return this.total;
  }

  isGutterGame(scores) {
    return this.total == 0;
  }

  isPerfectGame(scores) {
    return this.total == 120;
  }

  isStrike(frame) {

  }

  isSpare(frame) {

  }
}

module.exports = ScoreCalculator;