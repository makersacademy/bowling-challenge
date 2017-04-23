'use strict';

function Frame() {
  this.pins = 10
  this.bowls = [null,null]
}

Frame.prototype.bowl_round = function() {
  var bowl1 = this.rand_num()
  this.pins -= bowl1
  this.bowls[0] = bowl1
  var bowl2 = this.rand_num()
  this.pins -= bowl2
  this.bowls[1] = bowl2
}

Frame.prototype.bowlBonus = function() {
  var bowl1 = this.rand_num()
  this.pins -= bowl1
  this.bowls[0] = bowl1
  var bowl2 = 0
  this.pins -= bowl2
  this.bowls[1] = bowl2
}

Frame.prototype.outcome = function() {
  if(this.bowls[0] === 10) {
    return 'X'
  } else if (this.bowls[0] + this.bowls[1] === 10) {
    return '/' } else {
    return ''
  }
}

Frame.prototype.firstBowl = function() {
  return this.bowls[0]
}

Frame.prototype.secondBowl = function() {
  return this.bowls[1]
}

Frame.prototype.rand_num = function() {
  return Math.floor(Math.random() * (this.pins + 1))
}
