
var button = document.getElementById("firstThrow");
function BowlingGame(){
  this.allScores = []

}

BowlingGame.prototype.bowl = function() {
  console.log(button.value)
  if(button.value === "first click"){this.firstBowl()}
  else if  (button.value === "second click")
  {this.secondBowl()
  }
}

BowlingGame.prototype.firstBowl = function() {
  this.randomNum =( Math.round(Math.random()*10))
  this.allScores.push(this.randomNum)
  return this.randomNum
};

BowlingGame.prototype.secondBowl = function() {
  this.secondRandomNum =(Math.round(Math.random()*(10- this.randomNum)))
  this.allScores.push(this.secondRandomNum)
  return this.secondRandomNum
};

BowlingGame.prototype.thirdBowl = function() {
  return this.thirdRandomNum = Math.round(Math.random()*10)
};

BowlingGame.prototype.fourthBowl = function() {
  return this.fourthRandomNum = Math.round(Math.random()*(10 - this.thirdRandomNum))
};

BowlingGame.prototype.spare = function() {
  if (this.score === 10)
  {this.score = this.randomNum + this.secondRandomNum + this.thirdRandomNum}
};
BowlingGame.prototype.strike = function () {
  if (this.randomNum === 10)
  {this.score = this.randomNum + this.thirdRandomNum + this.fourthRandomNum}
};

BowlingGame.prototype.scoresPerFrame = function() {
  this.score = this.randomNum + this.secondRandomNum
};

BowlingGame.prototype.storingScores = function() {

  return this.allScores.push(this.score)
};

BowlingGame.prototype.totalScore = function() {
  return this.allScores.reduce(this.addingScores,0)
};

BowlingGame.prototype.addingScores = function(a,b) {
  return a+b;
};

BowlingGame.prototype.clearArray = function() {
  if(this.allScores.length >= 10)
  {this.allScores.length = 0 }
}
