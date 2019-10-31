function Scorecard() {
  this.frame = 0;
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
  if(this.frame < this.maxFrames){
  this.frame += 1
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
      this.total+=(bonus1+bonus2)
     console.log(this.total)
      }
  })
}

Scorecard.prototype.oneTurn = function(){ 
  this.addTotal();
  this.nextFrame();
  this.reset();
  console.log(this.frame)
  return this.total;

}

Scorecard.prototype.roll = function(roll1,roll2){
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
    console.log('roll')
  }

Scorecard.prototype.roll10 = function(roll1,roll2){
  this.bonus();
  console.log('roll10')
  if(roll1  === this.maxPins){
    this.pinsPerRoll.push(this.maxPins)
    this.pins = this.maxPins
    this.oneTurn();
    console.log(this.total)
    
 } else if (roll1+ roll2  === this.maxPins) {
    this.pinsPerRoll.push(roll1,roll2)
    this.pins = (roll1+roll2)
    this.oneTurn();
    console.log(this.total)
} else {
    this.pinsPerRoll.push(roll1,roll2)
    this.pins = (roll1+roll2)
    this.oneTurn();
    console.log(this.total)

  }
}

Scorecard.prototype.roll11 = function(roll1){

  console.log('roll11')
  this.pinsPerRoll.push(roll1)
    this.pins = roll1
    this.oneTurn();
    this.gameOver();
    console.log(this.total)
}

Scorecard.prototype.newGame = function(){
  this.frame = 0;
  this.pins = 0;
  this.pinsPerRoll = []
  this.total = 0;
  this.maxPins = 10;
  this.maxFrames = 12;
  }
};

