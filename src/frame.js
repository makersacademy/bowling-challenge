'use strict'

function Frame(){
  this._throws = []
}

Frame.prototype.addroll = function(roll){
  this._throws.push(roll)
}