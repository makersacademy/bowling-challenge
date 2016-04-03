function Frame(last) {
  this.score = 0;
  this.shotsAllowed = 2;
  this.shotsPlayed = 0;
  this.shotsHistory = [];
  this.isStrike = false;
  this.isSpare = false;
  this.isComplete = false;
  this.isLastFrame = last || false;
}

Frame.prototype.checkStrike = function(){
  if(this.score === 10 && this.shotsPlayed === 1){
    this.isStrike = true;
  }
}

Frame.prototype.checkSpare = function(){
  if(this.score === 10 && this.shotsPlayed === 2){
    this.isSpare = true;
  }
}

Frame.prototype.play = function (score) {
  this.score += score;
  this.shotsPlayed ++;
  this.checkComplete();
  this.checkSpare();
  this.checkStrike();
  this.addToHistory(score);
};

Frame.prototype.checkComplete = function(){
  if (this.score === 10 || this.shotsPlayed === this.shotsAllowed){
    this.isComplete = true;
  }
}

Frame.prototype.addToHistory = function (score) {
  this.shotsHistory.push(score)
};
