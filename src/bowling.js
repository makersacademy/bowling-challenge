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
  console.log(this.frames[0]["roll1"]+this.frames[0]["roll2"])
}

Game.prototype.score = function(){
  if (this.isStrike() === true) {
    return this.frames[1]["roll1"]+this.frames[1]["roll2"]+10
  }
  else if (this.isSpare() === true) {
    return this.frames[1]["roll1"]+10
  }
  else {
    return this.frames[0]["roll1"]+this.frames[0]["roll2"]
  }
}

Game.prototype.isStrike = function(){
  return this.frames[0]["roll1"]+this.frames["roll2"] === 10
}

Game.prototype.isSpare = function(){
  return (this.frames[0]["roll1"]+this.frames[0]["roll2"]) === 10
}
