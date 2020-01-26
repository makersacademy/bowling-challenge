'use strict'

$(document).ready(function() { 


  var game = new Game()

  $('#bowl').click(function() { 
    var previous_pins_down = game.getPinsDown(game.previous_frame,game.previous_roll);
    var randomness = Math.floor(Math.random() * (11 - previous_pins_down ));
    game.play(randomness);
    $('#F1-R1').text(game.getPinsDown(1,1));
    $('#F1-R2').text(game.getPinsDown(1,2));
    $('#F2-R1').text(game.getPinsDown(2,1));
    $('#F2-R2').text(game.getPinsDown(2,2));
    $('#F3-R1').text(game.getPinsDown(3,1));
    $('#F3-R2').text(game.getPinsDown(3,2));
    $('#F4-R1').text(game.getPinsDown(4,1));
    $('#F4-R2').text(game.getPinsDown(4,2));
    $('#F5-R1').text(game.getPinsDown(5,1));
    $('#F5-R2').text(game.getPinsDown(5,2));
    $('#F6-R1').text(game.getPinsDown(6,1));
    $('#F6-R2').text(game.getPinsDown(6,2));
    $('#F7-R1').text(game.getPinsDown(7,1));
    $('#F7-R2').text(game.getPinsDown(7,2));
    $('#F8-R1').text(game.getPinsDown(8,1));
    $('#F8-R2').text(game.getPinsDown(8,2));
    $('#F9-R1').text(game.getPinsDown(9,1));
    $('#F9-R2').text(game.getPinsDown(9,2));
    $('#F10-R1').text(game.getPinsDown(10,1));
    $('#F10-R2').text(game.getPinsDown(10,2));

    $('#F'+ game.previous_frame + '-Score').text(game.getScore());

  })


})