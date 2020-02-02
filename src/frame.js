'use strict'

function Frame(){
  this._throws = []
  this._nextframe = null
}

Frame.prototype.addroll = function(roll){
  this._throws.push(roll)
}

Frame.prototype.createNextFrame = function(frame){
  this._nextframe = frame 
}

Frame.prototype.check_strike = function(){
  return this._throws[0] === 10
}

Frame.prototype.strike_score = function(){
  if(this._nextframe){ 
    return this.score_frame() + this._nextframe.score_frame()
  } else { this.score_frame() }
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
