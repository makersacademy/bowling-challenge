function Scorecard() {

  this.score = 0;
  this.frames = []
};


  Scorecard.prototype.addFrame = function(frame) {
    if(!this.gameOver()){
      this.frames.push(frame);
    }
    else {
      throw ("Game Over");
    }
  };

  Scorecard.prototype.gameOver = function() {
    return this.frames.length === 10;
  };


  Bowling.prototype.bowl = function(number) {
    this.score = (this.score + number);
    if(number > 10){
      throw("There are only 10 pins to knock down!");
      this.score;
    };

    this.frame = (this.frame - number);

    };




  // };

