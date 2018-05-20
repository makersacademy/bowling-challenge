function Scoring(rollobject = new Bowling()){
  this.scoreArray = []
  this.rollArray = []
  this.bowl = rollobject
};

Scoring.prototype.turn = function(score1,score2){
  this.bowl.roll(score1,score2)
  this.rollArray.push(this.bowl)
  var score = function(){
    if (this.bowl.isSpare()) {return '/'}
    else {
    return(this.bowl.roll1 + this.bowl.roll2);}
  };
  this.scoreArray.push(score())
  this._checkSpare()
}

Scoring.prototype._checkSpare = function(){
  if (this.rollArray.length == 1) {}
  else if (this.rollArray[this.rollArray.length - 2].isSpare() == true){
    this.scoreArray[this.scoreArray.length - 2] = (10 + this.bowl.roll1)}
};

Scoring.prototype.reset = function(rollobject = new Bowling()){
  this.bowl = rollobject
}
