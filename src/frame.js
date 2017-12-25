function Frame(){}

Frame.prototype.setRoll = function(roll, score){
  this["roll"+roll.toString()] = score;
}

Frame.prototype.getRoll = function(roll){
  return this["roll"+roll.toString()]
}
