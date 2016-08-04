var Bowling = function(){
  this.frames = []
}

Bowling.prototype.roll = function(){
  return Math.floor(Math.random()*5+1)
};
