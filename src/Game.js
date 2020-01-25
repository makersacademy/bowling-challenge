'use strict';

function Game() {

  this.score = 0;
  this.pins_down = [

    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0, roll3: 0},

  ]

}

Game.prototype.getScore = function() {


  for (var i = 0; i < 10; i++) {
    this.score += this.pins_down[i]['roll1'] + this.pins_down[i]['roll2'];
    if (this.pins_down[i]['roll1'] === 10 ) {
      this.score += this.pins_down[i+1]['roll1'] + this.pins_down[i+1]['roll2'];
    }
    if ((this.pins_down[i]['roll1'] < 10 ) && ((this.pins_down[i]['roll1'])+ (this.pins_down[i]['roll2']) === 10)) {
      this.score += this.pins_down[i+1]['roll1'];
    }
  

  }
    this.score += this.pins_down[9]['roll3'];

  return this.score;



}


Game.prototype.pinsDown = function(frame, roll, pins) {
  
  return this.pins_down[frame-1]['roll'+roll] = pins;

}

Game.prototype.getPinsDown = function() {

  return this.score;

}