class Game {

  constructor() {
    this.allFramesScore = [];
    this.frameNumber = 0;
    this.frameScore = [];
    this.rollNumber = 0;
    this.totalScore = 0;
  };

  roll(pinsDown) {
    // set the rollNumber to 1 - first roll of the frame.
    this.score(pinsDown);
    this.rollNumber++;

    if (this.rollNumber === 1) {
      // only increment frame number on first roll.
      this.frame();
      // this.rollNumber++;
    }
    else if (this.rollNumber > 1) {
      // reset rollnumber, ready for next frame.
      this.rollNumber = 0;
    };

  };

  score(pinsDown) {

    // store the number of pins knocked down for each roll of the frame.
    this.frameScore.push(pinsDown);

    // frame is complete therefore push score to the master array
    // & reset the above frameScore array to empty.
    if (this.frameScore.length === 2) {
      this.allFramesScore.push(this.frameScore);
      // console.log(this.allFramesScore);
      this.frameScore = [];
    };

    // Keep a seprate total for now, can remove at the end.
    this.totalScore += pinsDown;
    return this.totalScore;
  };

  frame() {
    this.frameNumber++;
    return this.frameNumber;
  };

}; // end of class
