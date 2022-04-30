const Frame = require("./frame");
const Scoresheet = require("./scoresheet");
const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
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
  new Frame(),
];

const scoresheet = new Scoresheet();

let frameCounter = 0;

const input = (frameCounter) => {
  if (frameCounter < 9) {
    scoresheet.newFrame(emptyFrames[frameCounter]);
    scoresheet.addFrame(emptyFrames[frameCounter]);
    frameCounter += 1;

    rl.question(`Enter your first roll for Frame ${frameCounter}: `, (roll) => {
      scoresheet.currentFrame.addRoll(Number(roll));

      if (Number(roll) != 10) {
        rl.question(
          `Enter your second roll for Frame ${frameCounter}: `,
          (roll2) => {
            scoresheet.currentFrame.addRoll(Number(roll2));
            input(frameCounter);
          }
        );
      } else {
        input(frameCounter);
      }
    });
  } else if (frameCounter === 9) {
    scoresheet.newFrame(emptyFrames[frameCounter]);
    scoresheet.addFrame(emptyFrames[frameCounter]);
    frameCounter += 1;

    rl.question(`Enter your first roll for Frame ${frameCounter}: `, (roll) => {
      scoresheet.currentFrame.addRoll(Number(roll));

      rl.question(
        `Enter your second roll for Frame ${frameCounter}: `,
        (roll2) => {
          scoresheet.currentFrame.addRoll(Number(roll2));

          if (Number(roll) === 10 || Number(roll) + Number(roll2) === 10) {
            rl.question(
              `Enter your third roll for Frame ${frameCounter}: `,
              (roll3) => {
                scoresheet.currentFrame.addRoll(Number(roll3));
                input(frameCounter);
              }
            );
          } else {
            input(frameCounter);
          }
        }
      );
    });
  } else {
    console.log(`Your score is ${scoresheet.totalScore()}.`);
    console.log(
      ` ____________________________________________________________`
    );
    console.log(
      `|__1__|__2__|__3__|__4__|__5__|__6__|__7__|__8__|__9__|__10__|`
    );
    scoresheetRolls();
    scoresheetScore();
    console.log(
      `|_____|_____|_____|_____|_____|_____|_____|_____|_____|______|`
    );
    rl.close();
  }
};

input(frameCounter);

scoresheetRolls = () => {
  string = "|";
  for (let i = 0; i < 9; i++) {
    if (scoresheet.frames[i].isStrike() === true) {
      string = string.concat(`   |X|`);
    } else if (scoresheet.frames[i].isSpare() === true) {
      string = string.concat(`  ${scoresheet.frames[i].firstRoll()}|/|`);
    } else {
      string = string.concat(
        `  ${scoresheet.frames[i].firstRoll()}|${scoresheet.frames[
          i
        ].secondRoll()}|`
      );
    }
  }
  if (scoresheet.frames[9].isStrike() === true) {
    if (scoresheet.frames[9].secondRoll() === 10) {
      if (scoresheet.frames[9].bonusRoll() === 10) {
        string = string.concat(` X|X|X|`);
      } else {
        string = string.concat(` X|X|${scoresheet.bonusRoll()}|`);
      }
    } else {
      if (
        scoresheet.frames[9].secondRoll() + scoresheet.frames[9].bonusRoll() ===
        10
      ) {
        string = string.concat(` X|${scoresheet.frames[9].secondRoll()}|/|`);
      } else {
        string = string.concat(
          ` X|${scoresheet.frames[9].secondRoll()}|${scoresheet.frames[9].bonusRoll()}|`
        );
      }
    }
  } else if (scoresheet.frames[9].isSpare() === true) {
    if (scoresheet.frames[9].bonusRoll() === 10) {
      string = string.concat(` ${scoresheet.frames[9].firstRoll()}|/|X|`);
    } else {
      string = string.concat(
        ` ${scoresheet.frames[9].firstRoll()}|/|${scoresheet.frames[9].bonusRoll()}|`
      );
    }
  } else {
    string = string.concat(
      `   ${scoresheet.frames[9].firstRoll()}|${scoresheet.frames[9].secondRoll()}|`
    );
  }
  console.log(string);
};

scoresheetScore = () => {
  let score = 0;
  string = "|";
  for (let i = 0; i < 9; i++) {
    score += scoresheet.frameScore(i);
    let scorelength = score.toString().length;
    if (scorelength === 1) {
      string = string.concat(`  ${score}  |`);
    } else if (scorelength === 2) {
      string = string.concat(`  ${score} |`);
    } else {
      string = string.concat(` ${score} |`);
    }
  }
  score += scoresheet.frameScore(9);
  let scorelength = score.toString().length;
  if (scorelength === 1) {
    string = string.concat(`   ${score}  |`);
  } else if (scorelength === 2) {
    string = string.concat(`  ${score}  |`);
  } else {
    string = string.concat(`  ${score} |`);
  }
  console.log(string);
};
