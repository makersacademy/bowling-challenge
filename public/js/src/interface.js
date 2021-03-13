'use strict';

$(function () {
    const game = new Game;

    $('#add-roll').on('click', () => {
      if (!$('#roll-input').val()) { return; }

      game.addRoll($('#roll-input').val());
      updateScores();
      updateRolls();
    });

    const updateRolls = () => {
      $('#1-1').text(game.frames[0].rolls[0]);
      $('#1-2').text(game.frames[0].rolls[1]);
      $('#2-1').text(game.frames[1].rolls[0]);
      $('#2-2').text(game.frames[1].rolls[1]);
      $('#3-1').text(game.frames[2].rolls[0]);
      $('#3-2').text(game.frames[2].rolls[1]);
      $('#4-1').text(game.frames[3].rolls[0]);
      $('#4-2').text(game.frames[3].rolls[1]);
      $('#5-1').text(game.frames[4].rolls[0]);
      $('#5-2').text(game.frames[4].rolls[1]);
      $('#6-1').text(game.frames[5].rolls[0]);
      $('#6-2').text(game.frames[5].rolls[1]);
      $('#7-1').text(game.frames[6].rolls[0]);
      $('#7-2').text(game.frames[6].rolls[1]);
      $('#8-1').text(game.frames[7].rolls[0]);
      $('#8-2').text(game.frames[7].rolls[1]);
      $('#9-1').text(game.frames[8].rolls[0]);
      $('#9-2').text(game.frames[8].rolls[1]);
      $('#10-1').text(game.frames[9].rolls[0]);
      $('#10-2').text(game.frames[9].rolls[1]);
      $('#10-3').text(game.frames[9].rolls[2]);
    };

    const updateScores = () => {
      $('#1').text(game.scoreBoard()[0]);
      $('#2').text(game.scoreBoard()[1]);
      $('#3').text(game.scoreBoard()[2]);
      $('#4').text(game.scoreBoard()[3]);
      $('#5').text(game.scoreBoard()[4]);
      $('#6').text(game.scoreBoard()[5]);
      $('#7').text(game.scoreBoard()[6]);
      $('#8').text(game.scoreBoard()[7]);
      $('#9').text(game.scoreBoard()[8]);
      $('#10').text(game.scoreBoard()[9]);
    };
  });
