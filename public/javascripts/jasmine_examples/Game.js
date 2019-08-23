'use strict';

function Game() {
  this.current_score = 0;
  this.current_frame = 1;
  this.frame_score = 0;
  this.score_card = {
    frame_1 : 0,
    frame_2 : 0,
    frame_3 : 0,
    frame_4 : 0,
    frame_5 : 0,
    frame_6 : 0,
    frame_7 : 0,
    frame_8 : 0,
    frame_9 : 0,
    frame_10 : 0
  }

  Game.prototype = {

    firstBowl: function(score) {
      this.frame_score += score;
    },

    secondBowl: function(score) {
      if (this.frame_score + score <= 10){
        this.frame_score += score;
      } else {
        throw "Something doesn't add up, check your scores and try resubmitting."
      }
    },

    saveScore: function() {
      this.score_card[`frame_${this.current_frame}`] = this.frame_score;
      this.current_frame++;
      this.frame_score = 0;
    }

  }

}



var game = new Game();
