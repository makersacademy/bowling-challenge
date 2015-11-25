console.log("testtest");
function BowlingGame() {
  this.framesLeft = 10;
  this.STRIKE = 10;
  this.allScores = [];

  this.currentRoll = 0;
  this.currentScore = 0;
  this.totalScore = null;

  this.isStrike = false;
  this.strikeCount = 0;
  this.strikeScore = 0;
  this.consecutiveStrikes = 0;

  this.isSpare = false;
  this.spareCount = 0;
  this.spareScore = 0;

  this.lastFrameExtra = false;

  this.GAMEOVER_ERROR = "The game is over you cannot bowl again";

  };

  BowlingGame.prototype.bowl = function(pins) {
    if ( this.framesLeft === 0 ) throw Error(this.GAMEOVER_ERROR);
      this.allScores.push(pins);

    if (pins === this.STRIKE) { this.isStrike = true;}
    if (((this.currentScore + pins) === 10) && this.currentRoll === 1) { this.isSpare = true;}

    if ( this.framesLeft === 1 ) { this.lastFrameCheck(pins);
    }

    if (this.lastFrameExtra === true) {
      this.lastFrame(pins);
      } else {
      this.currentMove(pins);
      }
  };


  BowlingGame.prototype.currentMove = function(pins) {
    if ( this.currentRoll === 0 ) {
        if ( this.isStrike ) {
          this.strikeScoring(pins);
        } else if ( this.isSpare ) {
          this.spareScoring(pins);
        } else {
          this.currentRoll +=1;
          this.currentScore += pins;
        }
      }
    else {
        if ( this.isStrike ) {
          this.strikeScoring(pins);
        } else if ( this.isSpare ) {
          this.spareScoring(pins);
        } else {
            this.currentScore += pins;
            this.resetFrame(pins);
          }
        };
  };

  BowlingGame.prototype.lastFrameCheck = function(pins) {
    if (this.lastFrameExtra != true) {
      if (this.isStrike || this.isSpare) {
        this.lastFrameExtra = true;
      }
    }
  };

  BowlingGame.prototype.lastFrame = function(pins) {
    if ( this.currentRoll === 0 || this.currentRoll === 1) {
      if (this.consecutiveStrikes === 2 && this.isStrike) {
        this.totalScore += 30;
      } else if (this.consecutiveStrikes === 2) {
        this.totalScore += 20 + pins;
        this.consecutiveStrikes = 0;
      }
        this.currentRoll +=1;
        this.currentScore += pins;
    } else {
      this.currentScore += pins;
      this.resetFrame(pins);
    }
  };

BowlingGame.prototype.spareScoring = function(pins) {
    if (this.spareCount === 0) {
      this.spareScore = pins;
      this.spareCount += 1;
      this.resetFrame();
    } else {
      this.spareScore += pins;
      this.currentScore = pins;
      this.currentRoll += 1;
      this.resetSpare();
    }
};

BowlingGame.prototype.strikeScoring = function(pins) {
    if (this.consecutiveStrikes === 0) {
      if (pins === this.STRIKE) {
        this.consecutiveStrikes += 1;
        this.strikeScore = 10;
        this.framesLeft -= 1;
        if (this.isSpare) {
          this.spareScore += pins;
          this.resetSpare();
        }
      }
    }
    else if (this.consecutiveStrikes === 1) {
      if (pins === this.STRIKE) {
        this.consecutiveStrikes += 1;
        this.framesLeft -= 1;
      } else {
        if (this.strikeCount === 0) {
          this.strikeCount += 1;
          this.strikeScore += pins;
          this.currentScore += pins;
        } else {
          this.strikeScore += pins;
          this.currentScore += pins;
          this.totalScore += this.strikeScore + this. currentScore;
          this.isStrike = false;
          this.consecutiveStrikes = 0;
          this.strikeScore = 0;
          this.currentScore = 0;
          this.strikeCount = 0;
        }
      }
    }
    else if (this.consecutiveStrikes === 2) {
      if (pins === this.STRIKE) {
        this.totalScore += 30;
        this.framesLeft -= 1;
      } else {
        this.consecutiveStrikes -= 1;
        this.strikeCount += 1;
        this.strikeScore += pins;
        this.currentScore += pins;
        this.totalScore += 20 + pins;
      }
    }
};

BowlingGame.prototype.resetFrame = function(pins) {
  this.currentRoll = 0;
  this.totalScore += this.currentScore;
  this.currentScore = 0;
  this.framesLeft -= 1;
};

BowlingGame.prototype.resetSpare = function(pins) {
  this.totalScore += this.spareScore;
  this.spareScore = 0;
  this.spareCount = 0;
  this.isSpare = false;
};
