function Frame(){
  this.score = 0;
  this.balls = [];
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
    throw new Error('A frame\'s score cannot be above 10');
  }
  else if (pins < 0) {
    throw new Error('A score cannot be below 0')
  }
  else {
    this.balls.push(pins);
    this.score += pins;
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
