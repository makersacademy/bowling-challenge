// in user interface, add logic that ends frame early if player gets a strike


class UserInterface {
  scoreBoard() {
    // Test this function
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