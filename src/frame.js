'use strict'

function Frame(){
  this._throws = []
}

Frame.prototype.addroll = function(roll){
  this._throws.push(roll)
}

Frame.prototype.check_strike = function(){
  return this._throws[0] === 10
}

Frame.prototype.check_spare = function(){
  return (this._throws[0] + this._throws[1]) === 10
}

Frame.prototype.score_frame = function(){
  return this._throws.reduce(function(x,y){
    return x + y
  })
}

