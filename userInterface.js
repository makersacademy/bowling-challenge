const chalk = require('chalk');
const emoji = require('node-emoji');
const prompt = require('prompt-sync')( {sigint: true});
const Frame = require('./frame');
const Scorecard = require('./scorecard');

class UserInterface {
  constructor() { 
  }

  run() {
    console.clear();
    console.log(chalk.green("Roll up, roll up! It's time to play Rachel's bowling game!"));
    const pin = emoji.get('bowling');
    const party = emoji.get('confetti_ball');
    let frameNumber = 0;
    const scorecard = new Scorecard;

    while (frameNumber < 9) {
      let frame = new Frame;
      console.log(chalk.cyan(`${pin} Frame ${frameNumber+1}:`));
      let rollOneString = prompt(chalk.blue('Enter your first roll: '));
      let rollOne = parseInt(rollOneString);
      frame.add(rollOne);
      if (frame.isStrike() === false) {
        let maxNumber = 10 - rollOne;
        let rollTwoString = prompt(chalk.blue(`Enter your second roll; it should be between 0 and ${maxNumber}: `));
        let rollTwo = parseInt(rollTwoString);
        frame.add(rollTwo);
      }
      scorecard.addFrame(frame);
      frameNumber ++;
    }
    console.log(chalk.cyan(`${pin} Frame ${frameNumber+1}:`));
    let finalFrame = new Frame;
    let rollOneString = prompt(chalk.blue('Enter your first roll: '));
    let rollOne = parseInt(rollOneString);
    finalFrame.add(rollOne);
    let rollTwoString = prompt(chalk.blue('Enter your second roll: '));
    let rollTwo = parseInt(rollTwoString);
    finalFrame.add(rollTwo);
    if (finalFrame.isStrike() || finalFrame.isSpare()) {
      let rollThreeString = prompt(chalk.blue('Enter your bonus roll: '));
      let rollThree = parseInt(rollThreeString);
      finalFrame.add(rollThree);
    }
    scorecard.addFrame(finalFrame)
    console.log(`${party}${party}${party}${party}${party}${party}${party}${party}`);
    console.log(chalk.bgYellow(`You scored: ${scorecard.calculate()}!`));
    console.log(`${party}${party}${party}${party}${party}${party}${party}${party}`);
  }

}

module.exports = UserInterface;