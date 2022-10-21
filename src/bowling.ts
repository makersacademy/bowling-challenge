export default class Bowling {
  scorecard: number[][];

  constructor() {
    this.scorecard = [];
  }

  addScore(score: number[]) {
    // no illegal scores (is sensitive to last frame)
    if (score[0] + score[1] > 10 && score.length === 2) {
      return;
    }
    // no more than 10 frames
    if (this.scorecard.length === 10) {
      return;
    }
    // only allows last frame to be 3 long
    if (score.length === 3 && this.scorecard.length != 9) {
      return;
    }
    // last frame must have spare/strike to be 3 long
    if (score.length === 3 && !(score[0] + score[1] >= 10 || score[0] == 10)) {
      return;
    }

    this.scorecard.push(score);
  }

  get currentScore(): number {
    // squishes the array and adds up all the values
    const regularScore = this.scorecard.reduce((big, little) => big.concat(...little), [])
      .reduce((total, current) => total + current);

    let spareScore = 0
    // Iterates through and every roll after a spare gets added to spareScore
    this.scorecard.forEach((score: number[], index: number) => {
      if (this.scorecard.length === 1 && score[0] != 10 && score[0] + score[1] === 10) {
        // Prevent spare score from being calculated before second frame
      }
      
      else if (score[0] != 10 && score[0] + score[1] === 10 && score.length === 3) {
        // On the last frame regular score calculates any spare score
      }

      else if (score[0] != 10 && score[0] + score[1] === 10) {
        spareScore += this.scorecard[index + 1][0]
      }
    })

    let strikeScore = 0;
    // Iterates through the score card to add bonus strike score
    this.scorecard.forEach((score: number[], index: number) => {
      if (score[0] === 10 && typeof this.scorecard[index + 1] == "undefined") {
        // prevent strike score from being when next frame isn't available
      }
      else if (score[0] === 10 && this.scorecard[index + 1][0] === 10 && typeof this.scorecard[index + 2] == "undefined") {
        // in case of double strike checks if the frame afterwards exists
        strikeScore += this.scorecard[index + 1][0] + this.scorecard[index + 1][0];
      }

      else if (score.length === 3 && score[0] === 10) {
        // strike score is calculated by regularScore for last frame
      }
      // Handles consecutive strikes.
      else if (score[0] === 10 && this.scorecard[index + 1][0] === 10) {
        strikeScore += this.scorecard[index + 1][0] + this.scorecard[index + 2][0]
      }
      // Handles non-consecutive strikes.
      else if (score[0] === 10) {
        strikeScore += this.scorecard[index + 1][0] + this.scorecard[index + 1][1]
      }

    })

    return regularScore + spareScore + strikeScore;
  }

  get currentFrame(): number {
    return this.scorecard.length === 10 ? 10 : this.scorecard.length + 1
  }
}