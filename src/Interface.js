$(document).ready(() => {

  let game = new Game;

  function updateCurrentPlay() {
    $('#current-frame').text(game.getCurrentFrame());
    $('#current-roll').text(game.getCurrentRoll());
  }

  function appendResults() {
    let frame = game.getCurrentFrame();
    let roll = game.getCurrentRoll();
    let knocks = game.frames[`frame${frame}`][`roll${roll}`].knocks;
    let score = 'game.getTotalScore()';
    let row = `<div class="row" id="frame-${frame}-roll-${roll}">`;
    row += `<div class="col-2 px-3">${frame}</div>`;
    row += `<div class="col-2 px-3">${roll}</div>`;
    row += `<div class="col-2 px-3">${knocks}</div>`;
    row += `<div class="col-2 px-3" id="score">${score}</div>`;
    row += `<div class="col-4 px-3" id="notes"></div>`;
    row += `</div>`;
    $('#results').append(row);
  }

  // On page load
  updateCurrentPlay();

  // On 'submit' form
  $('#player-action').submit(function(event) {
    event.preventDefault();
    let knocks = $('#player-knocks').val();
    game.play(knocks); // Problem is we need to print row before game.play starts next move.
    appendResults();
    if (game.getCurrentFrame() === 10 && game.getCurrentRoll() === 2) {
      $('#player-action').text('');
      $('#current-stage').text('The game has ended!');
    }
    updateCurrentPlay();
  });

  // edge case: when player enters a value that is not between 0 and 10


});
