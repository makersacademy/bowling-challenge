function Scorecard() {
  this._score = [1];
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
Scorecard.prototype.spareWasScored = function(turn) {
  let firstThrow = this._allFrames[turn][0];
  let secondThrow = this._allFrames[turn][1];
  if (firstThrow != 10 && firstThrow + secondThrow === 10) { return true }
}

Scorecard.prototype.strikeWasScored = function(turn) {
  let firstThrow = this._allFrames[turn][0];
  if (firstThrow === 10) { return true; }
}

Scorecard.prototype.doubleStrikeWasScored = function(turn) {
  let firstThrow = this._allFrames[turn - 1][0];
  let secondThrow = this._allFrames[turn][0]
  if (firstThrow === 10 && secondThrow === 10) { return true; }
}

Scorecard.prototype.tripleStrikeWasScored = function(turn) {
  let firstThrow = this._allFrames[turn - 2][0];
  let secondThrow = this._allFrames[turn - 1][0]
  let thirdThrow = this._allFrames[turn][0]
  if (firstThrow === 10 && secondThrow === 10 && thirdThrow === 10) { return true; }
}


// Calculate Scores
Scorecard.prototype.calculateBasic = function(turn) {
  let throws = this._allFrames[turn];
  this._score.push(throws.reduce((total, amount) => total + amount));
};

Scorecard.prototype.calculateSpare = function(turn) {
  let throws = this._allFrames[turn];
  throws.push(this._allFrames[turn + 1][0]);
  this._score.push(throws.reduce((total, amount) => total + amount));
};

Scorecard.prototype.calculateStrike = function(turn) {
  let throws = this._allFrames[turn];
  throws.push(this._allFrames[turn + 1][0]);
  throws.push(this._allFrames[turn + 1][1]);
  this._score.push(throws.reduce((total, amount) => total + amount));
};

Scorecard.prototype.calculateDoubleStrike = function(turn) {
  let throws = this._allFrames[turn];
  throws.push(this._allFrames[turn - 1][0]);
  throws.push(this._allFrames[turn + 1][0]);
  // console.log(throws);
  this._score.push(throws.reduce((total, amount) => total + amount));
}

Scorecard.prototype.calculateTripleStrike = function(turn) {
  this._score.push(30);
}

Scorecard.prototype.calculateTotal = function(turn) {
  allScores = this._score;
  let total = allScores.reduce((total, amount) => total + amount);
  return total;
};

Scorecard.prototype.calculateWhich = function(turn) {
  if (this.spareWasScored(turn)) {
    this.calculateSpare(turn);
  // } else if (this.doubleStrikeWasScored(turn)) {
  //   this.calculateDoubleStrike(turn);
  } else if (this.strikeWasScored(turn)) {
    this.calculateStrike(turn);
  } else {
    this.calculateBasic(turn);
  }
};

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
        if(firstScore === 10 || firstScore + secondScore === 10) {
          this._score[i] = 0;
          console.log(`This score became: ${this._score[i]}`)
        } else {
          this._score[i] = (firstScore + secondScore);
          console.log(`This score became: ${this._score[i]}`)
        }
      }
      if (i > 0) {
        let lastFirstScore = this._allFrames[i-1][0]
        let lastSecondScore =this._allFrames[i-1][1]
        console.log(`Last:${lastFirstScore} + ${lastSecondScore}`)
        if(lastFirstScore === 10 && firstScore != 10) {
          this._score[i-1] = lastFirstScore + firstScore + secondScore; // Strike
          console.log(`Last score became: ${this._score[i-1]}`) //Strike
        }
        else if (lastFirstScore + lastSecondScore === 10) {
          this._score[i-1] = lastFirstScore + lastSecondScore + firstScore; //Spare
          console.log(`Last score became: ${this._score[i-1]}`)
        }
        if(firstScore === 10 || firstScore + secondScore === 10) {
          this._score[i] = 0;
          console.log(`This score became: ${this._score[i]}`)
        } else {
          this._score[i] = (firstScore + secondScore);
          console.log(`This score became: ${this._score[i]}`)
        }
        }
    }
    console.log(this._score)
  }
