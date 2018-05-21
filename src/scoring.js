function Scoring(rollobject = new Bowling()){
  this.scoreArray = []
  this.rollArray = []
  this.bowl = rollobject
  this.strikeCount = 0
};

Scoring.prototype.turn = function(score1,score2){
    this.bowl.roll(score1,score2)
    this.rollArray.push(this.bowl)
    this.scoreArray.push(this.score())
    this._checkSpare()
    this._checkStike()
    this._StrikeCounter()

}

Scoring.prototype.score = function(){
  if (this.bowl.isSpare() == true) {
    return(0)}
  else {
  return(this.bowl.roll1 + this.bowl.roll2);}
};

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

Scoring.prototype.tenthFrame = function(score1, score2){
  this.turn(score1, score2)
  if (this.bowl.isStrike()){
    this.turn(score1, score2)
    if(this.bowl.isStrike()){
      this.turn(score1, score2)
    }
  }
  else if (this.bowl.isSpare()) {
    this.turn(score1, score2)
  }
};


Scoring.prototype.reset = function(rollobject = new Bowling()){
  this.bowl = rollobject
}
