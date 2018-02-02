function Frame(){
  this.isStrike = false
}

Frame.prototype.firstBowl = function(score){
  if (score === 10){
    this.isStrike = true
  }
};
