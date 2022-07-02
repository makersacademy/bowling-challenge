class ScoreCalculator {
  calculateTotal(scores) {
    this.total = 0;
    scores.forEach((frame) => {
       if (frame[0] + frame[1] == 10) {
         this.total += 6;
     }});
    console.log(this.total);
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