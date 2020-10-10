"use strict";

$(function () {
  var game;
  game = new Bowling;

  $('#game_score').text(game.score);
  $('.frame_number').text(game.frameCount += 1)
  $('.ball_number').text(game.ball_number)

  // $('#submit_roll').submit(function() {
  //   var roll_value;
  //   roll_value = $('#submit_roll :input');

  //   $('#roll_value').text(roll_value)
    
  //   game.addRoll($roll_value)
  //   $('#frame_output').text(game.frame)

  // })
  
  var $roll_form = $('.roll_form');
    $roll_form.on("submit", function() {
      this.number.value
    })

})
