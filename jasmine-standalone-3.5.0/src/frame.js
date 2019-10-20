'use strict';

function Frame(number){
  this.NUMBER = number
  this.POINTS = 0
  this.roll1 = 0
  this.roll2 = 0
  this.strike = false
  this.split = false
}

Frame.prototype.returnpoints = function(){
  return this.POINTS
}

Frame.prototype.firstroll = function(pins){
  this.roll1 = pins
  this.POINTS = pins
}

Frame.prototype.secondroll = function(pins){
  this.roll2 = pins
  this.POINTS = this.roll1 + pins
}
