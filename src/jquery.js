$(document).ready(() => {
  const game = new Game();

  function updateBowlScore(pins) {
    $(`#f${game.frameIndex}-${game.currentFrame.bowlIndex}`).html(pins);
  }

  function updateRunningTotal() {
    $(`#t${game.frameIndex - 1}`).html(game.totalScore());
  }

  function finalTotal() {
    $('tFinal').html(game.totalScore());
  }

  $('#bowl').click(() => {
    const pins = parseInt($('#pinScore').val());
    updateBowlScore(pins);
    const index = game.frameIndex;
    game.bowl(pins);
    if (game.gameOver) {
      finalTotal();
    } else if (index < game.frameIndex) {
      updateRunningTotal();
    }
  });
});
