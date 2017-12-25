function Score(){
  this.frames = [];
}

Score.prototype.getFrames = function(){
  return this.frames;
}

Score.prototype.addFrame = function(frame){
  this.frames.push(frame);
}

Score.prototype.getScore = function(){
  var total = 0;
  this.getFrames().forEach(function(frame){
    total += frame.total();
  })
  return total;
}
