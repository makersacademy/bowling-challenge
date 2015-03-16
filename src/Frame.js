function Frame() {

  this.score = 0;
  this.rollCount = 0;
  this.isClosed = false;
  this.isSprike = false;

  this.addScore = function(number) {
    if (this.isClosed) {return;}
    this.rollCount++;
    this.score += number;

    this.checkFrame();

    if (this.rollCount > 1 && !this.isSprike) {
      this.isClosed = true;
    }
    else if (this.rollCount > 2) {
      this.isClosed = true;
    }

  };

  this.checkFrame = function() {
    if (this.score === 10) {
      this.isSprike = true;
    }
  };


};
