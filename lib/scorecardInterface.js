const readLine = require('readline');
const Scorecard = require('./scorecard');

const indices = ["one", "two", "three", "four", "five",
                 "six", "seven", "eight", "nine", "ten"];

console.log("Welcome to this bowling scorecard program!");
console.log("Please begin entering your rolls.");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

const card = new Scorecard;
let count = 0;

const recursiveAsyncReadLine = function () {
  if (card.frames.length < 10) {
    rl.question(`First roll of frame ${indices[count]}: `, answer1 => {
      if (answer1 === "10") {
        card.addFrame(10, null);
        count = card.frames.length;
        console.log(card.getFrames());
        recursiveAsyncReadLine();
      } else {
        rl.question(`Second roll of frame ${indices[count]}: `, answer2 => {
          card.addFrame(parseInt(answer1), parseInt(answer2));
          count = card.frames.length;
          console.log(card.getFrames());
          recursiveAsyncReadLine();
        });
      }
    });
  } else if (card.frames.length === 10 && card.frames[9].isSpare()) {
    rl.question("This game qualifies for a bonus roll. Bonus roll: ", answer => {
      card.addFrame(parseInt(answer), null);
      console.log(card.getFrames());
      console.log(`You scored ${card.gameScore()} points!`);
      rl.close();
    });
    } else if (card.frames.length === 10 && card.frames[9].isStrike()) {
      rl.question("This game qualifies for two bonus rolls. Bonus roll one: ", answer1 => {
        if (answer1 === "10") {
          card.addFrame(10, null);
          console.log(card.getFrames());
          rl.question("Bonus roll two: ", answer => {
            card.addFrame(parseInt(answer), null);
            console.log(card.getFrames());
            console.log(`You scored ${card.gameScore()} points!`);
            rl.close();
          });
        } else {
          rl.question("Bonus roll two: ", answer2 => {
            card.addFrame(parseInt(answer1), parseInt(answer2));
            console.log(card.getFrames());
            console.log(`You scored ${card.gameScore()} points!`);
            rl.close();
          });
        }
      });
  } else {
    console.log(`You scored ${card.gameScore()} points!`);
    rl.close();
  }
};

recursiveAsyncReadLine();