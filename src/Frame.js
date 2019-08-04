

var Frame = function(){
  this.throws = 0
  this.total = 0
  this.attempts = 2;
};

Frame.prototype.throwChecker = function(){
  return this.throws
}

Frame.prototype.totalScore = function(){
  return this.total
}

Frame.prototype.throw = function(score){
  this.throws += 1
  if(this.frameUp() === true){
    return this.totalScore
  }
  if(this.isStrike(score)){
    this.total += score
    return this.attempts = 3
  }
  if(this.isSpare(score)){
    this.total += score
    return this.attempts = 3
  }
  else{
    this.total += score
  }
}

Frame.prototype.isStrike = function(score){
  if (this.throws === 1 && score === 10){
    return true
  }
}

Frame.prototype.isSpare = function(score){
  if (this.throws === 2 &&  (score + this.total) === 10){
    return true
  }
}

Frame.prototype.frameUp = function(){
  if (this.throws > this.attempts){
    return true
  }
  else{
    return false
  }
}

module.exports = Frame;
