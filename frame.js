class Frame {
  // default value of false given to indicate it is not the final frame
  constructor(isFinalFrame = false) {
    this.rolls = [];
    this.regularPoints = 0;
    this.bonusPoints = 0;
    this.isFinalFrame = isFinalFrame;
  }

  roll(points) {
    // check if frame has already ended (including by strike on first roll - see below)
    if (this.rolls.length == 2) {
      return 'Frame is over';
      // check for invalid scores being inputted
    } else if(points < 0 || points > 10 || (this.regularPoints + points) > 10) {
      return 'Invalid roll score';
    }
    else {
      this.rolls.push(points);
      this.regularPoints += points;
      // If player bowled a strike on first shot, set the 2nd roll to 0 so that the frame is ended early. 
      if (points == 10 && this.rolls.length == 1) {
        this.rolls.push(0);
      }
    }
     
  }
}
module.exports = Frame;
