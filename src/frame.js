function Frame(){
  this.score = [];
  this.addExtra = 0;
  this.throwNumber = 0;
}

Frame.prototype.setExtra = function(){
  if(this.score[0] === 10) {
    this.addExtra = 2;
  } else if (this.score[0] + this.score[1] === 10) {
    this.addExtra = 1;
  }
}

Frame.prototype.pushNormal = function(score){
  this.score.push(score);
}

Frame.prototype.pushExtra = function(score){
  if(this.addExtra > 0){
    this.score.push(score);
    this.addExtra -= 1;
  }
}

Frame.prototype.calculateScore = function(){
  var totalScore = 0;
  for(var i = 0; i < this.score.length; i++){
    totalScore += this.score[i];
  }
  return totalScore;
}

Frame.prototype.isTurnCompleted = function(){
  return this.score.length >= 2 || this.score[0] === 10;
}
