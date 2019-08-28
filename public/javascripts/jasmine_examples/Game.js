'use strict';

function Game() {
  this.total_score = 0;
  this.current_frame = 1;
  this.frame_score = 0;
  this.strike_last = false;
  this.double = false;
  this.spare_last = false;
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
      if (this.spare_last == true) {
        if (score == 10) {
          this.spare_last = false;
          this.total_score += score;
          this.score_card[`frame_${this.current_frame - 1}`] += score;
          this.strike();
        } else {
          this.score_card[`frame_${this.current_frame - 1}`] += score;
          this.total_score += score;
          this.frame_score += score;
        }
      } else {
        if (score == 10) {
          this.spare_last = false;
          this.strike();
        } else {
          this.frame_score += score;
        }
      }
    },

    secondBowl: function(score) {
      if (this.strike_last == true) {
        if (this.frame_score + score < 10){
          this.frame_score += score;
          this.score_card[`frame_${this.current_frame - 1}`] += this.frame_score;
          this.total_score += this.frame_score;
          this.strike_last = false;
          this.saveScore();
        } else if (this.frame_score + score == 10){
          this.frame_score += score;
          this.total_score += this.frame_score;
          this.score_card[`frame_${this.current_frame - 1}`] += this.frame_score;
          this.strike_last = false;
          this.spare();
        } else {
          throw "Something doesn't add up, check your scores and try resubmitting."
        }
      } else {
          if (this.frame_score + score < 10){
            this.spare_last = false;
            this.frame_score += score;
            this.saveScore();
          } else if (this.frame_score + score == 10){
            this.spare();
          } else {
            throw "Something doesn't add up, check your scores and try resubmitting."
          }
        }
    },

    saveScore: function() {
      this.score_card[`frame_${this.current_frame}`] = this.frame_score;
      this.total_score += this.frame_score;
      this.current_frame++;
      this.frame_score = 0;
    },

    strike: function() {
      if (this.double == true) {
        this.score_card[`frame_${this.current_frame - 2}`] += 10;
        this.score_card[`frame_${this.current_frame - 1}`] += 10;
        this.frame_score = 10;
        this.strike_last = true;
        this.saveScore();
      } else if (this.strike_last == true){
        this.score_card[`frame_${this.current_frame - 1}`] += 10;
        this.frame_score = 10;
        this.strike_last = true;
        this.double = true;
        this.saveScore();
      } else {
        this.frame_score = 10;
        this.strike_last = true;
        this.saveScore();
      }
    },

    spare: function() {
      this.spare_last = true;
      this.frame_score = 10;
      this.saveScore();
    },


  }
}



var game = new Game();
