class ScoreCalculator {
  calculateTotal(scores) {
    this.total = 0;
    let bonusForSpares = [];
    scores.forEach((frame) => {
       if (frame[0] + frame[1] == 10) {
         bonusForSpares.push(scores.indexOf(frame) + 1);
     }});
    console.log(bonusForSpares);
    console.log(bonusForSpares.length > 0);
    if (bonusForSpares.length > 0) {
      this.total += scores[bonusForSpares][0];
      console.log("I've done this line")
    } else {
      console.log("shouldn't read the first one")
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