'use strict';

function Game() {

  this.score = 0;
  this.scorecard = [

    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},
    {roll1: 0, roll2: 0},

  ]

}

Game.prototype.returnScore = function() {

  return this.score;

}


