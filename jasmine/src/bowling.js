function Bowling(){
  this.remainingCones = 10
 };

Bowling.prototype.throwBowl = function(frame) {
  if(frame.length === 0) {
    frame[0] = this.randomBowl()
  } else {
    frame[1] = this.randomBowl()
  }
};

Bowling.prototype.randomBowl = function() {
  var conesHit = Math.floor(Math.random()*this.remainingCones)+1
  this.remainingCones-=conesHit
  return conesHit
};
