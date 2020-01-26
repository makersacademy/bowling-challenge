'use strict';

function Game() {

  this.previous_frame = 1;
  this.previous_roll = 1;
  this.frame = 1;
  this.roll = 1;
  this.pins_down = [

    {roll1: null, roll2: null},
    {roll1: null, roll2: null},
    {roll1: null, roll2: null},
    {roll1: null, roll2: null},
    {roll1: null, roll2: null},
    {roll1: null, roll2: null},
    {roll1: null, roll2: null},
    {roll1: null, roll2: null},
    {roll1: null, roll2: null},
    {roll1: null, roll2: null, roll3: null},

  ]

}

Game.prototype.getScore = function() {

  this.score = 0;
  for (var i = 0; i < 9; i++) {
    this.score += this.pins_down[i]['roll1'] + this.pins_down[i]['roll2'];
    if (this.pins_down[i]['roll1'] === 10 ) {
      if (this.pins_down[i+1]['roll1'] < 10) {
      this.score += this.pins_down[i+1]['roll1'] + this.pins_down[i+1]['roll2'];
      }
      else {
        if (i < 8) {
          this.score += this.pins_down[i+1]['roll1'] + this.pins_down[i+2]['roll1'];
        }
        else {
          this.score += this.pins_down[i+1]['roll1'] + this.pins_down[i+1]['roll2'];
        }
      }
    }
    if ((this.pins_down[i]['roll1'] < 10 ) && ((this.pins_down[i]['roll1'])+ (this.pins_down[i]['roll2']) === 10)) {
      this.score += this.pins_down[i+1]['roll1'];
    }
  

  }
  this.score += this.pins_down[9]['roll1'];
  this.score += this.pins_down[9]['roll2'];
  this.score += this.pins_down[9]['roll3'];

  return this.score;



}


Game.prototype.pinsDown = function(frame, roll, pins) {
  
  return this.pins_down[frame-1]['roll'+roll] = pins;

}

Game.prototype.getPinsDown = function(frame, roll) {
  
  return this.pins_down[frame-1]['roll'+roll];

}

Game.prototype.getPinsDownFrame = function(frame) {
  var pins_down_frame = this.pins_down[frame-1]['roll1'] + this.pins_down[frame-1]['roll2'];
  return pins_down_frame;

}

Game.prototype.isPinResetRequired = function() {

 if (this.getPinsDownFrame(this.previous_frame) === 10) {
    return true;
  }

  if (this.getPinsDownFrame(this.previous_frame) === 20) {
    return true;
  }

  else if (this.previous_roll === 2 && this.previous_frame < 10) {
    return true;
  }

  else {
    return false;
  }
}

Game.prototype.isOver = function() {

  if ((this.frame === 10) && (this.roll === 4)) {
    return true;
  }

  else if (this.frame === 10 && this.roll === 3 && (this.pins_down[9]['roll1'] + this.pins_down[9]['roll2'])<10) {
    return true;
  }

  else {
    return false;
  }

}

Game.prototype.play = function(pins) {
  
if (this.isOver() === true) {

  return

}

  this.pinsDown(this.frame, this.roll, pins) 


  if ((pins === 10 && this.frame <10) || ((this.roll === 2) && (this.frame <10))) {
    this.previous_frame = this.frame;
    this.previous_roll = this.roll;
    this.frame += 1;
    this.roll = 1;
  }

  else {
    this.previous_frame = this.frame;
    this.previous_roll = this.roll;
    this.roll += 1;
  }


  
}