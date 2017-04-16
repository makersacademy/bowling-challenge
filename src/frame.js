var Frame = function(){
};

Frame.prototype.roll1 = function(score) {
  this.roll1Score = score;
  return this.roll1Score;
};

Frame.prototype.roll2 = function(score) {
  this.roll2Score = score;
  return this.roll2Score
};

Frame.prototype.frameScore = function() {
  var totalScore = (this.roll1Score + this.roll2Score);
  return totalScore;
};

Frame.prototype.strike = function() {
  if(this.roll1Score === 10){
    return true
  }
  else{
    return false
  }
};

Frame.prototype.spare = function() {
  if(this.roll1Score + this.roll2Score === 10){
    return true
  }else{
    return false
  }
};




