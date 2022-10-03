const Frame = require('./frame');
const RollInput = require('./rollInput');

class Application {
  constructor(rollInput) {
    this.rollInput = rollInput;
    let frame1 = new Frame(1);
    let frame2 = new Frame(2);
    let frame3 = new Frame(3);
    let frame4 = new Frame(4);
    let frame5 = new Frame(5);
    let frame6 = new Frame(6);
    let frame7 = new Frame(7);
    let frame8 = new Frame(8);
    let frame9 = new Frame(9);
    let frame10 = new Frame(10);
    this.frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10];
  };

  getFrames() {
    return this.frames;
  };

  printFrameNumber(frameNumber) {
    console.log(`--- Frame ${frameNumber} ---`);
  };

  printStrike() {
    console.log('STRIKE!');
  }

  printSpare() {
    console.log('SPARE!');
  }

  printScorecard(frameNumber) {
    console.log('Frame - Roll 1 - Roll 2 - Roll 3 - Score - Total Score');
    // only displaying the scored frames
    let scoredFrames = this.frames.slice(0, frameNumber);
    scoredFrames.forEach((frame) => {
      console.log(`  ${frame.id}   -    ${frame.roll1}   -    ${frame.roll2}   -    ${frame.roll3}   -   ${frame.score}   -   ${frame.totalScore}  `);
    });
  };
  
  // if we are at least in frame 2, checking if last frame was spare or strike
  firstRollBonusRequired(currentFrame) {  
    if (currentFrame > 1) {
      return (this.frames[currentFrame - 2].isSpare() || this.frames[currentFrame - 2].isStrike());
    } else {
      return false;
    };
  };

  // if we are at least in frame 2, checking if last frame was strike and no strike in first roll on current frame
  secondRollBonusRequired(currentFrame) {
    if (currentFrame > 1) {
      return (this.frames[currentFrame - 2].isStrike() && !this.frames[currentFrame - 1].isStrike());
    } else {
      return false;
    };
  };

  // if we are at least in frame 3, checking if last two frames were strikes
  twoStrikesBonus(currentFrame) {
    if (currentFrame > 2) {
      return (this.frames[currentFrame -3].isStrike() && this.frames[currentFrame -2].isStrike());
    } else {
      return false;
    };
  };

  addBonuses(currentFrame) {
    // Adding first roll of current frame as bonus for previous round if they were spare or strike
    if (this.firstRollBonusRequired(currentFrame)) {
      this.frames[currentFrame - 2].bonus = this.frames[currentFrame - 1].roll1;
      this.frames[currentFrame - 2].calculateScore();
    };
    
    // Adding second roll of current frame as bonus for last frame if it was a strike
    if (this.secondRollBonusRequired(currentFrame)) {
      this.frames[currentFrame - 2].bonus += this.frames[currentFrame - 1].roll2;
      this.frames[currentFrame - 2].calculateScore();
    };

    // If last two rounds were strikes we still need to add a bonus to the score two rounds ago
    if (this.twoStrikesBonus(currentFrame)) {
      this.frames[currentFrame - 3].bonus += this.frames[currentFrame - 1].roll1;
      this.frames[currentFrame - 3].calculateScore();
    };
  };

  run() {
    this.frames.forEach((frame) => {
      this.printFrameNumber(frame.id);
      frame.roll1 = this.rollInput.getRoll('First Roll: ');

      // Strike!
      if (frame.isStrike()) {
        this.printStrike();
        // If we are not in tenth frame, second roll is not executed
        if (frame.id != 10) {
          frame.roll2 = '';
        };
      };

      // If first roll wasn't a strike (or it's the 10th round), user gets second roll
      if ( !frame.isStrike() || frame.id === 10 ) {
        frame.roll2 = this.rollInput.getRoll('Second Roll: ');
        // Spare! - Doesn't work!
        if (frame.isSpare()) {
          this.printSpare();
        };
      };

      this.addBonuses(frame.id);
    
      // In tenth frame if there has been spare or strike, add a third roll
      if (frame.id === 10 && (frame.isStrike() || frame.isSpare())) {
        frame.roll3 = this.rollInput.getRoll('Third Roll: ');
      }

      frame.calculateScore();
      this.printScorecard(frame.id);
    });
  };
};

module.exports = Application;

// These lines are for running the app

// const rollInput = new RollInput();
// const app = new Application(rollInput);
// app.run();