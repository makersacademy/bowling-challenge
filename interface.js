const Frame = require('./frame')
const Scoresheet = require('./scoresheet')
const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

const emptyFrames = [
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame()
]

const scoresheet = new Scoresheet();

let frameCounter = 0

const input = frameCounter => {
  if (frameCounter < 9) {
    scoresheet.newFrame(emptyFrames[frameCounter])
    scoresheet.addFrame(emptyFrames[frameCounter])
    frameCounter += 1

    rl.question(`Enter your first roll for Frame ${frameCounter}: `, (roll) => {
      scoresheet.currentFrame.addRoll(Number(roll));

      if (Number(roll) != 10) {
        rl.question(`Enter your second roll for Frame ${frameCounter}: `, (roll2) => {
          scoresheet.currentFrame.addRoll(Number(roll2));
          input(frameCounter);
        })
      } else {
        input(frameCounter);
      }

    })
  } else if (frameCounter === 9) {
    scoresheet.newFrame(emptyFrames[frameCounter])
    scoresheet.addFrame(emptyFrames[frameCounter])
    frameCounter += 1

    rl.question(`Enter your first roll for Frame ${frameCounter}: `, (roll) => {
      scoresheet.currentFrame.addRoll(Number(roll));
      
      rl.question(`Enter your second roll for Frame ${frameCounter}: `, (roll2) => {
        scoresheet.currentFrame.addRoll(Number(roll2));

        if (Number(roll) === 10 || Number(roll) + Number(roll2) === 10) {
          rl.question(`Enter your third roll for Frame ${frameCounter}: `, (roll3) => {
            scoresheet.currentFrame.addRoll(Number(roll3));
            input(frameCounter);
          }) 
        } else {
          input(frameCounter);
        }
      })
    })
  } else {
    console.log(`Your score is ${scoresheet.totalScore()}.`);
    rl.close();
  }
};

input(frameCounter);






