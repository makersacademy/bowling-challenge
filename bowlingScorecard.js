
class BowlingScorecard {
  constructor() {
    this.score = [[0],[0]];
    this.fn = 1;
    this.f = 1;
  }

  async play() {
    for (let i = 0; i < 10; i++) {
      await this.handleFrame();
    }
    this.handleBonusFrame();
  }
  
  handleFrame() {
    return new Promise((resolve, reject) => {
      console.log(`Input score Frame ${this.f} Ball 1`);
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
    
      readline.question("", (input) => {
        const score = parseInt(input, 10);
        readline.close();
        if (score === 10) {
          this.handleStrike(score);
          resolve();
        } else if (score < 10) {
          this.handleRegularFrame(score);
          resolve();
        } else {
          reject(new Error("Invalid input"));
        }
      });
    });
  }
  
  handleRegularFrame(input) {
    // if((this.score[this.fn].reduce((a, b) => a + b, 0) / this.score[this.fn].length) === 5) {
    // this.score[this.fn].push(input); }
    // if((this.score[this.fn].reduce((a, b) => a + b, 0) / this.score[this.fn].length) === 10) {
    //   this.score[this.fn].push(input); }
    // if((this.score[this.fn - 1].reduce((a, b) => a + b, 0) / this.score[this.fn - 1].length) === 10) {
    // this.score[this.fn - 1].push(input); }
    console.log(`Input score Frame ${this.f} Ball 2`);
    const input2 = parseInt(require('readline-sync').question(""), 10);
    if((this.score[this.fn].reduce((a, b) => a + b, 0) / this.score[this.fn].length) === 10) {
      this.score[this.fn].push(input2); }
    this.f += 1;
    const framescore = [input, input2];
    this.score.push(framescore);
    const total = framescore.reduce((a, b) => a + b, 0);
    if (total === 10) {
      console.log("Spare! Running total pending...");
    } else {
      console.log(`Scorecard: ${this.score.slice(1)} TOTAL: ${this.score.flat().reduce((a, b) => a + b, 0)}`);
      // console.log(`Scorecard: [ ${this.score.slice(1).map(subArray => `[ ${subArray.join(', ')} ]`).join(', ')} ]TOTAL: ${this.score.flat().reduce((a, b) => a + b, 0)}`      );
      console.log(this.score);
    }
    this.fn += 1;
  }

  handleStrike(input) {
    let prevFrameStrikeOrSpare = (((this.score[this.fn].reduce((a, b) => a + b, 0) / this.score[this.fn].length) === 10) || ((this.score[this.fn].reduce((a, b) => a + b, 0) / this.score[this.fn].length) === 5));
    let prevTwoFramesStrikes = (((this.score[this.fn].reduce((a, b) => a + b, 0) / this.score[this.fn].length) === 10) && ((this.score[this.fn - 1].reduce((a, b) => a + b, 0) / this.score[this.fn -1].length) === 10));
    this.f += 1;
    let framescore = [];

    if (prevFrameStrikeOrSpare) {
      this.score[this.fn].push(input);
      if (prevTwoFramesStrikes) {
        this.score[this.fn - 1].push(input);
      }
      framescore.push(input);
      this.score.push(framescore);
      console.log("Scorecard: " + this.score.slice(1) + " Strike! Total pending...");
    } else {
      framescore.push(input);
      this.score.push(framescore);
      console.log("Strike! Total pending...");
    }
    this.fn += 1;
  }

  
  handleBonusFrame() {
    let score = this.score;
    console.log(this.score);
    let tenthFrame = score[10].reduce((a, b) => a + b, 0) / score[10].length;
    let interimScorecard = `Scorecard:[${score.slice(1)}] TOTAL: ${score.flat().reduce((a, b) => a + b, 0)}`;
    if (tenthFrame < 10) {
      console.log(`Final score: ${score.flat().reduce((a, b) => a + b, 0)} - Game Over!`);
    } else if (tenthFrame === 10) {
      console.log("Input score for Bonus Ball 1");
      const input3 = parseInt(require('readline-sync').question(""), 10);
      if (input3 === 10) {
        console.log("Strike!");
        score[9].push(input3);
        score[10].push(input3);
        console.log(interimScorecard);
        console.log("Input score for Bonus Ball 2");
        const input4 = parseInt(require('readline-sync').question(""), 10);
        if (input4 === 10) {
          console.log("Strike!");
          score[10].push(input4);
          console.log(`Scorecard:[${score.slice(1)}] TOTAL: ${score.flat().reduce((a, b) => a + b, 0)} - Game Over!`);
        } else if (input4 < 10) {
          score[10].push(input4);
          console.log(`Scorecard:[${score.slice(1)}] TOTAL: ${score.flat().reduce((a, b) => a + b, 0)} - Game Over!`);
        }
      } else if (input3 < 10) {
        score[10].push(input3);
        console.log(interimScorecard);
        console.log("Input score for Bonus Ball 2");
        const input4 = parseInt(require('readline-sync').question(""), 10);
        score[10].push(input4);
        console.log(`Scorecard:[${score.slice(1)}] TOTAL: ${score.flat().reduce((a, b) => a + b, 0)} - Game Over!`);
      }
    }
  }
}

const mycard = new BowlingScorecard();
mycard.play();



// class BowlingScorecard {

//   constructor()  {
//     this.score = [[0], [0]];
//     this.fn = 2 
//   }
  
//   getTotal() {
//     return this.score.flat().reduce((a,b) => a + b, 0);
//   }

//   loadFrame(frame) {
//     this.score.push(frame)
//   } 



//   handleRegularFrame(input) {
//     const framescore = [];
//     if ((this.score[this.fn].reduce((a, b) => a + b, 0) / this.score[this.fn].length === 5) || (this.score[this.fn].reduce((a, b) => a + b, 0) / this.score[this.fn].length === 10)) {
//       this.score[this.fn].push(input);
//     }
//     if (this.score[this.fn - 1].reduce((a, b) => a + b, 0) / this.score[this.fn - 1].length === 10) {
//       this.score[this.fn - 1].push(input);
//     }
//     framescore.push(input)
//     this.score.push(framescore)
//   }

// }

module.exports = BowlingScorecard