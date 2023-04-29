class Game {
  constructor(frameClass) {
    this.grandTotal = 0;
    this.frames = [];
    for(let i = 0; i < 9; i++) {
      // Create 9 frames that are not the final frame
      let frame = new frameClass(false);
      this.frames.push(frame);
    }
    // create and push the final frame to the frames array
    let final_frame = new frameClass(true);
    this.frames.push(final_frame);

  }

  play() {
    // for loop 10 times, frame.roll twice
    // if the previous frame was a half strike, update the bonus points
    // if the previous frame was a strike
    // handle the final frame differently
    // should this call a .play function in the frame class?
  }

  scoreBoard() {
    // look to refactor this function, creating small functions that return bools re: bonus points pending
    // second arg to .map is the index of the iteration
    this.frames.map((frame, index) => {
      let frameInfo = `Frame ${index}: Shot 1 =>`
      // concatenate the score from first roll if it has been scored, else default to 0
      frameInfo += frame.rolls.length ? frame.rolls[0] : 0;
      frameInfo += 'Shot 2 => '
      // concatenate the score from 2nd roll if it has been scored, else default to 0
      frameInfo += frame.rolls.length === 2 ? frame.rolls[1] : 0;
      frameInfo += 'FRAME TOTAL == '
      // if player rolled a strike
      if(frame.rolls.includes(10)) {
        // if the next frame hasn't had to rolls nor finished early because of a strike
        if (this.frames[index + 1].rolls.length < 2 && !this.frames[index + 1].rolls.includes(10) ) {
          frameInfo += '*pending*';
        // if the next frame finished early because of a strike but the subsequent roll hasnt yet beeen taken
        // modify this to handle the penultimate frame
        } else if (this.frames[index + 1].rolls.length == 1 && !this.frames[index + 2].rolls ) {
          frameInfo += '*pending*';
        // else boinus points must havfe been allocated already
        } else {
          frameInfo += (frame.regularPoints + frame.bonusPoints);
        }
        // if they scored a half strike check if the next roll has been taken
      } else if (frame.regularPoints == 10 && !this.frames[index + 1].rolls.length) {
        frameInfo += '*pending*';
      } else {
        frameInfo += (frame.regularPoints + frame.bonusPoints);
      };
    })
  }
}

module.exports = Game;
