'use strict';

function Game() {
  this.total_score = 0;
  this.frames = [[],[],[],[],[],[],[],[],[],[]];
  this.current_frame = 1;
  this.turn = 1;
}

Game.prototype.validTurn = function(pins) {
  if ( pins > 10 ) {
    return false;
  } else if ( pins + this.frames[this.current_frame - 1][0] > 10 ) {
    return false;
  }
  return true;
};

Game.prototype.addBowl = function(pins) {
  if ( this.validTurn(pins) === true ) {
    this.frames[this.current_frame - 1].push(pins);
  }
  if ( this.wasStrike(this.frames[this.current_frame - 1]) === true ) {
    this.frames[this.current_frame - 1].push(0);
  }
  this.nextFrame();
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
  if ( this.frames[this.current_frame - 1].length === 2 ) {
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
    base_accum += frame.reduce((partial_sum, a) => partial_sum + a,0);
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
  this.frames.forEach(function(frame, index, all_frames) {
    if ( frame.includes(10) ) {
      if (all_frames[index + 1].includes(10)) {
        strike_accum += all_frames[index + 1].reduce((partial_sum, a) => partial_sum + a,0) +
                       all_frames[index + 2].reduce((partial_sum, a) => partial_sum + a,0);
      } else {
        strike_accum += all_frames[index + 1].reduce((partial_sum, a) => partial_sum + a,0);
      }
    }
  });
  return strike_accum;
};

Game.prototype.calculateSpareBonus = function() {
  var spare_accum = 0;
  this.frames.forEach(function(frame, index, all_frames) {
    if ( frame[0] !== 10 && frame[0] + frame[1] === 10 ) {
      spare_accum += all_frames[index + 1][0];
    }
  });
  return spare_accum;
};

Game.prototype.recentFrameScore = function() {
    return this.frames[this.current_frame - 2][0] + this.frames[this.current_frame - 2][1];
};
