"use strict";

$(function () {
  var game;
  game = new Bowling;

  $('#game_score').text(game.score);
  $('.frame_number').text(game.frameCount += 1)

  $('.ball_number').text(game.ball_number)


})
