const GameScore = require('./GameScore');
const Frame = require('./frame');
const prompt = require('prompt-sync')();

class Application {
  constructor(frameTenThirdRollPoints = 0) {
    this.frameTenThirdRollPoints = frameTenThirdRollPoints;
  }

  runGame() {
    const gameScore = new GameScore();
    this.runFirstTenFrames(gameScore);
    this.runFinalFrame();
    var result = gameScore.calcTotalPoints();
    console.log(result);
  }

  runFirstTenFrames(gameScore) {
    while (gameScore.frameCounter <= 8) {
      var frame = new Frame();
      var roll1 = prompt(
        `Introduce the first roll of frame ${gameScore.frameCounter + 1}: `
      );
      var roll1 = Number(roll1);
      while (isNaN(roll1) || roll1 < 0 || roll1 > 10) {
        console.log('Please, enter a valid number (0-10).');
        var roll1 = prompt('Introduce the first roll of frame 1: ');
      }
      if (roll1 != 10) {
        var roll2 = prompt(
          `Introduce the second roll of frame ${gameScore.frameCounter + 1}: `
        );
        var roll2 = Number(roll2);
        while (isNaN(roll2) || roll2 < 0 || roll2 > 10) {
          console.log('Please, enter a valid number (0-10).');
          var roll2 = prompt('Introduce the first roll of frame 1: ');
        }
      }
      frame.addPins(roll1);
      frame.addPins(roll2);
      gameScore.addFrameScore(frame);
    }

    runFinalFrame();
    gameScore.calcTotalPoints() + this.frameTenThirdRollPoints;
  }

  runFinalFrame() {
    var frame = new Frame();

    var roll1 = prompt(`Introduce the first roll of frame 10: `);
    var roll1 = Number(roll1);
    while (isNaN(roll1) || roll1 < 0 || roll1 > 10) {
      console.log('Please, enter a valid number (0-10).');
      var roll1 = prompt('Introduce the first roll of frame 10: ');
    }

    var roll2 = prompt(`Introduce the second roll of frame 10: `);
    var roll2 = Number(roll2);
    while (isNaN(roll2) || roll2 < 0 || roll2 > 10) {
      console.log('Please, enter a valid number (0-10).');
      var roll2 = prompt('Introduce the second roll of frame 10: ');
    }

    frame.addPins(roll1);
    frame.addPins(roll2);
    gameScore.addFrameScore(frame);

    if (frame.isStrike() || frame.isSpare()) {
      var roll3 = prompt(`Introduce the third roll of frame 10: `);

      var roll3 = Number(roll3);
      while (isNaN(roll3) || roll3 < 0 || roll3 > 10) {
        console.log('Please, enter a valid number (0-10).');
        var roll3 = prompt('Introduce the first roll of frame 1: ');
      }
      this.frameTenThirdRollPoints = roll3;
    }
  }
}
//   // On 10th frame, if strike or spare, they can role additional balls for the bonus,
//   // but never more than 3 bals. Additional rolls only count for the bonus,  not the regular frame count.
//   if (gameScore.frameCounter === 10) && frame.isSpare === true
//   if (ganeScore.frameCounter === 10) && frame.isStrike === true
//   if (this.prevRoundStrike === true && this.prevTwoRoundStrike === true) {
//     this.frameScores[this.frameCounter - 2] += frame.framePins()[0];
//   }
//   // calculates bonus for cases of singular strikes and spares
//   if (this.prevRoundStrike === true) {
//     this.frameScores[this.frameCounter - 1] += points;
//     this.prevTwoRoundStrike = true;
//   } else if (this.prevRoundSpare === true) {
//     this.frameScores[this.frameCounter - 1] += frame.framePins()[0];
//   }

//   // Second roll, frame 2
//   var roll2Frame1 = prompt('Introduce the second roll of frame 1: ');
//   var roll2Frame1 = Number(roll2Frame1);
//   while (isNaN(roll2Frame1) || roll2Frame1 < 0 || roll2Frame1 > 10) {
//     console.log('Please, enter a valid number (0-10).');
//     var roll2Frame1 = prompt('Introduce the second roll of frame 1: ');
//   }

//   // First roll, frame 2
//   var roll1Frame2 = prompt('Introduce the first roll of frame 2: ');
//   var roll1Frame2 = Number(roll1Frame2);
//   while (isNaN(roll1Frame2) || roll1Frame2 < 0 || roll1Frame2 > 10) {
//     console.log('Please, enter a valid number (0-10).');
//     var roll1Frame2 = prompt('Introduce the first roll of frame 2: ');
//   }

//   // Second roll, frame 2
//   var roll2Frame2 = prompt('Introduce the second roll of frame 2: ');
//   var roll2Frame2 = Number(roll2Frame2);
//   while (isNaN(roll2Frame2) || roll2Frame2 < 0 || roll2Frame2 > 10) {
//     console.log('Please, enter a valid number (0-10).');
//     var roll2Frame2 = prompt('Introduce the second roll of frame 2: ');
//   }

//   // First roll, frame 3
//   var roll1Frame3 = prompt('Introduce the first roll of frame 3: ');
//   var roll1Frame3 = Number(roll1Frame3);
//   while (isNaN(roll1Frame3) || roll1Frame3 < 0 || roll1Frame3 > 10) {
//     console.log('Please, enter a valid number (0-10).');
//     var roll1Frame3 = prompt('Introduce the first roll of frame 3: ');
//   }

//   // Second roll, frame 3
//   var roll2Frame3 = prompt('Introduce the second roll of frame 3: ');
//   var roll2Frame3 = Number(roll2Frame3);
//   while (isNaN(roll2Frame3) || roll2Frame3 < 0 || roll2Frame3 > 10) {
//     console.log('Please, enter a valid number (0-10).');
//     var roll2Frame3 = prompt('Introduce the second roll of frame 3: ');
//   }

// }

// var roll2Frame1 = prompt('Introduce the second roll of frame 1:');
// while (
//   typeof roll2Frame1 != number ||
//   roll2Frame1 < 0 ||
//   roll2Frame1 > 10
// ) {
//   console.log('Please, enter a valid number.');
//   var roll1Frame1 = prompt('Introduce the second roll of frame 1:');
// }

// var roll1Frame1 = prompt('Introduce the first roll of frame 2:');
// while (
//   typeof roll1Frame2 != number ||
//   roll1Frame2 < 0 ||
//   roll1Frame2 > 10
// ) {
//   console.log('Please, enter a valid number.');
//   var roll1Frame1 = prompt('Introduce the first roll of frame 2:');
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

//         var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

module.exports = Application;

const application = new Application();
application.runGame();
