'use strict';

/*
const MAX_TEMPERATURE_PSM_ON = 25
const MIN_TEMPERATURE = 10
const MAX_TEMPERATURE_PSM_OFF = 32
const LOW_USAGE_LIMIT = 18
const HIGH_USAGE_LIMIT = 24

function Thermostat() {
 
  this.powerSaveMode = true
  this.startTemperature = 20
  this.temperature = this.startTemperature
  this.usage = 'medium-usage'
};

Thermostat.prototype.reset = function () {
  this.powerSaveMode = true;
  this.temperature = this.startTemperature
}
*/

function Bowling(){
  this.score = 0
  this.numPinsDown = 0
  this.card 
  this.frameKey 
  this.rollNum
  this.roll
 
}

Bowling.prototype.makeCard =function() {
  this.calculateScore(this.numPinsDown)
  return this.fillCard()
  
}


Bowling.prototype.setUpCard =function() {
  this.loop()
  this.makeCardTemplate()
  
}

Bowling.prototype.calculateScore = function(numPinsDown){
  //this.numPinsDown = numPinsDown
  this.score = numPinsDown + this.score
  return this.score

}

Bowling.prototype.makeCardTemplate =  function(){
  // change name  to makeCardTemplateTemplate? 
  var counter1;
  var counter2;
  var  obj = {};
  
  for (counter1= 1; counter1 < 11; counter1++) {
    var key = `frame${counter1}`
    //for (counter2 = 1; counter2 < 3; counter2 ++) 
    obj[key] = { 'r1PinsDown': 0, 'r1score': 0, 'r2PinsDown' :0, 'r2score' : 0 }
    this.card = obj
  }
   //console.dir(this.card)
   return this.card
}

function getRndInteger(min, max) { 
  return Math.floor(Math.random() * (max - min) ) + min;
}



Bowling.prototype.run_card_making = function(){
  this.makeCardTemplate()
  var numFrame;
  //var counter2;
  for (numFrame= 1; numFrame < 11; numFrame++) { 
    var  rolls = this.getInput()
    var score = this.calculateScore(rolls)
    this.fillCard(rolls,score, numFrame)
  }
  console.log(this.card)
  return (this.card)
}


Bowling.prototype.getInput = function(){
  this.numPinsDown = getRndInteger(1, 4)
  this.fillCard
  return getRndInteger(1, 4)

  
}

Bowling.prototype.fillCard = function(rolls,score, numFrame){

  
    
    // need to make argument = to something that changes each roll
    this.frameKey =  ("frame" + numFrame)
    this.card[this.frameKey]['r1PinsDown'] = rolls
    // this.PinsDown updates to the latest 
    this.card[this.frameKey]['r1Score'] = score 
    //for (counter2 = 1; counter2 < 3; counter2 ++) 
    // this.rollNum = (  counter2);
 
  //console.dir(this.card)
  return this.card

}





Bowling.prototype.loop = function(objectToLoop){
  //var counter1;
  //var counter2;
  //for (counter1= 1; counter1 < 11; counter1++) {
    this.frameKey =  ("frame" + counter1)
    for (counter2 = 1; counter2 < 3; counter2 ++) 
     this.rollNum = (  counter2);
  //}
}


/*
for (counter = 1; counter < 4; counter++) { // count from 1 to 3 three times
  console.log("Count from 1 to 3");
  for (counterTwo = 1; counterTwo < 4; counterTwo++){
      console.log(counterTwo);
  }
}
*/