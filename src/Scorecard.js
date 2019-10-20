function Scorecard() {
  this.frame = 1;
  this.pins = 0;
  this.pinsPerRoll = []
  this.total = 0;
  this.maxPins = 10
  this.maxFrames = 10
}

Scorecard.prototype.reset = function(){
  this.pins = 0;
};

Scorecard.prototype.addTotal = function(){
  this.total += this.pins
};

Scorecard.prototype.nextFrame = function(){
  if(this.frame <=this.maxFrames){
  this.frame += 1
  } else {
    console.log("Game over.")
  }
};

Scorecard.prototype.gameOver = function(){
  if(this.frame === this.maxFrames && this.total === 0){
  console.log('You scored 0 points. Gutter game!')
  } else if(this.frame === this.maxFrames && this.total === 300){
    console.log('You scored 300 points. Perfect game!')
  } else if(this.frame === this.maxFrames){
    console.log("You scored " + this.total + " points. Good game!")
    }
  };

  Scorecard.prototype.oneTurn = function(){
    this.addTotal();
    this.reset();
    this.gameOver();
    this.nextFrame();
  }

Scorecard.prototype.roll = function(num1,num2){
  if (num1+num2 >= this.maxPins){
    console.log('Frame score cannot exceed 10 points. Please re-enter.')
  }
  if( num1 === this.maxPins){
    this.pinsPerRoll.push(num1)
    this.pins = this.maxPins
    this.oneTurn();
    console.log('Strike!');
  } else if(num1+num2 === this.maxPins){
    this.pinsPerRoll.push(num1, num2)
    this.pins = this.maxPins
    this.addTotal();
    this.oneTurn();
    console.log('Spare!');
  } else {
    this.pinsPerRoll.push(num1, num2)
    this.pins = num1+num2
    this.oneTurn();
  }
};

