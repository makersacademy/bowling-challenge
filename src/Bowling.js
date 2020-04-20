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
  this.card = []
  this.frameText 
  this.rollText
  this.roll
 
}

Bowling.prototype.runBowling =function() {
  this.calculateScore
  
}

Bowling.prototype.calculateScore = function(numPinsDown){
  this.numPinsDown = numPinsDown
  this.score = numPinsDown + this.score
  return this.score

}

Bowling.prototype.makeCard =  function(){
  // change name  to makeCardTemplate? 
  var counter1;
  var counter2;
  var  obj = {};
  
  for (counter1= 1; counter1 < 11; counter1++) {
    var key = `frame${counter1}`
    for (counter2 = 1; counter2 < 3; counter2 ++) 
    obj[key] = { 'r1numDown': 0, 'r1score': 0, 'r2numDown' :0, 'r2score' : 0 }
    this.card = obj
  }
   console.dir(this.card)
   return this.card
}

Bowling.prototype.loopText = function(objectToLoop){
  var counter1;
  var counter2;
  for (counter1= 1; counter1 < 11; counter1++) {
    this.frameText =  ("Frame " + counter1)
    for (counter2 = 1; counter2 < 3; counter2 ++) 
     this.rollText = ( 'Roll ' + counter2);
  }
}

Bowling.prototype.loop = function(objectToLoop){
  
}

/*
for (counter = 1; counter < 4; counter++) { // count from 1 to 3 three times
  console.log("Count from 1 to 3");
  for (counterTwo = 1; counterTwo < 4; counterTwo++){
      console.log(counterTwo);
  }
}
*/