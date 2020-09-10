$(document).ready(function() {
  let game = new Game();

  updateScore();

  $('#roll-a-miss').on('click', function() {
    game.recordRoll(0);
    enterRoll(0, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
  });

  $('#roll-a-1').on('click', function() {
    game.recordRoll(1);
    enterRoll(1, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
  });

  $('#roll-a-2').on('click', function() {
    game.recordRoll(2);
    enterRoll(2, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
  });

  $('#roll-a-3').on('click', function() {
    game.recordRoll(3);
    enterRoll(3, game.frameCount, game.rollCount);
    updateScore();
  });

  $('#roll-a-4').on('click', function() {
    game.recordRoll(4);
    enterRoll(4, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
  });

  $('#roll-a-5').on('click', function() {
    game.recordRoll(5);
    enterRoll(5, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
  });

  $('#roll-a-6').on('click', function() {
    game.recordRoll(6);
    enterRoll(6, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
  });

  $('#roll-a-7').on('click', function() {
    game.recordRoll(7);
    enterRoll(7, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
  });

  $('#roll-a-8').on('click', function() {
    game.recordRoll(8);
    enterRoll(8, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
  });

  $('#roll-a-9').on('click', function() {
    game.recordRoll(9);
    enterRoll(9,game.frameCount, game.rollCount);
    updateScore(game.frameCount);
  });

  $('#roll-a-strike').on('click', function() {
    game.recordRoll(10);
    enterRoll(10, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
  });

  $('#reset').on('click', function() {
    game = new Game();
    clear();
    updateScore(game.frameCount);
  })

  function enterRoll(amount, f, r) {
    $(`#f${f}r${r}`).text(amount)
  }

  function clear() {
    for(f = 1; f < 13; f++) {
      $(`#f${f}r${1}`).empty()
      $(`#f${f}r${2}`).empty()
      $(`#f${f}r${0}`).empty()
      $(`#frame-${f}-score`).empty()
    }
  }

  function updateScore(f) {
    $(`#frame-${f}-score`).text(game.score());
  };
});