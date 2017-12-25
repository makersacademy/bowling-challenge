function Score(){
  this.frames = [];
}

Score.prototype.getFrames = function(){
  return this.frames;
}

Score.prototype.addFrame = function(frame){
  if(this.getFrames().length === 9){ frame.setFinalFrame() }
  this.frames.push(frame);
}

Score.prototype.getStrikeBonus = function(i){
  var frames = this.getFrames();
  var total = 0;
  if(frames[i+1].isStrike()){
    total += 10;
    if(frames[i+2].isStrike()) {
      total += 10;
    } else {
      total += frames[i+2].getRoll(1)
    };
  } else {
    total += frames[i+1].total();
  }
  return total;
}

Score.prototype.getSpareBonus = function(i){
  var frames = this.getFrames();
  return frames[i+1].getRoll(1);
}

Score.prototype.getFinalFrameScore = function(){
  var finalFrame = this.getFrames()[this.getFrames().length - 1]
  if(!finalFrame.isStrike()){ return finalFrame.total(); }

}

Score.prototype.getScore = function(){
  var total = 0;
  var frames = this.getFrames();
  for(var i = 0; i < frames.length-1; i++){
    if(frames[i].isStrike()) {  }
    if(frames[i].isSpare()){  }
    total += frames[i].total();
  }
  total += this.getFinalFrameScore();
  return total;
}
