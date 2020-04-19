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
}


Bowling.prototype.calculateScore = function(numPinsDown){
  this.numPinsDown = numPinsDown
  this.score = numPinsDown + this.score
  return this.score
}

Bowling.prototype.makeCard =  function(){
   this.card.push({'numPinsDown': this.numPinsDown, 'score': this.score})
   return this.card
}

Bowling.prototype.loopText = function(objectToLoop){
  var i;
  var looped
  for (i = 0; i < 11; i++) {
    looped =  `${objectToLoop} ${i}`
  }
  return looped
}

Bowling.prototype.makeFrameText=function(){
  var text
  text = "Frame"
  return this.loopText(text)
}