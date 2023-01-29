const prompt = require('prompt-sync')( {sigint: true});
const Frame = require('./frame');
const Scorecard = require('./scorecard');

class UserInterface {
  constructor() { 
  }

  run() {
    console.clear();
    console.log("Roll up, roll up! It's time to play Rachel's bowling game!");
    let frameNumber = 0;
    const scorecard = new Scorecard;

    while (frameNumber < 9) {
      let frame = new Frame;
      console.log(`Frame ${frameNumber+1}:`);
      let rollOneString = prompt('Enter your first roll:');
      let rollOne = parseInt(rollOneString);
      frame.add(rollOne);
      if (frame.isStrike() === false) {
        let rollTwoString = prompt('Enter your second roll:');
        let rollTwo = parseInt(rollTwoString);
        frame.add(rollTwo);
      }
      scorecard.addFrame(frame);
      frameNumber ++;
    }
    console.log(`Frame ${frameNumber+1}:`);
    let finalFrame = new Frame;
    let rollOneString = prompt('Enter your first roll:');
    let rollOne = parseInt(rollOneString);
    finalFrame.add(rollOne);
    let rollTwoString = prompt('Enter your second roll:');
    let rollTwo = parseInt(rollTwoString);
    finalFrame.add(rollTwo);
    if (finalFrame.isStrike() || finalFrame.isSpare()) {
      let rollThreeString = prompt('Enter your third roll:');
      let rollThree = parseInt(rollThreeString);
      finalFrame.add(rollThree);
    }
    scorecard.addFrame(finalFrame)
    console.log(`You scored: ${scorecard.calculate()}!`);
  }
}

module.exports = UserInterface;