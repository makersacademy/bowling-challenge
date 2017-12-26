function Score(){
  this.frames = [];
}

Score.prototype.getFrames = function(){
  return this.frames;
}

Score.prototype.addFrame = function(frame){
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

Score.prototype.getScore = function(){
  var total = 0;
  var frames = this.getFrames();
  for(var i = 0; i < frames.length; i++){
    if(frames[i].isStrike() && !frames[i].finalFrame) { total += this.getStrikeBonus(i); }
    if(frames[i].isSpare() && !frames[i].finalFrame){ total += this.getSpareBonus(i); }
    total += frames[i].total();
  }
  return total;
}
