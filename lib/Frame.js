function Frame(){
  this.MAX_PINS = 10;
  this.pins = this.MAX_PINS;
}

Frame.prototype.pins = function(){
  return this.pins;
}

Frame.prototype.removePins = function(pins){
  this.pins-=pins;
}

Frame.prototype.resetPins = function(){ this.pins = this.MAX_PINS; }
