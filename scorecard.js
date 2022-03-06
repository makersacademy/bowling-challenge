class Scorecard {

  constructor() {
    this.rolls = [];
  };

  roll(pins) {
    this.rolls.push(pins);
  };

  score() {
    let score = 0; //to keep track of total score
    let rollIndex = 0; //to keep track of which roll
        
    for(let frameIndex = 0; frameIndex < 10; frameIndex++) { 
      let frameScore = this.rolls[rollIndex] + this.rolls[rollIndex+1]
      score += frameScore;
      rollIndex+=2
    }

    return score;
  };
}

module.exports = Scorecard;
let scorecard = new Scorecard