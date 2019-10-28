function Scorecard() {
  this.frame = 1;
  this.pins = 0;
  this.pinsPerRoll = []
  this.total = 0;
  this.maxPins = 10;
  this.maxFrames = 12;
}

Scorecard.prototype.reset = function(){
  this.pins = 0;
};

Scorecard.prototype.addTotal = function(){
  this.total += this.pins
};

Scorecard.prototype.nextFrame = function(){
  if(this.frame < this.maxFrames+1){
  this.frame += 1
  } else {
    console.log("Game over.")
  }
};

Scorecard.prototype.gameOver = function(){
  if(this.frame === 12 && this.total === 0){
    console.log('You scored 0 points. Gutter game!')
    return('You scored 0 points. Gutter game!')
  } else if(this.frame === 12 && this.total === 300){
    console.log('You scored 300 points. Perfect game!')
    return('You scored 300 points. Perfect game!')
  } else if(this.frame === 12){
    console.log("You scored " + this.total + " points. Good game!")
    return ("You scored " + this.total + " points. Good game!")
    }
  };

Scorecard.prototype.bonus = function(){
  this.pinsPerRoll.forEach((num)=> {
    if(num=== 10){
      index = this.pinsPerRoll.indexOf(num)
      bonus1 = Number(this.pinsPerRoll[index+1])
      bonus2 = Number(this.pinsPerRoll[index+2])
      bonusValue = (bonus1+bonus2)
        this.total+=bonusValue
      }
  })
}

Scorecard.prototype.oneTurn = function(){ 
  this.addTotal();
  this.nextFrame();
  this.reset();
  return this.total;
}

Scorecard.prototype.roll = function(roll1,roll2){
  if((roll1+roll2) >= 10){
    console.log('Frame score cannot exceed 10 points. Please re-enter.')
  }
  if( roll1 === this.maxPins){
    this.pinsPerRoll.push(roll1)
    this.pins = this.maxPins
    this.oneTurn();
    console.log('Strike!')
  } else if(roll1+roll2 === this.maxPins){
    this.pinsPerRoll.push(roll1, roll2, this.maxPins, 0)
    this.pins = this.maxPins
    this.oneTurn();
    console.log('Spare!')
  } else {
    this.pinsPerRoll.push(roll1, roll2)
    this.pins = (roll1+roll2)
    this.oneTurn();
  }

Scorecard.prototype.roll10 = function(roll1,roll2){
  if(roll1  === this.maxPins){
    this.bonus();
    this.pinsPerRoll.push(this.maxPins)
    this.pins = this.maxPins
    this.oneTurn();
 } else if (roll1+ roll2  === this.maxPins) {
    this.bonus();
    this.pinsPerRoll.push(roll1,roll2)
    this.pins = (roll1+roll2)
    this.oneTurn();
} else {
    this.bonus();
    this.pinsPerRoll.push(roll1,roll2)
    this.pins = (roll1+roll2)
    this.oneTurn();
  }
}

Scorecard.prototype.roll11 = function(roll1){
  this.pinsPerRoll.push(roll1)
    this.pins = roll1
    this.oneTurn();
    this.gameOver();
}

Scorecard.prototype.newGame = function(){
  this.frame = 1;
  this.pins = 0;
  this.pinsPerRoll = []
  this.total = 0;
  this.maxPins = 10;
  this.maxFrames = 12;
  }
};

