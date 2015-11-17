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
          this.strike(pins);
        }
        else { this.currentGo +=1;
        this.currentScore += pins; }
      }
    else {
        if ( this.isStrike ) {
          this.strike(pins);
        }
        else if ( this.isSpare ) {
          this.spare(pins);
        }
          else { this.currentGo = 0;
          this.currentScore += pins;
          this.totalScore += this.currentScore;
          this.currentScore = 0;
          this.frames -= 1; }
        };
  };

BowlingGame.prototype.spare = function(pins) {

  if (this.spareCount === 1) {
    this.spareScore += pins
    this.currentScore += pins + this.spareScore;
    this.currentGo += 1;
    this.isSpare = false;
    this.spareScore = 0;
    this.spareCount = 0;
    this.frames -= 1;
  }
  else {
    this.spareScore = 10;
    this.currentScore = 0;
    this.spareCount = 1;
    this.currentGo = 0;
  }
}

BowlingGame.prototype.strike = function(pins) {

      if (this.strikeCount === 1) {
        this.strikeScore += pins;
        this.strikeCount += 1;
        this.currentScore += pins;
      }
      else if (this.strikeCount === 2) {
        this.strikeScore += pins;
        this.currentScore += pins;
        this.totalScore += this.strikeScore + this.currentScore;
        this.currentScore = 0;
        this.currentGo = 0;
        this.isSrike = false;
        this.strikeScore = 0;
        this.strikeCount = 0;
        this.frames -= 1
      }
      else {
        this.strikeCount = 1;
        this.currentScore += pins;
        this.strikeScore += pins;
        this.frames -= 1;
      }

}

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
