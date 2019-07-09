'use strict';

$(document).ready(function () {
  scorecard = new Scorecard();

  var score;
  pinHit = function(pins)
    scorecard.roll(pins);
    frameScore();
    totalScore();
    isGameOver();
  };
