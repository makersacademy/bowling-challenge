const ScoreCard = require("./scorecard");
const Frame = require("./frame");
const readline = require("readline");

const scorecard = new ScoreCard();
frame = new Frame();
let numberOfFrames = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Enter score for a roll:",
});
rl.prompt();

rl.on("line", (answer) => {
  let answer1 = Number(answer);
  try {
    if (frame === null) {
      frame = new Frame();
    }
    if (frame.isComplete()) {
      frame = new Frame();
    }
    frame.addRoll(answer1);
    if (numberOfFrames === 9) {
      frame.setTenthFrame();
    }
    if (frame.isComplete()) {
      scorecard.addFrame(frame);
    }
    if (frame.isComplete()) {
      numberOfFrames += 1;
    }
  } catch {
    console.log("Invalid score for a roll!");
  } finally {
    let total = scorecard.calculateScore();
    console.log(`Your score =  ${total}`);
    if (numberOfFrames < 10) {
      rl.prompt();
    } else {
      console.log("Game Over");
      process.exit(0);
    }
  }
});
