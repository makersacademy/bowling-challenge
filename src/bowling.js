'use strict';
function Bowling() {
  this.rolls = [];
  this.display = [];
  this.bonus = [];
  this.scores = [];
  this.totals = [];
}

Bowling.prototype.reset = function(){
  this.rolls = [];
  this.display = [];
  this.bonus = [];
  this.scores = [];
  this.totals = [];
}

//this function fills the rolls and display arrays
Bowling.prototype.play = function(roll) {
  //adding 1st roll
  if(this.rolls.length % 2 === 0 && this.rolls.length < 18) {
    if(roll === 10) {
      this.rolls.push(roll, null);
      this.display.push(null, 'X');
    }
    else {
      this.rolls.push(roll);
      this.display.push(roll);
    }
  }
  //adding 2nd roll
  else if(this.rolls.length < 18) {
    this.rolls.push(roll);
    if(this.rolls[this.rolls.length - 2] + roll === 10) {
      this.display.push('/');
    }
    else {
      this.display.push(roll);
    }
  }
  //adding rolls and display of 10th bonus
  else { this.playTenthFrame(roll); }
  this.fillScores();
  this.fillBonus();
  this.fillTotals();
}
//this function sets the rolls and display arrays for tenth frame
Bowling.prototype.playTenthFrame = function(roll) {
  if(this.rolls.length === 18) {
    if(roll === 10) {
      this.rolls.push(roll);
      this.display.push('X');
    }
    else {
      this.rolls.push(roll);
      this.display.push(roll)
    }
  }
  else if(this.rolls.length ===19) {
    if(this.rolls[18] === 10){
      if(roll === 10) {
        this.rolls.push(roll);
        this.display.push('X');
      }
      else {
        this.rolls.push(roll);
        this.display.push(roll)
      }
    }
    else {
      if(this.rolls[18] + roll === 10){
        this.rolls.push(roll);
        this.display.push('/');
      }
      else {
        this.rolls.push(roll);
        this.display.push(roll);
      }
    }
  }
  else { //bonus
    this.rolls.push(roll);
    if(roll === 10) {
      this.display.push('X');
    }
    else {
      this.display.push(roll);
    }
  }

}

Bowling.prototype.print = function() {
  console.log(this.rolls);
  console.log(this.display);
  console.log(this.scores);
  console.log(this.bonus);
  console.log(this.totals);
}

//this function fills the scores array
Bowling.prototype.fillScores = function() {
  //fill scores with total pins per frame
  this.scores = [];
  var played = this.rolls.length;
  if(played < 21) {
    for(var i = 0; i < played; i += 2) {
      var secondInFrame = this.rolls[i+1] || 0;
      this.scores.push(this.rolls[i] + secondInFrame);
    }
  }
  else {
    for(var i = 0; i < 20; i += 2) {
      var secondInFrame = this.rolls[i+1] || 0;
      this.scores.push(this.rolls[i] + secondInFrame);
    }
    // this.scores[9] += this.rolls[20];
  }
}

//this function fills the bonus array
Bowling.prototype.fillBonus = function() {
  this.bonus = [];
  var played = this.rolls.length;
  for(var i = 1; i < played; i += 2) {
    var bonus = 0;
    if(this.display[i] === 'X') {
      var b1 = this.rolls[i+1] || null;
      if(b1 === null) { bonus = 0; }
      else {
        bonus += b1;
        var b2 = this.rolls[i+2] || null;
        var b3 = this.rolls[i+3] || null;
        b2 === null ? bonus += b3 : bonus += b2;
      }
      this.bonus.push(bonus);
    }
    else if(this.display[i] === '/') {
      if(this.rolls[i+1] != undefined) {
        bonus = this.rolls[i+1];
        this.bonus.push(bonus);
      }
      else { this.bonus.push(bonus); }
    }
    else { this.bonus.push(bonus); }//push 0 as bonus
  }
}

//this function fills the totals array
Bowling.prototype.fillTotals = function() {
  this.totals = [];
  for(var i = 0; i < this.scores.length; i++) {
    if(i === 0){
      this.totals.push(this.scores[i] + this.bonus[i]);
    }
    else {
      this.totals.push(this.scores[i] + this.bonus[i]+ this.totals[i-1]);
    }
  }
}

//this function returns a specific frame's score
Bowling.prototype.getFrameScore = function(frame) {
  this.fillScores();
  this.fillBonus();
  this.fillTotals();
  return this.totals[frame - 1];
}

module.exports = Bowling;
