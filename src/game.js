'use strict';
/**
 * Initializes with variables
 * @param {int} roll_number The amount of rolls the player has done.
 * @param {int} pins_standing The amount of pins currently standing up.
 * @param {int} total_score The total_score the player has.
 * @param {int} frames The frame count the player is on.
 * @param {str} game_status The game status of the players' game.
 */
function Game() {
    this.DEFAULT_ROLL_NUMBER = 0;
    this.DEFAULT_PINS_KNOCKED_DOWN = 0;
    this.DEFAULT_TOTAL_SCORE = 0;
    this.DEFAULT_FRAMES = [];
    this.DEFAULT_GAME_STATUS = 'Inactive';

    this.roll_number = this.DEFAULT_ROLL_NUMBER;
    this.pins_knocked_down = this.DEFAULT_PINS_KNOCKED_DOWN;
    this.total_score = this.DEFAULT_TOTAL_SCORE;
    this.frames = this.DEFAULT_FRAMES;
    this.game_status = this.DEFAULT_GAME_STATUS;
  };

  Game.prototype.getCurrentPinsKnockedDown = function() {
    return this.pins_knocked_down;
  };

  Game.prototype.getCurrentRollNumber = function() {
    return this.roll_number;
  };

  Game.prototype.getCurrentScore = function() {
    return this.total_score;
  };

  Game.prototype.getCurrentFrames = function() {
    return this.frames;
  };

  Game.prototype.getCurrentGameStatus = function() {
    return this.game_status;
  };

  Game.prototype.updateGameStatus = function() {
    if (this.roll_number > 0) {
      this.game_status = 'Active';
    } else {
      this.game_status = this.DEFAULT_GAME_STATUS
    }
  };

  Game.prototype.roll = function() {
    this.roll_number += 1;
    this.pins_knocked_down = 5; /** pending: insert random 0 - x functionality to emulate hitting or missing pins, and move to another method */
    this.total_score += this.pins_knocked_down
    this.frames.push(this.total_score);
  };

  Game.prototype.resetPins = function() {
    if ((this.frames.length) % 2 === 0) {
      this.pins_knocked_down = this.DEFAULT_PINS_KNOCKED_DOWN
    } else {
      return this.pins_knocked_down
    }
  };
