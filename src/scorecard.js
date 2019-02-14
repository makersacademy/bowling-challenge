function Scorecard() {
  this._score = [0];
  this._allFrames = [];
}

// Record Scores
Scorecard.prototype.firstThrow = function(score) {
  this._firstThrow = score;
};

Scorecard.prototype.secondThrow = function(score) {
  let pinsRemaining = 10 - this._firstThrow;
  if (this._firstThrow + score > 10) {
    throw new Error(`There are only ${pinsRemaining} pins Pins remaining`);
  } else {
    this._secondThrow = score;
  }
};

Scorecard.prototype.resetThrows = function() {
  this._firstThrow = 0;
  this._secondThrow = 0;
};

Scorecard.prototype.addToFrames = function() {
  this._allFrames.push([this._firstThrow, this._secondThrow]);
  this.resetThrows();
};

Scorecard.prototype.recordStrike = function() {
  this._allFrames.push([10, 0]);
};

// Logic Checks
// Scorecard.prototype.spareWasScored = function(turn) {
//   let firstThrow = this._allFrames[turn][0];
//   let secondThrow = this._allFrames[turn][1];
//   if (firstThrow != 10 && firstThrow + secondThrow === 10) { return true }
// }
//
// Scorecard.prototype.strikeWasScored = function(turn) {
//   let firstThrow = this._allFrames[turn][0];
//   if (firstThrow === 10) { return true; }
// }
//
// Scorecard.prototype.doubleStrikeWasScored = function(turn) {
//   let firstThrow = this._allFrames[turn - 1][0];
//   let secondThrow = this._allFrames[turn][0]
//   if (firstThrow === 10 && secondThrow === 10) { return true; }
// }
//
// Scorecard.prototype.tripleStrikeWasScored = function(turn) {
//   let firstThrow = this._allFrames[turn - 2][0];
//   let secondThrow = this._allFrames[turn - 1][0]
//   let thirdThrow = this._allFrames[turn][0]
//   if (firstThrow === 10 && secondThrow === 10 && thirdThrow === 10) { return true; }
// }
//
//
// // Calculate Scores
// Scorecard.prototype.calculateBasic = function(turn) {
//   let throws = this._allFrames[turn];
//   this._score.push(throws.reduce((total, amount) => total + amount));
// };
//
// Scorecard.prototype.calculateSpare = function(turn) {
//   let throws = this._allFrames[turn];
//   throws.push(this._allFrames[turn + 1][0]);
//   this._score.push(throws.reduce((total, amount) => total + amount));
// };
//
// Scorecard.prototype.calculateStrike = function(turn) {
//   let throws = this._allFrames[turn];
//   throws.push(this._allFrames[turn + 1][0]);
//   throws.push(this._allFrames[turn + 1][1]);
//   this._score.push(throws.reduce((total, amount) => total + amount));
// };
//
// Scorecard.prototype.calculateDoubleStrike = function(turn) {
//   let throws = this._allFrames[turn];
//   throws.push(this._allFrames[turn - 1][0]);
//   throws.push(this._allFrames[turn + 1][0]);
//   // console.log(throws);
//   this._score.push(throws.reduce((total, amount) => total + amount));
// }
//
// Scorecard.prototype.calculateTripleStrike = function(turn) {
//   this._score.push(30);
// }

// Scorecard.prototype.calculateWhich = function(turn) {
//   if (this.spareWasScored(turn)) {
//     this.calculateSpare(turn);
//   // } else if (this.doubleStrikeWasScored(turn)) {
//   //   this.calculateDoubleStrike(turn);
//   } else if (this.strikeWasScored(turn)) {
//     this.calculateStrike(turn);
//   } else {
//     this.calculateBasic(turn);
//   }
// };

// Logic Checks
Scorecard.prototype.strikeCheck = function (number1, number2) {
  if (number1 === 10) { return true }
}

Scorecard.prototype.spareCheck = function (number1, number2) {
  if (number1 != 10 && number1 + number2 === 10) { return true }
}

Scorecard.prototype.updateScores = function() {
  for (var i = 0; i < this._allFrames.length; i++) {
    // console.log(this._score)
    var firstScore = this._allFrames[i][0]
    var secondScore = this._allFrames[i][1]
    console.log(`Turn:${i}`)
    console.log(`Current:${firstScore} + ${secondScore}`)
    // [[10,0], [5, 3], [3, 2]]
    if (i === 0)
      {
        if(this.strikeCheck(firstScore) || this.spareCheck(firstScore, secondScore)) {
          this._score[i] = 0;
          console.log(`This score became: ${this._score[i]}`)
        } else {
          this._score[i] = (firstScore + secondScore);
          console.log(`This score became: ${this._score[i]}`)
        }
      }
      if (i > 0) {
        let lastFirstScore = this._allFrames[i-1][0]
        let lastSecondScore = this._allFrames[i-1][1]
        console.log(`Last:${lastFirstScore} + ${lastSecondScore}`)
        // If last score has was a stike and current is not a Strike
        if(this.strikeCheck(lastFirstScore) && !this.strikeCheck(firstScore)) {
          this._score[i-1] = lastFirstScore + firstScore + secondScore; // Strike
          console.log(`Last score became: ${this._score[i-1]}`) //Strike
        }
        // If last score was a spare and current is not a Strike
        else if (this.spareCheck(lastFirstScore, lastSecondScore))  {
          this._score[i-1] = lastFirstScore + lastSecondScore + firstScore; //Spare
          console.log(`Last score became: ${this._score[i-1]}`)
        }
        // Current score is a Strike or Spare
        if(this.strikeCheck(firstScore) || this.spareCheck(firstScore, secondScore)) {
          this._score[i] = 0;
          console.log(`This score became: ${this._score[i]}`)
        }
        // Anything else
          else {
          this._score[i] = (firstScore + secondScore);
          console.log(`This score became: ${this._score[i]}`)
        }
        }
      if (i > 1) {
        let lastLastFirstScore = this._allFrames[i-2][0]
        let lastFirstScore = this._allFrames[i-1][0]
          // Triple Strike
        if (this.strikeCheck(lastLastFirstScore) && this.strikeCheck(lastFirstScore) && this.strikeCheck(firstScore)) {
          this._score[i-2] = 30;
          console.log(`The score from 2 turns ago became: ${this._score[i-2]}`)
        }
        // Double Strike following anything else
        if (lastLastFirstScore === 10 && lastFirstScore === 10 && firstScore != 10)
          this._score[i-2] = 20 + firstScore;
      }
      if (i === 9) {

      }
    }
    console.log(this._score)
  }

  Scorecard.prototype.calculateTotal = function(turn) {
    allScores = this._score;
    let total = allScores.reduce((total, amount) => total + amount);
    return total;
  };
