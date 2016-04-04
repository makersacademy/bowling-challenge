function TenthFrame(){
  this.score = 0;
  this.balls = [];
}

TenthFrame.prototype.getScore = function(){
  return this.score;
}

TenthFrame.prototype.getBalls = function(){
  return this.balls;
}

TenthFrame.prototype.addScore = function(pins){
  if (pins > 10) {
    throw new Error('A score cannot be below 10');
  }
  else if (pins < 0) {
    throw new Error('A score cannot be below 0')
  }
  else {
    if (!this.isComplete()){
      this.balls.push(pins);
      this.score += pins;
    }
  }
}

TenthFrame.prototype.isComplete = function(){
  if ((this.balls.length === 0) || (this.balls.length === 1)) {
    return false;
  }
  else if ((this.balls.length === 2) && (this.isStrike() || this.isSpare())) {
    return false;
  }
  else {
    return true;
  }
}

TenthFrame.prototype.isStrike = function(){
  function isTen(num){
    return num === 10;
  }
  if (this.balls.some(isTen)) {
    return true;
  }
  return false
}

TenthFrame.prototype.isSpare = function(){
  if ((this.balls.length === 2) && (this.score === 10)) {
    return true;
  }
  else {
    return false;
  }
}
