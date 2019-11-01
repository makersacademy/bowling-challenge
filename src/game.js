'use strict';

function Game() {
  this.frames = [[],[],[],[],[],[],[],[],[],[]];
  this.frame_base = [[],[],[],[],[],[],[],[],[],[]];
  this.frame_bonus = [[],[],[],[],[],[],[],[],[],[]];
  this.frame_scores = [[],[],[],[],[],[],[],[],[],[]];
  this.current_frame = 1;
  this.game_over = false;
}

Game.prototype.validTurn = function(pins) {
  if ( pins > 10 ) {
    return false;
  } if ( this.current_frame !== 10 ) {
      if ( pins + this.frames[this.current_frame - 1][0] > 10 ) {
        return false;
      }
  } else if ( this.current_frame === 10 && this.frames[9][0] !== 10 ) {
      if ( pins + this.frames[9][0] > 10 && this.frames[9][1] === undefined ) {
        return false;
      }
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
  this.calculateBaseScore();
  this.calculateBonusScore();
  this.calculateFrameScore();
};

Game.prototype.calculateFrameScore = function() {
  let game = this;
  this.frame_scores.forEach(function(frame, index, all_frames) {
    console.log(all_frames)
    if (game.frames[index].length > 0 && index < 9 ) {
      all_frames[index] = Number(game.frame_base[index] || 0) + Number(game.frame_bonus[index] || 0 ) +
      Number(all_frames[index - 1] || 0 );
    } if (game.frames[index].length > 0 && index == 9 ) {
      all_frames[index] = Number(game.frame_base[index] || 0) + Number(all_frames[index - 1] || 0 );
    }
  });
};

Game.prototype.calculateBaseScore = function() {
  var roll = this;
  this.frames.forEach(function(frame, index) {
    roll.frame_base[index] = frame.reduce((roll_one, roll_two) => roll_one + roll_two,0);
  });
};

Game.prototype.calculateBonusScore = function() {
  this.calculateStrikeBonus();
  this.calculateSpareBonus();
};

Game.prototype.calculateStrikeBonus = function() {
  var roll = this;
  this.frames.forEach(function(frame, index, all_frames) {
    if ( roll.wasStrike(frame) && index < 8 ) {
      if ( roll.wasStrike(all_frames[index + 1]) ) {
        roll.frame_bonus[index] = all_frames[index + 1].reduce((roll_one, roll_two) => roll_one + roll_two,0) +
                        (all_frames[index + 2][0] || 0);
      } else {
        roll.frame_bonus[index] = all_frames[index + 1].reduce((roll_one, roll_two) => roll_one + roll_two,0);
      }
    }
    if ( roll.wasStrike(frame) && index === 8 ) {
        roll.frame_bonus[index] = ((all_frames[index + 1][0] || 0 ) + (all_frames[index + 1][1] || 0 ));
    }
  });
};

Game.prototype.calculateSpareBonus = function() {
  var roll = this;
  this.frames.forEach(function(frame, index, all_frames) {
    if ( roll.wasSpare(frame) && index < 9 ) {
      roll.frame_bonus[index] = (all_frames[index + 1][0] || 0);
    }
  });
};
