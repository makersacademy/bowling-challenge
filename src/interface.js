'use strict';

$(document).ready(function(){


  var game = new Game();

  $('#0').click(function() {
    game.roll(0);
    update();
  })

  $('#1').click(function() {
    game.roll(1);
    update();
  })

  $('#2').click(function() {
    game.roll(2);
    update();
  })

  $('#3').click(function() {
    game.roll(3);
    update();
  })

  $('#4').click(function() {
    game.roll(4);
    update();
  })

  $('#5').click(function() {
    game.roll(5);
    update();
  })

  $('#6').click(function() {
    game.roll(6);
    update();
  })

  $('#7').click(function() {
    game.roll(7);
    update();
  })

  $('#8').click(function() {
    game.roll(8);
    update();
  })

  $('#9').click(function() {
    game.roll(9);
    update();
  })

  $('#10').click(function() {
    game.roll(10);
    update();
  })

  $('#reset').click(function() {
    game = new Game();
    $('.rolls').text("")
    $('.frames').text("")
    $('#total-score').text("")
  })


  function update() {
    var n = game.frameCount() - 1;
    var f = game.frameCount()

    if (f === 1) {
      $('#f1r1').text(game.frames()[0].rolls()[0]);
      $('#f1r2').text(game.frames()[0].rolls()[1]);
      $('#f1').text(game.frames()[0].score());
      $('#total-score').text(game.totalScore());
    } else if (f <= 9) {
      $(`#f${f}r1`).text(game.frames()[n].rolls()[0]);
      $(`#f${f}r2`).text(game.frames()[n].rolls()[1]);
      $(`#f${f}`).text(game.frames()[n].score());
      $(`#f${f-1}`).text(game.frames()[n-1].score());
      $('#total-score').text(game.totalScore());
    } else if (f === 10) {
      $('#f10r1').text(game.frames()[9].rolls()[0]);
      $('#f10r2').text(game.frames()[9].rolls()[1]);
      $('#f10r3').text(game.frames()[9].rolls()[2]);
      $('#f10').text(game.frames()[9].score());
      $('#f9').text(game.frames()[8].score());
      $('#total-score').text(game.totalScore());
    };
  };
  
});
