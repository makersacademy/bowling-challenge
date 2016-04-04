function Frame(){
  this.score = 0;
  this.balls = [];
}

Frame.prototype.getScore = function(){
  return this.score;
}

Frame.prototype.getBalls = function(){
  return this.balls;
}

Frame.prototype.isComplete = function(){
  if ((this.score === 10) || (this.balls.length === 2)) {
    return true
  }
  else {
    return false
  }
}

Frame.prototype.addScore = function(pins){
  if ((pins > 10)||(this.score+pins > 10)) {
    throw new Error('A frame\'s total score cannot be above 10');
  }
  else if (pins < 0) {
    throw new Error('A score cannot be below 0')
  }
  else {
    if (!this.isComplete()){
      this.balls.push(pins);
      this.score += pins;
    }
    else {
      throw new Error('This frame is already completed')
    }
  }
}

Frame.prototype.isStrike = function(){
  if ((this.balls.length === 1) && (this.score === 10)) {
    return true;
  }
  else {
    return false;
  }
}

Frame.prototype.isSpare = function(){
  if ((this.balls.length === 2) && (this.score === 10)) {
    return true;
  }
  else {
    return false;
  }
}
