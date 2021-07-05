'use strict'

function Frame(){
  this._throws = []
  this._nextframe = null
}

Frame.prototype.addroll = function(roll){
  this._throws.push(roll)
}

Frame.prototype.createNextFrame = function(){
  if(this._nextframe == null){return this._nextframe = new Frame} 
  else{ return this._nextframe }
}

Frame.prototype.check_strike = function(){
  return this._throws[0] === 10
}

Frame.prototype.strike_score = function(){
  if(this._nextframe){ 
    return (this._throws[0] + this._nextframe.score_frame())
  } else { 0 }
}

Frame.prototype.check_spare = function(){
  return (this._throws[0] + this._throws[1]) === 10 && this._throws.length === 2
}

Frame.prototype.spare_score = function(){
  if(this._nextframe){ 
    return this.score_frame() + this._nextframe._throws[0]
  } else { this.score_frame() }
}

Frame.prototype.score_frame = function(){
  return this._throws.reduce(function(x,y){
    return x + y
  })
}

Frame.prototype.clearFrame = function(){
  this._throws = []
}

Frame.prototype.isStanding = function(){
  return this._throws.length === 2 && this._throws[0] + this._throws[1] < 10
}
