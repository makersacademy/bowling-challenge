const Bowling = require("./bowling");
const Frame = require("./frame");
const readlineSync = require("readline-sync");
let match = new Bowling();

do {
  console.log("Welcome to Bowling scoring!");
  // FIRST NINE FRAMES
  if (match.frames.length < 9) {
    let first = readlineSync.question("Enter your first roll: ");
    if (parseInt(first) != 10) {
      let second = readlineSync.question("Enter your second roll: ");
      let frame = new Frame(parseInt(first), parseInt(second));
      match.newFrame(frame);
      match.regularScoring();

      if (
        frame.firstRoll + frame.secondRoll < 10 &&
        frame.firstRoll + frame.secondRoll >= 0
      ) {
        console.log(
          `You scored ${first} in your first roll and ${second} in your second roll! Keep going!`
        );
      } else if (frame.firstRoll + frame.secondRoll == 10) {
        if (match.frames.length > 1) {
          match.bonusScoring();
        }
        console.log("Spare!");
      } else {
        console.log("Something isn't right....");
      }
    } else {
      console.log("Strike!!!");
      let frame = new Frame(parseInt(first), 0);
      match.newFrame(frame);
      match.regularScoring();
      if (match.frames.length > 1) {
        match.bonusScoring();
      }
    }
  } else {
    // LAST FRAME
    console.log("LAST FRAME!");
    let first = readlineSync.question("Enter your first roll: ");
    // LAST FRAME NOT STRIKE
    if (parseInt(first) != 10) {
      let second = readlineSync.question("Enter your second roll: ");
      // LAST FRAME SPARE
      if (parseInt(first) + parseInt(second) == 10) {
        console.log("Your last frame is a SPARE!");
        let third = readlineSync.question("Enter your third roll: ");
        let frame = new Frame(
          parseInt(first),
          parseInt(second),
          parseInt(third)
        );
        match.newFrame(frame);
        match.regularScoring();
        console.log(match.totalScore);
        // LAST FRAME NOT SPARE
      } else {
        console.log("Sorry, you don't get a third roll!");
        let frame = new Frame(parseInt(first), parseInt(second));
        match.newFrame(frame);
        match.regularScoring();
      }
      // LAST FRAME STRIKE
    } else {
      console.log("Your last frame is a STRIKE! You get one more roll!");
      let second = readlineSync.question("Enter your extra roll: ");
      // SECOND STRIKE
      if (parseInt(second) == 10) {
        console.log("WOW! You're amazing! Get an extra roll!");
        let third = readlineSync.question("Enter your extra extra roll: ");
        let frame = new Frame(
          parseInt(first),
          parseInt(second),
          parseInt(third)
        );
        match.newFrame(frame);
        match.regularScoring();
        console.log(match.totalScore);
        // SECOND NOT STRIKE
      } else {
        let frame = new Frame(parseInt(first), parseInt(second));
        match.newFrame(frame);
        match.regularScoring();
        console.log(match.totalScore);
      }
    }
  } // END OF LAST FRAME
  console.log(match.totalScore);
  console.log(match.bonus);
} while (match.frames.length < 10);
