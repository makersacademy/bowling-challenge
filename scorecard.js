class Scorecard {
  constructor(game) {
    this.game = game;
    this.score = null;
    this.gutterGame = [ [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0] ];
    this.perfectGame = [ [10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10] ];
  }
  calculateScore() {
    // return score when it's a gutter game, else if return score when it's a perfect game, else calculate the score
    if (JSON.stringify(this.game) === JSON.stringify(this.gutterGame)) {
      return this.score = 0; 
    } else if (JSON.stringify(this.game) === JSON.stringify(this.perfectGame)) {
      return this.score = 300; 
    } else {
      // set score to 0
      this.score = 0;
      // iterate through each frame and add the two rolls together, then add to the score
      this.game.forEach((frame, index) => {
        this.score += frame.reduce((roll1, roll2) => roll1 + roll2, 0);
        // if frame is a strike i.e. first roll is 10, then add the sum of the rolls from the next frame
        // elsif the frame is a spare i.e. sum of both rolls is 10, then add the first roll from the next frame to score
        if (frame[0] === 10) {
          this.score += this.game[index + 1].slice(0,2).reduce((nextFrameRoll1, nextFrameRoll2) => nextFrameRoll1 + nextFrameRoll2, 0);
        } else if (frame.reduce((roll1, roll2) => roll1 + roll2, 0) === 10) {
          this.score += this.game[index + 1][0];
        }
      })
      return this.score;
    }
  }
}

module.exports = Scorecard;
