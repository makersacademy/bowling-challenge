function Frame() {
  this.initialPins = 10
  this.score = []
}

Frame.prototype.calculateScore = function(pinsDown){
  var pins = this.initialPins - pinsDown
  this.score.push(Math.floor((Math.random()*pins) + 1));
};
