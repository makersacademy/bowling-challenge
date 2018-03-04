$(document).ready(() => {
  const game = new Game();

  $('#bowl').click(() => {
    const pins = parseInt($('#pinScore').val());
    updateBowlScore(pins);
    const index = game.frameIndex;
    game.bowl(pins);
    if (index < game.frameIndex) {
      updateRunningTotal();
    }
  });

  function updateBowlScore(pins) {
    $(`#f${game.frameIndex}-${game.currentFrame.bowlIndex}`).html(pins);
  }

  function updateRunningTotal() {
    $(`#t${game.frameIndex - 1}`).html(game.totalScore());
  }
});
