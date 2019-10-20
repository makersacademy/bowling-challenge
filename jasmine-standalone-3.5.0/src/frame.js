'use strict';

function Frame(number){
  this.NUMBER = number
  this.POINTS = 0
  this.roll1 = 0
  this.roll2 = 0
  this.strike = false
  this.spare = false
}

Frame.prototype.returnpoints = function(){
  return this.POINTS
}

Frame.prototype.firstroll = function(pins){
  if (pins === 10) {
    this.strike = true
    this.POINTS = null
  }else {
    this.roll1 = pins}
}

Frame.prototype.secondroll = function(pins){
  if (this.roll1 + pins === 10){
    this.spare = true
    this.POINTS = null
  }else {
  this.roll2 = pins
  this.POINTS = this.roll1 + pins}
}
