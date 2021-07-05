'use strict'

class BowlingGame {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
    // this.currentScore += pins;
  }

  score() {
    let score = 0;
    let rollIndex = 0;
    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      /* strike logic
      if current roll = 10 (strike) then our score is 10 + next two rolls,
      then we go into next frame so incerement rollIndex by 1
      */
      if (this.rolls[rollIndex] === 10) {
        score += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
        rollIndex += 1;
        continue; // using continue statement skips the next steps of counting score for this frame
      }

      let frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

      /* spare logic
       if frame score = 10 then score for this frame = 10 + score for next roll (rollIndex + 2) (rollIndex + rollIndex+1 is previous frame) */
      if (frameScore === 10) {
        score += 10 + this.rolls[rollIndex + 2];
      } else {
        score += frameScore;
      }

      rollIndex += 2;
    }
    return score;
  }

}
