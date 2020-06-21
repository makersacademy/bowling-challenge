'use strict';

$(document).ready(function() {
  const bowling = new Bowling();

  $('.pins').click(function() {
    let num = $(this).val();
    let frame = bowling.currentFrame();
    let score = parseInt(num);
    let turn = bowling.currentTurn();
    if (isGameOver(turn)) {
      return
    } else {
      removeButton(score, turn);
      leftOrRightScore(score, frame);
      updateTotal();
    };
  });
  
  $('.reset').click(function() {
    location.reload();
  });

  function leftOrRightScore(score, frame) {
    let turn = bowling.currentTurn();
    if (turn === 0) {
      bowling.bowl(score);
      $(`#${frame} .left`).text(score);
    } else if (turn === 1) {
      bowling.bowl(score);
      $(`#${frame} .right`).text(score);
    } else {
      bowling.bowl(score);
      $(`#${frame} .right-bonus`).text(score);
    }
  }

  function updateTotal() {
    $('.total').text(bowling.currentScore());
  }

  function removeButton(score, turn) {
    if (turn < 1 && score < 10) {
      let buttons = returnButtonArray(score);
      $.each(buttons, function(index, value) {
        $('.pins-hit').find(`#${value}`).addClass('hidden');
      });
    } else {
      $('.pins').removeClass('hidden')
    }
  }

  function returnButtonArray(score) {
    let invalidButtons = []
    let num = 10 - (score - 1)
    for (let i = num; i <= 10; i++) {
      invalidButtons.push(i)
    }
    return invalidButtons;
  }

  function isGameOver(turn) {
    let gameFrames = bowling.returnGameFrames();
    let i = gameFrames.length;
    let lastFrame = gameFrames[i-1];
    let lastFrameCheck = turn == 2 && lastFrame.total() < 10;
    return turn >= 3 || lastFrameCheck;
  }

});
