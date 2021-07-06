'use strict';

function Game() {this.frames = [
  {roll1: 1, roll2: 4},
  {roll1: 4, roll2: 5},
  {roll1: 6, roll2: 4},
  {roll1: 5, roll2: 5},
  {roll1: 10, roll2: 0},
  {roll1: 0, roll2: 1},
  {roll1: 7, roll2: 3},
  {roll1: 6, roll2: 4},
  {roll1: 10, roll2: 0},
  {roll1: 2, roll2: 8, roll3: 6}]
}

Game.prototype.score = function(){
  this.totalScore = []
  for( let i = 0; i < 10; i++) {
  if (this.isStrike(i) === true) {
    this.totalScore.push(this.frames[i+1]["roll1"]+this.frames[i+1]["roll2"]+10)
    // console.log(1)
  }
  else if (this.isSpare(i) === true) {
    this.totalScore.push(this.frames[i]["roll1"]+10)
    // console.log(2)
  }
  else {
    this.totalScore.push(this.frames[i]["roll1"]+this.frames[i]["roll2"])
    // console.log(3)
  }
}
  // return console.log(this.totalScore.reduce(function(a,b) {
  //     return a + b}))
  console.log(this.totalScore)
}

Game.prototype.isStrike = function(n=0){
  return this.frames[n]["roll1"] === 10
}

Game.prototype.isSpare = function(n=0){
  return (this.frames[n]["roll1"]+this.frames[n]["roll2"]) === 10
}
