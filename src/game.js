'use strict';

function Game() {
  this.total_score = 0;
  this.frames = [[],[],[],[],[],[],[],[],[],[]];
  this.current_frame = 1;
  this.game_over = false;
}

Game.prototype.validTurn = function(pins) {
  if ( pins > 10 ) {
    return false;
  } else if ( pins + this.frames[this.current_frame - 1][0] > 10 &&
    this.current_frame !== 10 ) {
    return false;
  }
  return true;
};

Game.prototype.addBowl = function(pins) {
  if ( this.game_over === true ) {
    return;
  }
  if ( this.validTurn(pins) === true ) {
    this.frames[this.current_frame - 1].push(pins);
  }
  if ( this.wasStrike(this.frames[this.current_frame - 1]) === true &&
       this.current_frame !== 10 ) {
         this.frames[this.current_frame - 1].push(0);
  }
  if ( this.isGameOver() === true ) {
    return;
  }
  this.nextFrame();
};

Game.prototype.isGameOver = function() {
var frame = this.frames[this.current_frame - 1];
  if ( this.current_frame === 10 ) {
    if ( frame[0] + frame[1] < 10 && frame.length === 2 ) {
      return this.game_over = true;
    } else if ( frame.length === 3 ) {
      return this.game_over = true;
    }
  }
};

Game.prototype.wasStrike = function(frame) {
  if ( frame.includes(10) ) {
    return true;
  }
};

Game.prototype.wasSpare = function(frame) {
  if (frame[0] !== 10 && frame[0] + frame[1] === 10 ) {
    return true;
  }
};

Game.prototype.nextFrame = function() { //Look into making this private
  if ( this.frames[this.current_frame - 1].length === 2
     && this.game_over === false && this.current_frame !== 10 ) {
    this.current_frame += 1;
  }
};

Game.prototype.calculateScore = function() {
  var total_base = this.calculateBaseScore();
  var total_bonus = this.calculateBonusScore();
  return this.total_score = total_base + total_bonus;
};

Game.prototype.calculateBaseScore = function() {
  var base_accum = 0;
  this.frames.forEach(function(frame) {
    base_accum += frame.reduce((roll_one, roll_two) => roll_one + roll_two,0);
  });
  return base_accum;
};

Game.prototype.calculateBonusScore = function() {
  var strike_bonus = this.calculateStrikeBonus();
  var spare_bonus = this.calculateSpareBonus();
  return strike_bonus + spare_bonus;
};

Game.prototype.calculateStrikeBonus = function() {
  var strike_accum = 0;
  var roll = this;
  this.frames.forEach(function(frame, index, all_frames) {
    if ( roll.wasStrike(frame) && index < 8 ) {
      if ( roll.wasStrike(all_frames[index + 1]) ) {
        strike_accum += all_frames[index + 1].reduce((roll_one, roll_two) => roll_one + roll_two,0) +
                        (all_frames[index + 2][0] || 0);
      } else {
        strike_accum += all_frames[index + 1].reduce((roll_one, roll_two) => roll_one + roll_two,0);
      }
    }
    if ( roll.wasStrike(frame) && index === 8 ) {
        strike_accum += (all_frames[index + 1][0] || 0 ) + (all_frames[index + 1][1] || 0 );
    }
  });
  return strike_accum;
};

Game.prototype.calculateSpareBonus = function() {
  var spare_accum = 0;
  var roll = this;
  this.frames.forEach(function(frame, index, all_frames) {
    if ( roll.wasSpare(frame) && index < 9 ) {
      spare_accum += all_frames[index + 1][0] || 0;
    }
  });
  return spare_accum;
};
