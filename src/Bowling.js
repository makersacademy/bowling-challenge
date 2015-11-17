console.log("testtest");
function BowlingGame() {
  this.frames = 10;
  this.PINS = 10;
  this.ROLL = 2;
  this.currentGo = 0;
  this.currentScore = 0;
  this.totalScore = null;
  this.isStrike = false;
  this.strikeCount = 0;
  this.strikeScore = 0;
  this.isSpare = false;
  this.spareCount = 0;
  this.spareScore = 0;
  this.lastFrameExtra = false;
  this.consecutiveStrikes = 0;
  this.GAMEOVER_ERROR = "The game is over you cannot bowl again";

  };

  BowlingGame.prototype.bowl = function(pins) {
    if ( this.frames === 0 ) throw Error(this.GAMEOVER_ERROR);

    if (pins === 10) { this.isStrike = true;}
    if (((this.currentScore + pins) === 10) && this.currentGo === 1) { this.isSpare = true;}

    if ( this.frames === 1 ) { this.lastFrameCheck(pins);}

    if (this.lastFrameExtra === true) {
      this.lastFrame(pins);
      } else {
      this.currentMove(pins);
      }
  };


  BowlingGame.prototype.currentMove = function(pins) {
    if ( this.currentGo === 0 ) {
        if ( this.isStrike ) {
          this.strikeScoring(pins);
        }
        else { this.currentGo +=1;
        this.currentScore += pins; }
      }
    else {
        if ( this.isStrike ) {
          this.strikeScoring(pins);
        }
        else if ( this.isSpare ) {
          this.spareScoring(pins);
        }
          else { this.currentGo = 0;
          this.currentScore += pins;
          this.totalScore += this.currentScore;
          this.currentScore = 0;
          this.frames -= 1; }
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
    if ( this.currentGo === 0 || this.currentGo === 1) {
      this.currentGo +=1;
      this.currentScore += pins;
    }
    else {
      this.currentScore += pins;
      this.totalScore += this.currentScore;
      this.currentScore = 0;
      this.frames -= 1;
    }
  };

BowlingGame.prototype.spareScoring = function(pins) {
    if (this.spareCount === 0) {
      this.spareScore = pins;
      this.spareCount += 1;
      this.totalScore += this.currentScore;
      this.currentScore = 0;
      this.frames -= 1;
    }
    else {
      this.spareScore += pins;
      this.currentScore = pins;
      this.totalScore += this.spareScore;
      this.spareScore = 0;
      this.spareCount = 0;
      this.isSpare = false;
    }

};






BowlingGame.prototype.strikeScoring = function(pins) {
    if (this.consecutiveStrikes === 0) {
      if (pins === 10) {
        this.consecutiveStrikes += 1;
        this.strikeScore = 10;
        this.frames -= 1;
      }

    }
    else if (this.consecutiveStrikes === 1) {
      if (pins === 10) {
        this.consecutiveStrikes += 1;
        this.frames -= 1;
      }
      else {
        if (this.strikeCount === 0) {
          this.strikeCount += 1;
          this.strikeScore += pins;
          this.currentScore += pins;
        }
        else {
          this.strikeScore += pins;
          this.currentScore += pins;
          this.totalScore += this.strikeScore + this. currentScore;
          this.isStrike = false;
          this.consecutiveStrikes = 0
          this.strikeScore = 0
          this.currentScore = 0
          this.strikeCount = 0;
        }
      }
    }
    else if (this.consecutiveStrikes === 2) {
      if (pins === 10) {
        this.totalScore += 30;
      }
      else {
        this.consecutiveStrikes -= 1;
        this.strikeCount += 1;
        this.strikeScore += pins;
        this.currentScore += pins;
        this.totalScore += 20 + pins;
      }
    }
};
