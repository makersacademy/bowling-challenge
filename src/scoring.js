function Scoring(rollobject = new Bowling()){
  this.scoreArray = []
  this.rollArray = []
  this.bowl = rollobject
  this.strikeCount = 0
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
  this._StrikeCounter()
  this._checkStike()
}

Scoring.prototype._checkSpare = function(){
  if (this.rollArray.length == 1) {}
  else if (this.rollArray[this.rollArray.length - 2].isSpare() == true){
    this.scoreArray[this.scoreArray.length - 2] = (10 + this.bowl.roll1)}
};

Scoring.prototype._StrikeCounter = function(){
  if (this.bowl.isStrike()){
    this.strikeCount += 1
  }
};

Scoring.prototype._checkStike = function(strikeCount){

  if (this.strikeCount >= 3) {
    this.scoreArray[this.scoreArray.length - 4] = 30
    this.scoreArray[this.scoreArray.length - 3] = (20 + this.bowl.roll1)
    this.scoreArray[this.scoreArray.length - 2] = (10 + this.bowl.roll1 + this.bowl.roll2)
    if (this.bowl.isStrike() == false) {
      this.strikeCount = 0
    }
  }
  else if (this.bowl.isStrike()) {}
  else if (this.strikeCount == 2) {
    this.scoreArray[this.scoreArray.length - 3] = (20 + this.bowl.roll1)
    this.scoreArray[this.scoreArray.length - 2] = (10 + this.bowl.roll1 + this.bowl.roll2)
    this.strikeCount = 0
  }
  else if (this.strikeCount == 1) {
    this.scoreArray[this.scoreArray.length - 2] = (10 + this.bowl.roll1 + this.bowl.roll2)
    this.strikeCount = 0
  }
};


Scoring.prototype.reset = function(rollobject = new Bowling()){
  this.bowl = rollobject
}
