function Bowling() {

  this.frame = 10;
  this.score = 0;
  // var scorecard = {}

  Bowling.prototype.bowl = function(number) {
    this.score = (this.score + number);
    if(number > 10){
      throw("There are only 10 pins to knock down!");
      this.score;
    };

    this.frame = (this.frame - number);

    };

  Bowling.prototype.reset = function() {
    this.frame =10;

  };

  Bowling.prototype.strike = function(number) {
    this.bowl(10);
    this.reset;

  };




};


// THought is that I have to subtract from the 10 pins after each bowl
// Second bowl can only start with the remaining number of pins
// Only a new frame starte with 10 pins

  // Update game?

      // pins =(this.frame - number);

      // Do I need a test for not being able to bowl a 3rd frame
      //Do I need
