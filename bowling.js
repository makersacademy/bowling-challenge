class Bowling {
  constructor() {
    this.score = 0;
    this.frame = 1;
    this.bonusRoll = 0;
  }

  process_frame (rolls) {
    if (this.frame > 10) {
      throw `Game over`;
    }

    let pins = 10;

    //Calculate roll score
    rolls.forEach((roll, index) => {
      pins -= roll;
      this.score += roll;
    
      //Apply bonus from previous roll
      if (this.bonusRoll > 0) {
        const consecutive_strikes = (roll === 10 && this.bonusRoll === 2);
        const bonusMultiplier = consecutive_strikes ? 2 : 1;
        this.score += roll * bonusMultiplier;
        this.bonusRoll -= 1;
      }  
    
      //Set bonus in case of strike or spare
      if ((pins == 0) && (this.frame < 10)) {
        this.bonusRoll = 2 - index;
        return;
      }
    });

    this.frame += 1;
  }

  report_score () {
    if (this.score === 0) {
      return `Game over, you scored 0 points.`;
    } else if (this.score === 300) {
      return `Congratulations on your perfect game! You scored 300 points!`;
    } else {
      return `You scored ${this.score} points!`;
    }
  }
}

module.exports = Bowling;

//to test #1: comment everything below this point, then,
//on terminal, enter node and require the file:
//Bowling = require('./bowling');
//then type the scores.

//to test #2: run the file with the below:
bowling = new Bowling();
bowling.process_frame([1, 4]);
bowling.process_frame([4, 5]);
bowling.process_frame([6, 4]);
bowling.process_frame([5, 5]);
bowling.process_frame([10]);
bowling.process_frame([0, 1]);
bowling.process_frame([7, 3]);
bowling.process_frame([6, 4]);
bowling.process_frame([10]);
bowling.process_frame([2, 8, 6]);
console.log(bowling.report_score());
// output:You scored 133 points!

bowling_perfect = new Bowling();
bowling_perfect.process_frame([10]);
bowling_perfect.process_frame([10]);
bowling_perfect.process_frame([10]);
bowling_perfect.process_frame([10]);
bowling_perfect.process_frame([10]);
bowling_perfect.process_frame([10]);
bowling_perfect.process_frame([10]);
bowling_perfect.process_frame([10]);
bowling_perfect.process_frame([10]);
bowling_perfect.process_frame([10, 10]);
console.log(bowling_perfect.report_score());
// output:Congratulations on your perfect game! You scored 300 points!