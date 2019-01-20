class Game {

  constructor() {
    this.rolls = [];
    // this.rollNumber = 0;
    this.frameNumber = 0;
    this.totalScore = 0;
    this.frame_Score = [];
    this.rollNumber = 0;
  };

  roll(pinsDown) {
    this.rollNumber++;
    // console.log("rollNumber at the start");
    // console.log(this.rollNumber);
    if (this.rollNumber === 1) {
      this.frame();
      // this.rollNumber++;
    }
    else if (this.rollNumber > 1) {
      this.rollNumber = 0;
    };
    // console.log("rollNumber at the end");
    // console.log(this.rollNumber);
    this.score(pinsDown);
  };

  score(pinsDown) {
    // var totalScore = 0;
    // totalScore += pinsDown;
    // return totalScore;
    this.totalScore += pinsDown;
    return this.totalScore;
  };

  frame() {
    this.frameNumber++;
    console.log("frameNumber");
    console.log(this.frameNumber);
    return this.frameNumber;
  };

}; // end of class
