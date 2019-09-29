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
  if (this.isStrike() === true) {
    return this.frames[1]["roll1"]+this.frames[1]["roll2"]+10
  }
  else if (this.isSpare() === true) {
    return this.frames[1]["roll1"]+10
  }
  else {
    this.totalScore.push(this.frames[i]["roll1"]+this.frames[i]["roll2"])
  }}
  return console.log(this.totalScore.reduce(function(a,b) {
      return a + b}))
}

Game.prototype.isStrike = function(){
  return this.frames[0]["roll1"]+this.frames["roll2"] === 10
}

Game.prototype.isSpare = function(){
  return (this.frames[0]["roll1"]+this.frames[0]["roll2"]) === 10
}
